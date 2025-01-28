import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSupabase } from "@/integrations/supabase/client";
import FileBrowser from "@/components/FileBrowser";
import { Loader2 } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      try {
        if (!isMounted) return;

        const supabase = getSupabase();
        const { data: sessions, error } = await supabase
          .from("admin_sessions")
          .select("*")
          .gt("expires_at", new Date().toISOString())
          .order("created_at", { ascending: false })
          .limit(1);

        if (!isMounted) return;

        if (error) {
          console.error("Erreur lors de la vérification de la session:", error);
          navigate("/admin/login");
          return;
        }

        if (!sessions || sessions.length === 0) {
          navigate("/admin/login");
          return;
        }

        setIsLoading(false);
      } catch (error) {
        if (!isMounted) return;
        console.error("Erreur inattendue:", error);
        navigate("/admin/login");
      }
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(checkSession, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Interface d'administration
        </h1>
        <FileBrowser />
      </div>
    </div>
  );
};

export default Admin;