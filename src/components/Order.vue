<template>
  <div v-for="order in Store.adminorders.value" :key="order.orderId">
    <q-separator
      class=""
      style="width: 92%; margin-bottom: 2%; position: relative; left: 4%"
    />
    <q-card
      flat
      class="row product q-px-xs-sm q-px-sm-lg q-px-md-lg q-px-lg-lg q-px-xl-lg justify-between"
      style="width: 100%; cursor: pointer"
    >
      <!-- Product image and name -->
      <q-card class="image-And-Name row no-wrap flex flex-center" style="">
        <q-card class="gt-xs Name" style="width: 70%; position: relative; right: 5%">
          <h4 class="Order NameClass" style="">{{ order.orderId }}</h4>
        </q-card>
      </q-card>
      <!-- Product Price -->
      <q-card
        class="row Quantity flex flex-center"
        style="width: 15%; position: relative; right: 3%"

      >
        <h4 class="Quantity NameClass" style="" v-if="order.items">
          {{ parseInt(order.items.length) }}
        </h4>
      </q-card>
      <!-- Product Quantity -->
      <q-card
        class="row OrderAmountLabel flex flex-center"
        style="width: 8%; position: relative; right: 1.8%"
      >
        <h4 class="OrderAmount NameClass" style="">₦{{ order.amount }}</h4>
      </q-card>
      <!-- Product SubTotal -->
      <q-card
        class="gt-xs row CouponUsersLabel flex flex-center"
        style="width: 15%; position: relative; right: 2%"
      >
        <h4 class="CouponUsers NameClass" style="color: green">{{ order.status }}</h4>
      </q-card>
      <!-- <q-card class="row Edit flex flex-center" style="position: relative; right: 3%"> -->
      <q-popup-proxy
        cover
        maxHeight="99vh"
        transition-show="slide-down"
        transition-hide="slide-up"
        style="width: 30vw; height: 50vh"
        class="bg-grey-3 scroll hide-scrollbar"
      >
        <q-card flat class="row justify-between q-px-lg q-my-md bg-grey-3">
          <h4 class="productName NameClass" style="font-size: Large">Order Items</h4>
          <q-btn class="checkoutBtn" label="Update Status" @click="confirm = true" />
        </q-card>

        <q-list
          class="bg-grey-3 edit-container row wrap justify-around"
          style="width: 60%"
        >
          <q-card
            class="imageName row no-wrap justify-between items-center q-mb-lg"
            style=""
            v-for="product in order.items"
            :key="product.name"
          >
            <q-card class="image" style="">
              <q-img
                :src="product.image"
                spinner-color="black"
                class="favourite"
                style="width: 70%"
              />
            </q-card>
            <q-card class="gt-xs Name" style="width: 50%">
              <h4 class="productName NameClass" style="">{{ product.name }}</h4>
              <h4 class="productCat" style="">{{ product.price }}</h4>
            </q-card>
            <q-card class="gt-xs Name" style="width: 20%">
              <h4 class="productName NameClass" style="font-size: medium">
                x {{ product.quantity }}
              </h4>
            </q-card>
          </q-card>
        </q-list>
        <h4 class="NameClass q-ml-md" style="font-size: small">{{ order.address }}</h4>
        <h4 class="NameClass q-ml-md" style="font-size: small">{{ order.landmark }}</h4>
        <h4 class="NameClass q-ml-md" style="font-size: small">{{ order.customer }}</h4>

        <!-- q-dialogue -->
        <!-- q-dialogue -->
        <!-- q-dialogue -->
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="Edit" color="primary" text-color="white" />
              <span class="q-ml-sm">Choose New Order Status .</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                label="Processing"
                color="red"
                v-close-popup
                @click="Store.updateOrderStatus('Processing', order.orderId)"
              />
              <q-btn
                flat
                label="Intransit"
                color="blue"
                v-close-popup
                @click="Store.updateOrderStatus('Intransit', order.orderId)"
              />
              <q-btn
                flat
                label="Completed"
                color="green"
                v-close-popup
                @click="Store.updateOrderStatus('Completed', order.orderId), Store.sendToreview(order.items, order.customer,order.orderId)"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
        <!-- q-dialogue -->
        <!-- q-dialogue -->
        <!-- q-dialogue -->
      </q-popup-proxy>
      <!-- </q-card> -->
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "stores/counter";
const Store = useCounterStore();
const confirm = ref(false);
// const files = ref(null);
</script>
<style scoped lang="sass">
.checkoutBtn
  border-radius: 8px
  width: 20%
  height: 41px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
  color: #e6b41d
.NameClass
  body.screen--xl &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--md &
    line-height: 5px
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
    font-size: 78%
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

.imageName

  width: 40%
  position: relative
  left: 5%
.image-And-Name

  width: 18%
  position: relative
  left: 5%


.image
  width: 45%
  body.screen--xs &
    width: 45%
    margin-right: 4%
</style>
