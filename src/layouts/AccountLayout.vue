<template>
  <q-layout view="hhh lpr fff">
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

          <q-item>
            <div class="input q-ml-md">
              <img src="/search.png" alt="" />
              <input
                class="search q-pl-xl"
                type="text"
                placeholder="search"
                @keydown="showsearch = true"
              />
            </div>
          </q-item>

          <q-item outline class="navbar">
            <q-btn
              flat
              label="Categories"
              class="nav q-ml-md"
              to="/categories"
              style="position: relative; left: 20%"
            />
          </q-item>

          <q-item outline class="navbar">
            <q-btn flat label="Track Order" class="nav" />
          </q-item>

          <!-- <q-item outline class="navbar"
            ><q-btn flat label="Log In" class="nav"
          /></q-item> -->

          <q-item outline class="navbar"
            ><q-btn flat label="Cart" icon="img:/buy2.png" class="nav" />
          </q-item>

          <!-- <q-item outline class="q-mr-md"
            ><q-btn text-color="white" to="/account" class="cta" label="Sign Up"
          /></q-item> -->
        </q-toolbar>
        <!-- search results -->
        <q-banner
          class="gt-sm searchResults"
          v-if="showsearch"
          style=""
          @mouseleave="showsearch = false"
        >
          <q-list>
            <q-item clickable class="row">
              <q-card class="row" style="height: 110px; border-radius: 15px">
                <q-card style="flex-center">
                  <q-img
                    src="../assets/product1.png"
                    spinner-color="white"
                    class="product-image"
                    style="width: 80px; object-fit: cover;object-position"
                  />
                </q-card>
                <q-card class="column">
                  <q-card-section>
                    <div
                      class="text-h2"
                      style="
                        font-size: 18px;
                        color: #27141a;
                        line-height: 1px;
                        font-family: 'Manrope-Bold';
                      "
                    >
                      Hennessey
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div
                      class="text-h3"
                      style="
                        font-size: 15px;
                        color: #27141a;
                        line-height: 1px;
                        font-family: 'Manrope-Bold';
                      "
                    >
                      ₦5,000
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div
                      class="text-h5"
                      style="
                        font-size: 12px;
                        color: #27141a;
                        line-height: 10px;
                        font-family: 'Manrope-SemiBold';
                      "
                    >
                      Cognac
                    </div>
                  </q-card-section>
                </q-card>
              </q-card>
            </q-item>
          </q-list>
        </q-banner>

        <!-- search results -->
      </div>

      <!-- Mobile toolbar Mobile toolbar -->
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

          <q-btn
            dense
            flat
            round
            size="13px"
            icon="img:/search.svg"
            style="position: relative; top: 0px; left: 15px"
            @click="showsearch = true"
          />
          <q-card-section
            class="Cart-Top"
            style="position: relative; top: 0px; right: -15px"
          >
            <q-btn dense flat round icon="img:/Buy2.png" />
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

        <!-- mobile search results -->
        <q-banner
          class="text-white searchResults lt-md"
          v-if="showsearch"
          style="z-index: 10"
          @mouseleave="(showsearch = false), (showResults = false)"
        >
          <q-icon
            name="img:/close.svg"
            class="flex"
            style="position: absolute; top: 25px; right: 25px; z-index: 10"
            @click="(showsearch = false), (showResults = false)"
          />
          <q-item clickable>
            <q-input
              outlined
              bottom-slots
              color="grey"
              rounded
              label=" Search Products"
              style="width: 280px; border-radius: 30px; margin-top: 20px"
              @keydown="showResults = true"
            >
              <template v-slot:prepend>
                <q-icon
                  name="img:/wineCup.svg"
                  size="35px"
                  class="searchIcon"
                  style="height: 10px; transform: rotate(40deg)"
                />
              </template>
              <template v-slot:hint> Search Products </template>
            </q-input>
          </q-item>
          <!-- results -->
          <q-list v-if="showResults">
            <q-item clickable class="row no-wrap">
              <q-card class="row imagebox" style="">
                <q-card style="">
                  <q-img
                    src="../assets/product1.png"
                    spinner-color="white"
                    class="product-image"
                    style=""
                  />
                </q-card>
                <q-card class="column">
                  <q-card-section>
                    <div class="text-h2 product-name" style="">
                      {{ product.name.slice(0, 9) + ".." }}
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-h3 product-price" style="">{{ product.price }}</div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-h5 product-cat" style="">{{ product.cat }}</div>
                  </q-card-section>
                </q-card>
              </q-card>
            </q-item>
          </q-list>
          <!-- results -->
        </q-banner>
        <!-- mobile search results -->
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
</template>

<script setup>
import { ref } from "vue";
import footerVue from "src/components/footer.vue";
import AccountDrawer from "/src/components/accountDrawer.vue";
import ReviewEntry from "/src/components/reviewEntry.vue";
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
</script>

<style scoped lang="sass">
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
