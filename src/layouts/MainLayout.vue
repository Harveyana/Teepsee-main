<template>
  <q-layout view="hhh lpr fff" class="overflow-hidden">
    <q-header
      elevated
      class="header"
      style="
        background-image: url('/heroback.svg');
        background-size: cover;
        background-repeat: no-repeat;
      "
    >
      <q-toolbar wrap class="bg-transparent gt-sm text-white q-pt-lg wrap justify-evenly">
        <!-- <q-space /> -->
        <q-item>
          <q-img
            class="logo"
            src="~assets/Logo.svg"
            spinner-color="black"
            style="min-width: 180px"
          />
        </q-item>

        <!-- <q-item></q-item> -->
        <!-- <q-space /> -->

        <q-item>
          <div class="input q-ml-md">
            <img src="/Vector.png" alt="" />
            <input class="search q-pl-xl" type="text" placeholder="search" />
          </div>
        </q-item>
        <!-- <q-space /> -->

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-item outline class="navbar">
          <q-btn color="white" flat label="Track Order" class="nav" />
        </q-item>

        <q-item outline class="navbar"
          ><q-btn color="white" flat label="FAQs" class="nav"
        /></q-item>

        <q-item outline class="navbar"
          ><q-btn color="white" flat label="Log In" class="nav"
        /></q-item>

        <q-item outline class="navbar"
          ><q-btn color="white" flat label="Cart" icon="img:/buy.png" class="nav"
        /></q-item>
        <!-- <q-space /> -->

        <q-item outline class="q-mr-md"
          ><q-btn
            color="white"
            to="/account"
            text-color="black"
            class="cta"
            label="Sign Up"
        /></q-item>
        <!-- <q-space /> -->
      </q-toolbar>

      <!-- Mobile toolbar Mobile toolbar -->
      <q-toolbar class="lt-md">
        <q-img
          class="mobile-logo"
          src="~assets/Logo.svg"
          spinner-color="black"
          style="width: 100px"
        />

        <q-space />
        <q-btn
          dense
          flat
          round
          size="13px"
          icon="img:/vector.png"
          style="position: relative; top: 0px; right: 15px"
        />

        <q-btn
          dense
          flat
          round
          icon="img:/mobileMenu.png"
          @click="Store.toggleLeftDrawer()"
        />
      </q-toolbar>

      <!-- hero items -->
      <div class="hero-items fit column justify-center items-start content-start">
        <h1 class="hero-text">Get Teepsee</h1>
        <h4 class="hero-subtext">
          Wine, Liquor, Ice, Mixers and some other cool stuff? We got it
        </h4>
        <q-btn
          color="white"
          class="bg-white hero-button"
          size="15px"
          to="/account"
          text-color="black"
          flat
          label="Get Started"
        />
      </div>
    </q-header>
    <!-- Mobile Sidebar  -->

    <mainDrawerVue />

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- footer footer footer footer -->
    <footerVue />
  </q-layout>
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
    return {
      link,
      Store,
    };
  },
};
</script>

<style scoped lang="sass">
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
  body.screen--lg &
    min-width: 10%
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
.cta
  body.screen--sm &
    font-size: 12px
    border-radius: 12px
    padding: 7px 20px 7px 20px
    min-width: 100px
    font-family: "Manrope-SemiBold"
  body.screen--md &
    font-size: 110%
    border-radius: 12px
    padding: 12px 46px 12px 46px
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
  position: relative

.input >img
  position: absolute
  top: 15px
  left: 15px

.search
  body.screen--md &
    border-radius: 15px
    min-height: 50px
    min-width: 120%
    outline: none
    background: transparent
    border: 1px solid whitesmoke
    color: white
    font-size: 120%
    // padding-left: 40%
  body.screen--lg &
    border-radius: 15px
    min-height: 50px
    min-width: 120%
    outline: none
    background: transparent
    border: 1px solid whitesmoke
    color: white
    font-size: 120%
    // padding-left: 40%
  body.screen--xl &
    border-radius: 15px
    min-height: 50px
    min-width: 120%
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
