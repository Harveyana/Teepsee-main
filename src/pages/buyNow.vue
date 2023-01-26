<template>
  <q-page
    class="column flex flex-center q-px-xl-xl q-px-lg-xl q-px-md-xl q-px-sm-xl q-px-xs-none"
    style="background: #e5e5e5"
  >
    <h2 class="PageName self-start items-start" style="">Delivery Information</h2>
    <div class="container row justify-between" style="">
      <q-card class="cart q-pb-md self-start" style="">
        <q-card style="width: 100%">
          <q-tabs
            v-model="tab"
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
            style=""
          >
            <q-tab
              name="Personal Delivery"
              label="Personal Delivery"
              style="font-family: 'Catellosdemo'; font-size: 30px"
            />
            <q-tab
              name="Send to a friend"
              label="Send to a friend"
              style="font-family: 'Catellosdemo'"
            />
          </q-tabs>

          <!-- <q-separator /> -->

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel
              name="Personal Delivery"
              class="q-px-xl-xl q-px-lg-xl q-px-md-xl q-px-sm-xl q-px-xs-md"
            >
              <div class="text-h6" style="">Use Address on my Profile</div>

              <!-- v-for="address in user.addresses" -->
              <q-card flat class="addresses" style="width: 90%" v-for="address in user.addresses" :key="address.landmark">
                <!-- Adresses -->
                <!-- Adresses -->
                <q-radio
                  v-model="Address"
                  :val="address.street"
                  :label="address.street"
                  :color="primary"
                  style="color: #444444; font-family: 'Manrope-semiBold'"
                />
                <!-- Addresses -->
                <!-- Addresses -->
              </q-card>
              <q-card flat class="address-inputs q-mt-xl" style="">
                <q-card flat class="addressInput1 columns q-mb-lg">
                  <h3 class="fieldName">
                    Enter Address<span style="color: red">*</span>
                  </h3>
                  <q-input
                    borderless
                    class="q-px-md field"
                    v-model="newAddress.address"
                  />
                </q-card>
                <q-card flat class="addressInput2 columns q-mb-lg">
                  <h3 class="fieldName">Landmark</h3>
                  <q-input
                    borderless
                    class="q-px-md field"
                    v-model="newAddress.landmark"
                  />
                </q-card>
                <q-card flat class="addressInput3 columns q-mb-xl">
                  <h3 class="fieldName">Phone Number<span style="color: red">*</span></h3>
                  <q-input
                    borderless
                    class="q-px-md field"
                    v-model="newAddress.phoneNumber"
                  />
                </q-card>
              </q-card>
            </q-tab-panel>

            <q-tab-panel
              name="Send to a friend"
              class="q-px-xl-xl q-px-lg-xl q-px-md-xl q-px-sm-xl q-px-xs-md"
            >
              <q-card flat class="address-inputs q-mt-xl" style="">
                <q-card flat class="addressInput1 columns q-mb-lg">
                  <h3 class="fieldName">
                    Receiver’s Name<span style="color: red">*</span>
                  </h3>
                  <q-input borderless class="q-px-md field" v-model="receivers.name" />
                </q-card>

                <q-card flat class="addressInput2 columns q-mb-lg">
                  <h3 class="fieldName">
                    Receiver’s Address<span style="color: red">*</span>
                  </h3>
                  <q-input borderless class="q-px-md field" v-model="receivers.address" />
                </q-card>

                <q-card flat class="addressInput3 columns q-mb-xl">
                  <h3 class="fieldName">
                    Receivers Phone Number<span style="color: red">*</span>
                  </h3>
                  <q-input
                    borderless
                    class="q-px-md field"
                    v-model="receivers.phoneNumber"
                  />
                </q-card>
                <q-card flat class="addressInput3 columns q-mb-xl">
                  <h3 class="fieldName">Enter Note (Optional)</h3>
                  <q-input
                    borderless
                    type="textarea"
                    class="q-px-md field"
                    v-model="receivers.optionalNote"
                    style="height: 120px"
                  />
                </q-card>
              </q-card>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>

        <!-- summary -->
        <!-- summary -->
      </q-card>
      <q-card class="row summary justify-center q-pa-lg" style="">
        <q-card class="column summary-container" style="width: 100%">
          <q-card><h3 class="summaryLabel card-header" style="">Summary</h3></q-card>
          <q-separator class="" style="" />
          <q-card class="summaryItems q-my-lg">
            <q-card class="row justify-between subtotal">
              <h4 class="subtotalKey NameClassLess" style="">Subtotal</h4>
              <h4 class="subtotalEntry NameClass" style="">₦{{ Store.cartTotal }}</h4>
            </q-card>
            <q-card class="row justify-between Delivery">
              <h4 class="DeliveryKey NameClassLess" style="">Delivery Fee</h4>
              <h4 class="DeliveryEntry NameClass" style="" v-if="Store.cartTotal > 1">
                ₦{{ Store.shippingRate }}
              </h4>
            </q-card>
            <q-card class="row justify-between Total">
              <h4 class="TotalKey NameClass" style="">Total</h4>
              <h4 class="TotalEntry NameClass" style="" v-if="Store.cartTotal > 1">
                ₦{{ parseInt(Store.toTalPayment) }}
              </h4>
            </q-card>
          </q-card>
          <q-separator class="" style="" />
          <q-card
            class="row no-wrap CouponInput justify-between self-center q-my-xl"
            style="width: 80%; height: 41px; border-radius: 12px"
          >
            <q-input
              class="discountEntry"
              dense
              borderless
              label="Your discount code"
              v-model="discountCode"
              style=""
            >
            </q-input>
            <q-btn
              text-color="black"
              class="AddToCartBtn"
              label="Apply"
              style=""
              @click="Store.getCoupon(discountCode)"
            />
          </q-card>
          <q-btn
            text-color="white"
            class="checkoutBtn self-center"
            label="Make Payment"
            style=""
            @click="initpayment()"
          />
        </q-card>
      </q-card>
    </div>
    <RecentlyViewed></RecentlyViewed>
  </q-page>
