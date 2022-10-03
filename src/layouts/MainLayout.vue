<template>
  <div class="flex row justify-center hide-scrollbar">
    <q-layout view="hhh lpr fff" class="layout overflow-hidden hide-scrollbar">
      <!-- Mobile Sidebar  -->

      <mainDrawerVue />

      <q-page-container>
        <router-view />
      </q-page-container>

      <!-- footer footer footer footer -->
      <footerVue />
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import footerVue from "src/components/footer.vue";
import mainDrawerVue from "src/components/mainDrawer.vue";
import { useCounterStore } from "stores/counter";

// const Store = useCounterstore();

export default {
  name: "MainLayout",
  components: {
    footerVue,
    mainDrawerVue,
  },
  setup() {
    let link = ref("inbox");
    const Store = useCounterStore();
    const showsearch = ref(false);
    const showResults = ref(false);
    const searchResults = ref("");
    const product = {
      name: "Hennessey",
      price: "₦5,000",
      cat: "Cognac",
    };
    return {
      link,
      Store,
      showsearch,
      showResults,
      product,
    };
  },
  computed: {
    // a computed getter
    productList() {
      // `this` points to the component instance
      if (this.showsearch == true) {
        return this.Store.products.value.filter((product) =>
          product.name.toLowerCase().includes(this.searchResults.toLowerCase())
        );
      }
    },
  },
  mounted() {
    this.Store.Fetchproducts("general");
  },
};
</script>

<style scoped lang="sass">

.layout
  body.screen--xl &
    width: 60%
.searchResults
  body.screen--xl &
    width: 32%
    position: absolute
    left: 20%
    border-radius: 16px
  body.screen--lg &
    width: 38%
    position: absolute
    left: 20%
    border-radius: 16px
  body.screen--md &
    width: 42%
    position: absolute
    left: 20%
    border-radius: 16px
  body.screen--sm &
    width: 60%
    position: absolute
    left: 20%
    border-radius: 16px
  body.screen--xs &
    width: 95%
    position: absolute
    left: 3%
    border-radius: 16px

.imagebox
  body.screen--md &
    height: 110px
    border-radius: 15px
  body.screen--sm &
    height: 110px
    border-radius: 15px
  body.screen--xs &
    height: 110px
    border-radius: 15px
.product-image
  body.screen--md &
    width: 80px
    object-fit: cover
  body.screen--sm &
    width: 80px
    object-fit: cover
  body.screen--xs &
    width: 80px
    object-fit: cover
.product-name
  body.screen--md &
    font-size: 18px
    color: #27141a
    line-height: 1px
    font-family: 'Manrope-Bold'
  body.screen--sm &
    font-size: 18px
    color: #27141a
    line-height: 1px
    font-family: 'Manrope-Bold'
  body.screen--xs &
    font-size: 18px
    color: #27141a
    line-height: 1px
    font-family: 'Manrope-Bold'
.product-price
  body.screen--md &
    font-size: 15px
    color: #27141a
    line-height: 1px
    font-family: 'Manrope-Bold'
  body.screen--sm &
    font-size: 15px
    color: #27141a
    line-height: 1px
    font-family: 'Manrope-Bold'
  body.screen--xs &
    font-size: 15px
    color: #27141a
    line-height: 1px
    font-family: 'Manrope-Bold'
.product-cat
  body.screen--md &
    font-size: 12px
    color: #27141a
    line-height: 10px
    font-family: 'Manrope-SemiBold'
  body.screen--sm &
    font-size: 12px
    color: #27141a
    line-height: 10px
    font-family: 'Manrope-SemiBold'
  body.screen--xs &
    font-size: 12px
    color: #27141a
    line-height: 10px
    font-family: 'Manrope-SemiBold'

.drawer
  body.screen--md &
    display: none

.searchItem:hover
  background: #E6B41D

.acc-link
  body.screen--md &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 15px
    color: #666666
    transition: all ease 0.4s
  body.screen--sm &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 52px
    // margin-bottom: -10px
    // font-size: 50px
  body.screen--xs &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 15px
    color: #666666
    transition: all ease 0.4s


::placeholder  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: whitesmoke
  opacity: 1 /* Firefox */


:-ms-input-placeholder  /* Internet Explorer 10-11 */
  color: whitesmoke


::-ms-input-placeholder  /* Microsoft Edge */
  color: whitesmoke

.searchItem:hover
  background: #E6B41D
.hero-items
  body.screen--xl &
    margin-left: 3%
    padding-bottom: 65px
    max-width: 900px
  body.screen--lg &
    margin-left: 3%
    padding-bottom: 65px
    max-width: 900px
  body.screen--md &
    margin-left: 3%
    padding-bottom: 65px
    max-width: 900px
  body.screen--sm &
    margin-left: 3%
    padding-bottom: 65px
    max-width: 700px
  body.screen--xs &
    margin-left: 18px
    padding-bottom: 150px
    max-width: 280px
.header
  body.screen--xl &
    height: 100vh
  body.screen--lg &
    height: 100vh
  body.screen--md &
    height: 100vh
  body.screen--sm &
    height: 100vh
  body.screen--xs &
    height: 60vh
