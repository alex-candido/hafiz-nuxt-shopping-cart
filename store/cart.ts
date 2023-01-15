import { defineStore } from 'pinia';
import products from '~~/data';

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartContent: {},
    theme: "light",
  }) as any,
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
          quantity: product.quantity,
          cost:
            product.quantity *
            dataProducts.find((p) => p.id === product.productId).price,
        }
      })
    },
    total(): any {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        const product = products.find((p) => p.id === id);
        if (product) {
          return acc + product.price * this.cartContent[id].quantity;
        }
        return acc + 0;
      }, 0);
    },
    productsTotal(): any {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        return acc + this.cartContent[id].quantity
      }, 0);
    },
    getTheme(): any {
      return this.theme;
    }
  },
  actions: {
    add(productId: any) {
      if (this.cartContent.hasOwnProperty(productId)) {
       this.cartContent[productId] = {
        productId,
        quantity: this.cartContent[productId].quantity + 1,
       };
      } else {
        this.cartContent[productId] = {
          productId,
          quantity: 1,
        };
      }
    },
    remove(productId: any) {
      if (!this.cartContent[productId]) {
        return 
      }
      this.cartContent[productId].quantity -= 1;

      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId];
      }
    },
    removeProduct(productId: any) {
      delete this.cartContent[productId];
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    }
  }
});

