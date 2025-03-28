
export interface Product {
  id: string;
  name: string;
  image: string;
  image2: string;
  price: string;
  specs: {
    clarity: string;
    color: string;
    cut: string;
    dimensions: string;
  };
}

export interface ProductGridProps {
  selection: string;
}
