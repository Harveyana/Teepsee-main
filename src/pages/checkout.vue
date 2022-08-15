<template>
  <q-page
    class="column flex flex-center q-px-xl-xl q-px-lg-xl q-px-md-xl q-px-sm-xl q-px-xs-none"
    style="background: #e5e5e5"
  >
    <h2 class="PageName self-start items-start" style="">Delivery Information</h2>
    <div class="container row justify-between" style="">
      <q-card class="cart q-pb-md self-start" style="">
        <q-card style="width: 100%">
          <q-tabs
            v-model="tab"
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
            style=""
          >
            <q-tab
              name="Personal Delivery"
              label="Personal Delivery"
              style="font-family: 'Catellosdemo'; font-size: 30px"
            />
            <q-tab
              name="Send to a friend"
              label="Send to a friend"
              style="font-family: 'Catellosdemo'"
            />
          </q-tabs>

          <!-- <q-separator /> -->

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel
              name="Personal Delivery"
              class="q-px-xl-xl q-px-lg-xl q-px-md-xl q-px-sm-xl q-px-xs-md"
            >
              <div class="text-h6" style="">Use Address on my Profile</div>

              <q-card flat class="addresses" style="width: 90%">
                <!-- Adresses -->
                <!-- Adresses -->
                <q-radio
                  v-model="Address"
                  val="15, Abate way Victoria Island Lagos"
                  label="15, Abate way Victoria Island Lagos"
                  :color="primary"
                  style="color: #444444; font-family: 'Manrope-semiBold'"
                />
                <!-- Addresses -->
                <!-- Addresses -->
              </q-card>
              <q-card flat class="address-inputs q-mt-xl" style="">
                <q-card flat class="addressInput1 columns q-mb-lg">
                  <h3 class="fieldName">
                    Enter Address<span style="color: red">*</span>
                  </h3>
                  <q-input borderless class="q-px-md field" v-model="text" />
                </q-card>
                <q-card flat class="addressInput2 columns q-mb-lg">
                  <h3 class="fieldName">Landmark</h3>
                  <q-input borderless class="q-px-md field" v-model="text" />
                </q-card>
                <q-card flat class="addressInput3 columns q-mb-xl">
                  <h3 class="fieldName">Phone Number<span style="color: red">*</span></h3>
                  <q-input borderless class="q-px-md field" v-model="text" />
                </q-card>
              </q-card>
            </q-tab-panel>

            <q-tab-panel
              name="Send to a friend"
              class="q-px-xl-xl q-px-lg-xl q-px-md-xl q-px-sm-xl q-px-xs-md"
            >
              <q-card flat class="address-inputs q-mt-xl" style="">
                <q-card flat class="addressInput1 columns q-mb-lg">
                  <h3 class="fieldName">
                    Receiver’s Name<span style="color: red">*</span>
                  </h3>
                  <q-input borderless class="q-px-md field" v-model="text" />
                </q-card>

                <q-card flat class="addressInput2 columns q-mb-lg">
                  <h3 class="fieldName">
                    Receiver’s Address<span style="color: red">*</span>
                  </h3>
                  <q-input borderless class="q-px-md field" v-model="text" />
                </q-card>

                <q-card flat class="addressInput3 columns q-mb-xl">
                  <h3 class="fieldName">
                    Receivers Phone Number<span style="color: red">*</span>
                  </h3>
                  <q-input borderless class="q-px-md field" v-model="text" />
                </q-card>
                <q-card flat class="addressInput3 columns q-mb-xl">
                  <h3 class="fieldName">Enter Note (Optional)</h3>
                  <q-input
                    borderless
                    type="textarea"
                    class="q-px-md field"
                    v-model="text"
                    style="height: 120px"
                  />
                </q-card>
              </q-card>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>

        <!-- summary -->
        <!-- summary -->
      </q-card>
      <q-card class="row summary justify-center q-pa-lg" style="">
        <q-card class="column summary-container" style="width: 100%">
          <q-card><h3 class="summaryLabel card-header" style="">Summary</h3></q-card>
          <q-separator class="" style="" />
          <q-card class="summaryItems q-my-lg">
            <q-card class="row justify-between subtotal">
              <h4 class="subtotalKey NameClassLess" style="">Subtotal</h4>
              <h4 class="subtotalEntry NameClass" style="">₦13,047.00</h4>
            </q-card>
            <q-card class="row justify-between Delivery">
              <h4 class="DeliveryKey NameClassLess" style="">Delivery Fee</h4>
              <h4 class="DeliveryEntry NameClass" style="">₦1,047.00</h4>
            </q-card>
            <q-card class="row justify-between Total">
              <h4 class="TotalKey NameClass" style="">Total</h4>
              <h4 class="TotalEntry NameClass" style="">₦12,000.00</h4>
            </q-card>
          </q-card>
          <q-separator class="" style="" />
          <q-card
            class="row no-wrap CouponInput justify-between self-center q-my-xl"
            style="width: 80%; height: 41px; border-radius: 12px"
          >
            <q-input
              class="discountEntry"
              dense
              borderless
              label="Your discount code"
              v-model="discountCode"
              style=""
            >
            </q-input>
            <q-btn text-color="black" class="AddToCartBtn" label="Apply" style="" />
          </q-card>
          <q-btn
            text-color="white"
            class="checkoutBtn self-center"
            label="Make Payment"
            style=""
          />
        </q-card>
      </q-card>
    </div>
    <RecentlyViewed></RecentlyViewed>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import Chasers from "../components/Chasers.vue";
