import { Heart, Share2 } from 'lucide-react';
import { Button } from './ui/button';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  specs: {
    clarity: string;
    color: string;
    cut: string;
    dimensions: string;
  };
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover rounded-t-lg"
        />
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
          <span className="font-bold text-sm">€{product.price.toLocaleString()}</span>
          <Button variant="default" size="sm" className="text-xs px-2 py-1">
            Voir détails
          </Button>
        </div>
      </div>
    </div>
  );
};

  const products: Product[] = [
    {
      id: '1',
      name: 'Round 1.01ct H VS1 EX EX EX Faint',
      image: '/placeholder.svg',
      price: 1916.43,
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
      price: 4250.00,
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
      price: 3150.75,
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
      price: 2890.60,
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
      price: 3475.90,
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
      price: 2250.30,
      specs: {
        clarity: 'VVS2',
        color: 'I',
        cut: 'Very Good',
        dimensions: '6.75 × 4.01',
      },
    }
  ];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
