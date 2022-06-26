<template>
  <q-page class="items-center overflow-hidden" style="background: #e5e5e5">
    <div class="features column items-center">
      <div class="text-h1 text1">How to get Teepsee</div>
      <div class="text-h1 text2 self-start">Shop Now</div>
      <div class="feature-list row">
        <q-card class="my-card"> </q-card>
        <q-card class="my-card2"> </q-card>
        <q-card class="my-card3 self-center"> </q-card>
      </div>
      <div class="text-h1 text3 self-start">Shop Now</div>
      <div class="shop-features row">
        <q-card class="wine"> </q-card>
        <q-card class="champagne"> </q-card>
      </div>
      <q-card class="ShopVodka"> </q-card>
      <div class="shop-features2 row">
        <q-card class="ShopWhiskey"> </q-card>
        <q-card class="ShopBrandy"> </q-card>
      </div>
      <q-card class="PartyCombo"> </q-card>
      <div class="shop-features2 row">
        <q-card class="ShopTequila"> </q-card>
        <q-card class="ShopCognac"> </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scoped lang="sass">
// body.screen--md &
//   body.screen--sm &
//   body.screen--xs &
.features
  body.screen--xs &
    margin-top: -12px
    margin-bottom: 18px
  body.screen--md &
    margin-bottom: 25px
  body.screen--sm &
    margin-bottom: 18px
.feature-list
  body.screen--xs &
    position: relative
    left: 9px
.text2
  body.screen--md &
    display: none
  body.screen--sm &
    display: none
  body.screen--xs &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 21px
    margin-bottom: -10px
    font-size: 32px
.text3
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 62px
    margin-top: 20px
    margin-bottom: 18px
    font-size: 64px
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
  body.screen--md &
    margin: none
    margin-top: 18px
    margin-bottom: 18px
    font-family: "Catellosdemo"
    font-size: 64px
  body.screen--sm &
    margin: none
    font-family: "Catellosdemo"
    font-size: 50px
  body.screen--xs &
    margin: none
    display: none
    font-family: "Catellosdemo"
    font-size: 32px

.my-card
  body.screen--md &
    background: url("../assets/feature1.svg")
    margin-right: 25px
    background-size: contain
    min-height: 350px
    min-width: 390px
    border-radius: 10px
  body.screen--sm &
    background: url("../assets/feature1.svg")
    margin-right: 16px
    background-size: contain
    min-height: 170px
    min-width: 210px
    border-radius: 10px
  body.screen--xs &
    background: url("../assets/feature1.svg")
    margin-right: 16px
    background-size: contain
    min-height: 250px
    min-width: 300px
    border-radius: 10px
    align-self: center
.my-card2
  body.screen--md &
    background: url("../assets/feature2.svg")
    margin-right: 25px
    background-size: contain
    min-height: 350px
    min-width: 390px
    border-radius: 10px
  body.screen--sm &
    background: url("../assets/feature2.svg")
    background-size: contain
    margin-right: 16px
    min-height: 170px
    min-width: 210px
    border-radius: 10px
  body.screen--xs &
    background: url("../assets/feature2.svg")
    background-size: contain
    margin-right: 16px
    min-height: 250px
    min-width: 300px
    margin-top: 18px
    border-radius: 10px
.my-card3
  body.screen--md &
    background: url("../assets/feature3.svg")
    background-size: contain
    min-height: 350px
    min-width: 390px
    border-radius: 10px
  body.screen--sm &
    background: url("../assets/feature3.svg")
    background-size: contain
    min-height: 170px
    min-width: 210px
    border-radius: 10px
  body.screen--xs &
    background: url("../assets/feature3.svg")
    background-size: contain
    min-height: 250px
    min-width: 300px
    margin-top: 18px
    margin-right: 13px
    border-radius: 10px
.shop-features
  body.screen--xs &
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
.shop-features2
  body.screen--md &
    margin-top: 25px
  body.screen--sm &
    margin-top: 18px
  body.screen--xs &
    margin-top: 18px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

// Feature 2 and 3////////////

.wine
  body.screen--md &
    background: url("../assets/shopfeature2.svg")
    background-repeat: no-repeat
    background-position-y: -107px
    border-radius: 15px
    background-size: cover
    margin-right: 25px
    min-height: 450px
    min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature2.svg")
    background-repeat: no-repeat
    background-position-y: -107px
    border-radius: 15px
    background-size: cover
    margin-right: 18px
    min-height: 200px
    min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature2.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    margin-bottom: 18px
    min-height: 300px
    min-width: 300px

