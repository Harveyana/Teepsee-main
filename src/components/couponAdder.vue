<template>
  <q-card
    flat
    class="edit-container row no-wrap justify-between q-mx-md overflow-hidden"
    style="width: 95%; height: inherit"
  >
    <q-card class="inputs q-mx-ld" style="width: 80%">
      <!-- inputs -->
      <!-- Product Name  -->
      <q-card class="input1" style="width: 90%">
        <h4 class="NameClass">Coupon Name</h4>
        <q-input
          filled
          label="Coupon Name"
          v-model="coupon.name"
          style="border-radius: 15px; width: 100%"
        />
      </q-card>
      <!-- Product Price -->
      <q-card class="input2" style="width: 80%">
        <h4 class="NameClass">Coupon Code</h4>
        <q-input
          filled
          label="Coupon Code"
          v-model="coupon.code"
          style="border-radius: 15px; width: 60%"
        />
      </q-card>
      <!-- Product Category -->
      <q-card class="input3" style="width: 80%">
        <h4 class="NameClass">Coupon Discount</h4>
        <q-input
          filled
          prefix="%"
          label="Coupon Discount"
          v-model="coupon.discount"
          style="border-radius: 15px; width: 60%"
        />
      </q-card>
      <!-- inputs -->
    </q-card>
  </q-card>
  <!-- submitBtn and UploadBtn -->
  <!-- submitBtn and UploadBtn-->
  <q-card flat class="submitBtn q-ml-lg q-my-md" style="width: 20%">
    <q-btn
      text-color="white"
      class="checkoutBtn"
      label="Submit"
      @click="Store.addCoupon(coupon)"
    />
  </q-card>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useCounterStore } from "stores/counter";
const Store = useCounterStore();

const coupon = reactive({
  name: "",
  code: "",
  discount: "",
});
// const files = ref(null);
</script>

<style scoped lang="sass">
.checkoutBtn
  border-radius: 8px
  margin-top: 2%
  margin-left: 2%
  width: 100%
  height: 51px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
.NameClass
  body.screen--xl &
    line-height: 16px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--lg &
    line-height: 16px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--md &
    line-height: 16px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--sm &
    line-height: 16px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--xs &
    line-height: 16px
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
