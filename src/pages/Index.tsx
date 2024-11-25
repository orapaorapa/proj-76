import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="mb-4">
          <h1 className="text-lg font-medium mb-3">Diamants naturels</h1>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" className="text-xs px-2 py-1 h-7">Prix</Button>
            <Button variant="outline" className="text-xs px-2 py-1 h-7">À une image</Button>
            <Button variant="outline" className="text-xs px-2 py-1 h-7">À une vidéo</Button>
            <Button variant="outline" className="text-xs px-2 py-1 h-7">Retournable</Button>
            <Button variant="default" className="text-xs px-2 py-1 h-7">EXPRESS</Button>
          </div>
        </div>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;