.champagne
  body.screen--md &
    background: url("../assets/shopfeature1.svg")
    background-repeat: no-repeat
    background-position-y: -100px
    border-radius: 15px
    background-size: cover
    min-height: 450px
    min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature1.svg")
    background-repeat: no-repeat
    background-position-y: -100px
    border-radius: 15px
    background-size: cover
    min-height: 200px
    min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature1.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    min-height: 300px
    min-width: 300px

// Feature 4////////////

.ShopVodka
  body.screen--md &
    background: url("../assets/shopfeature3.svg")
    background-repeat: no-repeat
    background-position-y: -86px
    border-radius: 15px
    margin-top: 25px
    background-size: cover
    min-height: 450px
    min-width: 1215px
  body.screen--sm &
    background: url("../assets/shopfeature3.svg")
    background-repeat: no-repeat
    background-position-y: -60px
    border-radius: 15px
    margin-top: 18px
    background-size: cover
    min-height: 230px
    min-width: 670px
  body.screen--xs &
    background: url("../assets/mobileShopfeature3.svg")
    background-repeat: no-repeat
    border-radius: 15px
    margin-top: 18px
    background-size: cover
    min-height: 300px
    min-width: 300px


// Feature 5 and 6////////////

.ShopWhiskey
  body.screen--md &
    background: url("../assets/shopfeature4.svg")
    background-repeat: no-repeat
    background-position-y: -107px
    border-radius: 15px
    background-size: cover
    margin-right: 25px
    min-height: 450px
    min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature4.svg")
    background-repeat: no-repeat
    background-position-y: -107px
    border-radius: 15px
    background-size: cover
    margin-right: 18px
    min-height: 200px
    min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature4.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    margin-bottom: 18px
    min-height: 300px
    min-width: 300px

.ShopBrandy
  body.screen--md &
    background: url("../assets/shopfeature5.svg")
    background-repeat: no-repeat
    background-position-y: -100px
    border-radius: 15px
    background-size: cover
    min-height: 450px
    min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature5.svg")
    background-repeat: no-repeat
    background-position-y: -100px
    border-radius: 15px
    background-size: cover
    min-height: 200px
    min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature5.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    min-height: 300px
    min-width: 300px

// Feature 6  ////////////

.PartyCombo
  body.screen--md &
    background: url("../assets/shopfeature6.svg")
    background-repeat: no-repeat
    background-position-y: -86px
    border-radius: 15px
    margin-top: 25px
    background-size: cover
    min-height: 450px
    min-width: 1215px
  body.screen--sm &
    background: url("../assets/shopfeature6.svg")
    background-repeat: no-repeat
    background-position-y: -60px
    border-radius: 15px
    margin-top: 18px
    background-size: cover
    min-height: 230px
    min-width: 670px
  body.screen--xs &
    background: url("../assets/mobileShopfeature6.svg")
    background-repeat: no-repeat
    border-radius: 15px
    margin-top: 18px
    background-size: cover
    min-height: 300px
    min-width: 300px



// Feature 7 and 8////////////


.ShopTequila
  body.screen--md &
    background: url("../assets/shopfeature7.svg")
    background-repeat: no-repeat
    background-position-y: -80px
    border-radius: 15px
    background-size: cover
    margin-right: 25px
    min-height: 450px
    min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature7.svg")
    background-repeat: no-repeat
    background-position-y: -87px
    border-radius: 15px
    background-size: cover
    margin-right: 18px
    min-height: 200px
    min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature7.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    margin-bottom: 18px
    min-height: 300px
    min-width: 300px

.ShopCognac
  body.screen--md &
    background: url("../assets/shopfeature8.svg")
    background-repeat: no-repeat
    background-position-y: -80px
    border-radius: 15px
    background-size: cover
    min-height: 450px
    min-width: 595px
  body.screen--sm &
    background: url("../assets/shopfeature8.svg")
    background-repeat: no-repeat
    background-position-y: -80px
    border-radius: 15px
    background-size: cover
    min-height: 200px
    min-width: 325px
  body.screen--xs &
    background: url("../assets/shopfeature8.svg")
    background-repeat: no-repeat
    border-radius: 15px
    background-size: cover
    min-height: 300px
    min-width: 300px
</style>
