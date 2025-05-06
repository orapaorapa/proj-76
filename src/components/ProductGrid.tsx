
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import { Product } from '../types/product';
import ProductCard from './ProductCard';
import { toast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGridProps {
  selection: string;
}

const ProductGrid = ({ selection }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [serverSelection, setServerSelection] = useState<string | null>(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastDisplayedModel, setLastDisplayedModel] = useState("");

  const loadProducts = async (page: number, lastModel: string = "") => {
    try {
      setLoading(true);
      setError(null);
      setIsUsingFallback(false);

      // Utilise le service pour récupérer les produits avec la sélection et pagination
      const data = await fetchProducts(selection, page, lastModel);

      // Vérifier si les données sont bien formatées
      if (data && data.products) {
        console.log("Données reçues:", data);

        // Stocker la sélection retournée par le serveur
        setServerSelection(data.selection);

        // Filtrer les produits pour n'afficher que ceux avec un nom/description non vide
        const filteredProducts = data.products.filter((product: Product) => product.name && product.name.trim() !== "");
        console.log(`Produits chargés: ${data.products.length}, Produits avec description: ${filteredProducts.length}`);
        console.log(`Sélection utilisée: ${data.selection}, Page: ${page}`);
        setProducts(filteredProducts);
        
        // Stocker le dernier modèle affiché pour la pagination
        if (data.lastDisplayedModel) {
          setLastDisplayedModel(data.lastDisplayedModel);
        }

        // Vérifier si on utilise les données de secours
        if (data.products[0] && data.products[0].name.includes('[')) {
          setIsUsingFallback(true);
          toast({
            title: "Information",
            description: "Utilisation de données simulées. Le serveur PHP n'a pas pu être atteint.",
            variant: "default"
          });
        } else {
          toast({
            title: "Succès",
            description: `Données chargées depuis le serveur PHP avec succès. Page ${page}.`,
            variant: "default"
          });
        }
      } else {
        throw new Error("Format de données invalide");
      }
    } catch (err) {
      console.error('Erreur lors du chargement des produits:', err);
      setError('Impossible de charger les produits depuis le serveur PHP.');
      setIsUsingFallback(true);
      toast({
        title: "Erreur",
        description: "Impossible de charger les données depuis le serveur PHP. Utilisation des données de secours.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset à la page 1 si la sélection change
    setCurrentPage(1);
    setLastDisplayedModel("");
    loadProducts(1);
  }, [selection]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      loadProducts(newPage);
    }
  };

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    loadProducts(newPage, lastDisplayedModel);
  };

  if (loading) {
    return <div className="text-center py-10">Chargement des produits...</div>;
  }

  return (
    <div className="space-y-4">
      {/* Affichage de la sélection reçue du serveur */}
      {serverSelection && (
        <div className="">
          <p className="font-medium">
            Sélection utilisée: <span className="font-bold">{serverSelection}</span>
          </p>
          {products.length > 0 && (
            <p className="text-sm">
              Exemple de produit: <span className="font-bold">{products[0].name}</span>
            </p>
          )}
          {isUsingFallback && (
            <p className="text-sm text-yellow-700 mt-1">
              ⚠️ Utilisation des données de secours (le serveur PHP n'a pas pu être atteint)
            </p>
          )}
        </div>
      )}

      {error && (
        <div className="bg-red-100 p-3 rounded-md text-red-800 mb-4">
          <p className="font-medium">{error}</p>
        </div>
      )}

      {/* Pagination supérieure */}
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage <= 1}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" /> Page précédente
        </Button>
        <span className="text-sm font-medium">Page {currentPage}</span>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={products.length < 15}
          className="flex items-center gap-1"
        >
          Page suivante <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-3">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination inférieure */}
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage <= 1}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" /> Page précédente
        </Button>
        <span className="text-sm font-medium">Page {currentPage}</span>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={products.length < 15}
          className="flex items-center gap-1"
        >
          Page suivante <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;
