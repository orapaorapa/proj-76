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
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Clarté: {product.specs.clarity}</p>
          <p>Couleur: {product.specs.color}</p>
          <p>Taille: {product.specs.cut}</p>
          <p>Dimensions: {product.specs.dimensions}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg">€{product.price.toLocaleString()}</span>
          <Button variant="default" size="sm">
            Voir détails
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
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
    // Add more sample products here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;