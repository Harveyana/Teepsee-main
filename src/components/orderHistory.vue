<template>
  <q-tab-panels
    v-model="Store.panel"
    animated
    transition-prev="jump-up"
    transition-next="jump-up"
    class="overflow-hidden"
  >
    <q-tab-panel :name="Store.orders" class="overflow-hidden">
      <div class="orderContainer overflow-hidden" style="">
        <q-icon name="img:/back.svg" size="28px" class="flex lt-md q-ml-md q-mt-md" />
        <div class="text-h1 orderLabel" style="">Order History</div>
        <q-card class="list scroll overflow-hidden">
          <!-- list -->
          <!-- list -->
          <q-card
            clickable
            flat
            class="order overflow-hidden row justify-start no-wrap"
            style=""
          >
            <q-card-section class="productImage">
              <q-img
                src="../assets/nothing.png"
                spinner-color="white"
                class="order-image"
                style=""
              />
            </q-card-section>
            <q-card-section class="Order-details flex-center">
              <div class="text-h3 order-name self-start" style="">
                Champagne Montevideo and 4 other drinks
              </div>
              <div class="text-h3 order-price lt-sm" style="">₦5,000</div>
              <q-space />
              <div class="text-h4 order-status self-end" style="">Delivered</div>
            </q-card-section>
            <q-card-section class="flex-start">
              <div class="text-h3 order-price gt-xs" style="">₦5,000</div>
            </q-card-section>
            <q-space />
            <!-- popup Proxy -->
            <!-- popup Proxy -->
            <!-- popup Proxy -->
            <!-- popup Proxy -->
            <q-popup-proxy
              cover
              Height="99vh"
              transition-show="flip-up"
              transition-hide="flip-down"
            >
              <q-banner class="bg-white text-white" style="width: inherit">
                <template v-slot:avatar>
                  <q-icon
                    name="img:/back.svg"
                    size="28px"
                    class="flex lt-md q-ml-md q-mt-md"
                  />
                  <div
                    class="container fit column no-wrap justify-start items-start content-start"
                  >
                    <!-- products -->
                    <q-card
                      clickable
                      flat
                      class="row justify-center no-wrap"
                      style="width: inherit"
                    >
                      <q-card-section class="productImage">
                        <q-img
                          src="../assets/nothing.png"
                          spinner-color="white"
                          class="order-image"
                          style=""
                        />
                      </q-card-section>
                      <q-card-section class="Order-details flex-center">
                        <div class="text-h3 order-name self-start" style="">
                          Champagne Montevideo and 4 other drinks
                        </div>
                        <div class="text-h3 order-price q-mt-md" style="">₦50,000</div>
                        <q-space />
                      </q-card-section>
                      <q-card-section class="flex-start">
                        <q-btn
                          text-color="white"
                          class="cta gt-sm"
                          label="Status History"
                          style="
                            font-size: 17px;
                            min-width: 155px;
                            margin-left: 18px;
                            border-radius: 15px;
                            background-color: #27141a;
                            text-transform: capitalize;
                            font-family: 'Manrope-SemiBold';
                          "
                        />
                      </q-card-section>
                    </q-card>
                    <div
                      class="text-h6 self-start"
                      style="
                        color: #666666;
                        margin-left: 20px;
                        margin-top: 15px;
                        font-size: 18px;
                        font-family: 'Manrope-SemiBold';
                      "
                    >
                      Items in the Order
                    </div>
                    <!-- product 1 -->
                    <q-card
                      clickable
                      flat
                      class="row justify-start no-wrap"
                      style="width: inherit"
                    >
                      <q-card-section class="productImage">
                        <q-img
                          src="../assets/nothing.png"
                          spinner-color="white"
                          class="order-image"
                          style=""
                        />
                      </q-card-section>
                      <q-card-section class="Order-details flex-center">
                        <div class="text-h3 order-name self-start" style="">
                          Champagne Montevideo
                        </div>
                        <div class="text-h3 order-price q-mt-md" style="">₦50,000</div>
                        <q-space />
                      </q-card-section>
                    </q-card>

                    <!-- product 2 -->

                    <q-card
                      clickable
                      flat
                      class="row justify-start no-wrap"
                      style="width: inherit"
                    >
                      <q-card-section class="productImage">
                        <q-img
                          src="../assets/nothing.png"
                          spinner-color="white"
                          class="order-image"
                          style=""
                        />
                      </q-card-section>
                      <q-card-section class="Order-details flex-center">
                        <div class="text-h3 order-name self-start" style="">
                          Champagne Montevideo
                        </div>
                        <div class="text-h3 order-price q-mt-md" style="">₦50,000</div>
                        <q-space />
                      </q-card-section>
                    </q-card>
                  </div>
                  <!-- products -->
                </template>
              </q-banner>
            </q-popup-proxy>
            <!-- popup proxy  -->
            <!-- popup proxy  -->
            <!-- popup proxy  -->
          </q-card>
          <q-card clickable flat class="order row justify-start no-wrap" style="">
            <q-card-section class="productImage">
              <q-img
                src="../assets/nothing.png"
                spinner-color="white"
                class="order-image"
                style=""
              />
            </q-card-section>
            <q-card-section class="Order-details flex-center">
              <div class="text-h3 order-name self-start" style="">
                Champagne Montevideo and 4 other drinks
              </div>
              <div class="text-h3 order-price lt-sm" style="">₦5,000</div>
              <q-space />
              <div class="text-h4 order-status self-end" style="color: #e6b41d">
                Pending
              </div>
            </q-card-section>
            <q-card-section class="flex-start">
              <div class="text-h3 order-price gt-xs" style="">₦5,000</div>
            </q-card-section>
            <q-space />
            <q-popup-proxy
              cover
              maxHeight="99vh"
              transition-show="flip-up"
              transition-hide="flip-down"
            >
              <q-banner class="bg-brown text-white">
                <template v-slot:avatar>
                  <q-icon name="signal_wifi_off" />
                </template>
                You have lost connection to the internet. This app is offline.
              </q-banner>
            </q-popup-proxy>
          </q-card>
          <q-card clickable flat class="order row justify-start no-wrap" style="">
            <q-card-section class="productImage">
              <q-img
                src="../assets/nothing.png"
                spinner-color="white"
                class="order-image"
                style=""
              />
            </q-card-section>
            <q-card-section class="Order-details flex-center">
              <div class="text-h3 order-name self-start" style="">
                Champagne Montevideo and 4 other drinks
              </div>
              <div class="text-h3 order-price lt-sm" style="">₦5,000</div>
              <q-space />
              <div class="text-h4 order-status self-end" style="color: #e6b41d">
                Pending
              </div>
            </q-card-section>
            <q-card-section class="flex-start">
              <div class="text-h3 order-price gt-xs" style="">₦5,000</div>
            </q-card-section>
            <q-space />
            <q-popup-proxy
              cover
              maxHeight="99vh"
              transition-show="flip-up"
              transition-hide="flip-down"
            >
              <q-banner class="bg-brown text-white">
                <template v-slot:avatar>
                  <q-icon name="signal_wifi_off" />
                </template>
                You have lost connection to the internet. This app is offline.
              </q-banner>
            </q-popup-proxy>
          </q-card>
          <!-- list -->
          <!-- list -->
        </q-card>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { useCounterStore } from "stores/counter";