import RecentlyViewed from "src/components/RecentlyViewed.vue";
const tab = ref("Personal Delivery");
const Address = ref("15, Abate way Victoria Island Lagos");
</script>
<style scoped lang="sass">
.field
  background-color: #f5f5f5
  height: 44px
  font-size: 16px
  border-radius: 10px
.fieldName
  font-family: 'Manrope-semiBold'
  font-size: 110%
  color: #27141a
  line-height: 5px
.text-grey
  width: 80%
  body.screen--xs &
    width: 100%
.card-header
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%

.AddToCartBtn
  border-top-right-radius: 8px
  border-bottom-right-radius: 8px
  width: 35%
  height: 100%
  font-family: 'Manrope-Regular'
  text-transform: capitalize
  background: #e6b41d
.checkoutBtn
  border-radius: 8px
  width: 80%
  height: 41px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
.NameClassLess
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
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
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
.productCat
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 70%

.address-inputs
  width: 80%
  body.screen--xs &
    width: 100%

.text-h6
  font-family: 'Catellosdemo'
  font-size: 150%
  color: #444444
  body.screen--xs &
    font-size: 120%

.discountEntry
  width: 65%
  border-top-left-radius: 12px
  border-bottom-left-radius: 12px
  border: 1px solid #e4e4e4
  height: 100%
  font-size: 14px
  padding-left: 15px
  bor
  body.screen--sm &
    font-size: 12px

// Product Counter
// Product Counter
// Product Counter
// Product Counter
.container
  body.screen--xl &
    width: 55%
  body.screen--lg &
    width: 98%
  body.screen--md &
    width: 100%
  body.screen--sm &
    width: 100%
    height: fit-content
    flex-direction: column
  body.screen--xs &
    width: 90%
    height: fit-content
    flex-direction: column
.PageName
  body.screen--xl &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 290%
    position: relative
    left: 23%
    margin-right: auto
  body.screen--lg &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 250%
    position: relative
    left: 2.5%
    margin-right: auto
  body.screen--md &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 220%
    margin-right: auto
  body.screen--sm &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 210%
    margin-right: auto
  body.screen--xs &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 210%
    margin-right: auto
    position: relative
    left: 5%
.scroll
  width: 100%
  max-height: 300px
  body.screen--xs &
    width: 100%
    max-height: 400px


.cart
  body.screen--xl &
    width: 62%

    border-radius: 15px
  body.screen--lg &
    width: 62%

    border-radius: 15px
  body.screen--md &
    width: 62%

    border-radius: 15px
  body.screen--sm &
    width: 100%

    border-radius: 15px
  body.screen--xs &
    width: 100%

    border-radius: 15px
.summary
  body.screen--xl &
    width: 35%

    border-radius: 15px
  body.screen--lg &
    width: 35%

    border-radius: 15px
  body.screen--md &
    width: 35%

    border-radius: 15px
  body.screen--sm &
    margin-top: 5%
    margin-bottom: 7%
    align-self: center
    width: 80%

    border-radius: 15px
  body.screen--xs &
    margin-top: 15%
    margin-bottom: 7%
    align-self: center
    width: 100%
    border-radius: 15px
</style>
