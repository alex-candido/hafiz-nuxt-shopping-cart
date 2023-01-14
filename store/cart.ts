import { defineStore } from 'pinia';

// import products from '../data'

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartContent: {} as any,
    theme: "light" as any,
  }),
  getters: {
    formattedCart() {
      return {}
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

