<template>
  <q-tab-panels
    v-model="Store.panel"
    animated
    transition-prev="jump-up"
    transition-next="jump-up"
  >
    <q-tab-panel :name="Store.Address" class="overflow-hidden">
      <div class="AddressContainer justify-center items-start content-start" style="">
        <q-icon name="img:/back.svg" size="28px" class="flex lt-md q-ml-md q-mt-md" />
        <div class="text-h1 addressLabel" style="" v-show="Store.Showsetup">Address</div>
        <q-card flat class="column inputBox" style="">
          <!-- inputs -->
          <q-card-section class="input1">
            <div class="text-h6 inputLabel" style="color: #27141a">
              Enter Address<span style="color: red">*</span>
            </div>
            <q-input
              v-model="Oldpass"
              required
              borderless
              class="inputAddress"
              style=""
            />
          </q-card-section>
          <q-card-section class="input2">
            <div class="text-h6 inputLabel" style="color: #27141a">
              Landmark<span style="color: red">*</span>
            </div>
            <q-input
              v-model="Oldpass"
              required
              borderless
              class="inputAddress"
              style=""
            />
          </q-card-section>
          <!-- inputs -->
          <q-card-section>
            <q-btn text-color="white" class="AddButton" label="Save" />
          </q-card-section>
        </q-card>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { useCounterStore } from "stores/counter";
import { ref } from "vue";
const Store = useCounterStore();
</script>

<style scoped lang="sass">
.AddressContainer
  body.screen--xl &
    width: 45vw
  body.screen--lg &
    width: 45vw
  body.screen--md &
    width: 45vw
  body.screen--sm &
    width: 65vw
  body.screen--xs &
    // align-items: center
    width: 89vw

.inputBox
  body.screen--xl &
    width: 50%
    margin-left: 5%
  body.screen--lg &
    width: 70%
    margin-left: 5%
  body.screen--md &
    width: 70%
    margin-left: 5%
  body.screen--sm &
    width: 80%
    margin-left: 5%
  body.screen--xs &
    width: 85vw
.inputAddress
  body.screen--xl &
    background: #f5f5f5
    width: 100%
    border-radius: 10px
    padding-left: 15px
  body.screen--lg &
    background: #f5f5f5
    width: 100%
    border-radius: 10px
    padding-left: 15px
  body.screen--md &
    background: #f5f5f5
    width: 100%
    border-radius: 10px
    padding-left: 15px
  body.screen--sm &
    background: #f5f5f5
    width: 100%
    border-radius: 10px
    padding-left: 15px
  body.screen--xs &
    background: #f5f5f5
    width: 100%
    border-radius: 10px
    padding-left: 15px
.addressLabel
  body.screen--xl &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // font-size: 27px
    margin-left: 4.5%
    margin-top: 65px
    color: #27141A
    // line-height: 5px
  body.screen--lg &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // font-size: 27px
    margin-left: 4.5%
    margin-top: 45px
    color: #27141A
    // line-height: 205px
  body.screen--md &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    margin-top: 35px
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
    font-size: 220%
    margin-left: 20px
    color: #27141A
    line-height: 20px
    margin-top: 20px
    margin-bottom: 30px

.AddButton
  body.screen--xl &
    min-width: 100%
    min-height: 48px
    margin-top: 6%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--lg &
    min-width: 100%
    min-height: 48px
    margin-top: 6%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--md &
    min-width: 100%
    margin-top: 6%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--sm &
    min-width: 100%
    min-height: 48px
    margin-top: 6%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--xs &
    min-width: 100%
    margin-top: 5%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
</style>
