<template>
  <q-page class="items-center overflow-hidden hide-scrollbar" style="background: #e5e5e5">
    <!-- hero -->

    <MainHero></MainHero>
    <!-- hero -->

    <div class="features column justify-center items-center no-wrap">
      <q-intersection
        class=""
        transition="jump-down"
        transition-duration="2000"
        style="width: 100%"
      >
        <q-card
          flat
          class="gt-xs row justify-center no-wrap bg-transparent"
          style="width: 100%"
        >
          <div class="text-h1 text1 q-py-md">How to get Teepsee</div>
        </q-card>
      </q-intersection>
      <q-card
        flat
        class="lt-sm row justify-start no-wrap bg-transparent"
        style="width: 100%"
      >
        <div class="text-h1 text2 self-start">How to get Teepsee</div>
      </q-card>

      <div class="feature-list row no-wrap justify-around" style="">
        <q-intersection
          class="card-intersection"
          transition="slide-up"
          once
          transition-duration="800"
          style=""
        >
          <q-card flat class="my-card q-mx-auto"> </q-card>
        </q-intersection>
        <q-intersection
          class="card-intersection"
          transition="slide-up"
          once
          transition-duration="1300"
          style=""
        >
          <q-card flat class="my-card2 q-mx-auto"> </q-card>
        </q-intersection>
        <q-intersection
          class="card-intersection"
          transition="slide-up"
          once
          transition-duration="2000"
          style=""
        >
          <q-card flat class="my-card3 q-mx-auto"> </q-card>
        </q-intersection>
      </div>
      <div class="text-h1 text3 self-start">Shop Now</div>
      <div
        flat
        class="row no-wrap bg-transparent shop-features items-center justify-between"
      >
        <!-- <router-link to="/categories/general" style="text-decoration: none"> -->
        <q-intersection
          to="/categories/wine"
          class="wine-intersection"
          transition="slide-up"
          once
          transition-duration="2000"
          style="cursor: pointer"
          @click="this.$router.push('/categories/wine')"
        >
          <q-item
            to="/categories/wine"
            flat
            class="wine"
            @click="this.$router.push('/categories/wine')"
            style="z-index: 999"
          >
            <router-link to="/categories/wine" style="text-decoration: none">
              <div class="text-h1 featureText text-white">Shop Wine</div>
            </router-link>
          </q-item>
        </q-intersection>
        <!-- </router-link> -->
        <q-intersection
          to="/categories/champagne"
          class="intersection"
          transition="slide-up"
          once
          transition-duration="2000"
          style="cursor: pointer"
          @click="this.$router.push('/categories/champagne')"
        >
          <q-item
            to="/categories/champagne"
            flat
            class="champagne"
            @click="this.$router.push('/categories/champagne')"
            style="z-index: 999"
            ><router-link to="/categories/champagne" style="text-decoration: none">
              <div class="text-h1 featureText text-white">Shop Champagne</div>
            </router-link>
          </q-item>
        </q-intersection>
      </div>
      <!-- <div class="shop-features row no-wrap">

      </div> -->
      <q-intersection
        to="/categories/vodka"
        class="vodka-intersection"
        transition="slide-up"
        once
        transition-duration="2000"
        style="cursor: pointer"
        @click="this.$router.push('/categories/vodka')"
      >
        <q-item
          to="/categories/vodka"
          flat
          class="ShopVodka"
          @click="this.$router.push('/categories/vodka')"
          style="z-index: 999"
        >
          <router-link to="/categories/vodka" style="text-decoration: none">
            <div class="text-h1 featureText text-white">Shop Vodka</div>
          </router-link>
        </q-item>
      </q-intersection>

      <div
        flat
        class="row no-wrap bg-transparent shop-features2 items-center justify-between"
      >
        <q-intersection
          to="/categories/whiskey"
          class="wine-intersection"
          transition="slide-up"
          once
          transition-duration="2000"
          style="cursor: pointer"
          @click="this.$router.push('/categories/whiskey')"
        >
          <q-item
            to="/categories/whiskey"
            flat
            class="ShopWhiskey"
            @click="this.$router.push('/categories/whiskey')"
            style="z-index: 999"
            ><router-link to="/categories/whiskey" style="text-decoration: none">
              <div class="text-h1 featureText text-white">Shop Whiskey</div>
            </router-link>
          </q-item>
        </q-intersection>
        <q-intersection
          to="/categories/brandy"
          class="intersection"
          once
          transition="slide-up"
          transition-duration="2000"
          style="cursor: pointer"
          @click="this.$router.push('/categories/brandy')"
        >
          <q-item
            to="/categories/brandy"
            flat
            class="ShopBrandy"
            @click="this.$router.push('/categories/brandy')"
            style="z-index: 999"
          >
            <router-link to="/categories/brandy" style="text-decoration: none">
              <div class="text-h1 featureText text-white">Shop Brandy</div>
            </router-link>
          </q-item>
        </q-intersection>
      </div>

      <q-intersection
        to="/categories/general"
        class="combo-intersection"
        transition="slide-up"
        once
        transition-duration="2000"
        style="cursor: pointer"
        @click="this.$router.push('/categories/general')"
      >
        <q-item
          to="/categories/general"
          flat
          class="PartyCombo"
          @click="this.$router.push('/categories/general')"
          style="z-index: 999"
        >
          <router-link to="/categories/general" style="text-decoration: none">
            <div class="text-h1 featureText text-white">Party Combo</div>
          </router-link>
        </q-item>
      </q-intersection>

      <div class="row no-wrap bg-transparent shop-features2 items-center justify-between">
        <q-intersection
          to="/categories/tequila"
          class="wine-intersection"
          once
          transition="slide-up"
          transition-duration="2000"
          style="cursor: pointer"
          @click="this.$router.push('/categories/tequila')"
        >
          <q-item
            to="/categories/tequila"
            flat
            class="ShopTequila"
            @click="this.$router.push('/categories/tequila')"
            style="z-index: 999"
          >
            <router-link to="/categories/tequila" style="text-decoration: none">
              <div class="text-h1 featureText text-white">Shop Tequila</div>
            </router-link>
          </q-item>
        </q-intersection>
        <q-intersection
          to="/categories/cognac"
          class="intersection"
          once
          transition="slide-up"
          transition-duration="2000"
          style="cursor: pointer"
          @click="this.$router.push('/categories/cognac')"
        >
          <q-item
            to="/categories/cognac"
            flat
            class="ShopCognac"
            @click="this.$router.push('/categories/cognac')"
            style="z-index: 999"
            ><router-link to="/categories/cognac" style="text-decoration: none">
              <div class="text-h1 featureText text-white">Shop Cognac</div>
            </router-link>
          </q-item>
        </q-intersection>
      </div>

      <q-btn
        round
        href="https://wa.me/message/3GGSYU425BXKD1"
        color="white"
        size="20px"
        icon="img:/whatsapp.png"
        class="whatsapp"
        style=""
      />
      <!-- <div class="shop-features2 row">

      </div> -->
    </div>

    <!-- Swiperrrrrrrrrrrrr -->
    <!-- Swiperrrrrrrrrrrrr -->
    <!-- Swiperrrrrrrrrrrrr -->
    <!-- Swiperrrrrrrrrrrrr -->
    <!-- Swiperrrrrrrrrrrrr -->
    <!-- Swiperrrrrrrrrrrrr -->
    <!-- Swiperrrrrrrrrrrrr -->
    <!-- Swiperrrrrrrrrrrrr -->

    <q-card
      flat
      class="testimonial flex row justify-center items-center bg-white q-px-xs-none q-px-sm-xl q-px-md-xl q-px-lg-xl q-px-xl-xl"
      style="width: 100%"
    >
      <q-card flat class="head row items-center justify-center" style="width: 100%">
        <div style="" class="text-h1 text-black">Word on the Street</div>
      </q-card>

      <div flat class="testimony-container flex row q-mb-lg" style="">
        <swiper
          :effect="'coverflow'"
          :pagination="true"
          :grabCursor="true"
          :centeredSlides="true"
          slidesPerView="auto"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }"
          loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          style=""
          class="swiper"
        >
          <swiper-slide
            class="flex row justify-center"
            style="width: 30%; border-radius: 15px"
            ><Testimony></Testimony
          ></swiper-slide>
          <swiper-slide
            class="flex row justify-center"
            style="width: 30%; border-radius: 15px"
            ><Testimony></Testimony
          ></swiper-slide>
          <swiper-slide
            class="flex row justify-center"
            style="width: 30%; border-radius: 15px"
            ><Testimony></Testimony
          ></swiper-slide>
          <swiper-slide
            class="flex row justify-center"
            style="width: 30%; border-radius: 15px"
            ><Testimony></Testimony
          ></swiper-slide>
          <swiper-slide
            class="flex row justify-center"
            style="width: 30%; border-radius: 15px"
            ><Testimony></Testimony
          ></swiper-slide>
        </swiper>
      </div>
    </q-card>

    <q-dialog class="" v-model="Store.showAgeConfirmBox" persistent>
      <AgeConfirm></AgeConfirm>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MainHero from "../components/mainHero.vue";
