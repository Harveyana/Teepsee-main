<template>
  <q-card class="column summary-container" style="width: 100%" v-if="hasCart">
    <q-card><h3 class="summaryLabel card-header" style="">Summary</h3></q-card>
    <q-separator class="" style="" />
    <q-card class="summaryItems q-my-lg">
      <q-card class="row justify-between subtotal">
        <h4 class="subtotalKey NameClassLess" style="">Subtotal</h4>
        <h4 class="subtotalEntry NameClass" style="">₦{{ cartValue }}</h4>
      </q-card>
      <q-card class="row justify-between Delivery">
        <h4 class="DeliveryKey NameClassLess" style="">Delivery Fee</h4>
        <h4 class="DeliveryEntry NameClass" style="" v-if="cartValue > 1">₦1,047.00</h4>
      </q-card>
      <q-card class="row justify-between Total">
        <h4 class="TotalKey NameClass" style="">Total</h4>
        <h4 class="TotalEntry NameClass" style="" v-if="cartValue > 1">
          ₦{{ parseInt(cartValue + 1047) }}
        </h4>
      </q-card>
    </q-card>
    <q-separator class="" style="" />
    <q-card
      class="row no-wrap CouponInput justify-center self-center q-my-xl"
      style="width: 80%; height: 41px; border-radius: 12px"
    >
      <!-- <q-input
              class="discountEntry"
              dense
              borderless
              label="Your discount code"
              v-model="discountCode"
              style=""
            >
            </q-input>
            <q-btn text-color="black" class="AddToCartBtn" label="Apply" style="" /> -->
      <h4 class="TotalEntry NameClass text-center" style="">Enter coupon at checkout</h4>
    </q-card>
    <q-btn
      to="/checkout"
      text-color="white"
      class="checkoutBtn self-center"
      label="Checkout"
      style=""
    />
  </q-card>
</template>

<script setup>
import { useCounterStore } from "stores/counter";
// import { useRouter, useRoute } from "vue-router";
import { computed, onMounted, watch, ref } from "vue";
import { useQuasar } from "quasar";
const Store = useCounterStore();
const $q = useQuasar();
const cartProducts = ref([]);
const total = ref(0);
const hasCart = $q.localStorage.has("cartItems");
// Store.$subscribe((mutation, state) => {});
const fetchCart = () => {
  const items = $q.localStorage.getItem("cartItems") || [];
  // add to it, only if it's empty
  if (items) {
    console.log(items);
    cartProducts.value = [...items];
  }
};
const fetchValue = () => {
  if (cartProducts.value) {
    let priceArray = [];
    cartProducts.value.forEach((item) => {
      let cost = item.price * item.quantity;
      priceArray.push(cost);
    });
    // arr.reduce(function (a, b) {
    //   return a + b;
    // });
    return priceArray.reduce(function (a, b) {
      return a + b;
    }, 0);

    // console.log(sum);
    // total.value = priceArray;
    // return Store.cartProducts.value.length > 0 ? true : false;
  }
};
const cartValue = computed(() => {
  return fetchValue();
});
watch(cartProducts.value, () => {
  fetchValue();
});
// watch(
//   () => cartProducts.value,
//   (newValue, oldValue) => {
//     fetchValue();
//   },
//   { deep: true }
// );

onMounted(() => {
  fetchCart();
});
</script>
<style scoped lang="sass">
.card-header
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%

.AddToCartBtn
  border-top-right-radius: 8px
  border-bottom-right-radius: 8px
  width: 35%
  height: 100%
  font-family: 'Manrope-Regular'
  text-transform: capitalize
  background: #e6b41d
.checkoutBtn
  border-radius: 8px
  width: 80%
  height: 41px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
.NameClassLess
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
.NameClass
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
// .productCat
//   body.screen--md &
//     line-height: 5px
//     color: #1f1e26
//     font-family: 'Manrope-Bold'
//     font-size: 70%

.search
  // padding-left: 10px
  // margin-top: 15px
  border-radius: 10px
  width: 100%
  height: 40px
  font-size: 14px
  border: 0.5px solid #1f1e26
  body.screen--sm &
    font-size: 12px
.discountEntry
  width: 65%
  border-top-left-radius: 12px
  border-bottom-left-radius: 12px
  border: 1px solid #e4e4e4
  height: 100%
  font-size: 14px
  padding-left: 15px
  bor
  body.screen--sm &
    font-size: 12px

// Product Counter
// Product Counter
// Product Counter
// Product Counter
.container
  body.screen--xl &
    width: 55%
  body.screen--lg &
    width: 98%
  body.screen--md &
    width: 100%
  body.screen--sm &
    width: 100%
    height: fit-content
    flex-direction: column
  body.screen--xs &
    width: 90%
    height: fit-content
    flex-direction: row
.PageName
  body.screen--xl &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 290%
    position: relative
    left: 23%
    margin-right: auto
  body.screen--lg &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 250%
    position: relative
    left: 2.5%
    margin-right: auto
  body.screen--md &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 220%
    margin-right: auto
  body.screen--sm &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 210%
    margin-right: auto
  body.screen--xs &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 210%
    margin-right: auto
    position: relative
    left: 5%
.scroll
  width: 100%
  max-height: 300px
  min-height: 100px
  body.screen--xs &
    width: 100%
    max-height: 400px


.cart
  body.screen--xl &
    width: 62%

    border-radius: 15px
  body.screen--lg &
    width: 62%

    border-radius: 15px
  body.screen--md &
    width: 62%

    border-radius: 15px
  body.screen--sm &
    width: 100%

    border-radius: 15px
  body.screen--xs &
    width: 100%

    border-radius: 15px
.summary
  body.screen--xl &
    width: 35%

    border-radius: 15px
  body.screen--lg &
    width: 35%

    border-radius: 15px
  body.screen--md &
    width: 35%

    border-radius: 15px
  body.screen--sm &
    margin-top: 5%
    margin-bottom: 7%
    align-self: center
    width: 65%

    border-radius: 15px
</style>
