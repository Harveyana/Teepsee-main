<template>
  <q-card class="container column flex flex-center overflow-hidden no-wrap" style="">
    <q-icon
      name="img:/roundedClose.svg"
      size="18px"
      class="flex q-ml-md q-mt-md"
      style="position: absolute; top: 2%; right: 6%; z-index: 15"
      @click="Store.showAgeConfirmBox = false"
    />
    <q-card
      flat
      class="flex box-container column flex-center no-wrap"
      style="height: 45%"
    >
      <!-- <q-img
        src="../assets/ageConfirm.svg"
        spinner-color="black"
        class=""
        style="width: 100%; height: 100%"
      /> -->
      <q-card flat class="flex column featureImage" style="width: 100%; height: 100%">
        <!-- <div
          class="text-h3 Header card-header q-mb-sm"
          style="font-size: 20px; line-height: 15px"
        >
          Track Order
        </div>
        <div class="text-h4 NameClass" style="">Destination, Ibadan, Nigeria</div>
        <div class="text-h4 NameClass" style="">Tracking No: EHS2348798</div> -->
      </q-card>

      <!-- <q-separator style="width: 100%" /> -->

      <!-- <q-btn
        text-color="white"
        class="checkoutBtn self-center bg-secondary"
        label="Contact Rider"
        style="width: 60%; height: 40px"
        @click="showNumberBox = true"
      /> -->
    </q-card>
    <q-card
      flat
      class="no-wrap flex column justify-start items-center"
      style="width: 100%; height: 55%"
    >
      <div
        class="text-h3 Header card-header q-mb-sm"
        style="font-size: 22px; line-height: 15px"
      >
        Welcome to Teepsee
      </div>
      <div class="text-h4 NameClass q-mb-sm" style="">Please drink responsibly</div>
      <div class="text-h4 NameClass q-mb-sm" style="">
        Confirm if you are eligible to visit this site
      </div>
      <q-btn
        text-color="white"
        class="checkoutBtn self-center bg-primary q-mb-sm"
        label="I’m 18 years and above"
        style="width: 80%; height: 38px"
        @click="
          $q.localStorage.set('AgeConfirmed', true), (Store.showAgeConfirmBox = false)
        "
      />
      <q-btn
        text-color="white"
        class="checkoutBtn self-center bg-secondary"
        label="I’m below 18 years"
        style="width: 80%; height: 38px"
        @click="
          $q.localStorage.set('AgeConfirmed', false), (Store.showAgeConfirmBox = false)
        "
      />
    </q-card>
    <!-- <q-img
      src="../assets/teepsee-logo.svg"
      spinner-color="black"
      class=""
      style="width: 50%"
    /> -->
  </q-card>
  <!-- Box -->
  <!-- Box -->
</template>

<script setup>
import { useCounterStore } from "stores/counter";
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const Store = useCounterStore();
const ratingModel = ref(3);
const showNumberBox = ref(false);
const step = ref(1);
const formData = ref({
  email: "",
  password: "",
});
</script>
<style scoped lang="sass">
.featureImage
  background: url("../assets/ageConfirm.svg")
  background-repeat: no-repeat
  background-position: bottom
  border-radius: 19px
  background-size: cover
  height: 100%
.engrave
  width: 19%
  position: absolute
  top: 0px
  left: 0px
  body.screen--xs &
    width: 25%
.box-container
  width: 100%
  height: 100%
  border-radius: 15px

.container
  border-radius: 15px
  max-width: 32%
  min-width: 32%
  height: 400px
  position: relative
  body.screen--md &
    margin-bottom: 5%
  body.screen--sm &
    max-width: 50%
    min-width: 50%
    margin-top: 5%
    margin-bottom: 5%
  body.screen--xs &
    height: 500px
    max-width: 94%
    min-width: 94%
    margin-top: 20%

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
  line-height: 13px
  font-family: 'Manrope-Regular'
  text-transform: capitalize
  background: #27141a
.step-header
  line-height: 15px
  margin-bottom: 5px
  color: #666666
  font-family: 'Manrope-Regular'
  font-size: 7px
.NameClass
  line-height: 15px
  // margin-bottom: 5px
  // color: #666666
  font-family: 'Manrope-semiBold'
  font-size: 11px
  body.screen--xs &
    line-height: 8px
    // color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 10px
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