import Testimony from "../components/testimony.vue";
import { useCounterStore } from "stores/counter";
import AgeConfirm from "../components/AgeConfirm.vue";
import { useQuasar } from "quasar";
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Navigation, Pagination, Scrollbar, EffectCoverflow, Autoplay } from "swiper";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper/core";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const $q = useQuasar();
const Store = useCounterStore();
const tab = ref("previous");

onMounted(() => {
  const hasCart = $q.localStorage.has("AgeConfirmed");
  if (hasCart) {
    console.log("Age confirmed");
  } else {
    Store.showAgeConfirmBox = true;
  }
});
</script>

<style scoped lang="sass">
// .enter-from,
// .leave-to
//   opacity:0

// .enter-active,
// .leave-active
//   transition: opacity 6s ease
.swiper
  width: 70%
  body.screen--xs &
    width: 100%

.card-intersection
  width: 30%
  height: 350px
  body.screen--sm &
    height: 200px
  body.screen--xs &
    height: 270px
    width: 100%
.wine-intersection
  width: 49%
  height: 500px
  // margin-bottom: 25px
  // margin-top: 25px
  body.screen--sm &
    height: 300px

  body.screen--xs &
    height: 300px
    width: 100%
    margin-bottom: 18px
.intersection
  width: 49%
  height: 500px
  // margin-bottom: 25px
  // margin-top: 25px
  body.screen--sm &
    height: 300px
  body.screen--xs &
    height: 300px
    width: 100%
    // margin-bottom: 18px
