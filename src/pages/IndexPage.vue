<template>
  <q-page class="items-center overflow-hidden" style="background: #e5e5e5">
    <!-- hero -->
    <MainHero></MainHero>
    <!-- hero -->

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
        <q-card flat class="wine">
          <div class="text-h1 featureText text-white">Shop Wine</div>
        </q-card>
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

      <!-- <div class="shop-features2 row">

      </div> -->
    </div>
  </q-page>
</template>

<script setup>
import MainHero from "../components/mainHero.vue";
// // import MainHero from "src/components/mainHero.vue";
// import mainHero from "src/components/mainHero.vue";
</script>

<style scoped lang="sass">
// body.screen--md &
//   body.screen--sm &
//   body.screen--xs &

.logo
  // body.screen--sm &
  //   min-width: 10%
  // body.screen--md &
  //   min-width: 10%
  //   position: relative
  //   right: 16%
  // body.screen--lg &
  //   min-width: 10%
  //   position: relative
  //   right: 25%
  // body.screen--xl &
  //   min-width: 10%
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
  // body.screen--md &
  //   padding-left: 4%
  //   padding-right: 4%
  //   width: 100%
  // body.screen--lg &
  //   padding-left: 4%
  //   padding-right: 4%
  //   width: 100%
  // body.screen--xl &
  //   padding-left: 4%
  //   padding-right: 4%
  //   width: 100%
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
  // font-size: 64px
  body.screen--sm &
    margin: none
    font-family: "Catellosdemo"
    font-size: 370%
    // font-size: 50px
  // body.screen--xs &
  //   margin: none
  //   display: none
  //   font-family: "Catellosdemo"
  //   font-size: 32px

.my-card
  background: url("../assets/feature1.svg")
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: 350px
  // min-height: 340px
  width: 30%
  object-fit: cover
  // min-width: 390px
  border-radius: 10px

  // body.screen--lg &
  //   background: url("../assets/feature1.svg")
  //   margin-right: 2%
  //   background-size: contain
  //   height: 53vh
  //   // min-height: 340px
  //   width: 62vh
  //   // min-width: 390px
  //   border-radius: 10px
  // body.screen--md &
  //   background: url("../assets/feature1.svg")
  //   margin-right: 2%
  //   background-size: contain
  //   height: 53vh
  //   // min-height: 340px
  //   width: 62vh
  //   // min-width: 390px
  //   border-radius: 10px
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

  // body.screen--xl &

  // body.screen--lg &
  //   background: url("../assets/feature2.svg")
  //   margin-right: 2%
  //   background-size: contain
  //   // min-height: 340px
  //   height: 53vh
  //   width: 62vh
  //   // min-width: 390px
  //   border-radius: 10px
  // body.screen--md &
  //   background: url("../assets/feature2.svg")
  //   margin-right: 2%
  //   background-size: contain
  //   // min-height: 340px
  //   height: 53vh
  //   width: 62vh
  //   // min-width: 390px
  //   border-radius: 10px
  // body.screen--sm &
  //   background: url("../assets/feature2.svg")
  //   background-size: contain
  //   margin-right: 16px
  //   height: 48vh
  //   // min-height: 170px
  //   width: 62vh
  //   // min-width: 210px
  //   border-radius: 10px
  // body.screen--xs &
  //   background: url("../assets/feature2.svg")
  //   background-size: contain
  //   margin-right: 16px
  //   align-self: center
  //   // height: 50vh
  //   height: 90vw
  //   width: 100%
  //   // width: 57vh
  //   // min-height: 250px
  //   // min-width: 300px
  //   margin-top: 18px
  //   border-radius: 10px
.my-card3
  background: url("../assets/feature3.svg")
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
  // body.screen--xl &

  // body.screen--lg &
  //   background: url("../assets/feature3.svg")
  //   background-size: contain
  //   // min-height: 340px
  //   height: 53vh
  //   width: 62vh
  //   // min-width: 390px
  //   border-radius: 10px
  // body.screen--md &
  //   background: url("../assets/feature3.svg")
  //   background-size: contain
  //   // min-height: 340px
  //   height: 53vh
  //   width: 62vh
  //   // min-width: 390px
  //   border-radius: 10px
  // body.screen--sm &
  //   background: url("../assets/feature3.svg")
  //   background-size: contain
  //   height: 48vh
  //   // min-height: 170px
  //   width: 62vh
  //   // min-width: 210px
  //   border-radius: 10px
  // body.screen--xs &
  //   background: url("../assets/feature3.svg")
  //   background-size: contain
  //   // height: 50vh
  //   height: 90vw
  //   // width: 57vh
  //   width: 100%
  //   // min-height: 250px
  //   // min-width: 300px
  //   margin-top: 18px
  //   margin-right: 13px
  //   border-radius: 10px
.shop-features
  width: 100%
  padding-left: 5%
  padding-right: 5%
  body.screen--sm &
    width: 100%
    // padding-left: 4%
    // padding-right: 4%
    // align-items: center
    // justify-content: center
  body.screen--xs &
    // width: 100%
    // padding-left: 4%
    // padding-right: 4%
    // display: flex
    flex-direction: column
    // align-items: center
    // justify-content: center
.shop-features2
  width: 100%
  padding-left: 5%
  padding-right: 5%
  body.screen--sm &
    width: 100%
  body.screen--xs &
    flex-direction: column
    // align-items: center
    // justify-content: center

// Feature 2 and 3////////////

.wine
  background: url("../assets/shopfeature2.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 49%
    // min-height: 450px
    // min-width: 595px
  // body.screen--xl &

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
  background: url("../assets/shopfeature1.svg")
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
  background: url("../assets/shopfeature3.svg")
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
  background: url("../assets/shopfeature4.svg")
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
  background: url("../assets/shopfeature6.svg")
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
  background: url("../assets/shopfeature7.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 49%
    // min-height: 450px
    // min-width: 595px
  // body.screen--xl &

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
    // min-height: 450px
    // min-width: 595px
  // body.screen--xl &

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
