<template>
  <q-page class="flex flex-center overflow-hidden" style="background: #e5e5e5">
    <q-card
      flat
      class="pageContainer column justify-center overflow-hidden bg-transparent"
    >
      <div class="text-h1 text3 self-start">My Account</div>
      <div class="container justify-between row no-wrap" style="">
        <q-card class="my-card1 gt-sm" style="">
          <q-list
            class="column items-center justify-center q-py-xl q-px-xl"
            bordered
            style="width: 100%"
          >
            <q-card
              flat
              class="row no-wrap items-center justify-between"
              style="width: 100%"
            >
              <q-card class="flex flex-center" avatar style="width: 50%">
                <!-- <q-img
                  class="avatar"
                  src="../assets/userImage.svg"
                  spinner-color="white"
                  style="width: 80%"
                /> -->
                <q-img
                  class="avatar"
                  :src="user.profilePic ? user.profilePic : Store.defaultPic"
                  spinner-color="white"
                  style="width: 80%"
                />
              </q-card>
              <q-card style="width: 50%">
                <div class="text-h3 userName self-start" style="">
                  {{
                    user.name
                      ? user.name + " " + user.lastName
                      : "Teepseer"
                  }}
                </div>
                <div class="text-h6 userRole self-start" style="color: #e6b41d">
                  Teepseer
                </div>
              </q-card>
            </q-card>
            <q-item
              clickable
              padding
              class="self-start"
              style="margin-bottom: 2%; margin-top: 8%; width: 100%"
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
              style="margin-bottom: 4%; width: 100%"
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

            <q-item
              clickable
              class="self-start"
              style="margin-bottom: 4%; width: 100%"
              @click="Store.toggleAccPanel5()"
            >
              <q-item-section avatar>
                <q-icon name="img:/Heart.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Favourites</div>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              class="self-start"
              style="margin-bottom: 4%; width: 100%"
              @click="Store.toggleAccPanel3()"
            >
              <q-item-section avatar>
                <q-icon name="img:/Setting.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Settings</div>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              class="self-start"
              style="margin-bottom: 4%; width: 100%"
              @click="Store.toggleAccPanel4()"
            >
              <q-item-section avatar>
                <q-icon name="img:/Location.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Address</div>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              class="self-start"
              style="margin-bottom: 4%; width: 100%"
              @click="Store.logOut()"
            >
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
        <q-card class="my-card2 scroll hide-scrollbar" style="">
          <!-- Profile -->
          <profileVue />
          <!-- Profile -->

          <!-- OrderHistory -->
          <orderHistoryVue />
          <!-- OrderHistory -->

          <!-- favourites -->
          <Favourites1 />
          <!-- favourites -->

          <!-- settings -->
          <settingsVue />
          <!-- settings -->

          <!-- Addresses -->
          <AddressVue />
          <!-- Addresses -->
        </q-card>
      </div>
      <!-- dialogue for name  -->
    </q-card>
    <q-dialog v-model="Store.upDateProfilePrompt" persistent>
      <q-card class="bg-primary" style="">
        <img
          alt="teepsee logo"
          src="~assets/engrave-yel.svg"
          class="engrave"
          style="width: 20%; opacity: 0.4"
        />

        <q-card-section>
          <div
            class="text-h6 text-secondary userName"
            style="line-height: 25px; font-family: 'Catellosdemo'"
          >
            Welcome please quickly update your Profile Details
          </div>
        </q-card-section>

        <!-- <q-card-section class="q-pt-none">
          <q-input dense v-model="UserName" autofocus @keyup.enter="prompt = false" />
        </q-card-section> -->

        <q-card-actions align="right" class="text-secondary">
          <!-- <q-btn flat label="Cancel" v-close-popup /> -->
          <q-btn flat label="Okay" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-inner-loading :showing="Store.ShowLoading">
      <q-spinner-ball size="50px" color="primary" />
    </q-inner-loading>
    <!-- dialogue for name  -->
  </q-page>
</template>

<script setup>
import {LocalStorage} from 'quasar'
import orderHistoryVue from "src/components/orderHistory.vue";
import profileVue from "src/components/profile.vue";
import settingsVue from "src/components/settings.vue";
import AddressVue from "src/components/Address.vue";
import { useCounterStore } from "stores/counter";
import Favourites1 from "../components/favourites.vue";
import { ref, onMounted, computed } from "vue";
const Store = useCounterStore();

const address = ref("");
// const panel = "profile";
// const Url = ref('../assets/userImage.svg');
// onMounted(() => {
//   // Store.FetchUser();
//   if (!Store.user) {
//     Store.namePrompt = true;
//   }
// });

const user = computed(() =>{

return LocalStorage.getItem('userDetails')

})

const isLoggedIn = computed(() =>{

return LocalStorage.getItem('isLoggedIn')

})
</script>

<style lang="sass">
.engrave
  width: 5%
  position: absolute
  top: 0px
  left: 0px
  body.screen--xs &
    width: 25%

.avatar
  body.screen--xl &
    border-radius: 50%
    border: 1px solid black
    height: 100%
    min-width: 140px
  body.screen--lg &
    border-radius: 50%
    border: 1px solid black
    height: 100%
    min-width: 110px
  body.screen--md &
    border-radius: 50%
    border: 1px solid black
    height: 100%
    min-width: 110px

.pageContainer
  body.screen--xl &
    width: 50%
    margin-bottom: 3%
  body.screen--lg &
    width: 85%
    margin-bottom: 3%
  body.screen--md &
    width: 88%
    margin-bottom: 3%
  body.screen--sm &
    margin-left: 3%
    margin-right: 3%
    margin-bottom: 3%
  body.screen--xs &
    margin-bottom: 11%

.container
  body.screen--xl &
    width: 100%
  body.screen--lg &
    width: 100%
  body.screen--md &
    width: 100%
  body.screen--sm &
    min-height: 100vh
    width: 100%

.my-card1
  body.screen--xl &
    width: 40%
    border-radius: 15px
    margin-right: 2%
    margin-left: 1%
  body.screen--lg &
    width: fit-content
    max-width: 40%
    border-radius: 15px
    margin-right: 2%
    margin-left: 1%
  body.screen--md &
    width: 40%
    border-radius: 15px

.my-card2
  body.screen--xl &
    max-width: 55%
    border-radius: 15px
  body.screen--lg &
    width: 55%
    border-radius: 15px
  body.screen--md &
    width: 58%
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
    // margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    width: 250px
    // margin-left: 62px
    // margin-top: 18px
    margin-bottom: 5%
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
