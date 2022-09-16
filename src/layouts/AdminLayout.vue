<template>
  <div class="flex row justify-center">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders gt-sm layout"
    >
      <q-header class="header no-shadow" style="background: #e5e5e5">
        <q-toolbar>
          <q-btn
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
            style="background-color: #e6b41d"
          />
          <q-item to="/admin">
            <q-img
              class="logo"
              src="~assets/Logo2.svg"
              spinner-color="brown"
              style="min-width: 220px"
            />
          </q-item>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable to="/admin/products">
              <q-item-section avatar>
                <q-icon
                  name="shop"
                  style="background-color: #e6b41d; border-radius: 50%"
                />
              </q-item-section>

              <q-item-section>Products </q-item-section>
            </q-item>

            <q-item active clickable to="/admin/users">
              <q-item-section avatar>
                <q-icon
                  name="people"
                  style="background-color: #e6b41d; border-radius: 50%"
                />
              </q-item-section>

              <q-item-section> Users </q-item-section>
            </q-item>

            <q-item clickable to="/admin/orders">
              <q-item-section avatar>
                <q-icon
                  name="store"
                  style="background-color: #e6b41d; border-radius: 50%"
                />
              </q-item-section>

              <q-item-section> Orders </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable to="/admin/coupons">
              <q-item-section avatar>
                <q-icon
                  name="discount"
                  style="background-color: #e6b41d; border-radius: 50%"
                />
              </q-item-section>

              <q-item-section> Coupons </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
      <q-inner-loading :showing="Store.ShowLoading">
        <q-spinner-ball size="50px" color="primary" />
      </q-inner-loading>
    </q-layout>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useCounterStore } from "stores/counter";

const drawer = ref(false);
const miniState = ref(true);
const Store = useCounterStore();

// beforeRouteEnter (to, from, next) {
//   if(to == '/admin/product'){
//     Store.fetchAdmins();
//   }
// };

// onBeforeMount(() => {
//   Store.fetchAdmins();
//   // const checkAdmin = () => {
//   //   if (Store.user.status) {
//   //     if (Store.user.status !== "admin") {
//   //       $this.router.push("/");
//   //     } else {
//   //       console.log("checked Admin");
//   //     }
//   //   } else {
//   //     $this.router.push("/");
//   //   }
//   // };
//   // Store.fetchAdmins();
// });
</script>
<style scoped lang="sass">
.layout
  body.screen--xl &
    width: 60%
.logo
  body.screen--sm &
    min-width: 10%
  body.screen--md &
    min-width: 10%
    position: relative
    left: 8%
  body.screen--lg &
    min-width: 10%
    position: relative
    left: 25%
  body.screen--xl &
    min-width: 10%
</style>
