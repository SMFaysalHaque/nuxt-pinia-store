import { defineStore } from 'pinia';

const useOrderStore = defineStore('orderStore', {
  state: () => ({
    order: null,
  }),
  actions: {
    setOrder(order: any) {
      this.order = order;
    },
  },
});

export { useOrderStore };