
import { Heart, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';

interface Product {
  id: string;
  name: string;
  image: string;
  image2: string;
  price: string;
  specs: {
    clarity: string;
    color: string;
    cut: string;
    dimensions: string;
  };
}

interface ProductGridProps {
  selection: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative group">
        <div className="flex flex-col">
          <img
            src={product.image}
            alt={`${product.name} - Vue 1`}
            className="w-full h-60 sm:h-56 md:h-52 lg:h-48 object-cover"
            // Hauteur augmentée de 15% par rapport aux valeurs d'origine:
            // h-52 -> h-60 (augmentation de 15%)
            // h-48 -> h-56 (augmentation de 15%)
            // h-44 -> h-52 (augmentation de 15%)
            // h-40 -> h-48 (augmentation de 15%)
          />
          <img
            src={product.image2 || product.image}
            alt={`${product.name} - Vue 2`}
            className="w-full h-60 sm:h-56 md:h-52 lg:h-48 object-cover"
          />
        </div>
        <div className="absolute top-2 right-2 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="rounded-full w-8 h-8">
            <Heart className="h-3 w-3" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full w-8 h-8">
            <Share2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-semibold text-[10px] mb-1 text-left truncate">{product.name}</h3>
        <div className="text-xs text-gray-600 space-y-0.5 text-left">
          <p>Clarté: {product.specs.clarity}</p>
          <p>Couleur: {product.specs.color}</p>
          <p>Taille: {product.specs.cut}</p>
          <p>Dimensions: {product.specs.dimensions}</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-bold text-sm">{product.price}</span>
          <Button variant="default" size="sm" className="text-xs px-2 py-1">
            Voir détails
          </Button>
        </div>
      </div>
    </div>
  );
};

// Produits de secours au cas où la requête PHP échoue
const fallbackProducts: Product[] = [
  {
    id: '1',
    name: 'Round 1.01ct H VS1 EX EX EX Faint',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€1 916,43',
    specs: {
      clarity: 'VS1',
      color: 'H',
      cut: 'Excellent',
      dimensions: '6.51 × 3.97',
    },
  },
  {
    id: '2',
    name: 'Oval 1.50ct D IF EX EX None',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€4 250,00',
    specs: {
      clarity: 'IF',
      color: 'D',
      cut: 'Excellent',
      dimensions: '7.21 × 4.15',
    },
  },
  {
    id: '3',
    name: 'Princess 2.01ct G VS2 VG VG Faint',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€3 150,75',
    specs: {
      clarity: 'VS2',
      color: 'G',
      cut: 'Very Good',
      dimensions: '6.89 × 4.22',
    },
  },
  {
    id: '4',
    name: 'Pear 1.25ct E VVS1 EX EX None',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€2 890,60',
    specs: {
      clarity: 'VVS1',
      color: 'E',
      cut: 'Excellent',
      dimensions: '7.02 × 4.11',
    },
  },
  {
    id: '5',
    name: 'Emerald 1.75ct F VS1 EX EX Faint',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€3 475,90',
    specs: {
      clarity: 'VS1',
      color: 'F',
      cut: 'Excellent',
      dimensions: '7.15 × 4.08',
    },
  },
  {
    id: '6',
    name: 'Cushion 1.30ct I VVS2 VG EX None',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€2 250,30',
    specs: {
      clarity: 'VVS2',
      color: 'I',
      cut: 'Very Good',
      dimensions: '6.75 × 4.01',
    },
  },
  {
    id: '7',
    name: 'Rond 0.90ct F VS2 EX EX None',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€1 780,50',
    specs: {
      clarity: 'VS2',
      color: 'F',
      cut: 'Excellent',
      dimensions: '6.20 × 3.80',
    },
  },
  {
    id: '8',
    name: 'Marquise 1.15ct G VVS1 VG VG Faint',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€2 340,75',
    specs: {
      clarity: 'VVS1',
      color: 'G',
      cut: 'Very Good',
      dimensions: '9.80 × 5.10',
    },
  },
  {
    id: '9',
    name: 'Oval 2.05ct D VS1 EX EX None',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€5 120,90',
    specs: {
      clarity: 'VS1',
      color: 'D',
      cut: 'Excellent',
      dimensions: '10.20 × 7.30',
    },
  },
  {
    id: '10',
    name: 'Rond 1.50ct H SI1 VG EX Faint',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€2 790,30',
    specs: {
      clarity: 'SI1',
      color: 'H',
      cut: 'Very Good',
      dimensions: '7.35 × 4.45',
    },
  },
  {
    id: '11',
    name: 'Princess 1.80ct F VS2 EX EX None',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€3 980,25',
    specs: {
      clarity: 'VS2',
      color: 'F',
      cut: 'Excellent',
      dimensions: '7.00 × 7.00',
    },
  },
  {
    id: '12',
    name: 'Emerald 1.25ct E VVS2 VG VG Faint',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€3 150,60',
    specs: {
      clarity: 'VVS2',
      color: 'E',
      cut: 'Very Good',
      dimensions: '7.90 × 5.80',
    },
  },
  {
    id: '13',
    name: 'Rond 2.00ct G VS1 EX EX None',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€4 560,80',
    specs: {
      clarity: 'VS1',
      color: 'G',
      cut: 'Excellent',
      dimensions: '8.10 × 4.90',
    },
  },
  {
    id: '14',
    name: 'Pear 1.65ct D IF EX EX None',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€5 980,40',
    specs: {
      clarity: 'IF',
      color: 'D',
      cut: 'Excellent',
      dimensions: '11.20 × 6.90',
    },
  },
  {
    id: '15',
    name: 'Cushion 1.95ct F VVS1 EX EX Faint',
    image: '/placeholder.svg',
    image2: '/placeholder.svg',
    price: '€4 870,25',
    specs: {
      clarity: 'VVS1',
      color: 'F',
      cut: 'Excellent',
      dimensions: '8.30 × 6.70',
    },
  }
];

const ProductGrid = ({ selection }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
