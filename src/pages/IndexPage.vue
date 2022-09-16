<template>
  <q-page class="items-center overflow-hidden hide-scrollbar" style="background: #e5e5e5">
    <!-- hero -->
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <MainHero></MainHero>
      <!-- hero -->
    </transition>

    <div class="features column justify-center items-center no-wrap">
      <q-card
        flat
        class="gt-xs row justify-center no-wrap bg-transparent"
        style="width: 100%"
      >
        <div class="text-h1 text1 q-py-md">How to get Teepsee</div>
      </q-card>
      <q-card
        flat
        class="lt-sm row justify-start no-wrap bg-transparent"
        style="width: 100%"
      >
        <div class="text-h1 text2 self-start">Shop Now</div>
      </q-card>

      <div class="feature-list row no-wrap justify-around" style="">
        <q-card flat class="my-card"> </q-card>
        <q-card flat class="my-card2"> </q-card>
        <q-card flat class="my-card3"> </q-card>
      </div>
      <div class="text-h1 text3 self-start">Shop Now</div>
      <div
        flat
        class="row no-wrap bg-transparent shop-features items-center justify-between"
      >
        <Transition
          :duration="5000"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
        >
          <q-card flat class="wine">
            <div class="text-h1 featureText text-white">Shop Wine</div>
          </q-card>
        </Transition>
        <q-card flat class="champagne">
          <div class="text-h1 featureText text-white">Shop Champagne</div>
        </q-card>
      </div>
      <!-- <div class="shop-features row no-wrap">

      </div> -->
      <q-card flat class="ShopVodka">
        <div class="text-h1 featureText text-white">Shop Vodka</div>
      </q-card>

      <div
        flat
        class="row no-wrap bg-transparent shop-features2 items-center justify-between"
      >
        <q-card flat class="ShopWhiskey"
          ><div class="text-h1 featureText text-white">Shop Whiskey</div>
        </q-card>
        <q-card flat class="ShopBrandy">
          <div class="text-h1 featureText text-white">Shop Brandy</div></q-card
        >
      </div>

      <q-card flat class="PartyCombo">
        <div class="text-h1 featureText text-white">Party Combo</div>
      </q-card>

      <div class="row no-wrap bg-transparent shop-features2 items-center justify-between">
        <q-card flat class="ShopTequila"
          ><div class="text-h1 featureText text-white">Shop Tequila</div>
        </q-card>
        <q-card flat class="ShopCognac"
          ><div class="text-h1 featureText text-white">Shop Cognac</div>
        </q-card>
      </div>

      <q-btn
        round
        color="white"
        size="20px"
        icon="img:/whatsapp.png"
        class="whatsapp"
        style=""
      />
      <!-- <div class="shop-features2 row">

      </div> -->
    </div>
    <q-card
      flat
      class="testimonial flex row justify-center items-center bg-white q-px-xs-none q-px-sm-xl q-px-md-xl q-px-lg-xl q-px-xl-xl"
      style="width: 100%"
    >
      <q-card
        class="row justify-xs-center justify-sm-end justify-md-end justify-lg-end justify-xl-end"
        style="width: 100%"
      >
        <q-card
          flat
          class="head row items-center justify-xs-center justify-sm-between justify-md-between justify-lg-between justify-xl-between"
          style="width: 62%"
        >
          <div style="" class="text-h1 text-black">Testimonials</div>
          <q-card class="row items-center justify-center" style="">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab
                class=""
                name="previous"
                icon="img:/left.svg"
                style="background: #f5f5f5"
              />
              <q-tab class="bg-primary" name="next" icon="img:/right.svg" />
            </q-tabs>
          </q-card>
        </q-card>
      </q-card>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="previous">
          <div
            flat
            class="testimony-container flex column-xs row-sm row-md row-lg row-xl justify-between items-stretch"
            style=""
          >
            <!-- testimony -->
            <!-- testimony -->
            <Testimony></Testimony>
            <Testimony></Testimony>
            <Testimony></Testimony>
            <Testimony></Testimony>
          </div>
        </q-tab-panel>

        <q-tab-panel name="next">
          <div
            flat
            class="testimony-container flex column-xs row-sm row-md row-lg row-xl justify-between items-stretch"
            style="width: 100%"
          >
            <!-- testimony -->
            <!-- testimony -->
            <Testimony></Testimony>
            <Testimony></Testimony>
            <Testimony></Testimony>
            <Testimony></Testimony>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import MainHero from "../components/mainHero.vue";
import Testimony from "../components/testimony.vue";

const tab = ref("previous");
</script>

<style scoped lang="sass">
// .enter-from,
// .leave-to
//   opacity:0

// .enter-active,
// .leave-active
//   transition: opacity 6s ease
.whatsapp
  position: fixed
  bottom: 8%
  right: 3%
  z-index: 99
  body.screen--xs &
   bottom: 3%

.text-black
  font-family: 'Catellosdemo'
  font-size: 50px
  body.screen--xs &
    font-size: 30px
.testimony-container
  width: 100%

  body.screen--xs &
    flex-direction: column


.logo

