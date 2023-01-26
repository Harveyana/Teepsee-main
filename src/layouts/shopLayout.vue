<template>
  <div class="maindiv row justify-center overflow-hidden">
    <div class="flex row mainer overflow-hidden" style="background: #e5e5e5">
      <q-layout
        view="hhh lpr fff layout row self-center overflow-hidden"
        style="width: 100%"
      >
        <q-card
          flat
          class="gt-sm q-mt-lg flex justify-around items-center row no-wrap navbar-desktop bg-transparent"
          style="width: 100%"
        >
          <!-- logo -->
          <q-card flat class="bg-transparent" style="width: 15%">
            <router-link to="/" style="text-decoration: none">
              <q-img
                to="/"
                class="logo"
                src="~assets/Logo2.svg"
                spinner-color="brown"
                style="width: 100%"
              />
            </router-link>
          </q-card>
          <!-- logo -->
          <shopSearch></shopSearch>
          <q-card
            flat
            class="nav-links row no-wrap justify-between bg-transparent"
            style="width: 20%"
          >
            <q-card flat class="navbar bg-transparent" style="width: 40%">
              <q-btn
                to="/categories/general"
                flat
                label="Categories"
                class="nav"
                style="width: 100%"
              />
            </q-card>
            <q-card flat class="navbar bg-transparent no-wrap" style="width: 50%">
              <q-btn
                to="/cart"
                flat
                label="Cart"
                icon="img:/Buy2.svg"
                class="nav no-wrap"
                style="width: 100%"
              />
            </q-card>
          </q-card>

          <!--  -->
          <q-card
            flat
            outline
            class="row no-wrap q-mr-md bg-transparent"
            style="width: 20%"
          >
            <q-card
              clickable
              class="profile row no-wrap flex flex-center justify-between items-stretch bg-transparent"
              style="width: 60%; cursor: pointer"
              v-if="isLoggedIn"
            >
              <q-img
                v-if="Store.defaultPic"
                to="/account"
                :src="Store.user.profilePic || Store.defaultPic"
                spinner-color="white"
                class="profile-Image"
                style="width: 25%; border-radius: 50%; border: 1x solid"
              />

              <router-link
                v-if="Store.defaultPic"
                class="flex column justify-center items-center"
                to="/account"
                style="text-decoration: none"
              >
                <div
                  to="/account"
                  class="text-h3 userName no-wrap flex column justify-center items-center"
                  style="
                    font-family: 'Catellosdemo';
                    font-weight: 400;
                    line-height: 25px;
                    font-size: 130%;
                    color: #e6b41d;
                  "
                  v-if="user.name"
                >
                  {{ user.name }}
                </div>
              </router-link>
            </q-card>
            <q-card
              class="AuthBtns row no-wrap bg-transparent"
              style="width: 100%; border-radius: 12px; background: transparent"
              v-else="!isLoggedIn"
            >
              <q-btn
                to="/login"
                text-color="black"
                class="Authbtn"
                label="Log in"
                style="
                  padding: 12px 15px 12px 30px;
                  border-top-right-radius: 0px;
                  border-bottom-right-radius: 0px;
                  background-color: #e6b41d;
                  border-radius: 12px;
                "
              />
              <q-btn
                color="white"
                to="/signup"
                text-color="black"
                class="Authbtn"
                label="Sign Up"
                style="
                  padding: 12px 30px 12px 15px;
                  border-top-left-radius: 0px;
                  border-bottom-left-radius: 0px;
                  border-radius: 12px;
                "
              />
            </q-card>
            <q-card
              outline
              class="bg-transparent navbar"
              to=""
              style="width: 30%"
              v-if="isLoggedIn"
              ><q-btn
                color="white"
                flat
                label=""
                icon="img:/logoutMain.svg"
                style="width: 100%; position: relative; left: 15%"
                @click="Store.logOut()"
            /></q-card>
          </q-card>
        </q-card>

        <!-- Mobile toolbar Mobile toolbar -->
        <q-card flat class="con" style="background: #e5e5e5">
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
              to="/cart"
              class="Cart-Top"
              style="position: relative; top: 0px; right: -15px"
            >
              <q-btn to="/cart" dense flat round icon="img:/Buy2.png" />
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
                v-if="cartQuantity"
                >{{ cartQuantity }}</small
              >
            </q-card-section>
          </q-toolbar>
        </q-card>

        <!-- hero items -->
        <!-- Mobile Sidebar  -->

        <MainDrawer />

        <q-page-container>
          <router-view :key="$route.fullPath" />
        </q-page-container>

        <!-- footer footer footer footer -->
        <footerVue />
      </q-layout>
    </div>
  </div>
