<template>
  <q-card
    class="column hero flex items-start q-px-lg"
    style="
      width: 100%;
      background-image: url('/trackback.svg');
      background-size: cover;
      background-repeat: no-repeat;
    "
  >
    <q-card
      flat
      class="gt-sm q-mt-lg flex justify-between items-center row no-wrap navbar-desktop bg-transparent"
      style="width: 100%"
    >
      <!-- logo -->
      <q-card flat class="bg-transparent" style="width: 15%">
        <q-img
          to="/"
          class="logo"
          src="~assets/Logo.svg"
          spinner-color="black"
          style="width: 100%"
        />
      </q-card>
      <!-- logo -->
      <!-- searchbar -->
      <!-- <q-card flat class="bg-transparent" style="width: 30%">
        <div class="input q-ml-sm">
          <img src="/Vector.png" alt="" />
          <input
            class="search q-pl-xl"
            type="text"
            v-model="searchResults"
            placeholder="search"
            @keydown="showSearch = true"
          />
        </div>
      </q-card> -->
      <Search></Search>
      <!-- searchbar -->
      <!-- nav links -->
      <q-card
        flat
        class="nav-links row no-wrap justify-between bg-transparent"
        style="width: 20%"
      >
        <q-card flat class="navbar bg-transparent" style="width: 40%">
          <q-btn
            to="/categories/general"
            color="white"
            flat
            label="Categories"
            class="nav"
            style="width: 100%"
          />
        </q-card>
        <q-card flat class="navbar bg-transparent no-wrap" style="width: 50%">
          <q-btn
            to="/cart"
            color="white"
            flat
            label="Cart"
            icon="img:/Buy.svg"
            class="nav no-wrap"
            style="width: 100%"
          />
        </q-card>
      </q-card>
      <!-- nav links -->

      <!-- Auth buttons -->
      <q-card flat outline class="row no-wrap q-mr-md bg-transparent" style="width: 20%">
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
      <!-- Auth buttons -->
    </q-card>
    <!-- mobile-nav -->
    <q-card
      flat
      class="lt-md q-mt-sm row no-wrap navbar-mobile bg-transparent justify-between items-center"
      style="width: 100%"
    >
      <q-card flat class="bg-transparent mobile-logo" style=""
        ><q-img
          class="mobile-logo"
          src="~assets/Logo.svg"
          spinner-color="black"
          style="width: 100%"
      /></q-card>

      <MobileSearch></MobileSearch>

      <q-card flat class="bg-transparent" style="width: 5%">
        <q-btn
          dense
          flat
          round
          icon="img:/mobileMenu.png"
          @click="Store.toggleLeftDrawer()"
        />
      </q-card>
    </q-card>
  </q-card>
</template>

<script>
import { ref } from "vue";
import footerVue from "src/components/footer.vue";
import mainDrawerVue from "src/components/mainDrawer.vue";
import MobileSearch from "src/components/mobileSearch.vue";
import Search from "src/components/search.vue";
import { useCounterStore } from "stores/counter";

// const Store = useCounterstore();

export default {
  name: "MainLayout",
  components: {
    footerVue,
    mainDrawerVue,
    MobileSearch,
    Search,
  },
  setup() {
    let link = ref("inbox");
    const Store = useCounterStore();
    const showSearch = ref(false);
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
      showSearch,
      showResults,
      product,
    };
  },
  computed: {
    // a computed getter
    productList() {
      // `this` points to the component instance
      if (this.showSearch == true) {
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

.hero
  height: 350px
  body.screen--xl &
    height: 500px
  body.screen--lg &
    height: 470px
  body.screen--xs &
    height: 220px

.hero-cta
  position: relative
  top: 30%
  body.screen--xs &
    position: relative
    top: 18%
.hero-button
  margin-top: 3%
  width: 16%
  height: 45px
  border-radius: 15px
  font-family: "Manrope-SemiBold"
  font-weight: 500
  text-transform: capitalize
  body.screen--sm &
    width: 26%
  body.screen--xs &
    width: 45%
    height: 38px
    margin-top: 7%
    // border-radius: 15px
    // font-family: "Manrope-SemiBold"
    // text-transform: capitalize


.hero-text
  margin: 0
  font-family: "Catellosdemo"
  body.screen--xs &
    margin: 0
    font-family: "Catellosdemo"
    font-size: 40px
    line-height: none

.hero-subtext
  margin: 0
  font-family: "Manrope-medium"
  font-size: 160%
  margin-top: 2%
  body.screen--sm &
    max-width: 80%
  body.screen--xs &
    margin-top: -25px
    font-family: "Manrope-medium"
    font-size: 14px
    line-height: 17.5px
    max-width: 260px

.Authbtn
  body.screen--md &
    font-size: 110%
    font-family: "Manrope-Bold"

.mobile-logo
  body.screen--sm &
    width: 30%
  body.screen--xs &
    width: 40%
    position: relative
    right: 2%
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
</style>
