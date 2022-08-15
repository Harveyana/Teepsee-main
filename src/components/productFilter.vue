<template>
  <q-card flat class="col-3 sidebar justify-between gt-xs" style="">
    <q-list style="width: 100%">
      <!-- search bar -->
      <q-item style="width: inherit">
        <q-input
          class="search"
          dense
          borderless
          label="search for drinks"
          v-model="text"
          style=""
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-item>
      <!-- checklist -->
      <q-item class="column q-mt-md">
        <div class="text-h2 priceFilterHeader" style="">Price</div>
        <q-item-section class="q-mt-sm">
          <q-checkbox color="yellow" v-model="r" label="Under ₦10,000" />
          <q-checkbox color="yellow" v-model="ri" label="₦10,000--₦50,000" />
          <q-checkbox color="yellow" v-model="rig" label="₦50,000--₦100,000" />
          <q-checkbox color="yellow" v-model="righ" label="₦100,000--₦300,000" />
          <q-checkbox color="yellow" v-model="right" label="₦300,000--₦500,000" />
          <q-checkbox color="yellow" v-model="righti" label="₦500,000 and above" />
        </q-item-section>
      </q-item>
      <!-- input custom checklist -->
      <q-item class="column">
        <div class="text-h2 CustomPriceFilter" style="">Custom Price range</div>
        <q-card flat class="row items-center q-px-md q-mt-md" style="max-width: 100%">
          <div class="col" style="margin-right: 10px">
            <q-input
              borderless
              dense
              v-model="custom.min"
              label=""
              class="filterInput"
              style=""
            />
          </div>
          <div class="col" style="">
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
  </q-card>
</template>
<script setup>
import { useCounterStore } from "stores/counter";
import { ref, watch, reactive, computed } from "vue";
const Store = useCounterStore();

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
    console.log(newValue);
    Store.brandQuery(newValue);
  },
  { deep: true }
);
</script>
<style scoped lang="sass">
.sidebar
  height: inherit
  border-radius: 15px
  max-width: fit-content
  width: 30%
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
</style>
