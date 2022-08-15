<template>
  <q-page class="flex flex-center q-pa-md overflow-hidden" style="background: #e5e5e5">
    <q-card
      flat
      class="row justify-end bg-transparent"
      style="width: 97%; margin-bottom: 10px"
    >
      <q-icon name="img:/filter.svg" size="30px" class="filter lt-md">
        <q-popup-proxy
          cover
          maxHeight="99vh"
          transition-show="flip-up"
          transition-hide="flip-down"
          style="width: 100%"
        >
          <q-banner class="scroll filterContainerMobile">
            <q-list style="width: 100%">
              <!-- checklist -->
              <q-item class="column q-mt-md">
                <div class="text-h2 priceFilterHeader" style="">Price</div>
                <q-item-section class="q-mt-sm">
                  <q-checkbox color="yellow" v-model="r" label="Under ₦10,000" />
                  <q-checkbox color="yellow" v-model="ri" label="₦10,000--₦50,000" />
                  <q-checkbox color="yellow" v-model="rig" label="₦50,000--₦100,000" />
                  <q-checkbox color="yellow" v-model="righ" label="₦100,000--₦300,000" />
                  <q-checkbox color="yellow" v-model="right" label="₦300,000--₦500,000" />
                  <q-checkbox
                    color="yellow"
                    v-model="righti"
                    label="₦500,000 and above"
                  />
                </q-item-section>
              </q-item>
              <!-- input custom checklist -->
              <q-item class="column" style="width: 100%">
                <div class="text-h2 CustomPriceFilter" style="">Custom Price range</div>
                <q-card
                  flat
                  class="row items-center q-px-md q-mt-md"
                  style="max-width: 100%"
                >
                  <div class="col row no-wrap" style="margin-right: 10px">
                    <q-input
                      borderless
                      dense
                      v-model="custom.min"
                      label=""
                      class="filterInput"
                      style=""
                    />
                  </div>
                  <div class="col row no-wrap" style="">
                    <q-input
                      borderless
                      dense
                      class="filterInput"
                      v-model="custom.max"
                      label=""
                      style=""
                    />
                  </div>
                  <q-item class="col">
                    <q-btn
                      class="filterButton"
                      label="Go"
                      style=""
                      @click="Store.priceQuery(custom.min, custom.max)"
                    />
                  </q-item>
                </q-card>
              </q-item>
              <q-item class="column q-mt-md">
                <div class="text-h2 brandsHeader" style="">Brands</div>
                <q-item-section class="q-mt-sm">
                  <q-checkbox
                    v-model="brand.Hennessey"
                    label="Hennessey"
                    true-value="henessey"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="brand.Vodka"
                    label="Vodka"
                    true-value="vodka"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="brand.Azul"
                    label="Azul"
                    true-value="azul"
                    false-value="nil"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-banner>
        </q-popup-proxy>
      </q-icon>
    </q-card>
    <div class="row container no-wrap justify-around" style="">
      <!-- product filter -->
      <productFilterVue />
      <!-- product filter -->

      <!-- products -->
      <!-- products -->
      <q-card
        flat
        class="col-8 products bg-transparent items-center scroll hide-scrollbar"
        style=""
      >
        <!-- shopProducts -->
        <shopProductsVue />
        <!-- shopProducts -->
      </q-card>
      <!-- products -->
      <!-- products -->
    </div>

    <RecentlyViewed></RecentlyViewed>
    <!-- loading State -->
    <div
      class="flex flex-center q-pa-md overflow-hidden"
      v-if="Store.ShowLoading"
      style=""
    >
      <q-skeleton class="skeleton dark" />
      <q-inner-loading :showing="Store.ShowLoading">
        <q-spinner-facebook size="300px" style="color: #e6b41d" />
      </q-inner-loading>
    </div>
    <!-- loading state  -->
  </q-page>
</template>

<script setup>
import shopProductsVue from "src/components/shopProducts.vue";
import productFilterVue from "src/components/productFilter.vue";
import { useCounterStore } from "stores/counter";
import Product from "/src/components/product.vue";
import RecentlyViewed from "src/components/RecentlyViewed.vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted, reactive, watch } from "vue";
const Store = useCounterStore();
const router = useRouter();
const route = useRoute();
const brand = reactive({
  Hennessey: "nil",
  Vodka: "nil",
  Azul: "nil",
});

const custom = reactive({
  min: "",
  max: "",
});

watch(
  () => brand,
  (newValue, oldValue) => {
    // Note: `newValue` will be equal to `oldValue` here
    // *unless* state.someObject has been replaced
    console.log(newValue);
    Store.brandQuery(newValue);
  },
  { deep: true }
);
// const loaderColor = ref("#e6b41d");
onMounted(() => {
  Store.Fetchproducts(route.params.category);
});
</script>
<style scoped lang="sass">
.container
  height: fit-content
  width: 90%
  body.screen--xl &
    width: 60%
  body.screen--sm &
    width: 100%
.products
  height: 95vh
  padding: 10px 0 20px 0
  width: 75%
  max-width: 1180px
  body.screen--sm &
    width: 66%
  body.screen--xs &
    width: 100vw
    display: flex
    flex-direction: column
    align-items: center
    justify-contents: center
.sidebar
  height: inherit
  border-radius: 15px
  max-width: fit-content
  body.screen--sm &
    min-width: 30%
.search
  background: #dddddd
  padding-left: 10px
  margin-top: 15px
  border-radius: 10px
  width: 100%
  height: 45px
  font-size: 18px
  border: 0.5px solid grey
  body.screen--sm &
    font-size: 12px
.priceFilterHeader
  font-size: 20px
  line-height: normal
  font-family: 'Catellosdemo'
  color: #27141a
.CustomPriceFilter
  font-size: 20px
  line-height: normal
  font-family: 'Catellosdemo'
  color: #27141a
.filterInput
  background: #dddddd
  padding-left: 10px
  padding-bottom: 10px
  max-width: 100px
  border-radius: 10px
  font-size: 14px
  border: 0.5px solid grey
  body.screen--sm &
    min-width: 48px
.filterButton
  background-color: #27141a
  color: white
  border-radius: 10px
.brandsHeader
  font-size: 20px
  line-height: normal
  font-family: 'Catellosdemo'
  color: #27141a
// .recentlyViewedHeader
//   font-size: 40px
//   line-height: 60px
//   font-family: 'Catellosdemo'
//   color: #27141a
//   body.screen--sm &
//     font-size: 28px
//     line-height: 30px
//   body.screen--xs &
//     font-size: 25px
//     line-height: 25px

// .recentlyViewed
//   width: 97%
//   height: fit-content
//   body.screen--sm &
//     width: 100%
//     height: fit-content
//   body.screen--xs &
//     width: 99vw
//     height: fit-content
.filterContainerMobile
  body.screen--xs &
    width: 100vw
</style>