</template>

<script setup>
// import PaystackPop from "@paystack/inline-js";

import Chasers from "../components/Chasers.vue";
import {LocalStorage} from 'quasar'
import RecentlyViewed from "src/components/RecentlyViewed.vue";
import { useCounterStore } from "stores/counter";
// import { useRouter, useRoute } from "vue-router";
import { computed, onMounted, watch, ref, reactive } from "vue";
import { useQuasar } from "quasar";
const Store = useCounterStore();
const $q = useQuasar();
const cartProducts = ref([]);
const discountCode = ref("");
const hasCart = $q.localStorage.has("cartItems");
const tab = ref("Personal Delivery");
const Address = ref(null);
const from = ref(null);
const newAddress = reactive({
  name: Store.username,
  address: "",
  landmark: "",
  phoneNumber: "",
  optionalNote: "none",
});

const receivers = reactive({
  name: "",
  address: "",
  landmark: "none",
  phoneNumber: "",
  optionalNote: "",
});
const userAddress = reactive({
  name: Store.username,
  address: Address,
  landmark: "none",
  phoneNumber: Store.user.phoneNumber || "none",
  optionalNote: "",
});

const uploadOrder = () => {
  console("this hit");
  Store.createOrder();
};


const user = computed(() =>{

return LocalStorage.getItem('userDetails')

})

// const processPayment = () => {
//   const paystack = new PaystackPop();

//   paystack.newTransaction({
//     key: "pk_test_21a3b29fdc63fa8541342771a8bd098ab2c2c13a",
//     email: Store.user.email,
//     amount: Store.cartTotal * 100,

//     onSuccess: (transaction) => {
//       // Payment complete! Reference: transaction.
//       console.log("paid now");
//       Store.createOrder(transaction.reference);

//     },
//     onCancel: () => {
//       // user closed popup
//       Store.notifyUser(this.user.profilePic, "Order Cancelled");
//     },
//   });
// };
const initpayment = () => {
  if (tab.value == "Personal Delivery") {
    if (newAddress.address && newAddress.landmark && newAddress.phoneNumber) {
      Object.assign(Store.checkout, newAddress);
      Store.processPayment();
    } else {
      Object.assign(Store.checkout, userAddress);
      Store.processPayment();
    }
  } else {
    Object.assign(Store.checkout, receivers);
    Store.processPayment();
  }
};
const fetchCart = () => {
  const items = $q.localStorage.getItem("singleItems") || [];
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
    const sum = priceArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    Store.cartTotal = sum;

    // console.log(sum);
    // total.value = priceArray;
    // return Store.cartProducts.value.length > 0 ? true : false;
  }
};

// const cartValue = computed(() => {
//   return fetchValue();
// });
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
  fetchValue();
});
</script>
<style scoped lang="sass">
.field
  background-color: #f5f5f5
  height: 44px
  font-size: 16px
  border-radius: 10px
.fieldName
  font-family: 'Manrope-semiBold'
  font-size: 110%
  color: #27141a
  line-height: 5px
.text-grey
  width: 80%
  body.screen--xs &
    width: 100%
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
  body.screen--xs &
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
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
.productCat
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 70%

.address-inputs
  width: 80%
  body.screen--xs &
    width: 100%

.text-h6
  font-family: 'Catellosdemo'
  font-size: 150%
  color: #444444
  body.screen--xs &
    font-size: 120%

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
    flex-direction: column
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
    width: 80%

    border-radius: 15px
  body.screen--xs &
    margin-top: 15%
    margin-bottom: 7%
    align-self: center
    width: 100%
    border-radius: 15px
</style>
