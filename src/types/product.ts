
export interface Product {
  id: string;
  name: string;
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
}
