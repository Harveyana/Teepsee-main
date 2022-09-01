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
    v-if="showSearch"
    style=""
    @mouseleave="showSearch = false"
  >
    <q-card>
      <q-card flat clickable class="flex column no-wrap justify-center">
        <q-card
          class="row imagebox"
          style=""
          v-for="product in productList"
          :key="product.id"
        >
          <q-card style="">
            <q-img
              :src="product.images[0]"
              spinner-color="white"
              class="product-image"
              style=""
            />
          </q-card>
          <q-card class="column">
            <q-card-section>
              <div class="text-h2 product-name" style="">{{ product.name }}</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h3 product-price" style="">₦{{ product.price }}</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 product-cat" style="">
                {{ product.category }}
              </div>
            </q-card-section>
          </q-card>
        </q-card>
      </q-card>
    </q-card>
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
  top: 95px
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
