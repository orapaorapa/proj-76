import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Diamants naturels</h1>
          <div className="flex gap-4 flex-wrap">
            <Button variant="outline">Prix</Button>
            <Button variant="outline">À une image</Button>
            <Button variant="outline">À une vidéo</Button>
            <Button variant="outline">Retournable</Button>
            <Button variant="primary">EXPRESS</Button>
          </div>
        </div>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;