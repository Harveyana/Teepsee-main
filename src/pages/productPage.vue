<template>
  <q-page class="flex flex-center overflow-hidden" style="background: #e5e5e5">
    <div
      class="container row no-wrap items-center justify-center q-gutter-xs-none q-gutter-sm-lg q-gutter-md-lg q-gutter-lg-lg q-gutter-xl-lg"
      style=""
    >
      <q-card
        flat
        class="gt-xs bg-transparent product-images column no-wrap items-center justify-center q-gutter-xs-none q-gutter-sm-md q-gutter-md-md q-gutter-lg-md q-gutter-xl-md q-pr-sm-md q-pr-md-md q-pr-lg-md q-pr-xl-md q-pb-sm-md q-pb-md-md q-pb-lg-md q-pb-xl-md"
        style=""
      >
        <!-- main image -->
        <!-- main image -->
        <q-card class="image-container row justify-center items-center" style="">
          <q-carousel
            v-if="productDetails.images"
            animated
            v-model="slide"
            navigation
            swipeable
            autoplay="true"
            infinite
            class="image-carousel flex justify-center"
            style=""
          >
            <!-- <q-carousel-slide
              v-for="(image, index) in productDetails.images"
              :key="index"
              :name="(index = +1)"
              class="product-image"
              :img-src="image"
              style="min-width: 200px"
            /> -->

            <q-carousel-slide
              v-if="productDetails.images[0]"
              :name="1"
              class="product-image"
              style="min-width: 300px"
              :img-src="productDetails.images[0]"
            />
            <q-carousel-slide
              v-if="productDetails.images[1]"
              :name="2"
              class="product-image"
              style="min-width: 300px"
              :img-src="productDetails.images[1]"
            />
            <q-carousel-slide
              v-if="productDetails.images[2]"
              :name="3"
              class="product-image"
              style="min-width: 300px"
              :img-src="productDetails.images[2]"
            />
          </q-carousel>
        </q-card>
        <q-inner-loading :showing="Store.ShowLoading">
          <q-spinner-gears size="130px" color="primary" />
        </q-inner-loading>
        <!-- main image  -->
        <!-- main image  -->

        <!-- sub-images -->
        <!-- sub-images -->
        <q-card
          class="bg-transparent row no-wrap justify-center items-center q-gutter-md q-pr-md q-pb-md"
          style="height: 25%; width: 95%"
        >
          <q-card
            class="row col-4 justify-center items-center"
            style="width: 30%; height: 100%; border-radius: 15px"
            ><q-img
              v-if="productDetails.images"
              :src="productDetails.images[0]"
              spinner-color="white"
              class="product-image"
              style="width: 60%; height: 90%; object-fit: cover"
            />
            <q-inner-loading :showing="Store.ShowLoading">
              <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
          </q-card>
          <q-card
            class="row col-4 justify-center items-center"
            style="width: 30%; height: 100%; border-radius: 15px"
            ><q-img
              v-if="productDetails.images"
              :src="productDetails.images[1]"
              spinner-color="white"
              class="product-image"
              style="width: 60%; height: 90%; object-fit: cover"
            />
            <q-inner-loading :showing="Store.ShowLoading">
              <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
          </q-card>

          <q-card
            class="row col-4 justify-center items-center"
            style="width: 30%; height: 100%; border-radius: 15px"
            ><q-img
              v-if="productDetails.images"
              :src="productDetails.images[2]"
              spinner-color="white"
              class="product-image"
              style="width: 60%; height: 90%; object-fit: cover"
            />
            <q-inner-loading :showing="Store.ShowLoading">
              <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
          </q-card>
        </q-card>
        <!-- sub-images -->
        <!-- sub-images -->
      </q-card>
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- <q-card
        flat
        class="lt-sm bg-transparent product-images column no-wrap items-center justify-center"
        style=""
      > -->
      <!-- main image -->
      <!-- main image -->
      <q-card
        flat
        class="lt-sm mobile-image-container row justify-center items-center"
        style=""
      >
        <q-carousel
          v-if="productDetails.images"
          animated
          v-model="slide"
          navigation
          infinite
          swipeable
          autoplay="true"
          class="image-carousel flex justify-center"
          style=""
        >
          <!-- <q-carousel-slide
            v-for="(image, index) in productDetails.images"
            :key="index"
            :name="(index = +1)"
            class="product-image"
            :img-src="image"
            style="min-width: 200px"
          /> -->

          <q-carousel-slide
            v-if="productDetails.images[0]"
            :name="1"
            class="product-image"
            style="min-width: 300px"
            :img-src="productDetails.images[0]"
          />
          <q-carousel-slide
            v-if="productDetails.images[1]"
            :name="2"
            class="product-image"
            style="min-width: 300px"
            :img-src="productDetails.images[1]"
          />
          <q-carousel-slide
            v-if="productDetails.images[2]"
            :name="3"
            class="product-image"
            style="min-width: 300px"
            :img-src="productDetails.images[2]"
          />
        </q-carousel>
        <q-inner-loading :showing="Store.ShowLoading">
          <q-spinner-gears size="130px" color="primary" />
        </q-inner-loading>
      </q-card>
      <!-- </q-card> -->

      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
      <!-- mobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->

      <q-card flat class="product-details q-pa-md bg-transparent" style="">
        <q-card
          class="column no-wrap q-pa-md"
          style="height: 100%; width: 100%; border-radius: 15px"
        >
          <q-card class="RatingAndPrice row no-wrap justify-between" style="width: 100%">
            <!-- product price and Name -->
            <!-- product price and Name -->
            <q-card class="product-priceAndName column no-wrap" style="">
              <q-card class="NameAndprice">
                <h2 class="product-name" style="">{{ productDetails.name }}</h2>
                <h2 class="product-price" style="" v-if="productDetails.price">₦{{ price }}</h2>
              </q-card>
              <q-card class="counter row justify-center no-wrap" style="">
                <h5 class="Quantity-Label" style="">Quantity</h5>
                <q-card
                  class="quantity-counter row justify-between items-center q-px-md"
                  style=""
                  ><q-icon
                    clickable
                    name="img:/decrementor.svg"
                    style="cursor: pointer"
                    @click="counter--, reduceQuantity(productDetails.name, 1)"
                  />
                  <h3 class="CounterNumber" style="">{{ cart }}</h3>
                  <q-icon
                    clickable
                    name="img:/incrementor.svg"
                    style="cursor: pointer"
                    @click="
                      counter++,
                        addToCart(
                          productDetails.name,
                          productDetails.images[0],
                          1,
                          productDetails.price,
                          productDetails.id
                        )
                    "
                  />
                </q-card>
              </q-card>
            </q-card>
            <!-- product price and name -->
            <!-- product price and name -->

            <!-- product ratings  -->
            <!-- product ratings  -->
            <router-link
              :to="{ path: `/reviews/${productDetails.id}` }"
              style="text-decoration: none"
            >
              <q-card
                flat
                class="product-ratings q-pt-md column no-wrap items-center"
                style=""
              >
                <q-rating v-model="ratingModel" readonly class="ratingStar" style="" />
                <h2 class="product-rating" style="">
                  {{ productDetails.rating }} ratings
                </h2>
              </q-card>
            </router-link>
            <!-- product ratings -->
            <!-- product ratings -->
          </q-card>

          <q-card class="product-Description">
            <h3
              class="product-desc-label"
              style="
                line-height: 25px;
                color: #27141a;
                font-family: 'Catellosdemo';
                font-size: 190%;
                margin-bottom: -5%;
              "
            >
              Product description
            </h3>
            <h5 class="product-desc-text" style="">
              {{ productDetails.description }}
            </h5>
          </q-card>
          <q-card class="btns row no-wrap justify-between self-center" style="">
            <!-- Add to cart -->
            <q-btn
              text-color="white"
              class="AddToCartBtn q-mr-sm"
              label="Add to cart"
              style=""
              @click="
                addToCart(
                  productDetails.name,
                  productDetails.images[0],
                  1,
                  productDetails.price,
                  productDetails.id
                )
              " />
            <!-- Buy now button -->
            <q-btn
              text-color="white"
              class="AddToCartBtn2 q-ml-sm"
              label="Buy now"
              style=""
              @click="
                buyNow(
                  productDetails.name,
                  productDetails.images[0],
                  1,
                  productDetails.price,
                  productDetails.id
                )
              "
          /></q-card>
          <q-inner-loading :showing="Store.ShowLoading">
            <q-spinner-gears size="130px" color="primary" />
          </q-inner-loading>
        </q-card>
      </q-card>
    </div>
    <!-- Recently viewed Products -->
    <RecentlyViewed />
    <!-- Recently viewed Products -->
  </q-page>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { db } from "src/boot/firebase";
