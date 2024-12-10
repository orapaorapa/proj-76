import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Index = () => {
  const [minDiameter, setMinDiameter] = useState([1.0]);
  const [maxDiameter, setMaxDiameter] = useState([200.0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="mb-4">
          <div className="flex items-center gap-6 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Diamètre pierre principale. De : {minDiameter[0].toFixed(1)}</span>
              <Slider
                defaultValue={[1.0]}
                max={200.0}
                min={0.1}
                step={0.1}
                value={minDiameter}
                onValueChange={setMinDiameter}
                className="w-[200px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">à : {maxDiameter[0].toFixed(1)}</span>
              <Slider
                defaultValue={[200.0]}
                max={200.0}
                min={0.1}
                step={0.1}
                value={maxDiameter}
                onValueChange={setMaxDiameter}
                className="w-[200px]"
              />
            </div>
          </div>
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