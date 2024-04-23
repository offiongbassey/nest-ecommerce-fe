export type ProductAttributes = {
    id: number;
    name: string;
    sub_category: { id: number, name: string, slug: string };
    product_images: [{ id: number, image_url: string}];
    quantity: number;
    quantity_sold: number;
    slug: string;
    store: { id: number, name: string, slug: string };
    regular_price: number;
    promo_price: number;
    currency: string;
  }