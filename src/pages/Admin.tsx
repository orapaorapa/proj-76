import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import FileBrowser from "@/components/FileBrowser";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: sessions, error } = await supabase
        .from("admin_sessions")
        .select("*")
        .gt("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false })
        .limit(1);

      if (error || !sessions || sessions.length === 0) {
        navigate("/admin/login");
      }
    };

    checkSession();
  }, [navigate]);

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