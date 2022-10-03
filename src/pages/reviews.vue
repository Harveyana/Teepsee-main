<template>
  <q-page
    class="flex flex-center q-pa-xl-xl q-pa-lg-xl q-pa-md-xl q-pa-sm-sm"
    style="background: #e5e5e5"
  >
    <q-card flat class="bg-transparent row container justify-between no-wrap" style="">
      <q-card class="column estimate-box q-px-md q-py-md" style="">
        <q-card class="column ratingsAndReviews" style="width: 100%">
          <q-card class="header-box" style="width: 100%">
            <h3 class="ratingsAndReviews-Label card-header no-wrap" style="">
              Verified Ratings and Reviews
            </h3>
            <h3 class="estimate" style="">{{ topRating }}/5</h3>
          </q-card>
          <q-card class="ratings-box" style="width: 100%; position: relative; bottom: 5%">
            <q-rating v-model="topRating" readonly class="ratingStar" style="" />
            <h3 class="ratings-total no-wrap" style="">
              {{ productDetails.rating }} verified ratings
            </h3>
          </q-card>
          <!-- ratings-group -->
          <ratingsVue
            :ratingOne="ratings.one"
            :ratingTwo="ratings.two"
            :ratingThree="ratings.three"
            :ratingFour="ratings.four"
            :ratingFive="ratings.five"
          ></ratingsVue>
          <!-- ratings-group -->
        </q-card>
      </q-card>
      <q-card
        class="comments-box q-px-xs-sm q-px-md-lg q-px-sm-lg q-px-lg-lg q-px-xl-lg q-py-xs-md q-py-sm-lg q-py-md-xl q-py-lg-xl q-py-xl-xl scroll hide-scrollbar"
        style=""
      >
        <!-- comments -->
        <!-- comments -->
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </q-card>
    </q-card>
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
import ratingsVue from "src/components/ratings.vue";
import Comments from "../components/comments.vue";
const Store = useCounterStore();
const productDetails = reactive({});
const router = useRouter();
const route = useRoute();

const ratingModel = ref(3);

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
  });
};
const ratings = () => {
  if (productDetails.ratings) {
    let rating = productDetails.ratings;
    values = Object.values(rating);
    return values;
  }
};
const topRating = computed(() => {
  if (productDetails.ratings) {
    let rating = productDetails.ratings;
    let values = Object.values(rating);
    // console.log(values); // 👉️ [10, 20, 5, 15]
    let max = Math.max(...values);
    const biggerValue = Object.keys(rating).find((key) => rating[key] === max);
    return biggerValue == "one"
      ? 1
      : biggerValue == "two"
      ? 2
      : biggerValue == "three"
      ? 3
      : biggerValue == "four"
      ? 4
      : 5;
  }
});

// const standard = ref({
//   min: 0,
//   max: 2,
// });
onMounted(() => {
  queryProduct();
});
</script>
<style scoped lang="sass">
.card-header
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 140%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 140%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 140%
  body.screen--sm &
    line-height: 20px
    text-align: center
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 130%
  body.screen--xs &
    line-height: 20px
    // text-align: center
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 130%
.ratings-total
  line-height: 5px
  color: #1f1e26
  font-family: 'Manrope-semiBold'
  font-size: 125%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 105%
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 105%
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
    margin-bottom: 1%
  body.screen--sm &
    color: #e6b41d
    font-size: 16px
  body.screen--xs &
    color: #e6b41d
    font-size: 16px

.container
  body.screen--xl &
    width: 60%
  body.screen--lg &
    width: 85%
  body.screen--md &
    width: 100%
  body.screen--sm &
    width: 100%
  body.screen--xs &
    width: 90%
    flex-direction: column-reverse

.estimate-box
  body.screen--xl &
    width: 30%
    border-radius: 15px
    max-height: 35vh
  body.screen--lg &
    width: 30%
    border-radius: 15px
    max-height: 56vh
  body.screen--md &
    width: 30%
    border-radius: 15px
    max-height: 70vh
  body.screen--sm &
    width: 40%
    border-radius: 15px
    max-height: 70vh
  body.screen--xs &
    width: 100%
    border-radius: 15px
    max-height: 70vh
    margin-bottom: 20%

.comments-box
  body.screen--xl &
    width: 65%
    max-height: 55vh
    border-radius: 15px
  body.screen--lg &
    width: 65%
    max-height: 85vh
    border-radius: 15px
  body.screen--md &
    width: 65%
    max-height: 95vh
    border-radius: 15px
  body.screen--sm &
    width: 80%
    max-height: 95vh
    border-radius: 15px
    margin-left: 2%
  body.screen--xs &
    width: 100%
    max-height: 85vh
    border-radius: 15px
    margin-bottom: 15%
.estimate
  font-family: 'Manrope-Regular'
  line-height: 1px
  font-size: 270%
  body.screen--sm &
    font-family: 'Manrope-Regular'
    line-height: 1px
    font-size: 220%
  body.screen--xs &
    font-family: 'Manrope-Regular'
    line-height: 1px
    font-size: 200%
</style>
