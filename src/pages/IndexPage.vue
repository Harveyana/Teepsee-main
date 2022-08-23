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
        <div class="text-h1 text1">How to get Teepsee</div>
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
      <q-toolbar
        class="bg-transparent shop-features items-center justify-center rounded-borders"
      >
        <q-card flat class="wine"> </q-card>
        <q-card flat class="champagne"> </q-card>
      </q-toolbar>
      <!-- <div class="shop-features row no-wrap">

      </div> -->
      <q-card flat class="ShopVodka"> </q-card>

      <q-toolbar
        class="bg-transparent shop-features2 items-center justify-center rounded-borders"
      >
        <q-card flat class="ShopWhiskey"> </q-card>
        <q-card flat class="ShopBrandy"> </q-card>
      </q-toolbar>

      <!-- <div class="shop-features2 row">

      </div> -->
      <q-card flat class="PartyCombo"> </q-card>
      <q-toolbar
        class="bg-transparent shop-features2 items-center justify-center rounded-borders"
      >
        <q-card flat class="ShopTequila"> </q-card>
        <q-card flat class="ShopCognac"> </q-card>
      </q-toolbar>

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
  body.screen--sm &
    width: 100%
    padding-left: 4%
    padding-right: 4%
    align-items: center
    justify-content: center
  body.screen--xs &
    // width: 100%
    // padding-left: 4%
    // padding-right: 4%
    // display: flex
    flex-direction: column
    // align-items: center
    // justify-content: center
.shop-features2
  body.screen--xl &
    margin-top: 2%
  body.screen--lg &
    margin-top: 2%
  body.screen--md &
    margin-top: 2%
  body.screen--sm &
    margin-top: 1.8%
  body.screen--xs &
    margin-top: 5%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

// Feature 2 and 3////////////

.wine
  body.screen--xl &
    background: url("../assets/shopfeature2.svg")
    background-repeat: no-repeat
    background-position-y: -187px
    border-radius: 15px
    background-size: cover
    margin-right: 2%
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--lg &
    background: url("../assets/shopfeature2.svg")
    background-repeat: no-repeat
    background-position-y: -107px
    border-radius: 15px
    background-size: cover
    margin-right: 2%
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--md &
    background: url("../assets/shopfeature2.svg")
    background-repeat: no-repeat
    background-position-y: -87px
    border-radius: 15px
    background-size: cover
    margin-right: 2%
    height: 73vh
    width: 44%
    // width: 93vh
    // min-height: 450px
    // min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature2.svg")
    background-repeat: no-repeat
    background-position-y: -40px
    border-radius: 15px
    background-size: cover
    margin-right: 18px
    height: 53vh
    width: 48%
    // min-height: 200px
    // min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature2.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    margin-bottom: 18px
    height: 90vw
    width: 100%
    // min-height: 300px
    // min-width: 300px

.champagne
  body.screen--xl &
    background: url("../assets/shopfeature1.svg")
    background-repeat: no-repeat
    background-position-y: -170px
    border-radius: 15px
    background-size: cover
    height: 65vh
    width: 44%
    // width: 86vh
    // min-height: 450px
    // min-width: 595px
  body.screen--lg &
    background: url("../assets/shopfeature1.svg")
    background-repeat: no-repeat
    background-position-y: -100px
    border-radius: 15px
    background-size: cover
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--md &
    background: url("../assets/shopfeature1.svg")
    background-repeat: no-repeat
    background-position-y: -100px
    border-radius: 15px
    background-size: cover
    height: 73vh
    width: 44%
    // width: 95vh
    // min-height: 450px
    // min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature1.svg")
    background-repeat: no-repeat
    background-position-y: -40px
    border-radius: 15px
    background-size: cover
    height: 53vh
    width: 48%
    // min-height: 200px
    // min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature1.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    height: 90vw
    width: 100%
    // min-height: 300px
    // min-width: 300px

// Feature 4////////////

.ShopVodka
  body.screen--xl &
    background: url("../assets/shopfeature3.svg")
    background-repeat: no-repeat
    background-position-y: -38px
    border-radius: 15px
    margin-top: 25px
    background-size: cover
    height: 73vh
    width: 89%
    // min-height: 450px
    // min-width: 1215px
  body.screen--lg &
    background: url("../assets/shopfeature3.svg")
    background-repeat: no-repeat
    background-position-y: -16px
    border-radius: 15px
    margin-top: 25px
    background-size: cover
    height: 73vh
    width: 89%
    // min-height: 450px
    // min-width: 1215px
  body.screen--md &
    background: url("../assets/shopfeature3.svg")
    background-repeat: no-repeat
    background-position-y: -56px
    border-radius: 15px
    margin-top: 25px
    background-size: cover
    height: 73vh
    width: 89%
    // min-height: 450px
    // min-width: 1215px
  body.screen--sm &
    background: url("../assets/shopfeature3.svg")
    background-repeat: no-repeat
    background-position-y: -10px
    border-radius: 15px
    margin-top: 18px
    background-size: cover
    height: 53vh
    width: 90%
    // margin-left: 4%
    // margin-right: 4%
    // width: 125vh
    // min-height: 230px
    // min-width: 670px
  body.screen--xs &
    background: url("../assets/mobileShopfeature3.svg")
    background-repeat: no-repeat
    border-radius: 15px
    margin-top: 18px
    background-size: cover
    height: 90vw
    width: 92%
    // min-height: 300px
    // min-width: 300px


