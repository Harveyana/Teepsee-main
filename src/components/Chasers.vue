<template>
  <q-card
    class="row product justify-between"
    style="width: 100%"
    v-for="product in Store.products.value"
    :key="product.id"
  >
    <!-- Product image and name -->
    <q-card
      class="image-And-Name row no-wrap justify-between items-center"
      style="width: 27%; position: relative; left: 2%"
    >
      <q-card class="image" style="width: 42%">
        <q-img
          :src="product.images[0]"
          spinner-color="black"
          class="favourite"
          style="width: 100%"
        />
      </q-card>
      <q-card class="Name" style="width: 57%">
        <h4 class="productName NameClass no-wrap" style="">
          {{ product.name.slice(0, 10) + ".." }}
        </h4>
      </q-card>
    </q-card>
    <!-- Product Price -->
    <q-card class="row ProductPrice flex flex-center" style="width: 15%">
      <h4 class="productPrice NameClass" style="">{{ product.price }}</h4>
    </q-card>
    <!-- Product Quantity -->
    <q-card
      class="row productCounter flex flex-center"
      style="width: 17%; position: relative; right: 2%"
    >
      <q-card
        class="quantity-counter row justify-between items-center q-px-md no-wrap"
        style=""
        ><q-icon
          clickable
          name="img:/decrementor.svg"
          style="cursor: pointer"
          @click="counter--, reduceQuantity(product.name, 1), $emit('my-event')"
        />
        <h3 class="CounterNumber" style="">{{ cart }}</h3>
        <q-icon
          clickable
          name="img:/incrementor.svg"
          style="cursor: pointer"
          @click="
            counter++,
              addToCart(product.name, product.images[0], 1, product.price),
              $emit('my-event')
          "
        />
      </q-card>
    </q-card>
    <!-- Product SubTotal -->
    <q-card
      class="row productSubTotalLabel flex flex-center"
      style="width: 17%; position: relative; right: 4%"
    >
      <q-btn
        text-color="white"
        class="AddToCartBtn"
        label="Add"
        style=""
        @click="
          counter++,
            addToCart(product.name, product.images[0], 1, product.price),
            $emit('my-event')
        "
      />
    </q-card>
  </q-card>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useQuasar } from "quasar";
import { useCounterStore } from "stores/counter";
const Store = useCounterStore();
const $q = useQuasar();
const cart = ref(1);
const counter = ref(1);

const addToCart = (name, image, quantity, price) => {
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
    });
  }
  // then put it back.
  $q.localStorage.set("cartItems", items);
  console.log(items);
  // };
};

const reduceQuantity = function (name, quantity) {
  const items = $q.localStorage.getItem("cartItems");
  const item = items.find((item) => item.name === name);
  if (item) {
    item.quantity -= quantity;
    cart.value = item.quantity;
  }

  // then put it back.
  $q.localStorage.set("cartItems", items);
  console.log(items);

  // };
};
onMounted(() => {
  Store.Fetchproducts("general");
});
</script>
<style scoped lang="sass">
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
    width: 100px
    height: 35px
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
.AddToCartBtn
  border-radius: 8px
  width: 100%
  height: 45px
  font-family: 'Manrope-Regular'
  text-transform: capitalize
  background: #27141a

.card-header
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 120%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 120%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 120%
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 120%
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
.productCat
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 70%

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
</style>