.hero-button
  body.screen--xl &
    margin-top: 3%
    padding: 10px 55px 10px 55px
    border-radius: 15px
    font-family: "Manrope-SemiBold"
    font-weight: 500
    text-transform: capitalize
  body.screen--lg &
    margin-top: 3%
    padding: 10px 55px 10px 55px
    border-radius: 15px
    font-family: "Manrope-SemiBold"
    font-weight: 500
    text-transform: capitalize
  body.screen--md &
    margin-top: 3%
    padding: 10px 55px 10px 55px
    border-radius: 15px
    font-family: "Manrope-SemiBold"
    font-weight: 500
    text-transform: capitalize
  body.screen--sm &
    margin-top: 26px
    padding: 10px 55px 10px 55px
    border-radius: 15px
    font-family: "Manrope-SemiBold"
    font-weight: 500
    text-transform: capitalize
  body.screen--xs &
    padding: 0px 18px 0px 18px
    border-radius: 15px
    font-size: 10px
    font-family: "Manrope-SemiBold"
    text-transform: capitalize

.hero-text
  body.screen--xl &
    margin: 0
    font-family: "Catellosdemo"
  body.screen--lg &
    margin: 0
    font-family: "Catellosdemo"
  body.screen--md &
    margin: 0
    font-family: "Catellosdemo"
  body.screen--sm &
    margin: 0
    font-family: "Catellosdemo"
  body.screen--xs &
    margin: 0
    font-family: "Catellosdemo"
    font-size: 40px
    line-height: none

.hero-subtext
  body.screen--xl &
    margin: 0
    font-family: "Manrope-medium"
    font-size: 160%
    margin-top: 2%
  body.screen--lg &
    margin: 0
    font-family: "Manrope-medium"
    font-size: 160%
    margin-top: 2%
  body.screen--md &
    margin: 0
    font-family: "Manrope-medium"
    font-size: 160%
    margin-top: 2%
  body.screen--sm &
    margin: 0
    font-family: "Manrope-medium"
    font-size: 25px
    margin-top: 18px
    max-width: 600px
  body.screen--xs &
    margin-top: -25px
    font-family: "Manrope-medium"
    font-size: 14px
    line-height: 17.5px
    max-width: 260px

.logo
  body.screen--sm &
    min-width: 10%
  body.screen--md &
    min-width: 10%
    position: relative
    right: 16%
  body.screen--lg &
    min-width: 10%
    position: relative
    right: 25%
  body.screen--xl &
    min-width: 10%

.nav
  body.screen--sm &
    font-size: 60%
    min-width: 25%
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
  body.screen--md &
    font-size: 120%
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
  body.screen--lg &
    font-size: 120%
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
  body.screen--xl &
    font-size: 120%
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
// .navbar
//   body.screen--sm &
//   body.screen--md &
    // 18px
// .input
//    body.screen--sm &
//     width: 100px
//   body.screen--md &
//     width: 180px

.Authbtn
  body.screen--md &
    font-size: 110%
    font-family: "Manrope-Bold"
.cta
  body.screen--sm &
    font-size: 12px
    border-radius: 12px
    padding: 7px 20px 7px 20px
    min-width: 100px
    font-family: "Manrope-SemiBold"

  body.screen--lg &
    font-size: 110%
    border-radius: 12px
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xl &
    font-size: 110%
    border-radius: 12px
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xs &
    font-size: 15px
    border-radius: 12px
    padding: 12px 34px 12px 34px
    font-family: "Manrope-SemiBold"
.link
  font-size: 15px

.link >a
  text-decoration: none
  color: white

.input
  // position: relative
  // right: 30%
  // min-width: 45%
  body.screen--md &
    position: relative
    right: 25%
  body.screen--lg &
    position: relative
    right: 30%
  body.screen--xl &
    position: relative
    right: 30%

.input >img
  body.screen--md &
    position: absolute
    top: 15px
    left: 9%
  body.screen--lg &
    position: absolute
    top: 15px
    left: 15px
  body.screen--xl &
    position: absolute
    top: 15px
    left: 15px

.search
  body.screen--md &
    border-radius: 15px
    min-height: 50px
    min-width: 160%
    outline: none
    background: transparent
    border: 1px solid whitesmoke
    color: white
    font-size: 120%
    // padding-left: 40%
  body.screen--lg &
    border-radius: 15px
    min-height: 50px
    min-width: 180%
    outline: none
    background: transparent
    border: 1px solid whitesmoke
    color: white
    font-size: 120%
    // padding-left: 40%
  body.screen--xl &
    border-radius: 15px
    min-height: 50px
    min-width: 180%
    outline: none
    background: transparent
    border: 1px solid whitesmoke
    color: white
    font-size: 120%
    // padding-left: 40%
  body.screen--sm &
    border-radius: 15px
    min-height: 45px
    min-width: 120%
    outline: none
    background: transparent
    border: 1px solid whitesmoke
    color: white
    font-size: 130%
    // padding-left: 40px

.acc-link
  body.screen--md &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 15px
    color: #666666
    transition: all ease 0.4s
  body.screen--sm &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 52px
    // margin-bottom: -10px
    // font-size: 50px
  body.screen--xs &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 15px
    color: #666666
    transition: all ease 0.4s


::placeholder  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: whitesmoke
  opacity: 1 /* Firefox */


:-ms-input-placeholder  /* Internet Explorer 10-11 */
  color: whitesmoke


::-ms-input-placeholder  /* Microsoft Edge */
  color: whitesmoke
</style>
