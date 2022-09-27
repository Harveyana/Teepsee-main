<template>
  <q-separator
    class=""
    style="width: 100%; margin-bottom: 2%; position: relative; left: 4%"
  />
  <q-card
    flat
    class="row product q-px-xs-sm q-px-sm-lg q-px-lg-lg q-px-xl-lg justify-between"
    style="width: 90%; cursor: pointer"
  >
    <!-- Product image and name -->
    <q-card class="image-And-Name row no-wrap flex flex-center" style="">
      <q-card class="gt-xs Name" style="width: 70%">
        <h4 class="productName NameClass" style="">{{ couponName }}</h4>
      </q-card>
    </q-card>
    <!-- Product Price -->
    <q-card
      class="row Discount flex flex-center"
      style="width: 15%; position: relative; left: 4.5%"
    >
      <h4 class="Discount NameClass" style="">{{ couponDiscount }}</h4>
    </q-card>
    <!-- Product Quantity -->
    <q-card
      class="row couponCodeLabel flex flex-center"
      style="width: 8%; position: relative; left: 8%"
    >
      <h4 class="CouponCode NameClass" style="">{{ couponCode }}</h4>
    </q-card>
    <!-- Product SubTotal -->
    <q-card
      class="gt-xs row CouponUsersLabel flex flex-center"
      style="width: 15%; position: relative; left: 9%"
    >
      <h4 class="CouponUsers NameClass" style="">{{ parseInt(couponUsers.length) }}</h4>
    </q-card>
    <!-- <q-card class="row Edit flex flex-center" style="position: relative; right: 3%"> -->
    <q-popup-proxy
      cover
      maxHeight="99vh"
      transition-show="slide-down"
      transition-hide="slide-up"
      style="width: 40vw; height: 50vh"
      class="bg-grey-3 scroll hide-scrollbar"
    >
      <q-card flat class="q-ml-md bg-grey-3">
        <h4 class="productName NameClass" style="font-size: Large">Coupon Users</h4>
      </q-card>
      <q-list
        class="bg-grey-3 edit-container column no-wrap justify-between q-px-xl overflow-hidden"
        style="width: 100%"
      >
        <q-card
          class="row justify-between"
          style="width: 100%"
          v-for="user in couponUsers"
          :key="user"
        >
          <!-- <q-card class="username"
            ><h4 class="productName NameClass bg-grey-3" style="font-size: Medium">
              Obi Anayo
            </h4></q-card
          > -->
          <q-card class="useremail"
            ><h4
              class="productName NameClass bg-grey-3 q-ml-md"
              style="font-size: Medium; color: #e6b41d"
            >
              {{ user }}
            </h4></q-card
          >
        </q-card>
      </q-list>
    </q-popup-proxy>
    <!-- </q-card> -->
  </q-card>
  <!-- </q-card> -->
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "stores/counter";
export default {
  name: "coupon",

  props: {
    couponName: String,
    couponCode: String,
    couponDiscount: Number,
    couponUsers: Array,
  },
  data() {
    return {
      Store: useCounterStore(),
      confirm: ref(false),
    };
  },
};
</script>
<style scoped lang="sass">
.checkoutBtn
  border-radius: 8px
  margin-top: 2%
  margin-left: 2%
  width: 100%
  height: 51px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
.NameClass
  body.screen--xl &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--md &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--sm &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--xs &
    line-height: 5px
    color: #666666
    font-family: 'Manrope-Bold'
    font-size: 120%
.productCat
  body.screen--xl &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--lg &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--md &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 78%
  body.screen--sm &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 70%

.quantity-counter
  body.screen--xl &
    border: 1px solid black
    width: 120px
    height: 41px
    border-radius: 12px
  body.screen--lg &
    border: 1px solid black
    width: 120px
    height: 41px
    border-radius: 12px
  body.screen--md &
    border: 1px solid black
    width: 120px
    height: 41px
    border-radius: 12px
  body.screen--sm &
    border: 1px solid black
    width: 100px
    height: 41px
    border-radius: 12px
  body.screen--xs &
    border: 1px solid black
    width: 80%
    height: 30px
    border-radius: 12px
.CounterNumber
  body.screen--xl &
    font-size: 110%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666
  body.screen--lg &
    font-size: 105%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666
  body.screen--md &
    font-size: 100%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666
  body.screen--sm &
    font-size: 100%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666
  body.screen--xs &
    font-size: 100%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666

.image-And-Name

  width: 18%
  position: relative
  left: 5%


.image
  width: 45%
  body.screen--xs &
    width: 45%
    margin-right: 4%
</style>
