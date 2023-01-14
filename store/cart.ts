import { defineStore } from 'pinia';
import products from '~~/data';

// import products from '../data'

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartContent: {} as any,
    theme: "light" as any,
  }),
  getters: {
    formattedCart(): any {
      return Object.keys(this.cartContent).map(productId => {
        const product = this.cartContent[productId];
        const dataProducts = products as any[];
        
        return {
          id: product.productId,
          image: dataProducts.find((p) => p.id === product.productId).image,
          name: dataProducts.find((p) => p.id === product.productId).name,
          price: dataProducts.find((p) => p.id === product.productId).price,
          // quantity: dataProducts.quantity * dataProducts
        }
      })
    }
  },
  actions: {
    add(productId: any) {
      if (this.cartContent.hasOwnProperty(productId)) {
       this.cartContent[productId] = {
        productId,
        quantity: this.cartContent[productId].quantity +1,
       };
      } else {
        this.cartContent[productId] = {
          productId,
          quantity: 1,
        };
      }
    }
  }
});