import {
  collection,
  query,
  arrayUnion,
  onSnapshot,
  where,
  doc,
  addDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { ref, reactive, onMounted, computed } from "vue";
import { useQuasar } from "quasar";
import { useCounterStore } from "stores/counter";
import RecentlyViewed from "src/components/RecentlyViewed.vue";
const router = useRouter();
const route = useRoute();
const ratingModel = ref(3);
const slide = ref(1);
const counter = ref(1);
const productDetails = reactive({});
const Store = useCounterStore();
const $q = useQuasar();
const cart = ref(1);

const initPurchase = () => {
  if (Store.isLoggedIn && Store.user.addresses) {
    let address = Store.user.addresses[0];
    let mainAddress = address.street;
    let phone = Store.user.phoneNumber;
    const details = reactive({
      name: Store.username,
      item: productDetails,
      address: mainAddress,
      landmark: address.landmark,
      phoneNumber: Store.user.phoneNumber,
      optionalNote: "none",
    });
    if (address) {
      console.log(address);
      if (phone) {
        console.log(phone);
        Object.assign(Store.checkout, details);
        Store.singleItem.push({
          image: productDetails.images[0],
          name: productDetails.name,
          price: productDetails.price,
          quantity: 1,
          productId: productDetails.id,
        });
        Store.cartTotal = productDetails.price;
        Store.buyNow();
      } else {
        Store.notifyUser(Store.user.profilePic, "Please add a Phone number for user");
      }
    } else {
      Store.notifyUser(Store.user.profilePic, "No address added for user");
    }
  } else {
    Store.notifyUser(Store.user.profilePic, "No address added for user");
  }
};
const price = computed(() => {
  if (productDetails) {
    return Number(productDetails.price).toLocaleString("en-US");
  }
});
const queryProduct = () => {
  const productQuery = query(
    collection(db, "products"),
    where("id", "==", route.params.id)
  );
  getDocs(productQuery).then((response) => {
    const details = response.docs.map((item) => {
      return item.data();
    });
    console.log(details);
    // productDetails.value.push(details[0]);
    Object.assign(productDetails, details[0]);
    console.log(productDetails);
    Store.addTorecently(
      productDetails.name,
      productDetails.price,
      productDetails.category,
      productDetails.images[0],
      productDetails.tag,
      productDetails.id,
      productDetails.favouriters
    );
  });
};
const addToCart = (name, image, quantity, price, id) => {
  // retrieve it (Or create a blank array if there isn't any info saved yet),
  const items = $q.localStorage.getItem("cartItems") || [];
  // add to it, only if it's empty
  const item = items.find((item) => item.name === name);
  if (item) {
    item.quantity += quantity;
    cart.value = item.quantity;
    console.log(cart);
  } else {
    items.push({
      name,
      image,
      quantity,
      price,
      id,
    });
  }
  // then put it back.
  $q.localStorage.set("cartItems", items);
  Store.notifyUser(Store.defaultPic, "Added to cart");
  console.log(items);
  // };
};
const buyNow = (name, image, quantity, price, id) => {
  $q.localStorage.remove("singleItems");
  // retrieve it (Or create a blank array if there isn't any info saved yet),
  const items = [];
  // const items = $q.localStorage.getItem("singleItems") || [];
  // add to it, only if it's empty
  items.push({
    name,
    image,
    quantity,
    price,
    id,
  });
  // then put it back.
  $q.localStorage.set("singleItems", items);
  Store.notifyUser(Store.defaultPic, "Checking Out...");
  console.log(items);
  router.push("/buynow");
  // };
};

const reduceQuantity = function (name, quantity) {
  const items = $q.localStorage.getItem("cartItems");
  const item = items.find((item) => item.name === name);
  if (item) {
    if (cart.value >= 2) {
      item.quantity -= quantity;
      cart.value = item.quantity;
    }
  }

  // then put it back.
  $q.localStorage.set("cartItems", items);
  console.log(items);
  // };
};

onMounted(() => {
  queryProduct();
});
</script>
<style scoped lang="sass">
.container
  body.screen--xl &
    width: 60%
    height: 1000px
    // height: 35vh
  body.screen--lg &
    width: 100%
    height: 700px
    // height: 70vh
  body.screen--md &
    width: 100%
    height: 700px
    // height: 105vh
  body.screen--sm &
    width: 100%
    height: 700px
    // height: 85vh
  body.screen--xs &
    flex-direction: column
    flex-wrap: nowrap
    width: 100vw
    height: fit-content

.product-images
  body.screen--xl &
    width: 45%
    height: 100%
  body.screen--lg &
    width: 45%
    height: 100%
  body.screen--md &
    width: 45%
    height: 100%
  body.screen--sm &
    width: 45%
    height: 100%
  body.screen--xs &
    border-radius: 12px
    // margin-top: -1%
    // padding: 0px
    width: 95%
    // height: 60vh
    // // margin-bottom: 30%
    // position: relative
    // top: 20%

.image-carousel
  min-width: 100%
  // body.screen--xl &
  //   width: 50%
  // body.screen--lg &
  //   width: 50%
  // body.screen--md &
  //   width: 50%
  //   height: 70%
  // body.screen--sm &
  //   width: 60%
  //   height: 70%
  body.screen--xs &
    min-width: 100%
    border-radius: 18px
    height: 320px
    margin-top: 10px
    margin-bottom: 10px
    max-height: 320px


.image-container
  body.screen--xl &
    height: 75%
    width: 95%
    border-radius: 15px
  body.screen--lg &
    height: 75%
    width: 95%
    border-radius: 15px
  body.screen--md &
    height: 75%
    width: 95%
    border-radius: 15px
  body.screen--sm &
    height: 75%
    width: 95%
    border-radius: 15px
  body.screen--xs &
    border-radius: 18px
    // margin-left: -0.5%
    // margin-top: -1%
    // padding: 0px
    // height: 100%
    width: 100%
    // position: relative
    // top: 8%
.mobile-image-container
  border-radius: 18px
  width: 95%


.product-details
  width: 45%
  height: 100%
  body.screen--xs &
    width: 105vw
    height: 100%

.RatingAndPrice
  body.screen--xl &
    width: 100%
  body.screen--lg &
    width: 100%
    height: fit-content
  body.screen--md &
    width: 100%
  body.screen--sm &
    width: 100%
    flex-direction: column
  body.screen--xs &
    flex-direction: column
    width: 100%

.column
  body.screen--xs &
    position: relative
    top: 50%
.product-name
  line-height: 1px
  color: #27141a
  font-family: 'Catellosdemo'
  font-size: 270%
  max-width: 200px
  body.screen--md &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 210%
    max-width: 250px
  body.screen--sm &
    line-height: 20px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 190%
    max-width: 250px
  body.screen--xs &
    line-height: 22px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 170%
    max-width: 200px
.product-price
  line-height: 25px
  color: #27141a
  font-family: 'Manrope-SemiBold'
  font-size: 190%
  body.screen--sm &
    line-height: 25px
    color: #27141a
    font-family: 'Manrope-SemiBold'
    font-size: 180%
  body.screen--xs &
    line-height: 25px
    color: #27141a
    font-family: 'Manrope-SemiBold'
    font-size: 170%
.product-desc-text
  body.screen--xl &
    line-height: normal
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 120%
    margin-top: 7%
  body.screen--lg &
    line-height: normal
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 120%
    margin-top: 7%
  body.screen--md &
    line-height: normal
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 120%
  body.screen--sm &
    line-height: normal
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 100%
  body.screen--xs &
    line-height: normal
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 110%

.btns
  width: 95%
  body.screen--xs &
    width: 90vw

.AddToCartBtn
  padding: 14px 5px 14px 5px
  border-radius: 12px
  width: 50%
  background: #27141a
  body.screen--md &
    padding: 11px 5px 11px 5px
    border-radius: 12px
    line-height: 1px
    font-size: 100%
    background: #27141a
  body.screen--sm &
    padding: 10px 5px 10px 5px
    border-radius: 12px
    line-height: 1px
    font-size: 90%
    background: #27141a
  body.screen--xs &
    padding: 10px 0px 10px 0px
    border-radius: 12px
    line-height: 1px
    font-size: 90%
    background: #27141a
.AddToCartBtn2
  padding: 14px 5px 14px 5px
  border-radius: 12px
  width: 50%
  background: #e6b41d
  body.screen--md &
    padding: 11px 5px 11px 5px
    font-size: 100%
    border-radius: 12px
    background: #e6b41d
  body.screen--sm &
    padding: 10px 5px 10px 5px
    font-size: 90%
    border-radius: 12px
    background: #e6b41d
  body.screen--xs &
    padding: 10px 0px 10px 0px
    font-size: 90%
    border-radius: 12px
    background: #e6b41d

.product-priceAndName
  height: fit-content
  body.screen--xs &
    flex-direction: row
    justify-content: space-between

.Quantity-Label
  line-height: 1px
  color: #666666
  font-family: 'Manrope-SemiBold'
  font-size: 120%
  margin-bottom: 9%
  body.screen--sm &
    margin-top: 7%
    line-height: 1px
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 120%
    margin-bottom: 7%
  body.screen--xs &
    margin-top: 16%
    line-height: 1px
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 120%
    margin-bottom: 15%
.counter
  height: fit-content
  flex-direction: column
  align-items: start
  body.screen--sm &
    height: fit-content
    width: 75%
    justify-content: space-between
  body.screen--xs &
    height: fit-content
    flex-direction: column
    align-items: center
    width: 40%
    margin-top: -1%
.quantity-counter
  body.screen--xl &
    border: 1px solid black
    width: 120px
    border-radius: 12px
  body.screen--lg &
    border: 1px solid black
    width: 120px
    border-radius: 12px
  body.screen--md &
    border: 1px solid black
    width: 120px
    border-radius: 12px
  body.screen--sm &
    border: 1px solid black
    width: 100px
    border-radius: 12px
  body.screen--xs &
    border: 1px solid black
    width: 100px
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
.product-ratings
  body.screen--xl &
    min-width: min-content
    align-items: flex-start
  body.screen--lg &
    min-width: min-content
    align-items: flex-start
  body.screen--md &
    min-width: min-content
    align-items: flex-start
  body.screen--sm &
    min-width: min-content
    align-items: flex-start
  body.screen--xs &
    min-width: min-content
    align-items: flex-start
.ratingStar
  body.screen--xl &
    color: #e6b41d
    font-size: 30px
  body.screen--lg &
    color: #e6b41d
    font-size: 30px
  body.screen--md &
    color: #e6b41d
    font-size: 23px
  body.screen--sm &
    color: #e6b41d
    font-size: 25px
  body.screen--xs &
    color: #e6b41d
    font-size: 20px
.product-rating
  body.screen--xl &
    line-height: 1px
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 160%
  body.screen--lg &
    line-height: 1px
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 150%
  body.screen--md &
    line-height: 1px
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 130%
  body.screen--sm &
    line-height: 1px
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 120%
  body.screen--xs &
    line-height: 1px
    color: #666666
    font-family: 'Manrope-SemiBold'
    font-size: 120%
</style>
