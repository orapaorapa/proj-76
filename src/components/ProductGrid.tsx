
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import { Product, ProductGridProps } from '../types/product';
import { fallbackProducts } from '../utils/productUtils';
import ProductCard from './ProductCard';

const ProductGrid = ({ selection }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [serverSelection, setServerSelection] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Utilise le service pour récupérer les produits avec la sélection
        const data = await fetchProducts(selection);
        
        // Filtrer les produits pour n'afficher que ceux avec un nom/description non vide
        const filteredProducts = data.products.filter((product: Product) => 
          product.name && product.name.trim() !== ""
        );
        
        console.log(`Produits chargés: ${data.products.length}, Produits avec description: ${filteredProducts.length}`);
        console.log(`Sélection reçue du serveur: ${data.selection}`);
        
        // Stocker la sélection retournée par le serveur
        setServerSelection(data.selection);
        setProducts(filteredProducts);
        setLoading(false);
      } catch (err) {
        console.error('Erreur lors du chargement des produits:', err);
        setError('Impossible de charger les produits. Utilisation des données de secours.');
        
        // Appliquer le même filtre aux produits de secours
        const filteredFallbackProducts = fallbackProducts.filter(product => 
          product.name && product.name.trim() !== ""
        );
        
        setProducts(filteredFallbackProducts);
        setLoading(false);
      }
    };

    loadProducts();
  }, [selection]);

  if (loading) {
    return <div className="text-center py-10">Chargement des produits...</div>;
  }

  if (error) {
    console.warn(error);
  }

  return (
    <div className="space-y-4">
      {/* Affichage de la sélection reçue du serveur */}
      {serverSelection && (
        <div className="bg-blue-100 p-3 rounded-md text-blue-800 mb-4">
          <p className="font-medium">Sélection reçue du serveur: <span className="font-bold">{serverSelection}</span></p>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
