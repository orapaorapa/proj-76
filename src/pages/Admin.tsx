import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';

const Admin = () => {
  const navigate = useNavigate();
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin-login');
    }
    setIsLoading(false);
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
        {/* Le contenu du tableau de bord sera ajouté ici */}
      </div>
    </div>
  );
};

export default Admin;