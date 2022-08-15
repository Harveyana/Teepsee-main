<template>
  <div class="allproducts row wrap justify-center q-gutter-md">
    <!-- product -->
    <productVue
      v-for="product in Store.products.value"
      :productName="product.name.slice(0, 10) + '..'"
      :productImage="product.images[0]"
      :productPrice="product.price"
      :productCategory="product.category"
      :productTag="product.tag"
      :productId="product.id"
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
  Store.Fetchproducts();
});
</script>
<style scoped lang="sass">
// .skeleton
//   height: 95vh
//   width: 100%
//   // padding: 10px 0 20px 0
//   max-width: 1180px
//   body.screen--sm &
//     width: 66%
//   body.screen--xs &
//     width: 100vw
//     // display: flex
//     // flex-direction: column
//     // align-items: center
//     // justify-contents: center
</style>
