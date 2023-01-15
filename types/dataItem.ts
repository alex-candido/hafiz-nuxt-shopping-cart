export interface DataProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface formattedCartProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ContentProps {
  productId: string;
  quantity: number;
}

export interface cartContentProps {
  cartContent: ContentProps;
  theme: string;
}