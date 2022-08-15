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
      <div class="con">
        <q-toolbar
          wrap
          class="bg-transparent gt-sm text-white q-pt-lg wrap justify-evenly"
        >
          <!-- <q-space /> -->
          <q-item>
            <q-img
              to="/"
              class="logo"
              src="~assets/Logo.svg"
              spinner-color="black"
              style="min-width: 180px"
            />
          </q-item>

          <!-- <q-item></q-item> -->
          <!-- <q-space /> -->

          <q-item>
            <div class="input q-ml-sm">
              <img src="/Vector.png" alt="" />
              <input
                class="search q-pl-xl"
                type="text"
                v-model="searchResults"
                placeholder="search"
                @keydown="showsearch = true"
              />
              <!-- <q-popup-proxy transition-show="flip-up" transition-hide="flip-down"> -->

              <!-- </q-popup-proxy> -->
            </div>
          </q-item>
          <!-- <q-space /> -->

          <!--
        notice shrink property since we are placing it
        as child of QToolbar
       -->
          <q-item outline class="navbar">
            <q-btn
              to="/categories"
              color="white"
              flat
              label="Categories"
              class="nav q-ml-md"
              style="position: relative; left: 20%"
            />
          </q-item>

          <!-- <q-item outline class="navbar"
            ><q-btn color="white" flat label="FAQs" class="nav"
          /></q-item> -->

          <!-- <q-item outline class="navbar"
            ><q-btn color="white" flat label="Log In" class="nav"
          /></q-item> -->

          <q-item outline class="navbar" to="/cart"
            ><q-btn color="white" flat label="Cart" icon="img:/buy.png" class="nav"
          /></q-item>
          <!-- <q-space /> -->

          <q-card
            flat
            outline
            class="row no-wrap q-mr-md bg-transparent"
            style="width: 20%"
          >
            <q-card
              clickable
              class="profile row no-wrap flex flex-center justify-between bg-transparent"
              style="width: 60%; cursor: pointer"
              v-if="Store.isLoggedIn"
            >
              <q-img
                to="/account"
                :src="Store.user.profilePic ? Store.user.profilePic : Store.defaultPic"
                spinner-color="white"
                class="profile-Image"
                style="width: 25%; border-radius: 50%; border: 1x solid"
              />

              <router-link to="/account" style="text-decoration: none">
                <div
                  to="/account"
                  class="text-h3 userName no-wrap"
                  style="
                    font-family: 'Catellosdemo';
                    font-weight: 400;
                    line-height: 25px;
                    font-size: 130%;
                    color: #e6b41d;
                  "
                  v-if="Store.username !== null"
                >
                  {{ Store.username }}
                </div>
              </router-link>
            </q-card>
            <q-card
              class="AuthBtns row no-wrap bg-transparent"
              style="width: 100%; border-radius: 12px; background: transparent"
              v-else="!Store.isLoggedIn"
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
              v-if="Store.isLoggedIn"
              ><q-btn
                color="white"
                flat
                label=""
                icon="img:/logoutMain.svg"
                style="width: 100%; position: relative; left: 15%"
                @click="Store.logOut()"
            /></q-card>
          </q-card>

          <!-- <q-space /> -->
        </q-toolbar>

        <!-- search results -->
        <q-banner
          class="gt-sm rows searchResults"
          v-if="showsearch"
          style=""
          @mouseleave="showsearch = false"
        >
          <q-list>
            <q-item clickable class="column">
              <q-card
                class="row imagebox"
                style=""
                v-for="product in productList"
                :key="product.id"
              >
                <q-card style="">
                  <q-img
                    :src="product.images[0]"
                    spinner-color="white"
                    class="product-image"
                    style=""
                  />
                </q-card>
                <q-card class="column">
                  <q-card-section>
                    <div class="text-h2 product-name" style="">{{ product.name }}</div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-h3 product-price" style="">₦{{ product.price }}</div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-h5 product-cat" style="">{{ product.category }}</div>
                  </q-card-section>
                </q-card>
              </q-card>
            </q-item>
          </q-list>
        </q-banner>

        <!-- search results -->
      </div>

      <!-- Mobile toolbar Mobile toolbar -->
      <div class="con lt-md">
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
            @click="showsearch = true"
          />

          <q-btn
            dense
            flat
            round
            icon="img:/mobileMenu.png"
            @click="Store.toggleLeftDrawer()"
          />
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
          <q-item>
            <q-input
              outlined
              bottom-slots
              color="grey"
              rounded
              label=" Search Products"
              style="width: 280px; border-radius: 30px; margin-top: 30px"
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
            <q-item clickable class="row">
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
      <div class="hero-items fit column justify-center items-start content-start no-wrap">
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
    console.log(`the component is now mounted.`);
  },
};
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
