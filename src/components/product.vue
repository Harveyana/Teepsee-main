<template>
  <q-card clickable flat class="product flex-center" to="/product">
    <!-- product head -->
    <q-card-section class="">
      <q-card flat class="row no-wrap items-center">
        <div class="sale-tag" style="padding: 4px">
          <small class="saleTag" style="" v-if="productTag">{{ productTag }}</small>
        </div>
        <q-space />
        <div class="sale-tag">
          <q-img
            src="../assets/favourite.svg"
            spinner-color="white"
            class="favourite"
            v-if="favourite"
            style="width: 25px"
            @click="favourite = !favourite"
          />
          <!-- <router-link to="/product" style="text-decoration: none"> -->
          <q-img
            src="../assets/favourite2.svg"
            spinner-color="white"
            class="favourite"
            v-else="!favourite"
            style="width: 25px; z-index: 5"
            @click="favourite = !favourite"
          />
          <!-- </router-link> -->
        </div>
      </q-card>
    </q-card-section>
    <!-- product head -->

    <!-- product-image -->
    <q-card-section class="">
      <q-card
        flat
        class="fit row wrap justify-center items-center content-center container-card"
        style=""
        to="/product"
      >
        <div class="justify-center image-container" style="">
          <q-img
            :src="productImage"
            spinner-color="white"
            class="product-image"
            style=""
          />
        </div>
      </q-card>
      <q-separator style="position: relative; top: -25px" />
    </q-card-section>
    <!-- product image -->

    <!-- product details -->
    <router-link :to="{ path: `/product/${productId}` }" style="text-decoration: none">
      <q-card-section class="details-container" style="">
        <div class="row no-wrap">
          <div class="column">
            <div class="text-h2 product-name" style="">{{ productName }}</div>
            <div class="text-h2 product-cat" style="">{{ productCategory }}</div>
          </div>
          <q-space />
          <div>
            <div class="text-h2 product-price" style="">₦{{ productPrice }}</div>
          </div>
        </div>
      </q-card-section>
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

export default {
  name: "product",

  props: {
    productName: String,
    productPrice: String,
    productCategory: String,
    productImage: String,
    productTag: String,
    productId: String,
  },
  data() {
    return {
      favourite: false,
      Store: useCounterStore(),
      router: useRouter(),
      route: useRoute(),
    };
  },
};
</script>
<style scoped lang="sass">
.product
  width: fit-content
  min-width: 200px
  height: 250px
  border-radius: 15px
  body.screen--sm &
    min-width: 150px
    height: 180px
  body.screen--xs &
    min-width: 150px
    height: 180px
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
  position: relative
  top: -30px

.image-container
  width: fit-content
  max-height: 130px
  min-height: 130px
.details-container
  position: relative
  top: -48px
  body.screen--sm &
    position: relative
    top: -105px
  body.screen--xs &
    position: relative
    top: -108px
    max-height: 79px
    min-height: 79px
.product-image
  max-width: 110px
  min-width: 110px
  max-height: 128px
  min-height: 128px
  object-fit: contain
  body.screen--sm &
    width: 70px
    max-height: 90px
    min-height: 90px
  body.screen--xs &
    max-width: 70px
    min-width: 70px
    max-height: 80px
    min-height: 80px
    object-fit: contain
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
