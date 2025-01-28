import { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';
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

        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-600 hover:text-gray-900"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } z-[60]`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium">Bagues</span>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="space-y-4">
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Diamants naturels")}
            >
              Diamants naturels
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Diamants de synthèse")}
            >
              Diamants de synthèse
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Pierres gemmes")}
            >
              Pierres gemmes
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => handleMenuItemClick("Mêlées naturels")}
            >
              Mêlées naturels
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;