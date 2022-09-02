<template>
  <div class="allproducts row wrap justify-center overflow-hidden" style="width: 100%">
    <!-- product -->
    <productVue
      v-for="product in Store.favourites.value"
      :productName="product.name.slice(0, 10) + '..'"
      :productImage="product.images[0]"
      :productPrice="product.price"
      :productCategory="product.category"
      :productTag="product.tag"
      :productId="product.id"
      :favouriters="product.favouriters"
      :key="product.name"
    ></productVue>
  </div>
  <!-- show skeleton is loading  -->
  <!-- show skeleton is loading  -->
  <!-- show skeleton is loading  -->
  <div class="allproducts row wrap justify-center q-gutter-md" v-if="Store.ShowLoading">
    <productVue />
    <productVue />
    <productVue />
    <productVue />
    <productVue />
    <productVue />
    <productVue />
    <productVue />
  </div>
  <!-- show skeleton if loading -->
</template>
<script setup>
import productVue from "./product.vue";
import { ref } from "vue";
import { auth, db, Storage } from "src/boot/firebase";
import {
  collection,
  query,
  arrayUnion,
  onSnapshot,
  where,
  doc,
  addDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import axios from "axios";
import { onMounted } from "vue";
import { useCounterStore } from "stores/counter";

const Store = useCounterStore();

// const products = ref([]);
// Store.products = ref([]);
// function filtersearch() {
//   const filter = products.value.filter((category) => {
//     return (products.value = products.value.category === "jewelery");
//   });
// }
// const Fetchproducts = () => {
//   Store.ShowLoading = true;
//   axios.get("https://fakestoreapi.com/products").then((response) => {
//     let group = response.data;
//     console.log(group);
//     Store.products.value = [...group];
//     if (Store.products.value.length > 0) {
//       Store.ShowLoading = false;
//     }
//   });
// };
// const Fetchproducts = () => {
//   Store.ShowLoading = true;
//   const colRef = collection(db, "products");
//   onSnapshot(colRef, (data) => {
//     const group = data.docs.map((item) => {
//       return item.data();
//     });
//     Store.products.value = [...group];
//     console.log(group);
//     if (Store.products.value.length > 0) {
//       Store.ShowLoading = false;
//     }
//   });
// };

onMounted(() => {
  Store.fetchFavourites();
});
</script>
<style scoped lang="sass">
// .allproducts


//   body.screen--sm &
</style>
