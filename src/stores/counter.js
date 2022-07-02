import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    panel: 'orders',
    profile: 'profile',
    orders:'orders',
    leftDrawerOpen: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    toggleAccPanel1() {
      this.panel = this.profile
      toggleLeftDrawer();
    },
    toggleAccPanel2() {
      this.panel = this.orders
      toggleLeftDrawer();
    },
  },
});
