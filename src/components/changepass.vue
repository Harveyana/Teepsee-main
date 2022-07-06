<template>
  <q-banner class="text-white row banner" style="" v-if="Store.ShowChangePass">
    <div>
      <q-icon
        name="img:/back.svg"
        size="20px"
        class="flex q-ml-md q-mt-md"
        @click="
          (Store.ShowChangePass = !Store.ShowChangePass),
            (Store.Showsetup = !Store.Showsetup)
        "
      />
      <div class="text-h1 changePassLabel" style="">Change Password</div>
    </div>
    <!-- Enter old password -->
    <div class="input1">
      <div class="text-h6 inputLabel" style="color: #27141a">Enter old password</div>
      <div class="input row">
        <div class="inputBox">
          <q-input
            v-model="Oldpass"
            :type="[Store.hide1 ? 'text' : 'password']"
            borderless
            class="inputEdit"
          >
          </q-input>
        </div>
        <q-btn
          flat
          class="toggle"
          :label="[Store.hide1 ? 'Hide' : 'Show']"
          :class="[Store.hide1 ? 'activeClass' : 'notactive']"
          style=""
          @click="Store.hide1 = !Store.hide1"
        />
      </div>
    </div>
    <!-- Enter old password -->
    <!-- Enter new password -->
    <div class="input1">
      <div class="text-h6 inputLabel" style="color: #27141a">Enter new password</div>
      <div class="input row">
        <div class="inputBox">
          <q-input
            class="inputEdit"
            v-model="Newpass"
            :type="[Store.hide2 ? 'text' : 'password']"
            borderless
          >
          </q-input>
        </div>
        <q-btn
          flat
          class="toggle"
          :label="[Store.hide2 ? 'Hide' : 'Show']"
          :class="[Store.hide2 ? 'activeClass' : 'notactive']"
          style="background: #f5f5f5"
          @click="Store.hide2 = !Store.hide2"
        />
      </div>
    </div>
    <!-- Enter new password -->
    <!-- Confirm password -->
    <div class="input1">
      <div class="text-h6 inputLabel" style="color: #27141a">Confirm password</div>
      <div class="input row">
        <div class="inputBox">
          <q-input
            v-model="ConfirmPass"
            class="inputEdit"
            :type="[Store.hide3 ? 'text' : 'password']"
            borderless
          >
          </q-input>
        </div>
        <q-btn
          flat
          class="toggle"
          :label="[Store.hide3 ? 'Hide' : 'Show']"
          :class="[Store.hide3 ? 'activeClass' : 'notactive']"
          style="background: #f5f5f5"
          @click="Store.hide3 = !Store.hide3"
        />
      </div>
    </div>
    <!-- Enter old password -->
    <q-btn text-color="white" class="EditButton" label="Update" />
  </q-banner>
</template>

<script setup>
import { useCounterStore } from "stores/counter";
import { ref } from "vue";
const Store = useCounterStore();

// const hide1 = ref(false);
// const hide2 = ref(false);
// const hide3 = ref(false);
// const ShowChangePass = ref(false);
// const Showsetup = ref(true);
</script>

<style scoped lang="sass">
.banner
  body.screen--xl &
    width: 30vw
  body.screen--lg &
    width: inherit
  body.screen--md &
    width: inherit
  body.screen--sm &
    width: inherit
  body.screen--xs &
    width: inherit

.inputLabel
  body.screen--md &
    font-size: 150%
    font-family: "Manrope-Regular"
  body.screen--sm &
    font-size: 120%
    font-family: "Manrope-Regular"
  body.screen--xs &
    font-size: 110%
    font-family: "Manrope-Regular"

.inputBox
  body.screen--xl &
    background: #f5f5f5
    width: 50%
    border-radius: 10px
    border-bottom-right-radius: 0px
    border-top-right-radius: 0px
  body.screen--lg &
    background: #f5f5f5
    width: 50%
    border-radius: 10px
    border-bottom-right-radius: 0px
    border-top-right-radius: 0px
  body.screen--md &
    background: #f5f5f5
    width: 50%
    border-radius: 10px
    border-bottom-right-radius: 0px
    border-top-right-radius: 0px
  body.screen--sm &
    background: #f5f5f5
    width: 50%
    height: 48px
    border-radius: 10px
    border-bottom-right-radius: 0px
    border-top-right-radius: 0px
  body.screen--xs &
    background: #f5f5f5
    width: 60%
    height: 48px
    border-radius: 10px
    border-bottom-right-radius: 0px
    border-top-right-radius: 0px
.toggle
  background: #f5f5f5
  border-radius: 10px
  border-bottom-left-radius: 0px
  border-top-left-radius: 0px
.activeClass
  color: #27141a
.notactive
  color: #e6b41d
.inputEdit
  body.screen--xl &
    width: 80%
    padding-left: 15px
  body.screen--lg &
    width: 80%
    padding-left: 15px
  body.screen--md &
    width: 80%
    padding-left: 15px
  body.screen--sm &
    width: 80%
    padding-left: 15px
  body.screen--xs &
    width: 80%
    padding-left: 15px


.input1,.input2,.input3
  margin-top: 3%
  margin-left: 3%
.EditButton
  body.screen--xl &
    min-width: 60%
    min-height: 48px
    margin-top: 6%
    margin-left: 3%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--lg &
    min-width: 60%
    min-height: 48px
    margin-top: 6%
    margin-left: 3%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--md &
    min-width: 60%
    margin-top: 6%
    margin-left: 3%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--sm &
    min-width: 60%
    min-height: 48px
    margin-left: 3%
    margin-top: 6%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--xs &
    min-width: 100%
    margin-top: 15%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"

.cta
  body.screen--sm &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
  body.screen--md &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
  body.screen--lg &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
  body.screen--xl &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
  body.screen--xs &
    font-size: 110%
    border-radius: 8px
    margin-left: 18px
    background: #27141a
    text-transform: capitalize
    font-family: "Manrope-SemiBold"
.changePassLabel
  body.screen--xl &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // font-size: 27px
    margin-left: 4.5%
    // margin-top: 65px
    color: #27141A
    // line-height: 5px
  body.screen--lg &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // font-size: 27px
    margin-left: 4.5%
    margin-top: 1px
    color: #27141A
    // line-height: 205px
  body.screen--md &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // margin-top: 35px
    // font-size: 27px
    margin-left: 4.5%
    color: #27141A
    // line-height: 5px
  body.screen--sm &
    min-width: 200px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 220%
    margin-left: 35px
    color: #27141A
    line-height: 70px
  body.screen--xs &
    min-width: 200px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 160%
    margin-left: 20px
    color: #27141A
    line-height: 20px
    margin-top: 10px
    margin-bottom: 30px
</style>