.vodka-intersection
  width: 100%
  height: 500px
  margin-bottom: 25px
  margin-top: 25px
  body.screen--sm &
    height: 300px
  body.screen--xs &
    height: 300px
    width: 100%
    margin-top: 18px
    margin-bottom: 18px
.combo-intersection
  width: 100%
  height: 500px
  margin-bottom: 50px
  // margin-top: 25px
  body.screen--sm &
    height: 300px
  body.screen--xs &
    width: 100%
    height: 300px
    margin-bottom: 48px
.whatsapp
  position: fixed
  bottom: 8%
  right: 3%
  z-index: 99
  body.screen--xs &
   bottom: 3%

.text-black
  font-family: 'Catellosdemo'
  font-size: 50px
  body.screen--xs &
    font-size: 25px
.testimony-container
  width: 100%

  body.screen--xs &


.logo

.featureText
  font-family: "Catellosdemo"
  font-size: 40px
  position: relative
  left: 5%
  top: 75%
  body.screen--xs &
    font-size: 24px
    position: relative
    left: 5%
    top: 70%
  body.screen--sm &
    font-size: 24px
    position: relative
    left: 5%
    top: 70%
.featureText:hover
  transition: all ease 0.7s
  font-size: 55px
  body.screen--xs &
    font-size: 30px
  body.screen--sm &
    font-size: 30px
