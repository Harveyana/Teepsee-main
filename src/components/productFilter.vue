<template>
  <q-card flat class="col-3 sidebar justify-center gt-xs no-wrap q-pt-md" style="">
    <q-card class="column flex justify-start no-wrap" style="width: 100%">
      <!-- search bar -->
      <q-card class="flex row justify-center" style="width: 100%">
        <q-input
          class="search"
          dense
          borderless
          label="search for drinks"
          v-model="searchResults"
          style=""
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card>
      <!-- checklist -->
      <q-card class="flex row self-start q-px-md q-mt-md">
        <PriceFilters></PriceFilters>
        <!-- <q-card class="column">
          <div class="text-h2 priceFilterHeader" style="">Price</div>
          <q-item-section class="q-mt-sm">
            <q-checkbox color="yellow" v-model="r" label="Under ₦10,000" />
            <q-checkbox color="yellow" v-model="ri" label="₦10,000--₦50,000" />
            <q-checkbox color="yellow" v-model="rig" label="₦50,000--₦100,000" />
            <q-checkbox color="yellow" v-model="righ" label="₦100,000--₦300,000" />
            <q-checkbox color="yellow" v-model="right" label="₦300,000--₦500,000" />
            <q-checkbox color="yellow" v-model="righti" label="₦500,000 and above" />
          </q-item-section>
        </q-card> -->
      </q-card>
      <!-- input custom checklist -->
      <q-item class="column">
        <div class="text-h2 CustomPriceFilter" style="">Custom Price range</div>
        <q-card
          flat
          class="row justify-between items-center q-px-md q-mt-md"
          style="width: 100%"
        >
          <div class="col" style="margin-right: 2%; width: 35%">
            <q-input
              borderless
              dense
              v-model="custom.min"
              label=""
              type="number"
              prefix="₦"
              class="filterInput"
              style=""
            />
          </div>
          <div class="col" style="margin-right: 2%; width: 35%">
            <q-input
              borderless
              dense
              class="filterInput"
              v-model="custom.max"
              type="number"
              prefix="₦"
              label=""
              style=""
            />
          </div>
          <q-card class="col" style="width: 20%">
            <q-btn
              class="filterButton"
              label="Go"
              style=""
              @click="Store.priceQuery(custom.min, custom.max)"
            />
          </q-card>
        </q-card>
      </q-item>
      <q-item class="column q-mt-md">
        <div class="text-h2 brandsHeader" style="">Categories</div>
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
      </q-item>
    </q-card>
  </q-card>
</template>
<script setup>
import { useCounterStore } from "stores/counter";
import { ref, watch, reactive, computed } from "vue";
import PriceFilters from "./priceFilters.vue";
const Store = useCounterStore();
const searchResults = ref("");

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

const productList = computed(() => {
  if (Store.products.value) {
    return Store.products.value.filter((product) => {
      return product.name.toLowerCase().match(searchResults.toLowerCase());
    });
  }
});
</script>
<style scoped lang="sass">
.sidebar
  height: inherit
  max-height: 630px
  border-radius: 15px
  // max-width: fit-content
  width: 30%
  body.screen--sm &
    min-width: 30%
.search
  background: #dddddd
  padding-left: 10px
  margin-top: 15px
  border-radius: 10px
  width: 85%
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
  width: 100%
.brandsHeader
  font-size: 20px
  line-height: normal
  font-family: 'Catellosdemo'
  color: #27141a
</style>
