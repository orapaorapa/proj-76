
export interface Product {
  id: string;
  name: string;
  code?: string;
  image: string;
  image2: string;
  price: string;
  specs: {
    poidsNet: string;
    typeMetal: string;
    poidsPrevu: string;
    diametrePrincipal: string;
  };
}

export interface ProductGridProps {
  selection: string;
  page: number;
  onPageChange: (page: number) => void;
}