.featureText
  font-family: "Catellosdemo"
  font-size: 40px
  position: relative
  left: 5%
  top: 75%
  body.screen--xs &
    font-size: 24px
    position: relative
    left: 5%
    top: 70%
  body.screen--sm &
    font-size: 24px
    position: relative
    left: 5%
    top: 70%
.features
  height: fit-content
  width: 100%
  body.screen--xs &
    margin-top: -3%
    margin-bottom: 5%
  body.screen--xl &
    margin-bottom: 8%
  body.screen--lg &
    margin-bottom: 8%
  body.screen--md &
    margin-bottom: 8%
  body.screen--sm &
    margin-bottom: 5%
.feature-list
  width: 93%
  body.screen--xs &
    width: 100%
    height: 850px
    flex-direction: column
    align-items: center
    justify-content: space-around

.text2
  body.screen--xs &
    font-family: "Catellosdemo"
    margin-left: 21px
    margin-bottom: -10px
    font-size: 32px
.text3
  body.screen--xl &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 5%
    margin-top: 1.5%
    margin-bottom: 1%
    font-size: 460%
    // font-size: 64px
  body.screen--lg &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 5%
    margin-top: 1.5%
    margin-bottom: 1%
    font-size: 460%
    // font-size: 64px
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 5%
    margin-top: 1.5%
    margin-bottom: 1%
    font-size: 460%
    // font-size: 64px
  body.screen--sm &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 52px
    margin-bottom: -10px
    font-size: 50px
  body.screen--xs &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 21px
    margin-bottom: -10px
    margin-top: -10px
    font-size: 32px
.text1
  font-family: "Catellosdemo"
  font-size: 445%
  body.screen--sm &
    margin: none
    font-family: "Catellosdemo"
    font-size: 370%
.my-card
  background: url("../assets/feature1.svg")
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: 350px
  width: 30%
  object-fit: cover
  border-radius: 10px

  body.screen--sm &
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    height: 200px
    width: 30%
    border-radius: 20px
  body.screen--xs &
    height: 270px
    width: 90%
    border-radius: 10px
.my-card2
  background: url("../assets/feature2.svg")
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  // min-height: 340px
  height: 350px
  width: 30%
  // min-width: 390px
  border-radius: 10px
  body.screen--sm &
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    height: 200px
    width: 30%
    border-radius: 20px
  body.screen--xs &
    height: 270px
    width: 90%
    border-radius: 10px

.my-card3
  background: url("../assets/feature3.svg")
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: 350px
  width: 30%
  border-radius: 10px
  body.screen--sm &
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    height: 200px
    width: 30%
    border-radius: 20px
  body.screen--xs &
    height: 270px
    width: 90%
    border-radius: 10px

.shop-features
  width: 100%
  padding-left: 5%
  padding-right: 5%
  body.screen--sm &
    width: 100%
  body.screen--xs &
    flex-direction: column

.shop-features2
  width: 100%
  padding-left: 5%
  padding-right: 5%
  body.screen--sm &
    width: 100%
  body.screen--xs &
    flex-direction: column


// Feature 2 and 3////////////

.wine
  background: url("../assets/winefeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 49%

  body.screen--lg &

  body.screen--md &

  body.screen--sm &

    height: 300px
    min-height: 300px

  body.screen--xs &

    margin-bottom: 18px
    // height: 90vw
    height: 300px
    min-height: 300px
    width: 100%


.champagne
  background: url("../assets/champagnefeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 49%
  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    margin-bottom: 18px
    height: 300px
    min-height: 300px
    width: 100%

// Feature 4////////////

.ShopVodka
  background: url("../assets/vodkafeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  margin-bottom: 25px
  margin-top: 25px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 89%
  body.screen--xl &

  body.screen--lg &

  body.screen--md &

  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    margin-bottom: 18px
    height: 300px
    min-height: 300px
    width: 90%

// Feature 5 and 6////////////

.ShopWhiskey
  background: url("../assets/whiskeyfeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 49%
  body.screen--xl &

  body.screen--lg &

  body.screen--md &

  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    margin-bottom: 18px
    height: 300px
    min-height: 300px
    width: 100%

.ShopBrandy
  background: url("../assets/shopfeature5.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 49%
  body.screen--xl &

  body.screen--lg &
  body.screen--md &
  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    margin-bottom: 18px
    height: 300px
    min-height: 300px
    width: 100%

// Feature 6  ////////////

.PartyCombo
  background: url("../assets/partycombo.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  margin-bottom: 25px
  margin-top: 25px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 89%
  body.screen--lg &

  body.screen--md &

  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    margin-bottom: 18px
    height: 300px
    min-height: 300px
    width: 90%



// Feature 7 and 8////////////


.ShopTequila
  background: url("../assets/tequilafeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 49%


  body.screen--lg &

  body.screen--md &

  body.screen--sm &

    height: 300px
    min-height: 300px

  body.screen--xs &

    margin-bottom: 18px
    // height: 90vw
    height: 300px
    min-height: 300px
    width: 100%

.ShopCognac
  background: url("../assets/shopfeature8.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 49%

  body.screen--lg &

  body.screen--md &

  body.screen--sm &

    height: 300px
    min-height: 300px

  body.screen--xs &

    margin-bottom: 18px
    // height: 90vw
    height: 300px
    min-height: 300px
    width: 100%
</style>
