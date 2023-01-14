export interface DataProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface ContentProps {
  productId: string;
  quantity: number;
}

export interface cartContentProps {
  cartContent: ContentProps;
  theme: string;
}