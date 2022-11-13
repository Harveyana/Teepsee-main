<template>
  <div class="flex row justify-center overflow-hidden">
    <q-layout view="hhh lpr fff layout">
      <q-header flat class="header no-shadow" style="background: #e5e5e5">
        <div class="con">
          <q-toolbar wrap flat class="bg-transparent no-shadow gt-sm justify-evenly">
            <q-item to="/">
              <q-img
                class="logo"
                src="~assets/Logo2.svg"
                spinner-color="brown"
                style="min-width: 220px"
              />
            </q-item>
            <shopSearch></shopSearch>
            <q-item outline class="navbar">
              <q-btn
                flat
                label="Categories"
                class="nav q-ml-md"
                to="/categories/general"
                style="position: relative; left: 20%"
              />
            </q-item>

            <q-item outline class="navbar">
              <q-btn flat to="/track" label="Track Order" class="nav" />
            </q-item>

            <!-- <q-item outline class="navbar"
            ><q-btn flat label="Log In" class="nav"
          /></q-item> -->

            <q-item outline class="navbar"
              ><q-btn flat to="/cart" label="Cart" icon="img:/Buy2.svg" class="nav" />
            </q-item>

            <!-- <q-item outline class="q-mr-md"
            ><q-btn text-color="white" to="/account" class="cta" label="Sign Up"
          /></q-item> -->
          </q-toolbar>
        </div>

        <!-- Mobile toolbar// Mobile toolbar -->
        <div class="con">
          <q-toolbar class="lt-md">
            <q-btn
              dense
              flat
              round
              icon="img:/drawbtn.svg"
              @click="Store.toggleLeftDrawer()"
            />

            <q-space />

            <ShopMobileSearch></ShopMobileSearch>
            <q-card-section
              class="Cart-Top"
              style="position: relative; top: 0px; right: -15px"
            >
              <q-btn dense flat to="/cart" round icon="img:/Buy2.png" />
              <small
                style="
                  color: #ffff;
                  font-family: 'Manrope-Bold';
                  font-size: small;
                  background-color: #e6b41d;
                  border-radius: 50%;
                  width: fit-content;
                  padding: 1px 4px;
                  position: relative;
                  top: -6px;
                  right: 15px;
                "
                >2</small
              >
            </q-card-section>
          </q-toolbar>
        </div>

        <!-- hero items -->
      </q-header>
      <!-- Mobile Sidebar  -->

      <AccountDrawer />

      <q-page-container>
        <router-view />
      </q-page-container>
      <q-dialog class="" v-model="Store.showReviewBox" persistent>
        <ReviewEntry />
      </q-dialog>
      <!-- footer footer footer footer -->
      <footerVue />
    </q-layout>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import footerVue from "src/components/footer.vue";
import AccountDrawer from "/src/components/accountDrawer.vue";
import ReviewEntry from "/src/components/reviewEntry.vue";
import shopSearch from "src/components/shopSearch.vue";
import ShopMobileSearch from "../components/shopMobileSearch.vue";
import { useCounterStore } from "stores/counter";

const leftDrawerOpen = ref(false);
const confirm = ref(true);
const Store = useCounterStore();
const showsearch = ref(false);
const showResults = ref(false);
const product = {
  name: "Hennessey",
  price: "₦5,000",
  cat: "Cognac",
};

// let link = ref("inbox");
// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
onMounted(() => {
  Store.getProductForReviews();
});
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

.userDetails
  body.screen--xs &
    margin-top: 12px
    margin-left: 7px
.userName
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    // margin-left: 62px
    // margin-top: 18px
    margin-bottom: 9px
    line-height: 1px
    font-size: 27px
    color: #27141A
  body.screen--sm &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 52px
    // margin-bottom: -10px
    // font-size: 50px
  body.screen--xs &
    margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    margin-bottom: 9px
    line-height: 1px
    font-size: 24px
    color: #27141A

.userRole
  body.screen--md &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 20px
    color: #27141A
  body.screen--sm &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 52px
    // margin-bottom: -10px
    // font-size: 50px
  body.screen--xs &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 21px
    // margin-bottom: -10px
    // margin-top: -10px
    // font-size: 32px
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

.text3
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    // margin-left: 62px
    margin-top: 40px
    // margin-bottom: 18px
    font-size: 57px
    color: #27141A
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
.searchItem:hover
  background: #E6B41D

.drawer
  body.screen--md &
    display: none
.logo
  min-width: 10%
.nav
  body.screen--sm &
    font-size: 60%
    min-width: 25%
    color: #27141A
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
  body.screen--md &
    font-size: 120%
    color: #27141A
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
  body.screen--lg &
    font-size: 120%
    // margin-left: 50px
    color: #27141A
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
  body.screen--xl &
    font-size: 120%
    color: #27141A
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
// .navbar
//   body.screen--sm &
//   body.screen--md &
    //
// .input
//    body.screen--sm &
//     width: 100px
//   body.screen--md &
//     width: 180px

.cta
  body.screen--sm &
    font-size: 12px
    border-radius: 12px
    background: #E6B41D
    padding: 7px 20px 7px 20px
    min-width: 100px
    font-family: "Manrope-SemiBold"
  body.screen--md &
    font-size: 110%
    border-radius: 12px
    background: #E6B41D
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--lg &
    font-size: 110%
    border-radius: 12px
    background: #E6B41D
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xl &
    font-size: 110%
    border-radius: 12px
    background: #E6B41D
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xs &
    font-size: 15px
    border-radius: 12px
    background: #E6B41D
    padding: 12px 34px 12px 34px
    font-family: "Manrope-SemiBold"
.link
  font-size: 15px

.link >a
  text-decoration: none
  color: white
</style>
