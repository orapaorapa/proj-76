import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Upload, Download, Trash2, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Admin = () => {
  const navigate = useNavigate();
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = useState(true);
  const [files, setFiles] = useState<any[]>([]);
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    checkUser();
    fetchFiles();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin-login');
    }
    setIsLoading(false);
  };

  const fetchFiles = async () => {
    const { data, error } = await supabase
      .storage
      .from('files')
      .list();

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les fichiers",
      });
    } else {
      setFiles(data || []);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const { error } = await supabase
      .storage
      .from('files')
      .upload(`${Date.now()}-${file.name}`, file);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible d'uploader le fichier",
      });
    } else {
      toast({
        title: "Succès",
        description: "Fichier uploadé avec succès",
      });
      fetchFiles();
    }
  };

  const handleFileDownload = async (file: any) => {
    const { data, error } = await supabase
      .storage
      .from('files')
      .download(file.name);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de télécharger le fichier",
      });
      return;
    }

    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleFileDelete = async (file: any) => {
    const { error } = await supabase
      .storage
      .from('files')
      .remove([file.name]);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de supprimer le fichier",
      });
    } else {
      toast({
        title: "Succès",
        description: "Fichier supprimé avec succès",
      });
      fetchFiles();
    }
  };

  const handleFileSelect = async (file: any) => {
    setSelectedFile(file);
    const { data, error } = await supabase
      .storage
      .from('files')
      .download(file.name);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger le contenu du fichier",
      });
      return;
    }

    const text = await data.text();
    setFileContent(text);
    setIsEditing(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin-login');
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Tableau de bord administrateur</h1>
          <Button onClick={handleLogout} variant="outline">
            Déconnexion
          </Button>
        </div>

        <Tabs defaultValue="files" className="w-full">
          <TabsList>
            <TabsTrigger value="files">Fichiers</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>
          
          <TabsContent value="files">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {files.map((file) => (
                <div key={file.id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-6 w-6 text-gray-500" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-500">{new Date(file.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleFileSelect(file)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleFileDownload(file)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleFileDelete(file)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upload">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Cliquez pour uploader</span> ou glissez-déposez
                    </p>
                    <p className="text-xs text-gray-500">
                      Tous types de fichiers acceptés
                    </p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Sheet open={isEditing} onOpenChange={setIsEditing}>
          <SheetContent className="w-[800px] sm:w-[800px]">
            <SheetHeader>
              <SheetTitle>{selectedFile?.name}</SheetTitle>
              <SheetDescription>
                Prévisualisation du fichier
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <textarea
                className="w-full h-[500px] font-mono text-sm p-4 border rounded"
                value={fileContent}
                readOnly
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Admin;