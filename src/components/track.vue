<template>
  <q-card
    class="container column flex flex-center overflow-hidden no-wrap"
    style="border: 1px solid"
  >
    <q-icon
      name="img:/roundedClose.svg"
      size="18px"
      class="flex q-ml-md q-mt-md"
      style="position: absolute; top: 2%; right: 6%; z-index: 15"
      @click="Store.showTrackBox = false"
    />
    <q-card flat class="flex box-container column flex-center no-wrap" style="">
      <q-card flat class="flex column flex-center" style="z-index: 5; width: 100%">
        <div
          class="text-h3 Header card-header q-mb-sm"
          style="font-size: 20px; line-height: 15px"
        >
          Track Order
        </div>
        <div class="text-h4 NameClass" style="">Destination, Ibadan, Nigeria</div>
        <div class="text-h4 NameClass" style="">Tracking No: EHS2348798</div>
      </q-card>

      <q-separator style="width: 100%" />

      <q-card flat class="no-wrap" style="width: 100%">
        <q-stepper
          v-model="step"
          header-class="step-header"
          vertical
          active-icon="img:/trackmark.svg"
          inactive-color="grey"
        >
          <q-step
            :name="1"
            title="Pending"
            caption="Nov 9, 2020, 12:58PM"
            icon="img:/trackmark.svg"
            :done="false"
          >
          </q-step>

          <q-step
            :name="2"
            title="PickedUp"
            caption="Nov 9, 2020, 12:58PM"
            icon="img:/trackmark.svg"
            :done="false"
          >
          </q-step>

          <q-step
            :name="3"
            title="Intransit"
            caption="Nov 9, 2020, 12:58PM"
            icon="img:/trackmark.svg"
          >
          </q-step>

          <q-step
            :name="4"
            title="Completed"
            caption="Nov 9, 2020, 12:58PM"
            icon="img:/trackmark.svg"
          >
          </q-step>
        </q-stepper>
      </q-card>
      <q-btn
        text-color="white"
        class="checkoutBtn self-center bg-secondary"
        label="Contact Rider"
        style="width: 60%; height: 40px"
        @click="showNumberBox = true"
      />
    </q-card>
    <q-img
      src="../assets/teepsee-logo.svg"
      spinner-color="black"
      class=""
      style="width: 30%"
    />
    <q-dialog class="" v-model="showNumberBox">
      <q-card class="row flex-center text-center" style="width: 150px; height: 50px"
        ><div class="text-h4 NameClass" style="">086244691635</div></q-card
      >
    </q-dialog>
  </q-card>
  <!-- Box -->
  <!-- Box -->
</template>

<script setup>
import { useCounterStore } from "stores/counter";
import { ref } from "vue";
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
.engrave
  width: 19%
  position: absolute
  top: 0px
  left: 0px
  body.screen--xs &
    width: 25%
.box-container
  width: 95%
  height: 80%

.container
  border-radius: 15px
  max-width: 32%
  min-width: 32%
  height: 500px
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
  font-family: 'Manrope-semiBold'
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
  margin-bottom: 5px
  color: #666666
  font-family: 'Manrope-Regular'
  font-size: 13px
  body.screen--xs &
    line-height: 8px
    color: #666666
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