const Store = useCounterStore();
</script>

<style scoped lang="sass">

.cta
  body.screen--sm &
    font-size: 12px
    border-radius: 12px
    background: #E6B41D
    padding: 7px 20px 7px 20px
    min-width: 100px
    font-family: "Manrope-SemiBold"
  body.screen--md &
    font-size: 110%
    border-radius: 12px
    background: #E6B41D
    // padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--lg &
    font-size: 110%
    border-radius: 12px
    background: #E6B41D
    // padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xl &
    font-size: 110%
    border-radius: 12px
    background: #E6B41D
    // padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xs &
    font-size: 15px
    border-radius: 12px
    background: #E6B41D
    // padding: 12px 34px 12px 34px
    font-family: "Manrope-SemiBold"
.order-price
  body.screen--xl &
    color: black
    font-size: 20px
    max-width: 240px
    line-height: 30px
    font-family: 'Manrope-Bold'
  body.screen--lg &
    color: black
    font-size: 20px
    max-width: 240px
    line-height: 30px
    font-family: 'Manrope-Bold'
  body.screen--md &
    color: black
    font-size: 20px
    max-width: 240px
    line-height: 30px
    font-family: 'Manrope-Bold'
  body.screen--sm &
    color: black
    font-size: 20px
    max-width: 240px
    line-height: 30px
    font-family: 'Manrope-Bold'
  body.screen--xs &
    color: black
    font-size: 100%
    max-width: 240px
    line-height: 30px
    font-family: 'Manrope-Bold'
