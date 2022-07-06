import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    panel: 'orders',
    profile: 'profile',
    orders:'orders',
    settings:'settings',
    Address:'Address',
    leftDrawerOpen: false,
    hide1: false,
    hide2: false,
    hide3: false,
    ShowChangePass: false,
    ShowNotification: false,
    Showsetup: true
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
      this.leftDrawerOpen = false;
    },
    toggleAccPanel2() {
      this.panel = this.orders
      this.leftDrawerOpen = false;
    },
    toggleAccPanel3() {
      this.panel = this.settings;
      this.leftDrawerOpen = false;
    },
    toggleAccPanel4() {
      this.panel = this.Address;
      this.leftDrawerOpen = false;
    },
  },
});
