<template>
  <q-tab-panels
    v-model="Store.panel"
    animated
    transition-prev="jump-up"
    transition-next="jump-up"
  >
    <q-tab-panel :name="Store.favourites" style="width: 100%">
      <q-card
        flat
        class="mainContainer scroll justify-center items-center content-center hide-scrollbar"
        style=""
      >
        <q-card
          flat
          class="settingContainer justify-center items-center content-center"
          style="width: 100%; height: 100%"
        >
          <!-- <q-icon
            name="img:/back.svg"
            size="28px"
            class="flex lt-md q-ml-md q-mt-md"
            v-show="Store.Showsetup"
          /> -->
          <div class="text-h1 settingsLabel" style="" v-show="Store.Showsetup">
            Favourites
          </div>
          <FavouriteProducts></FavouriteProducts>
        </q-card>
      </q-card>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { useCounterStore } from "stores/counter";
import { onMounted } from "vue";
import FavouriteProducts from "./favouriteProducts.vue";
const Store = useCounterStore();

// const hide1 = ref(false);
// const hide2 = ref(false);
// const hide3 = ref(false);
// const ShowChangePass = ref(false);
// const Showsetup = ref(true);
onMounted(() => {
  Store.Fetchproducts("general");
});
</script>

<style scoped lang="sass">
.mainContainer
  width: 100%
  height: 102vh
  body.screen--lg &
    height: 50vh
  body.screen--xl &
    height: 25vh

.EditButton
  body.screen--xl &
    min-width: 60%
    min-height: 48px
    margin-top: 6%
    margin-left: 3%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--lg &
    min-width: 60%
    min-height: 48px
    margin-top: 6%
    margin-left: 3%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--md &
    min-width: 60%
    margin-top: 6%
    margin-left: 3%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--sm &
    min-width: 60%
    min-height: 48px
    margin-left: 3%
    margin-top: 6%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--xs &
    min-width: 100%
    margin-top: 15%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"

.cta
  body.screen--sm &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
  body.screen--md &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
  body.screen--lg &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
  body.screen--xl &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
  body.screen--xs &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"

.settingsLabel
  body.screen--xl &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // font-size: 27px
    margin-left: 4.5%
    margin-top: 65px
    color: #27141A
    // line-height: 5px
  body.screen--lg &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // font-size: 27px
    margin-left: 4.5%
    margin-top: 45px
    color: #27141A
    // line-height: 205px
  body.screen--md &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    margin-top: 35px
    // font-size: 27px
    margin-left: 4.5%
    color: #27141A
    // line-height: 5px
  body.screen--sm &
    min-width: 200px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 220%
    margin-left: 35px
    color: #27141A
    line-height: 70px
  body.screen--xs &
    min-width: 200px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 220%
    margin-left: 20px
    color: #27141A
    line-height: 20px
    margin-top: 20px
    margin-bottom: 30px
.passwordLabel
  body.screen--xl &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 170%
    // font-size: 27px
    margin-left: 4.5%
    // margin-top: 10px
    color: #27141A
    line-height: 180%
  body.screen--lg &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 170%
    // font-size: 27px
    margin-left: 4.5%
    // margin-top: 45px
    color: #27141A
    line-height: 180%
  body.screen--md &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 170%
    // font-size: 27px
    margin-left: 4.5%
    color: #27141A
    line-height: 180%
  body.screen--sm &
    min-width: 200px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 160%
    margin-left: 19px
    color: #27141A
    line-height: 50px
  body.screen--xs &
    min-width: 200px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 160%
    margin-left: 20px
    color: #27141A
    line-height: 1px
    margin-top: 20px
    margin-bottom: 10px

.settingsInfo
  body.screen--xl &
    font-size: 100%
    font-family: 'Manrope-SemiBold'
    color: #27141a
    margin-left: 3%
    line-height: 20px
    margin-bottom: 6%
  body.screen--lg &
    font-size: 100%
    font-family: 'Manrope-SemiBold'
    color: #27141a
    margin-left: 3%
    line-height: 20px
    margin-bottom: 6%
  body.screen--md &
    font-size: 100%
    font-family: 'Manrope-SemiBold'
    color: #27141a
    margin-left: 3%
    line-height: 20px
    margin-bottom: 6%
  body.screen--sm &
    font-size: 89%
    font-family: 'Manrope-SemiBold'
    color: #27141a
    margin-left: 3%
    line-height: 30px
  body.screen--xs &
    font-size: 85%
    font-family: 'Manrope-SemiBold'
    color: #27141a
    margin-left: 3%

.settingCard2
  body.screen--xl &
    margin-right: 1%
    width: 40%
  body.screen--lg &
    margin-right: 4%
    width: 50%
  body.screen--md &
    margin-left: 3%
    width: 50%
  body.screen--sm &
    // margin-right: 4%
    width: 50%
  body.screen--xs &
    width: 100%
    margin-bottom: 6%
    // margin-left: 5%
    // margin-right: 5%
// .settingCard2
//   body.screen--xs &
//     width: 100%
.settingCard1
  body.screen--xl &
    margin-right: 3%
    width: 40%
  body.screen--lg &
    margin-right: 4%
    width: 50%
  body.screen--md &
    // margin-right: 4%
    width: 50%
  body.screen--sm &
    margin-right: 3%
    width: 50%
  body.screen--xs &
    width: 100%
    margin-bottom: 6%

    // margin-left: 5%
    // margin-right: 5%
// .settingCard2
//   body.screen--xs &
//     width: 100%
.cards
  body.screen--xs &
    flex-direction: column
    width: 80vw
  body.screen--md &
    // width: fit-content
    padding: 0 2% 0 2%
    width: 45vw
  body.screen--lg &
    // width: fit-content
    padding: 0 2% 0 2%
    width: 45vw
  body.screen--xl &
    // width: fit-content
    // padding: 0 2% 0 2%
    width: inherit
  body.screen--sm &
    // width: fit-content
    padding: 0 2% 0 2%
    width: 75vw
</style>