.order-status
  body.screen--xl &
    color: #01a037
    font-size: 20px
    margin-top: 10%
    font-family: 'Manrope-bold'
  body.screen--lg &
    color: #01a037
    font-size: 20px
    margin-top: 10%
    font-family: 'Manrope-bold'
  body.screen--md &
    color: #01a037
    font-size: 20px
    margin-top: 10%
    font-family: 'Manrope-bold'
  body.screen--sm &
    color: #01a037
    font-size: 20px
    margin-top: 10%
    font-family: 'Manrope-bold'
  body.screen--xs &
    color: #01a037
    font-size: 100%
    margin-top: 10%
    line-height: 1px
    font-family: 'Manrope-bold'
.order-name
  body.screen--xl &
    color: #666666
    font-size: 20px
    max-width: 240px
    font-weight: 500
    line-height: 30px
    margin-bottom: auto
    font-family: 'Manrope-Regular'
  body.screen--lg &
    color: #666666
    font-size: 20px
    max-width: 240px
    font-weight: 500
    line-height: 30px
    margin-bottom: auto
    font-family: 'Manrope-Regular'
  body.screen--md &
    color: #666666
    font-size: 20px
    max-width: 240px
    font-weight: 500
    line-height: 30px
    margin-bottom: auto
    font-family: 'Manrope-Regular'
  body.screen--sm &
    color: #666666
    font-size: 20px
    max-width: 240px
    font-weight: 500
    line-height: 30px
    margin-bottom: auto
    font-family: 'Manrope-Regular'
  body.screen--xs &
    color: #666666
    font-size: 110%
    // max-width: 240px
    font-weight: 500
    line-height: 17px
    margin-bottom: auto
    font-family: 'Manrope-Regular'
.order-image
  body.screen--xl &
    height: 100%
    width: 160px
  body.screen--lg &
    height: 100%
    width: 160px
  body.screen--md &
    height: 100%
    width: 160px
  body.screen--sm &
    height: 100%
    width: 160px
  body.screen--xs &
    height: 100%
    width: 110px
.order
  body.screen--xl &
    padding-right: 40px
    padding-left: 45px
  body.screen--lg &
    padding-right: 40px
    padding-left: 45px
  body.screen--md &
    padding-right: 40px
    padding-left: 45px
  body.screen--sm &
    padding-right: 40px
    padding-left: 45px
  body.screen--xs &
    width: inherit
    // padding-right: 40px
    // padding-left: 45px
.orderLabel
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

.orderContainer
  body.screen--xl &
    width: 100%
  body.screen--lg &
    width: 100%
  body.screen--md &
    padding-top: 45px
    width: 100%
  body.screen--sm &
    width: 100%
  body.screen--xs &
    // padding-bottom: 25%
    width: 100vw
</style>
