import { useState } from "react";
import { Folder, File, ChevronRight, ChevronDown, Trash2, Edit, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
}

const mockFiles: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Button.tsx", type: "file" },
          { name: "Input.tsx", type: "file" },
        ],
      },
      { name: "App.tsx", type: "file" },
      { name: "index.tsx", type: "file" },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
      { name: "style.css", type: "file" },
    ],
  },
];

const FileNode = ({ node, depth = 0 }: { node: FileNode; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleClick = () => {
    if (node.type === "folder") {
      setIsOpen(!isOpen);
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Modification",
      description: `Édition de ${node.name}`,
    });
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Suppression",
      description: `Suppression de ${node.name}`,
      variant: "destructive",
    });
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Téléchargement",
      description: `Téléchargement de ${node.name}`,
    });
  };

  const isEditableFile = (filename: string) => {
    const editableExtensions = ['.html', '.css', '.js', '.tsx', '.ts'];
    return editableExtensions.some(ext => filename.toLowerCase().endsWith(ext));
  };

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1 px-2 hover:bg-gray-100 rounded cursor-pointer group`}
        style={{ paddingLeft: `${depth * 20}px` }}
        onClick={handleClick}
      >
        {node.type === "folder" ? (
          <>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-500" />
            )}
            <Folder className="h-4 w-4 text-blue-500" />
          </>
        ) : (
          <>
            <span className="w-4" />
            <File className="h-4 w-4 text-gray-500" />
          </>
        )}
        <span className="text-sm flex-grow">{node.name}</span>
        {node.type === "file" && (
          <div className="hidden group-hover:flex items-center gap-2">
            {isEditableFile(node.name) && (
              <Button variant="ghost" size="icon" onClick={handleEdit} className="h-8 w-8">
                <Edit className="h-4 w-4" />
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={handleDownload} className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDelete} className="h-8 w-8">
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        )}
      </div>
      {node.type === "folder" && isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const FileBrowser = () => {
  const { toast } = useToast();

  const handleNewFile = () => {
    toast({
      title: "Nouveau fichier",
      description: "Création d'un nouveau fichier",
    });
  };

  const handleNewFolder = () => {
    toast({
      title: "Nouveau dossier",
      description: "Création d'un nouveau dossier",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Explorateur de fichiers</h2>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={handleNewFile}>
            Nouveau fichier
          </Button>
          <Button variant="outline" size="sm" onClick={handleNewFolder}>
            Nouveau dossier
          </Button>
        </div>
      </div>
      <div className="border rounded">
        {mockFiles.map((file, index) => (
          <FileNode key={index} node={file} />
        ))}
      </div>
    </div>
  );
};

export default FileBrowser;