<template>
  <q-page
    class="flex flex-center q-pa-xs-none q-pa-sm-md q-pa-md-md q-pa-lg-md overflow-hidden"
    style="background: #e5e5e5"
  >
    <q-card
      flat
      class="row justify-end bg-transparent"
      style="width: 97%; margin-bottom: 10px"
    >
      <q-icon name="img:/filter.svg" size="30px" class="filter lt-md">
        <q-popup-proxy
          cover
          v-model="showhide"
          maxHeight="99vh"
          transition-show="flip-up"
          transition-hide="flip-down"
          style="width: 100%"
        >
          <q-banner class="scroll filterContainerMobile" style="width: 100%">
            <q-card flat style="width: 100%">
              <!-- <PriceFilters></PriceFilters> -->
              <q-card class="column">
                <div class="text-h2 priceFilterHeader" style="">Price</div>
                <q-item-section class="q-mt-sm">
                  <q-radio
                    color="yellow"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    v-model="price.filter"
                    val="1"
                    label="Under ₦10,000"
                    @click="Store.priceQuery(0, 10000), (showhide = false)"
                  />
                  <q-radio
                    color="yellow"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    v-model="price.filter"
                    val="2"
                    label="₦10,000--₦50,000"
                    @click="Store.priceQuery(10000, 50000), (showhide = false)"
                  />
                  <q-radio
                    color="yellow"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    v-model="price.filter"
                    val="3"
                    label="₦50,000--₦100,000"
                    @click="Store.priceQuery(50000, 100000), (showhide = false)"
                  />
                  <q-radio
                    color="yellow"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    v-model="price.filter"
                    val="4"
                    label="₦100,000--₦300,000"
                    @click="Store.priceQuery(100000, 300000), (showhide = false)"
                  />
                  <q-radio
                    color="yellow"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    v-model="price.filter"
                    val="5"
                    label="₦300,000--₦500,000"
                    @click="Store.priceQuery(300000, 500000), (showhide = false)"
                  />
                  <q-radio
                    color="yellow"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    v-model="price.filter"
                    val="6"
                    label="₦500,000 and above"
                    @click="Store.priceQuery(500000, 20000000), (showhide = false)"
                  />
                </q-item-section>
              </q-card>
              <!-- input custom checklist -->
              <q-card class="column" style="width: 100%">
                <div class="text-h2 CustomPriceFilter" style="">Custom Price range</div>
                <q-card
                  flat
                  class="row items-center q-px-md q-mt-md"
                  style="max-width: 100%"
                >
                  <div class="col row no-wrap" style="margin-right: 2%; width: 35%">
                    <q-input
                      borderless
                      dense
                      type="number"
                      prefix="₦"
                      v-model="custom.min"
                      label=""
                      class="filterInput"
                      style=""
                    />
                  </div>
                  <div class="col row no-wrap" style="margin-right: 2%; width: 35%">
                    <q-input
                      borderless
                      dense
                      prefix="₦"
                      type="number"
                      class="filterInput"
                      v-model="custom.max"
                      label=""
                      style=""
                    />
                  </div>
                  <q-card class="col" style="width: 20%">
                    <q-btn
                      class="filterButton"
                      label="Go"
                      style=""
                      @click="
                        Store.priceQuery(custom.min, custom.max), (showhide = false)
                      "
                    />
                  </q-card>
                </q-card>
              </q-card>
              <q-card class="column q-mt-md">
                <div class="text-h2 brandsHeader" style="">Brands</div>
                <q-card flat class="flex row justify-center q-mt-sm">
                  <q-checkbox
                    v-model="category.brandy"
                    label="Brandy"
                    true-value="brandy"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="category.wine"
                    label="Wine"
                    true-value="wine"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="category.cognac"
                    label="Cognac"
                    true-value="cognac"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="category.whiskey"
                    label="Whiskey"
                    true-value="whiskey"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="category.vodka"
                    label="Vodka"
                    true-value="vodka"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="category.tequila"
                    label="Tequila"
                    true-value="tequila"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="category.gin"
                    label="Gin"
                    true-value="gin"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="category.champagne"
                    label="Champagne"
                    true-value="champagne"
                    false-value="nil"
                  />
                  <q-checkbox
                    v-model="category.herb"
                    label="herb"
                    true-value="herb"
                    false-value="nil"
                  />
                </q-card>
              </q-card>
            </q-card>
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
        class="col-8 products bg-transparent flex justify-center items-stretch scroll hide-scrollbar"
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
import { onMounted, ref, reactive, watch } from "vue";
import PriceFilters from "src/components/priceFilters.vue";
const Store = useCounterStore();
const router = useRouter();
const showhide = ref(false);
const route = useRoute();
const shape = ref("");

const price = reactive({
  filter: "nil",
});
const category = reactive({
  brandy: "nil",
  wine: "nil",
  cognac: "nil",
  whiskey: "nil",
  vodka: "nil",
  tequila: "nil",
  gin: "nil",
  champagne: "nil",
  herb: "nil",
});

const custom = reactive({
  min: "",
  max: "",
});

watch(
  () => category,
  (newValue, oldValue) => {
    if (
      category.brandy === "nil" &&
      category.wine === "nil" &&
      category.cognac === "nil" &&
      category.whiskey === "nil" &&
      category.vodka === "nil" &&
      category.tequila === "nil" &&
      category.gin === "nil" &&
      category.champagne === "nil" &&
      category.herb === "nil"
    ) {
      Store.Fetchproducts("general");
    } else {
      Store.categoryQuery(newValue);
    }
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
  width: 90%
  max-height: 630px
  body.screen--xl &
    width: 60%
    height: 1000px
  body.screen--sm &
    width: 100%
.products
  width: 60%
  max-height: 630px
  // max-width: 1180px
  body.screen--sm &
    width: 62%
    max-height: 640px
  body.screen--xs &
    width: 100%
    max-height: 700px

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
  // height: 38px
  padding-left: 10px
  // padding-bottom: 50px
  width: 100%
  // max-width: 100px
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
