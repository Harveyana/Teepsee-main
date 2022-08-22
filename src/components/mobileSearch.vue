<template>
  <q-card
    flat
    class="bg-transparent"
    style="width: 5%; position: relative; top: 0px; left: 12%"
  >
    <q-btn
      dense
      flat
      round
      size="13px"
      icon="img:/vector.png"
      style=""
      @click="showSearch = true"
    />
  </q-card>
  <q-banner
    class="text-white searchResults lt-md"
    v-if="showSearch"
    style="z-index: 10"
    @mouseleave="(showSearch = false), (showResults = false)"
  >
    <q-icon
      name="img:/close.svg"
      class="flex"
      style="position: absolute; top: 15px; right: 25px; z-index: 10"
      @click="(showSearch = false), (showResults = false)"
    />
    <q-card flat>
      <q-input
        outlined
        bottom-slots
        color="grey"
        rounded
        label=" Search Products"
        style="width: 100%; border-radius: 30px; margin-top: 30px"
        @keydown="showResults = true"
      >
        <template v-slot:prepend>
          <q-icon
            name="img:/wineCup.svg"
            size="35px"
            class="searchIcon"
            style="height: 10px; transform: rotate(40deg)"
          />
        </template>
        <template v-slot:hint> Search Products </template>
      </q-input>
    </q-card>

    <!-- results -->
    <q-card flat v-if="showResults" class="scroll" style="width: 100%; max-height: 300px">
      <q-card flat class="" style="width: 100%">
        <q-card flat class="row imagebox" style="width: 100%">
          <q-card style="width: 35%; height: 100px">
            <q-img
              src="../assets/product1.png"
              spinner-color="white"
              class="product-image"
              style=""
            />
          </q-card>
          <q-card
            class="column items-start justify-center no-wrap"
            style="width: 60%; height: 100px"
          >
            <q-card>
              <div class="text-h2 product-name" style="">
                {{ product.name.slice(0, 9) + ".." }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h3 product-price" style="">
                {{ product.price }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h5 product-cat" style="">{{ product.cat }}</div>
            </q-card>
          </q-card>
        </q-card>
        <q-card flat class="row imagebox" style="width: 100%">
          <q-card style="width: 35%; height: 100px">
            <q-img
              src="../assets/product1.png"
              spinner-color="white"
              class="product-image"
              style=""
            />
          </q-card>
          <q-card
            class="column items-start justify-center no-wrap"
            style="width: 60%; height: 100px"
          >
            <q-card>
              <div class="text-h2 product-name" style="">
                {{ product.name.slice(0, 9) + ".." }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h3 product-price" style="">
                {{ product.price }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h5 product-cat" style="">{{ product.cat }}</div>
            </q-card>
          </q-card>
        </q-card>
        <q-card flat class="row imagebox" style="width: 100%">
          <q-card style="width: 35%; height: 100px">
            <q-img
              src="../assets/product1.png"
              spinner-color="white"
              class="product-image"
              style=""
            />
          </q-card>
          <q-card
            class="column items-start justify-center no-wrap"
            style="width: 60%; height: 100px"
          >
            <q-card>
              <div class="text-h2 product-name" style="">
                {{ product.name.slice(0, 9) + ".." }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h3 product-price" style="">
                {{ product.price }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h5 product-cat" style="">{{ product.cat }}</div>
            </q-card>
          </q-card>
        </q-card>
        <q-card flat class="row imagebox" style="width: 100%">
          <q-card style="width: 35%; height: 100px">
            <q-img
              src="../assets/product1.png"
              spinner-color="white"
              class="product-image"
              style=""
            />
          </q-card>
          <q-card
            class="column items-start justify-center no-wrap"
            style="width: 60%; height: 100px"
          >
            <q-card>
              <div class="text-h2 product-name" style="">
                {{ product.name.slice(0, 9) + ".." }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h3 product-price" style="">
                {{ product.price }}
              </div>
            </q-card>
            <q-card>
              <div class="text-h5 product-cat" style="">{{ product.cat }}</div>
            </q-card>
          </q-card>
        </q-card>
      </q-card>
    </q-card>
    <!-- results -->
  </q-banner>
</template>

<script>
import { ref } from "vue";
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
    const product = {
      name: "Hennessey",
      price: "₦5,000",
      cat: "Cognac",
    };
    return {
      link,
      Store,
      showSearch,
      showResults,
      product,
    };
  },
  computed: {
    // a computed getter
    productList() {
      // `this` points to the component instance
      if (this.showSearch == true) {
        return this.Store.products.value.filter((product) =>
          product.name.toLowerCase().includes(this.searchResults.toLowerCase())
        );
      }
    },
  },
  mounted() {
    this.Store.Fetchproducts("general");
    console.log(`the component is now mounted.`);
  },
};
</script>
//
<style scoped lang="sass">
.searchResults
  width: 38%
  position: absolute
  top: 10%
  left: 20%
  border-radius: 16px
  body.screen--md &
    width: 42%
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
    height: fit-content
    top: 30%
    left: 3%
    border-radius: 16px

.imagebox
  body.screen--md &
    height: 110px
    border-radius: 15px
  body.screen--sm &
    height: 110px
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
  body.screen--md &
    width: 80px
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
</style>
