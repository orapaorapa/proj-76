import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { Filter, RefreshCw } from "lucide-react";

const Index = () => {
  const [diameter, setDiameter] = useState([1.0]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Fonction pour recharger les données
  const handleRefresh = () => {
    // Incrémente le déclencheur de rafraîchissement pour forcer la mise à jour du ProductGrid
    setRefreshTrigger(prev => prev + 1);
    
    // On peut aussi envoyer l'info de la sélection actuelle au backend si nécessaire
    const currentSelection = localStorage.getItem('selectedMenuItem') || 'votre sélection :';
    
    // Log pour debug
    console.log(`Rechargement avec la sélection: ${currentSelection}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar refreshTrigger={refreshTrigger} />
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Diamètre : {diameter[0].toFixed(1)} ct</span>
              <Slider
                defaultValue={[1.0]}
                max={5.0}
                min={0.1}
                step={0.1}
                value={diameter}
                onValueChange={setDiameter}
                className="w-[200px]"
              />
            </div>
          </div>
          <h1 className="text-lg font-medium mb-3">Diamants naturels</h1>
          <div className="flex gap-2 flex-wrap">
            <Button variant="default" className="text-xs px-3 py-1 h-7 flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" />
              Filtrer Familles
            </Button>
            <Button 
              variant="default" 
              className="text-xs px-3 py-1 h-7 flex items-center gap-1"
              onClick={handleRefresh}
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Afficher
            </Button>
          </div>
        </div>
        <ProductGrid key={refreshTrigger} selection={localStorage.getItem('selectedMenuItem') || 'votre sélection :'} />
      </main>
    </div>
  );
};

export default Index;
