<template>
  <q-card flat class="q-my-xl recentlyViewed bg-transparent" style="">
    <div class="text-h2 row recentlyViewedHeader q-ml-lg" style="">
      Recently Viewed Items
    </div>

    <q-card
      class="col-1 row scroll hide-scrollbar no-wrap q-mt-md bg-transparent justify-center"
      style="width: 100%"
    >
      <q-list
        class="row q-gutter-lg no-wrap bg-transparent"
        style="width: 100%; height: fit-content"
        v-if="Store.recentlyViewed.value"
      >
        <product
          v-for="product in Store.recentlyViewed.value"
          :productName="product.name.slice(0, 10) + '..'"
          :productImage="product.image"
          :productPrice="product.price"
          :productCategory="product.category"
          :productTag="product.tag"
          :productId="product.id"
          :favouriters="product.favourites"
          :key="product.name"
        ></product>
      </q-list>
      <q-list
        class="row q-gutter-lg no-wrap bg-transparent"
        style="width: 100%; height: fit-content"
        v-if="!Store.recentlyViewed.value"
      >
        <product></product>
        <product></product>
        <product></product>
        <product></product>
        <product></product>
        <product></product>
        <product></product>
        <product></product>
        <product></product>
        <product></product>
      </q-list>
    </q-card>
  </q-card>
</template>

<script setup>
import { useCounterStore } from "stores/counter";
import Product from "src/components/product.vue";
import { useQuasar } from "quasar";
import { ref, reactive, onMounted, computed } from "vue";
const $q = useQuasar();
const recentProducts = ref([]);
const Store = useCounterStore();
const fetchRecent = () => {
  const recents = $q.localStorage.getItem("recentItems") || [];
  Store.recentlyViewed.value = [...recents];
};
onMounted(() => {
  fetchRecent();
});
</script>
<style scoped lang="sass">
.recentlyViewed
  width: 97%
  height: fit-content
  body.screen--xl &
    width: 60%
    height: fit-content
  body.screen--sm &
    width: 100%
    height: fit-content
  body.screen--xs &
    width: 99vw
    height: fit-content

.recentlyViewedHeader
  font-size: 40px
  line-height: 60px
  font-family: 'Catellosdemo'
  color: #27141a
  body.screen--sm &
    font-size: 28px
    line-height: 30px
  body.screen--xs &
    font-size: 25px
    line-height: 25px
</style>
