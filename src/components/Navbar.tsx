
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('votre sélection :');

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="text-sm font-medium truncate max-w-[180px]">{selectedItem}</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-xs px-2 py-1 h-8">€ EUR</Button>
          <Button variant="default" className="text-xs px-2 py-1 h-8">Aide</Button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } z-[60]`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium">Bijoux</span>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="space-y-4">
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Alliance")}
            >
              Alliance
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Bague")}
            >
              Bague
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("B.O")}
            >
              B.O
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Bracelet")}
            >
              Bracelet
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Broche")}
            >
              Broche
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Collier")}
            >
              Collier
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Pendentif")}
            >
              Pendentif
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Piercing")}
            >
              Piercing
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Autre")}
            >
              Autre
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