// Feature 5 and 6////////////

.ShopWhiskey
  body.screen--xl &
    background: url("../assets/shopfeature4.svg")
    background-repeat: no-repeat
    background-position-y: -187px
    border-radius: 15px
    background-size: cover
    margin-right: 2%
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--lg &
    background: url("../assets/shopfeature4.svg")
    background-repeat: no-repeat
    background-position-y: -107px
    border-radius: 15px
    background-size: cover
    margin-right: 2%
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--md &
    background: url("../assets/shopfeature4.svg")
    background-repeat: no-repeat
    background-position-y: -90px
    border-radius: 15px
    background-size: cover
    margin-right: 2%
    height: 73vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature4.svg")
    background-repeat: no-repeat
    background-position-y: -40px
    border-radius: 15px
    background-size: cover
    margin-right: 18px
    height: 53vh
    width: 45%
    // min-height: 200px
    // min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature4.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    margin-bottom: 18px
    height: 90vw
    width: 100%
    // min-height: 300px
    // min-width: 300px

.ShopBrandy
  body.screen--xl &
    background: url("../assets/shopfeature5.svg")
    background-repeat: no-repeat
    background-position-y: -170px
    border-radius: 15px
    background-size: cover
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--lg &
    background: url("../assets/shopfeature5.svg")
    background-repeat: no-repeat
    background-position-y: -100px
    border-radius: 15px
    background-size: cover
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--md &
    background: url("../assets/shopfeature5.svg")
    background-repeat: no-repeat
    background-position-y: -100px
    border-radius: 15px
    background-size: cover
    height: 73vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature5.svg")
    background-repeat: no-repeat
    background-position-y: -40px
    border-radius: 15px
    background-size: cover
    height: 53vh
    width: 45%
    // min-height: 200px
    // min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature5.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    height: 90vw
    width: 100%
    // min-height: 300px
    // min-width: 300px

// Feature 6  ////////////

.PartyCombo
  body.screen--xl &
    background: url("../assets/shopfeature6.svg")
    background-repeat: no-repeat
    background-position-y: -38px
    border-radius: 15px
    margin-top: 25px
    background-size: cover
    height: 73vh
    width: 89%
    // min-height: 450px
    // min-width: 1215px
  body.screen--lg &
    background: url("../assets/shopfeature6.svg")
    background-repeat: no-repeat
    background-position-y: -16px
    border-radius: 15px
    margin-top: 25px
    background-size: cover
    height: 73vh
    width: 89%
    // min-height: 450px
    // min-width: 1215px
  body.screen--md &
    background: url("../assets/shopfeature6.svg")
    background-repeat: no-repeat
    background-position-y: -56px
    border-radius: 15px
    margin-top: 25px
    background-size: cover
    height: 73vh
    width: 89%
    // min-height: 450px
    // min-width: 1215px
  body.screen--sm &
    background: url("../assets/shopfeature6.svg")
    background-repeat: no-repeat
    background-position-y: -10px
    border-radius: 15px
    margin-top: 18px
    background-size: cover
    height: 53vh
    width: 90%
    // min-height: 230px
    // min-width: 670px
  body.screen--xs &
    background: url("../assets/mobileShopfeature6.svg")
    background-repeat: no-repeat
    border-radius: 15px
    margin-top: 18px
    background-size: cover
    height: 90vw
    width: 92%
    // min-height: 300px
    // min-width: 300px



// Feature 7 and 8////////////


.ShopTequila
  body.screen--xl &
    background: url("../assets/shopfeature7.svg")
    background-repeat: no-repeat
    background-position-y: -117px
    border-radius: 15px
    background-size: cover
    margin-right: 2%
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--lg &
    background: url("../assets/shopfeature7.svg")
    background-repeat: no-repeat
    background-position-y: -67px
    border-radius: 15px
    background-size: cover
    margin-right: 2%
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--md &
    background: url("../assets/shopfeature7.svg")
    background-repeat: no-repeat
    background-position-y: -50px
    border-radius: 15px
    background-size: cover
    margin-right: 25px
    height: 73vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature7.svg")
    background-repeat: no-repeat
    background-position-y: -20px
    border-radius: 15px
    background-size: cover
    margin-right: 18px
    height: 53vh
    width: 45%
    // min-height: 200px
    // min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature7.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    margin-bottom: 18px
    height: 90vw
    width: 100%
    // min-height: 300px
    // min-width: 300px

.ShopCognac
  body.screen--xl &
    background: url("../assets/shopfeature8.svg")
    background-repeat: no-repeat
    background-position-y: -117px
    border-radius: 15px
    background-size: cover
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--lg &
    background: url("../assets/shopfeature8.svg")
    background-repeat: no-repeat
    background-position-y: -67px
    border-radius: 15px
    background-size: cover
    height: 65vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--md &
    background: url("../assets/shopfeature8.svg")
    background-repeat: no-repeat
    background-position-y: -50px
    border-radius: 15px
    background-size: cover
    height: 73vh
    width: 44%
    // min-height: 450px
    // min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature8.svg")
    background-repeat: no-repeat
    background-position-y: -20px
    border-radius: 15px
    background-size: cover
    height: 53vh
    width: 45%
    // min-height: 200px
    // min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature8.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    height: 90vw
    width: 100%
    // min-height: 300px
    // min-width: 300px
</style>
