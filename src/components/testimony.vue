<template>
  <q-card
    class="testimony column items-start justify-center q-px-xs-lg q-py-xs-xl q-pa-sm-xl q-pa-md-xl q-pa-lg-xl q-pa-xl-xl q-mb-xl no-wrap"
    style=""
  >
    <div style="" class="text-h4 textial">
      I’m so proud of Starfield they really gave my son what i have been expecting. They
      have all the quailties and so much more..
    </div>
    <q-card
      flat
      class="row justify-center items-center no-wrap q-mt-md bg-transparent no-wrap"
    >
      <q-img
        src="../assets/userImage.svg"
        spinner-color="white"
        class="userImage"
        style="width: 60px; margin-right: 20px"
      />
      <div class="text-h4 textial-name">Mrs willaims Okafor</div>
    </q-card>
  </q-card>
</template>

<script>
// import { useCounterStore } from "stores/counter";
// import { useRouter, useRoute } from "vue-router";

// export default {
//   name: "product",

//   props: {
//     productName: String,
//     productPrice: String,
//     productCategory: String,
//     productImage: String,
//     productTag: String,
//     productId: String,
//   },
//   data() {
//     return {
//       favourite: false,
//       Store: useCounterStore(),
//       router: useRouter(),
//       route: useRoute(),
//     };
//   },
// };
//
</script>
//
<style scoped lang="sass">
.testimony
  width: 100%
  // height: 100%
  background: #f5f5f5
  border-radius: 15px
  body.screen--xs &
    width: 80vw
    height: 60%

//   body.screen--sm &
//     width: 24%
//     // min-width: 150px
//     // height: 180px
//   body.screen--xs &
//     min-width: 45%
//     max-width: 45%
//     flex-wrap: nowrap
//     margin-left: 1%
//     margin-right: 1%

// .saleTag
//   font-size: 15px
//   background: #e6b41d
//   padding: 5px 9px 5px 9px
//   border-radius: 8px
//   font-family: 'Manrope-Bold'
//   color: white
//   body.screen--sm &
//     font-size: 10px
//   body.screen--xs &
//     font-size: 10px
// .container-card
//   height: 150px
//   width: 50%
.textial
  font-size: 20px
  font-family: 'Manrope-Regular'
  color: #666666
  line-height: 30px
  body.screen--sm &
    font-size: 17px
  body.screen--xs &
    font-size: 12px
    line-height: 20px

.textial-name
  font-size: 13px
  font-family: 'Manrope-Regular'
  color: #666666
  line-height: 15px
  body.screen--sm &
    font-size: 11px
    line-height: 10px
  body.screen--xs &
    font-size: 10px


.product-image
  // width: 100%
  // height: auto
  // max-width: 80px
  height: 100%
  width: 100%
  object-fit: cover
  // body.screen--sm &
  //   width: 70px
  //   max-height: 90px
  //   min-height: 90px
  // body.screen--xs &
  //   max-width: 70px
  //   min-width: 70px
  //   max-height: 80px
  //   min-height: 80px
  //   object-fit: contain
.product-name
  font-size: 16px
  letter-spacing: 0.5px
  line-height: 25px
  font-family: 'Catellosdemo'
  color: #27141a
  body.screen--sm &
    font-size: 10px
  body.screen--xs &
    font-size: 10px
.product-cat
  font-size: 13px
  line-height: normal
  font-family: 'Manrope-Regular'
  color: #27141a
  body.screen--sm &
    font-size: 7px
  body.screen--xs &
    font-size: 7px
.product-price
  font-size: 15px
  line-height: normal
  font-family: 'Manrope-Bold'
  color: #27141a
  body.screen--sm &
    font-size: 12px
    line-height: 30px
  body.screen--xs &
    font-size: 12px
    line-height: 30px
</style>
