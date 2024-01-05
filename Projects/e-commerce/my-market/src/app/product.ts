export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;  // URL of the main product image
    thumbnail: string;  // URL of a smaller thumbnail image
    description: string;
    category:string
  }