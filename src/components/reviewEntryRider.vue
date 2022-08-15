<template>
  <q-card class="container row flex flex-center q-pt-xl" style="">
    <img
      alt="teepsee logo"
      src="~assets/engrave-yel.svg"
      class="engrave"
      style="z-index: 10"
    />
    <q-icon
      name="img:/roundedClose.svg"
      size="28px"
      class="flex lt-md q-ml-md q-mt-md"
      style="position: absolute; top: 2%; right: 4%"
      @click="Store.showReviewBox = false"
    />
    <q-card class="box-container column q-mb-xl q-mt-xs-sm flex-center" style="">
      <q-card class="HeaderName column bg-transparent flex-center" style="z-index: 5"
        ><h3 class="Header card-header" style="font-size: 200%; line-height: 1px">
          Hello Anayo
        </h3>
        <h4 class="NameClass">Please rate the rider</h4>
      </q-card>

      <q-card class="Input2 column flex-center" style="width: 100%">
        <q-img
          src="../assets/product1.png"
          spinner-color="white"
          class="favourite"
          style="width: 25%; border-radius: 50%"
        />
        <q-rating
          v-model="ratingModel"
          class="q-mt-md"
          size="2.4em"
          :max="5"
          color="secondary"
          style=""
        />
      </q-card>
      <q-card class="btns column items-center" style="width: 100%">
        <q-input
          borderless
          type="textarea"
          class="q-mt-md"
          placeholder="Drop a comment (Optional)"
          v-model="formData.password"
          style="
            width: 100%;
            padding-left: 25px;
            border: 1px solid #e0e0e0;
            border-radius: 15px;
          "
        />
        <q-btn
          text-color="white"
          class="checkoutBtn self-center"
          label="Submit"
          style=""
        />
      </q-card>
    </q-card>
  </q-card>
  <!-- Box -->
  <!-- Box -->
</template>

<script setup>
import { useCounterStore } from "stores/counter";
import { ref } from "vue";
const Store = useCounterStore();
const ratingModel = ref(3);
const formData = ref({
  email: "",
  password: "",
});
</script>
<style scoped lang="sass">
.engrave
  width: 19%
  position: absolute
  top: 0px
  left: 0px
  body.screen--xs &
    width: 25%
.box-container
  width: 70%
  height: 60%
  body.screen--xs &
    width: 82%
.container
  border-radius: 15px
  max-width: 32%
  min-width: 32%
  height: fit-content
  position: relative
  body.screen--md &
    margin-bottom: 5%
  body.screen--sm &
    max-width: 50%
    min-width: 50%
    margin-top: 5%
    margin-bottom: 5%
  body.screen--xs &
    max-width: 94%
    min-width: 94%
    margin-top: 20%
    margin-bottom: 18%

.page
  background-image: url("/loginBackground.svg")
  background-size: cover
  background-repeat: no-repeat
  // height: 90vh
  // width: 100vw
.checkoutBtn
  margin-top: 8px
  border-radius: 8px
  width: 100%
  height: 45px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
.NameClass
  body.screen--xl &
    line-height: 5px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 120%
  body.screen--lg &
    line-height: 5px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 120%
  body.screen--md &
    line-height: 0px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 120%
  body.screen--sm &
    line-height: 5px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 120%
  body.screen--xs &
    line-height: 15px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 110%
.card-header
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 215%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 215%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 130%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 170%
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 170%
</style>