.features
  height: fit-content
  min-height: 1000px
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
  body.screen--sm &
    margin: none
    font-family: "Catellosdemo"
    font-size: 370%
.my-card
  background: url("../assets/feature1.svg")
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: 350px
  width: 100%
  object-fit: cover
  border-radius: 10px

  body.screen--sm &
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    height: 200px
    width: 100%
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
  width: 100%
  // min-width: 390px
  border-radius: 10px
  body.screen--sm &
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    height: 200px
    width: 100%
    border-radius: 20px
  body.screen--xs &
    height: 270px
    width: 90%
    border-radius: 10px

.my-card3
  background: url("../assets/feature3.svg")
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: 350px
  width: 100%
  border-radius: 10px
  body.screen--sm &
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    height: 200px
    width: 100%
    border-radius: 20px
  body.screen--xs &
    height: 270px
    width: 90%
    border-radius: 10px

.shop-features
  width: 100%
  padding-left: 5%
  padding-right: 5%
  body.screen--sm &
    width: 100%
  body.screen--xs &
    flex-direction: column

.shop-features2
  width: 100%
  padding-left: 5%
  padding-right: 5%
  body.screen--sm &
    width: 100%
  body.screen--xs &
    flex-direction: column


// Feature 2 and 3////////////

.wine
  background: url("../assets/winefeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 100%
  // min-width: 49%

  body.screen--lg &

  body.screen--md &

  body.screen--sm &

    height: 300px
    min-height: 300px

  body.screen--xs &

    margin-bottom: 18px
    // height: 90vw
    height: 300px
    min-height: 300px
    width: 100%


.champagne
  background: url("../assets/champagnefeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  // min-height: 500px
  width: 100%
  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    height: 300px
    min-height: 300px
    width: 100%

// Feature 4////////////

.ShopVodka
  background: url("../assets/vodkafeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  // margin-bottom: 25px
  // margin-top: 25px
  background-size: cover
  height: 500px
  // min-height: 500px
  width: 89%
  // max-width: 89%
  margin-right: 5.5%
  margin-left: 5.5%
  body.screen--xl &

  body.screen--lg &

  body.screen--md &
    // margin-right: 5.5%
    // margin-left: 5.5%

  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    height: 300px
    min-height: 300px
    width: 90%

// Feature 5 and 6////////////

.ShopWhiskey
  background: url("../assets/whiskeyfeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 100%
  body.screen--xl &

  body.screen--lg &

  body.screen--md &

  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    // margin-bottom: 18px
    height: 300px
    min-height: 300px
    width: 100%

.ShopBrandy
  background: url("../assets/shopbrandy.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 100%
  body.screen--xl &

  body.screen--lg &
  body.screen--md &
  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    // margin-bottom: 18px
    height: 300px
    min-height: 300px
    width: 100%

// Feature 6  ////////////

.PartyCombo
  background: url("../assets/partycombo.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  margin-bottom: 25px
  margin-top: 25px
  background-size: cover
  height: 500px
  margin-left: 5.5%
  margin-right: 5.5%
  // min-height: 500px
  width: 89%
  body.screen--lg &

  body.screen--md &

  body.screen--sm &
    height: 300px
    min-height: 300px
  body.screen--xs &
    height: 300px
    min-height: 300px
    width: 90%



// Feature 7 and 8////////////


.ShopTequila
  background: url("../assets/tequilafeature.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 100%


  body.screen--lg &

  body.screen--md &

  body.screen--sm &

    height: 300px
    min-height: 300px
  body.screen--xs &

    // margin-bottom: 18px
    // height: 90vw
    height: 300px
    min-height: 300px
    width: 100%

.ShopCognac
  background: url("../assets/shopfeature8.svg")
  background-repeat: no-repeat
  background-position: center
  border-radius: 15px
  background-size: cover
  height: 500px
  min-height: 500px
  width: 100%

  body.screen--lg &

  body.screen--md &

  body.screen--sm &

    height: 300px
    min-height: 300px

  body.screen--xs &

    // margin-bottom: 18px
    // height: 90vw
    height: 300px
    min-height: 300px
    width: 100%
</style>
