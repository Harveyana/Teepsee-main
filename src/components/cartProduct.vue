<template>
  <q-separator
    class=""
    style="width: 92%; margin-bottom: 2%; position: relative; left: 4%"
  />
  <q-card
    flat
    class="row product q-px-xs-sm q-px-sm-lg q-px-md-lg q-px-lg-lg q-px-xl-lg justify-between"
    style="width: 100%"
  >
    <!-- Product image and name -->
    <q-card
      class="image-And-Name row no-wrap justify-xl-between justify-lg-between justify-md-between justify-sm-between justify-xs-start items-center"
      style=""
    >
      <q-card class="image" style="">
        <q-img
          :src="productImage"
          spinner-color="black"
          class="favourite"
          style="width: 100%"
        />
      </q-card>
      <q-card class="gt-xs Name" style="width: 50%">
        <h4 class="productName NameClass" style="">{{ productName }}</h4>
        <h4 class="productCat" style="">{{ productCategory }}</h4>
      </q-card>
      <q-card class="column lt-sm Name no-wrap" style="width: 50%; height: 90%">
        <h4 class="productName NameClass" style="font-family: 'Manrope-semiBold'">
          {{ productName }}
        </h4>
        <h4 class="productPrice NameClass" style="color: #27141a">₦{{ productPrice }}</h4>
        <!-- counter -->
        <!-- counter -->
        <q-card
          class="quantity-counter row justify-between items-center q-px-md no-wrap"
          style="margin-bottom: 10%"
          ><q-icon
            clickable
            name="img:/decrementor.svg"
            style="cursor: pointer"
            @click="counter--"
          />
          <h3 class="CounterNumber" style="">{{ counter }}</h3>
          <q-icon
            clickable
            name="img:/incrementor.svg"
            style="cursor: pointer"
            @click="counter++"
          />
        </q-card>
        <!-- counter -->
        <!-- counter -->
      </q-card>
    </q-card>
    <!-- Product Price -->
    <q-card
      class="gt-xs row ProductPrice flex flex-center"
      style="width: 15%; position: relative; left: 3%"
    >
      <h4 class="productPrice NameClass" style="">₦{{ productPrice }}</h4>
    </q-card>
    <!-- Product Quantity -->
    <q-card
      class="gt-xs row productQuantityLabel flex flex-center"
      style="width: 8%; position: relative; right: 1%"
    >
      <h4 class="productQuantity NameClass" style="">{{ productQuantity }}</h4>
    </q-card>
    <!-- Product SubTotal -->
    <q-card
      class="gt-xs row productSubTotalLabel flex flex-center"
      style="width: 15%; position: relative; right: 2%"
    >
      <h4 class="productSubTotal NameClass" style="">₦{{ SubTotal }}</h4>
    </q-card>
    <q-card class="row Remove flex flex-center" style="position: relative; right: 3%">
      <q-icon
        class="Removebtn"
        name="img:/Removebtn.svg"
        style="cursor: pointer"
        size="25px"
        @click="removeItem(), Store.componentKey++"
      />
    </q-card>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "stores/counter";
import { useQuasar } from "quasar";

export default {
  name: "cartProduct",

  props: {
    productName: String,
    productPrice: String,
    productCategory: String,
    productImage: String,
    productQuantity: Number,
  },
  data() {
    return {
      Store: useCounterStore(),
      $q: useQuasar(),
      counter: ref(1),
    };
  },
  methods: {
    removeItem() {
      const items = this.$q.localStorage.getItem("cartItems");
      let index = items.indexOf(this.productName);
      // const item = items.find((item) => item.name == this.productName);
      if (index) {
        // item.quantity -= quantity;
        // cart.value = item.quantity;
        items.splice(index, 1);
        // let itemId = indexOf(item);
        // items.remove(itemId);
        this.$q.localStorage.set("cartItems", items);
        this.Store.cartProducts.value = [...items];
        console.log(items);
      }

      // then put it back.

      // };
    },
    // increaseKey() {
    //   $parent.increaseKey();
    // },
  },
  computed: {
    // a computed getter
    SubTotal() {
      // `this` points to the component instance
      return this.productPrice * this.productQuantity;
    },
  },
};
</script>
<style scoped lang="sass">
.NameClass
  body.screen--xl &
    line-height: 15px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--lg &
    line-height: 15px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--md &
    line-height: 15px
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
    font-size: 70%
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

  width: 25%
  position: relative
  left: 2%
  body.screen--xs &
    width: 90%

.image
  width: 45%
  body.screen--xs &
    width: 45%
    margin-right: 4%
</style>
