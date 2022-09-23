<template>
  <q-page
    class="column flex flex-center q-px-xl-xl q-px-lg-xl q-px-md-xl q-px-sm-xl q-px-xs-none"
    style="background: #e5e5e5"
    :key="Store.cartkey"
  >
    <h2 class="PageName self-start items-start" style="">Cart</h2>
    <div class="container row justify-between" style="">
      <q-card class="cart q-pb-md self-start" style="" :key="Store.cartkey">
        <q-card class="gt-xs card-headers q-mt-lg row justify-around" v-if="cartlength">
          <q-card class="ImageAndName"
            ><h3 class="ImageAndNameLabel card-header" style="">
              Product Image & Item Name
            </h3></q-card
          >
          <q-card class="Price"
            ><h3 class="PriceLabel card-header" style="">Price</h3></q-card
          >
          <q-card class="Quantity"
            ><h3 class="QuantityLabel card-header" style="">Quantity</h3></q-card
          >
          <q-card class="Sub-total"
            ><h3 class="Sub-totalLabel card-header" style="">Sub-total</h3></q-card
          >
          <q-card class="Remove"
            ><h3 class="RemoveLabel card-header" style="">Remove</h3></q-card
          >
        </q-card>
        <q-list
          class="scroll hide-scrollbar"
          style=""
          v-if="cartlength"
          :key="Store.cartkey"
        >
          <!--  Product -->
          <!--  Product -->
          <cartProductVue
            v-for="product in Store.cartProducts.value"
            :productName="product.name.slice(0, 10) + '..'"
            :productImage="product.image"
            :productPrice="product.price"
            :productCategory="product.category"
            :productQuantity="product.quantity"
            :key="product.name"
          ></cartProductVue>

          <!-- Product -->
        </q-list>
        <!-- Alternate -->
        <q-card
          class="scroll hide-scrollbar column flex-center"
          style=""
          v-else="!hasCart || cartlength"
        >
          <div class="text-h2 card-header q-mb-md">
            Hey, you have no items in your cart
          </div>
          <q-icon size="45px" name="style" />
        </q-card>
        <!-- Alternate -->
        <q-separator class="" style="margin-bottom: 1%; height: 5px" />
        <q-btn
          to="/checkout"
          text-color="white"
          class="lt-sm checkoutBtn q-mt-xl"
          label="Checkout"
          style="position: relative; left: 10%"
          v-if="cartlength"
        />
        <!-- chasers -->
        <!-- chasers -->
        <q-card class="gt-xs Chasers q-pl-lg">
          <q-card class="column chaser-container q-mb-lg">
            <h3 class="chaserHeading card-header q-mb-md" style="">
              Hey, you’ll need some chasers for your drinks
            </h3>
            <q-card class="searchChaser q-mt-sm" style="width: 30%">
              <!-- <q-input
                class="search"
                dense
                borderless
                label="search for Chasers"
                v-model="text"
                style=""
              >
                <template v-slot:prepend>
                  <q-icon name="search" style="position: relative; left: 25%" />
                </template>
              </q-input> -->
            </q-card>
          </q-card>
          <q-card class="chaserSearchResult scroll hide-scrollbar">
            <!-- searchResult -->
            <!-- searchResult -->
            <!-- searchResult -->
            <Chasers @my-event="refreshCart()"></Chasers>
            <!-- searcResult -->
            <!-- searcResult -->
            <!-- searcResult -->
          </q-card>
        </q-card>
      </q-card>
      <q-card class="gt-xs row summary justify-center q-pa-lg" style="">
        <CartSummary :key="Store.componentKey"></CartSummary>
      </q-card>
    </div>
    <RecentlyViewed></RecentlyViewed>
  </q-page>
</template>

<script setup>
import cartProductVue from "src/components/cartProduct.vue";
import Chasers from "../components/Chasers.vue";
import RecentlyViewed from "src/components/RecentlyViewed.vue";
import CartSummary from "src/components/cartSummary.vue";
import { useCounterStore } from "stores/counter";
import { useQuasar } from "quasar";
import { ref, reactive, onMounted, computed } from "vue";
const Store = useCounterStore();
const $q = useQuasar();
const cartProducts = ref([]);
const hasCart = $q.localStorage.has("cartItems");
// const componentKey = ref(0);
// const increaseKey = () => {
//   componentKey.value++;
// };
const fetchCart = () => {
  const items = $q.localStorage.getItem("cartItems") || [];
  // add to it, only if it's empty
  if (items) {
    console.log(items);
    Store.cartProducts.value = [...items];
  }
};
const cartlength = computed(() => {
  if (Store.cartProducts.value) {
    return Store.cartProducts.value.length > 0 ? true : false;
  }
});
const refreshCart = () => {
  fetchCart();
};

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
