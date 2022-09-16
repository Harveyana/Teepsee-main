<template>
  <q-card
    clickable
    flat
    class="product column no-wrap items-stretch q-mb-md q-mx-sm-sm q-mx-md-sm q-mx-lg-sm q-mx-xl-sm q-mx-xs-none"
    to="/product"
  >
    <!-- product head -->
    <q-card
      flat
      class="row no-wrap items-center q-pt-sm q-px-sm justify-between"
      style="width: 100%"
    >
      <div class="sale-tag" style="padding: 4px">
        <small class="saleTag" style="font-size: 12px" v-if="productTag">{{
          productTag
        }}</small>
      </div>
      <div class="favourite-tag">
        <q-img
          src="../assets/favourite.svg"
          spinner-color="white"
          class="favourite"
          v-if="includesFavourites"
          style="width: 25px"
          @click="Store.removeFavourites(productId)"
        />
        <!-- <router-link to="/product" style="text-decoration: none"> -->
        <q-img
          src="../assets/favourite2.svg"
          spinner-color="white"
          class="favourite"
          v-if="!includesFavourites"
          style="width: 25px; z-index: 5"
          @click="Store.addToFavourites(productId)"
        />
        <!-- </router-link> -->
      </div>
    </q-card>
    <!-- product head -->

    <!-- product-image -->
    <router-link
      :to="{ path: `/product/${productId}` }"
      style="text-decoration: none; width: 100%"
    >
      <q-card flat class="column no-wrap flex-center" style="width: 100%">
        <q-card flat class="container-card flex-center" to="/product">
          <q-img
            :src="productImage"
            spinner-color="white"
            class="product-image"
            style=""
          />
        </q-card>
        <q-separator style="position: relative; top: -25px" />
      </q-card>
    </router-link>
    <!-- product image -->

    <!-- :style="{ backgroundImage: 'url(' + productImage + ')' }" -->

    <!-- product details -->
    <router-link
      :to="{ path: `/product/${productId}` }"
      style="text-decoration: none; width: 100%"
    >
      <q-card
        flat
        class="details-container row no-wrap q-px-sm bg-transparent q-pb-sm overflow-hidden"
        style="width: 100%; border-radius: 15px"
      >
        <div class="column no-wrap">
          <div class="text-h2 product-name" style="">{{ productName }}</div>
          <div class="text-h2 product-cat" style="">{{ productCategory }}</div>
        </div>
        <q-space />
        <div>
          <div class="text-h2 product-price" style="">₦{{ productPrice }}</div>
        </div>
      </q-card>
    </router-link>
    <!-- product-details -->
    <q-inner-loading :showing="Store.ShowLoading">
      <q-spinner-facebook size="50px" color="primary" />
    </q-inner-loading>
  </q-card>
</template>

<script>
import { useCounterStore } from "stores/counter";
import { useRouter, useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useQuasar } from "quasar";
export default {
  name: "product",

  props: {
    productName: String,
    productPrice: String,
    productCategory: String,
    productImage: String,
    productTag: String,
    productId: String,
    favouriters: Array,
  },
  data() {
    return {
      Store: useCounterStore(),
      router: useRouter(),
      route: useRoute(),
      $q: useQuasar(),
    };
  },
  methods: {

  },
  computed: {
    // a computed getter
    includesFavourites() {
      if (this.favouriters) {
        return this.favouriters.includes(this.Store.userId);
      }
    },
  },
  // onMounted() {
  //   console.log("this.props.favouriters");
  // },
};
</script>
<style scoped lang="sass">
.product
  width: 24%
  min-width: 200px
  max-width: 200px
  // max-width: 24%
  // min-width: 200px
  // height: 240px
  border-radius: 15px
  body.screen--md &
    width: 24%
    min-width: 200px
    max-width: 200px

  body.screen--sm &
    width: 24%
    // min-width: 150px
    // height: 180px
  body.screen--xs &
    min-width: 45%
    max-width: 45%
    flex-wrap: nowrap
    margin-left: 1%
    margin-right: 1%

.saleTag
  font-size: 15px
  background: #e6b41d
  padding: 5px 9px 5px 9px
  border-radius: 8px
  font-family: 'Manrope-Bold'
  color: white
  body.screen--sm &
    font-size: 10px
  body.screen--xs &
    font-size: 10px
.container-card
  height: 150px
  width: 50%

  // height: 25vh
  // overflow: hidden
  // background-size: cover
  // background-position: center
  // position: relative
  // top: -30px

// .image-container
//   width: fit-content
//   max-height: 130px
//   min-height: 130px
// .details-container
//   position: relative
//   top: -48px
//   body.screen--sm &
//     position: relative
//     top: -105px
//   body.screen--xs &
//     position: relative
//     top: -108px
//     max-height: 79px
//     min-height: 79px
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
