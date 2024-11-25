import { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <span className="text-xl font-bold">Diamants</span>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline">€ EUR</Button>
          <Button variant="default">Aide</Button>
        </div>
      </div>

      {/* Menu latéral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="space-y-4">
            <a href="#" className="block py-2 hover:text-primary transition-colors">
              Diamants naturels
            </a>
            <a href="#" className="block py-2 hover:text-primary transition-colors">
              Diamants de synthèse
            </a>
            <a href="#" className="block py-2 hover:text-primary transition-colors">
              Pierres gemmes
            </a>
            <a href="#" className="block py-2 hover:text-primary transition-colors">
              Mêlées naturels
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;