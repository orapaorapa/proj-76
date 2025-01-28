import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { getSupabase } from "@/integrations/supabase/client";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "1234";
const SESSION_DURATION = 30 * 60; // 30 minutes in seconds

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const expiresAt = new Date();
        expiresAt.setSeconds(expiresAt.getSeconds() + SESSION_DURATION);

        const supabase = getSupabase();
        const { error } = await supabase
          .from("admin_sessions")
          .insert([{ expires_at: expiresAt.toISOString() }]);

        if (error) throw error;

        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans l'interface d'administration",
        });
        
        navigate("/admin");
      } else {
        toast({
          variant: "destructive",
          title: "Erreur de connexion",
          description: "Identifiants incorrects",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la connexion",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Accès Administrateur
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Nom d'utilisateur
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;