<template>
  <q-card flat class="bg-transparent" style="width: 30%">
    <div class="input q-ml-sm">
      <img src="/search.png" alt="" />
      <input
        class="search q-pl-xl"
        type="text"
        v-model="searchResults"
        placeholder="search"
        @keydown="showSearch = true"
      />
    </div>
  </q-card>

  <q-banner
    class="gt-sm rows searchResults"
    style="z-index: 99"
    v-if="showSearch"
    @mouseleave="showSearch = false"
  >
    <q-card flat class="scroll hideScrollbar" style="max-height: 300px">
      <q-card flat clickable class="flex column no-wrap justify-center">
        <q-card
          class="row justify-start items-center imagebox q-mb-md"
          style=""
          v-for="product in productList"
          :key="product.id"
        >
          <q-card style="">
            <q-img
              :src="product.images[0]"
              spinner-color="white"
              class="product-image row flex-center"
              style=""
            />
          </q-card>
          <q-card class="column justify-between items-start">
            <q-card>
              <div class="text-h2 product-name" style="">{{ product.name }}</div>
            </q-card>
            <q-card>
              <div class="text-h3 product-price q-my-sm" style="">
                ₦{{ product.price }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h5 product-cat" style="">
                {{ product.category }}
              </div>
            </q-card>
          </q-card>
        </q-card>
      </q-card>
    </q-card>
  </q-banner>
</template>

<script>
import { computed, ref } from "vue";
import footerVue from "src/components/footer.vue";
import mainDrawerVue from "src/components/mainDrawer.vue";
import { useCounterStore } from "stores/counter";
// const Store = useCounterstore();

export default {
  name: "MainLayout",
  components: {
    footerVue,
    mainDrawerVue,
  },
  setup() {
    let link = ref("inbox");
    const Store = useCounterStore();
    const showSearch = ref(false);
    const showResults = ref(false);
    const searchResults = ref("");
    // const product = {
    //   name: "Hennessey",
    //   price: "₦5,000",
    //   cat: "Cognac",
    // };
    return {
      link,
      Store,
      showSearch,
      showResults,
      searchResults,
    };
  },
  computed: {
    // a computed getter
    productList: function () {
      // `this` points to the component instance
      // if (this.showSearch == true) {
      //   return this.Store.products.value.filter((product) =>
      //     product.name.toLowerCase().includes(this.searchResults.toLowerCase())
      //   );
      // }
      if (this.Store.products.value) {
        return this.Store.products.value.filter((product) => {
          return product.name.toLowerCase().match(this.searchResults.toLowerCase());
        });
      }
    },
  },
  // mounted() {
  //   this.Store.Fetchproducts("general");
  //   console.log(`the component is now mounted.`);
  // },
};
</script>
//
<style scoped lang="sass">
.imagebox
  body.screen--md &
    // height: 110px
    border-radius: 15px
  body.screen--sm &
    // height: 110px
    border-radius: 15px
  body.screen--xs &
    min-width: 100%
    height: 110px
    border-radius: 15px

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
  width: 70px
  object-fit: cover
  body.screen--sm &
    width: 80px
    object-fit: cover
  body.screen--xs &
    width: 80px
    object-fit: cover

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
.searchResults
  width: 38%
  position: absolute
  top: 80px
  left: 20%
  border-radius: 16px
  body.screen--md &
    width: 30%
    position: absolute
    left: 20%
    border-radius: 16px
  body.screen--sm &
    width: 60%
    position: absolute
    left: 20%
    border-radius: 16px
  body.screen--xs &
    width: 95%
    position: absolute
    left: 3%
    border-radius: 16px

.input
  width: 100%
  // position: relative
  // right: 30%
  // min-width: 45%
  // body.screen--md &
  //   position: relative
  //   right: 25%
  // body.screen--lg &
  //   position: relative
  //   right: 30%
  // body.screen--xl &
  //   position: relative
  //   right: 30%

.input >img
  body.screen--md &
    position: absolute
    top: 15px
    left: 9%
  body.screen--lg &
    position: absolute
    top: 15px
    left: 15px
  body.screen--xl &
    position: absolute
    top: 15px
    left: 15px

.search
  border-radius: 15px
  min-height: 50px
  width: 100%
  // min-width: 160%
  outline: none
  background: transparent
  border: 1px solid #27141A
  color: #27141A
  font-size: 120%
  body.screen--md &
    // min-width: 160%
  body.screen--lg &
    min-width: 180%
  body.screen--xl &
    min-width: 180%
  body.screen--sm &
    min-width: 120%




::placeholder  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #27141A
  opacity: 1 /* Firefox */


:-ms-input-placeholder  /* Internet Explorer 10-11 */
  color: #27141A


::-ms-input-placeholder  /* Microsoft Edge */
  color: #27141A
</style>