</template>

<script setup>
import {LocalStorage} from 'quasar'
import { ref, onMounted, computed } from "vue";
import footerVue from "src/components/footer.vue";
import MainDrawer from "/src/components/mainDrawer.vue";
import { useCounterStore } from "stores/counter";
import { useQuasar } from "quasar";
import shopSearch from "src/components/shopSearch.vue";
import ShopMobileSearch from "../components/shopMobileSearch.vue";

const $q = useQuasar();

const leftDrawerOpen = ref(false);
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

const cartQuantity = ref("");

const getcartQuantity = () => {
  const items = $q.localStorage.getItem("cartItems");
  // const item = items.find((item) => item.name === name);
  if (items) {
    // item.quantity -= quantity;
    cartQuantity.value = items.length;
  }
};

const user = computed(() =>{

return LocalStorage.getItem('userDetails')

})

const isLoggedIn = computed(() =>{

return LocalStorage.getItem('isLoggedIn')

})


onMounted(() => {
  getcartQuantity();
});
</script>

<style scoped lang="sass">
.mobile-logo
  body.screen--sm &
    width: 30%
  body.screen--xs &
    width: 40%
    position: relative
    right: 2%
.mainer
  width: 100%
  body.screen--xl &
    width: 60%
.Authbtn
  body.screen--md &
    font-size: 110%
    font-family: "Manrope-Bold"
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
// .userName
//   body.screen--md &
//     margin: none
//     font-family: "Catellosdemo"
//     font-weight: 400
//     // margin-left: 62px
//     // margin-top: 18px
//     margin-bottom: 9px
//     line-height: 1px
//     font-size: 27px
//     color: #27141A
//   body.screen--sm &
//     // margin: none
//     // font-family: "Catellosdemo"
//     // margin-left: 52px
//     // margin-bottom: -10px
//     // font-size: 50px
//   body.screen--xs &
//     margin: none
//     font-family: "Catellosdemo"
//     font-weight: 400
//     margin-bottom: 9px
//     line-height: 1px
//     font-size: 24px
//     color: #27141A

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
// .logo
//   min-width: 10%

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

.input
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
    border: 1px solid #27141A
    color: #27141A
    font-size: 120%
    // padding-left: 40%
  body.screen--lg &
    border-radius: 15px
    min-height: 50px
    min-width: 180%
    outline: none
    // margin-right: 70px
    background: transparent
    border: 1px solid #27141A
    color: #27141A
    font-size: 120%
    // padding-left: 40%
  body.screen--xl &
    border-radius: 15px
    min-height: 50px
    min-width: 180%
    outline: none
    background: transparent
    border: 1px solid #27141A
    color: #27141A
    font-size: 120%
    // padding-left: 40%
  body.screen--sm &
    border-radius: 15px
    min-height: 45px
    min-width: 120%
    outline: none
    background: transparent
    border: 1px solid #27141A
    color: #27141A
    font-size: 130%
    // padding-left: 40px


::placeholder  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #27141A
  opacity: 1 /* Firefox */


:-ms-input-placeholder  /* Internet Explorer 10-11 */
  color: #27141A


::-ms-input-placeholder  /* Microsoft Edge */
  color: #27141A
</style>
