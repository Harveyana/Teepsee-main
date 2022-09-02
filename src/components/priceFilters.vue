<template>
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
        @click="Store.priceQuery(0, 10000)"
      />
      <q-radio
        color="yellow"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        v-model="price.filter"
        val="2"
        label="₦10,000--₦50,000"
        @click="Store.priceQuery(10000, 50000)"
      />
      <q-radio
        color="yellow"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        v-model="price.filter"
        val="3"
        label="₦50,000--₦100,000"
        @click="Store.priceQuery(50000, 100000)"
      />
      <q-radio
        color="yellow"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        v-model="price.filter"
        val="4"
        label="₦100,000--₦300,000"
        @click="Store.priceQuery(100000, 300000)"
      />
      <q-radio
        color="yellow"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        v-model="price.filter"
        val="5"
        label="₦300,000--₦500,000"
        @click="Store.priceQuery(300000, 500000)"
      />
      <q-radio
        color="yellow"
        checked-icon="task_alt"
        unchecked-icon="panorama_fish_eye"
        v-model="price.filter"
        val="6"
        label="₦500,000 and above"
        @click="Store.priceQuery(500000, 20000000)"
      />
    </q-item-section>
  </q-card>
</template>
<script setup>
import { useCounterStore } from "stores/counter";
import { ref, watch, reactive, computed } from "vue";
const Store = useCounterStore();
const shape = ref("");

const price = reactive({
  filter: "nil",
  // filter2: "nil",
  // filter3: "nil",
  // filter4: "nil",
  // filter5: "nil",
  // filter6: "nil",
});
const custom = reactive({
  min: "",
  max: "",
});

// watch(
//   () => price,
//   (newValue, oldValue) => {
//     console.log(newValue);
//     Store.brandQuery(newValue);
//   },
//   { deep: true }
// );
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
