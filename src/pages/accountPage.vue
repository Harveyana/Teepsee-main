<template>
  <q-page class="flex flex-center overflow-hidden" style="background: #e5e5e5">
    <div class="pageContainer items-start justify-items-start">
      <div class="text-h1 text3 self-start">My Account</div>
      <div class="container items-center row no-wrap">
        <q-card class="my-card1 gt-sm">
          <q-list class="items-center justify-center q-py-xl q-px-xl" bordered>
            <q-item class="self-center items-center justify-evenly">
              <q-item-section avatar>
                <q-img
                  class="avatar"
                  src="../assets/userImage.svg"
                  spinner-color="white"
                />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="userDetails self-end">
                  <div class="text-h1 userName self-start" style="">Obiajulu Anayo</div>
                  <div class="text-h6 userRole self-start" style="color: #e6b41d">
                    Teepseer
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              padding
              class="self-start"
              style="margin-bottom: 2%; margin-top: 8%"
              @click="Store.toggleAccPanel1()"
            >
              <q-item-section avatar>
                <q-icon name="img:/profile.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Profile</div>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              class="self-start"
              style="margin-bottom: 4%"
              @click="Store.toggleAccPanel2()"
            >
              <q-item-section avatar>
                <q-icon name="img:/Bag.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">My Orders</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 4%">
              <q-item-section avatar>
                <q-icon name="img:/Heart.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Favourites</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 4%">
              <q-item-section avatar>
                <q-icon name="img:/Setting.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Settings</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 4%">
              <q-item-section avatar>
                <q-icon name="img:/Location.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Address</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 4%">
              <q-item-section avatar>
                <q-icon name="img:/Logout.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Logout</div>
              </q-item-section>
            </q-item>
          </q-list>
          <!-- <q-card-section>
            {{ lorem }}
          </q-card-section> -->
        </q-card>
        <q-card class="my-card2 scroll hide-scrollbar">
          <!-- <q-tab-panels v-model="Store.panel" animated> -->
          <!-- Profile -->
          <profileVue />
          <!-- Profile -->

          <!-- OrderHistory -->
          <orderHistoryVue />
          <!-- OrderHistory -->
          <!-- </q-tab-panels> -->
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import orderHistoryVue from "src/components/orderHistory.vue";
import profileVue from "src/components/profile.vue";
import { useCounterStore } from "stores/counter";
const Store = useCounterStore();
// import { ref } from "vue";

// const panel = "profile";
// const Url = ref('../assets/userImage.svg');
</script>

<style lang="sass">

.avatar
  body.screen--xl &
    height: 100%
    min-width: 140px
  body.screen--lg &
    height: 100%
    min-width: 110px
  body.screen--md &
    height: 100%
    min-width: 110px

.pageContainer
  body.screen--xl &
    margin-left: 3%
    margin-right: 3%
    margin-bottom: 3%
  body.screen--lg &
    margin-left: 3%
    margin-right: 3%
    margin-bottom: 3%
  body.screen--md &
    margin-left: 3%
    margin-right: 3%
    margin-bottom: 3%
  body.screen--sm &
    margin-left: 3%
    margin-right: 3%
    margin-bottom: 3%
  body.screen--xs &
    margin-left: 3%
    margin-right: 3%
    margin-bottom: 11%


.my-card1
  body.screen--xl &
    width: fit-content
    max-width: 40%
    height: 45vh
    // height: 579px
    border-radius: 15px
    margin-right: 2%
    margin-left: 1%
  body.screen--lg &
    width: fit-content
    max-width: 40%
    height: 70vh
    // height: 579px
    border-radius: 15px
    margin-right: 2%
    margin-left: 1%
  body.screen--md &
    width: fit-content
    max-width: 35%
    height: 90vh
    // height: 579px
    border-radius: 15px
    margin-right: 2%
    margin-left: 1%

.my-card2
  body.screen--xl &
    width: 65%
    height: 45vh
    border-radius: 15px
  body.screen--lg &
    width: 65%
    height: 70vh
    border-radius: 15px
  body.screen--md &
    width: 65%
    height: 90vh
    border-radius: 15px
  body.screen--sm &
    width: 100%
    border-radius: 15px
  body.screen--xs &
    width: 100%
    border-radius: 15px
    padding-bottom: 15%



.userName
  body.screen--xl &
    margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    max-width: 250px
    // margin-left: 62px
    // margin-top: 18px
    margin-bottom: 2%
    line-height: 1px
    font-size: 200%
    // font-size: 27px
    color: #27141A
  body.screen--lg &
    margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    min-width: 250px
    // margin-left: 62px
    // margin-top: 18px
    margin-bottom: 2%
    line-height: 1px
    font-size: 200%
    // font-size: 27px
    color: #27141A
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    min-width: 250px
    // margin-left: 62px
    // margin-top: 18px
    margin-bottom: 2%
    line-height: 1px
    font-size: 210%
    // font-size: 27px
    color: #27141A
  body.screen--sm &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 52px
    // margin-bottom: -10px
    // font-size: 50px
  body.screen--xs &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 21px
    // margin-bottom: -10px
    // margin-top: -10px
    // font-size: 32px

.userRole
  body.screen--xl &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 160%
    // font-size: 20px
    color: #27141A
  body.screen--lg &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 160%
    // font-size: 20px
    color: #27141A
  body.screen--md &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 160%
    // font-size: 20px
    color: #27141A
  body.screen--sm &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 52px
    // margin-bottom: -10px
    // font-size: 50px
  body.screen--xs &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 21px
    // margin-bottom: -10px
    // margin-top: -10px
    // font-size: 32px
.acc-link
  body.screen--xl &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 19px
    color: #666666
    transition: all ease 0.4s
  body.screen--lg &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 17px
    color: #666666
    transition: all ease 0.4s
  body.screen--md &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 15px
    color: #666666
    transition: all ease 0.4s
  body.screen--sm &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 52px
    // margin-bottom: -10px
    // font-size: 50px
  body.screen--xs &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 21px
    // margin-bottom: -10px
    // margin-top: -10px
    // font-size: 32px

.text3
  body.screen--xl &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 2%
    margin-top: 3%
    // margin-bottom: 18px
    font-size: 380%
    // font-size: 57px
    color: #27141A
  body.screen--lg &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 2%
    margin-top: 3%
    // margin-bottom: 18px
    font-size: 380%
    // font-size: 57px
    color: #27141A
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 2%
    margin-top: 3%
    // margin-bottom: 18px
    font-size: 380%
    // font-size: 57px
    color: #27141A
  body.screen--sm &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 20px
    margin-bottom: -10px
    font-size: 45px
  body.screen--xs &
    display: none
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 21px
    // margin-bottom: -10px
    // margin-top: -10px
    // font-size: 32px
</style>
