<template>
  <q-layout view="hhh lpr fff">
    <q-header flat class="header no-shadow" style="background: #e5e5e5">
      <q-toolbar wrap flat class="bg-transparent no-shadow gt-sm">
        <q-space />
        <q-img class="logo" src="~assets/Logo2.svg" spinner-color="brown" />
        <q-space />
        <div class="input q-ml-md">
          <img src="/search.png" alt="" />
          <input class="search" type="text" placeholder="search" />
        </div>
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-btn-group outline class="navbar q-ml-md">
          <q-btn label="Categories" class="nav" />
        </q-btn-group>
        <q-btn-group outline class="navbar q-ml-md">
          <q-btn label="Track Order" class="nav" />
        </q-btn-group>
        <q-btn-group outline class="navbar q-ml-md">
          <q-btn label="Log In" class="nav" />
        </q-btn-group>
        <q-btn-group outline class="navbar q-ml-md">
          <q-btn label="Cart" icon="img:/buy2.png" class="nav" />
        </q-btn-group>
        <q-space />
        <q-btn-group outline class="q-mr-md">
          <q-btn text-color="white" class="cta" label="Sign Up" />
        </q-btn-group>
        <q-space />
      </q-toolbar>

      <!-- Mobile toolbar Mobile toolbar -->
      <q-toolbar class="lt-md">
        <q-btn dense flat round icon="img:/drawbtn.svg" @click="toggleLeftDrawer()" />

        <q-space />

        <q-btn
          dense
          flat
          round
          size="13px"
          icon="img:/search.svg"
          style="position: relative; top: 0px; left: 15px"
        />
        <!-- <q-btn dense flat round icon="img:/Buy2.png" class="q-mr-md" /> -->
        <q-card-section
          class="Cart-Top"
          style="position: relative; top: 0px; right: -15px"
        >
          <q-btn dense flat round icon="img:/Buy2.png" />
          <small
            style="
              color: #ffff;
              font-family: 'Manrope-Bold';
              font-size: small;
              background-color: #e6b41d;
              border-radius: 50%;
              width: fit-content;
              padding: 1px 4px;
              position: relative;
              top: -6px;
              right: 15px;
            "
            >2</small
          >
        </q-card-section>
      </q-toolbar>

      <!-- hero items -->
    </q-header>
    <!-- Mobile Sidebar  -->

    <q-drawer class="lt-md drawer" overlay v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->

      <q-list padding class="overflow-hidden">
        <q-icon
          name="img:/close.svg"
          class="flex"
          style="position: absolute; top: 25px; right: 25px"
          @click="toggleLeftDrawer()"
        />
        <q-item class="self-center" style="margin-left: -13px; margin-top: 35px">
          <q-item-section avatar>
            <q-img
              src="../assets/userImage.svg"
              spinner-color="white"
              style="min-height: 100px; min-width: 100px; margin-left: 10px"
            />
          </q-item-section>
          <q-space />
          <q-item-section>
            <div class="userDetails self-end">
              <div class="text-h1 userName self-start" style="min-width: 250px">
                Obiajulu Anayo
              </div>
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
          style="margin-bottom: 8px; margin-top: 20px"
        >
          <q-item-section avatar>
            <q-icon name="img:/profile.svg" style="margin-left: 16px" />
          </q-item-section>
          <q-space />
          <q-item-section>
            <div class="text-h6 acc-link">Profile</div>
          </q-item-section>
        </q-item>

        <q-item clickable class="self-start" style="margin-bottom: 8px">
          <q-item-section avatar>
            <q-icon name="img:/Bag.svg" style="margin-left: 16px" />
          </q-item-section>
          <q-space />
          <q-item-section>
            <div class="text-h6 acc-link">My Orders</div>
          </q-item-section>
        </q-item>

        <q-item clickable class="self-start" style="margin-bottom: 8px">
          <q-item-section avatar>
            <q-icon name="img:/Heart.svg" style="margin-left: 16px" />
          </q-item-section>
          <q-space />
          <q-item-section>
            <div class="text-h6 acc-link">Favourites</div>
          </q-item-section>
        </q-item>

        <q-item clickable class="self-start" style="margin-bottom: 8px">
          <q-item-section avatar>
            <q-icon name="img:/Setting.svg" style="margin-left: 16px" />
          </q-item-section>
          <q-space />
          <q-item-section>
            <div class="text-h6 acc-link">Settings</div>
          </q-item-section>
        </q-item>

        <q-item clickable class="self-start" style="margin-bottom: 8px">
          <q-item-section avatar>
            <q-icon name="img:/Location.svg" style="margin-left: 16px" />
          </q-item-section>
          <q-space />
          <q-item-section>
            <div class="text-h6 acc-link">Address</div>
          </q-item-section>
        </q-item>

        <!-- Categories Button -->
        <!-- login button -->
        <q-item clickable>
          <q-item-section avatar>
            <q-btn
              text-color="white"
              class="cta"
              label="Login"
              style="
                font-size: 17px;
                min-width: 155px;
                margin-left: 18px;
                margin-top: 25px;
                border-radius: 15px;
                background-color: #27141a;
                text-transform: capitalize;
                font-family: 'Manrope-SemiBold';
              "
            />
          </q-item-section>
        </q-item>

        <!-- Sign up button -->
        <q-item clickable>
          <q-item-section avatar>
            <q-btn
              text-color="white"
              class="cta"
              label="Sign up"
              style="
                font-size: 17px;
                min-width: 155px;
                margin-left: 18px;
                border-radius: 15px;
                background-color: #e6b41d;
                text-transform: capitalize;
                font-family: 'Manrope-SemiBold';
              "
            />
          </q-item-section>
        </q-item>

        <!-- Categories  -->

        <div
          class="text-h6 userRole self-start"
          style="
            color: #e6b41d;
            text-transform: capitalize;
            margin-left: 30px;
            margin-top: 40px;
            font-family: 'Manrope-SemiBold';
          "
        >
          OUR CATEGORIES
        </div>

        <q-separator inset style="margin-top: 17px" />

        <q-list padding class="overflow-hidden">
          <q-item clickable padding class="self-start" style="margin-top: 20px">
            <q-item-section>
              <div class="text-h6 acc-link">General</div>
            </q-item-section>
          </q-item>
          <q-item clickable padding class="self-start" style="margin-bottom: 8px">
            <q-item-section>
              <div class="text-h6 acc-link">Brandy</div>
            </q-item-section>
          </q-item>

          <q-item clickable class="self-start" style="margin-bottom: 8px">
            <q-item-section>
              <div class="text-h6 acc-link">Wine</div>
            </q-item-section>
          </q-item>

          <q-item clickable class="self-start" style="margin-bottom: 8px">
            <q-item-section>
              <div class="text-h6 acc-link">Cognac</div>
            </q-item-section>
          </q-item>

          <q-item clickable class="self-start" style="margin-bottom: 8px">
            <q-item-section>
              <div class="text-h6 acc-link">Whiskey</div>
            </q-item-section>
          </q-item>

          <q-item clickable class="self-start" style="margin-bottom: 8px">
            <q-item-section>
              <div class="text-h6 acc-link">Vodka</div>
            </q-item-section>
          </q-item>

          <q-item clickable class="self-start" style="margin-bottom: 8px">
            <q-item-section>
              <div class="text-h6 acc-link">Tequila</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- footer footer footer footer -->

    <q-footer
      elevated
      class="footer-toolbar q-py-lg"
      style="
        background-image: url('/footerbg.png');
        background-size: cover;
        background-repeat: no-repeat;
      "
    >
      <q-toolbar class="fit column wrap justify-start items-start content-start">
        <div class="footer-heading column self-start">
          <h3 class="footer-header">
            We believe in the power of freedom,, so get teepsee.
          </h3>
          <q-img
            src="~assets/TEEPSEE.svg"
            spinner-color="black"
            style="width: 80px; margin-top: -20px"
          />
          <div class="footer-links row">
            <q-list dense class="rounded-borders footerItem1">
              <q-item clickable>
                <q-item-section class="footer-head text-h6"> LEGAL </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section class="footerlink"> Privacy policy </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section class="footerlink"> Terms & Conditions </q-item-section>
              </q-item>
            </q-list>

            <q-list dense class="rounded-borders footerItem2">
              <q-item clickable>
                <q-item-section class="footer-head text-h6"> ABOUT US </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section class="footerlink"> About us </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section class="footerlink"> Features </q-item-section>
              </q-item>
            </q-list>

            <q-list dense class="rounded-borders footerItem3">
              <q-item clickable>
                <q-item-section class="footer-head text-h6"> SUPPORT </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section class="footerlink"> F.A.Q. </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section class="footerlink"> Live chat </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section class="footerlink"> Phone call </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="footer-icon text-purple q-gutter-md" style="font-size: 2em">
            <q-icon name="img:/facebook.svg" size="15px" />
            <q-icon name="img:/instagram.svg" size="15px" />
            <q-icon name="img:/twitter.svg" size="15px" />
            <q-icon name="img:/linkedin.svg" size="15px" />
            <q-icon name="img:/youtube.svg" size="20px" />
          </div>
        </div>
        <q-toolbar class="footer-bar text-white rounded-borders self-start">
          <q-btn flat label="2022. All Rights Reserved." class="copyright" />
          <q-space />

          <!--
               notice shrink property since we are placing it
               as child of QToolbar
            -->
          <!-- <q-tabs v-model="tab" shrink>
            <q-tab name="tab1" label="Tab 1" />
            <q-tab name="tab2" label="Tab 2" />
            <q-tab name="tab3" label="Tab 3" />
            </q-tabs> -->
          <small class="contact">Contact Us: 0817 667 8996</small>
        </q-toolbar>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

let link = ref("inbox");
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped lang="sass">
.userDetails
  body.screen--xs &
    margin-top: 12px
    margin-left: 7px
.userName
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    // margin-left: 62px
    // margin-top: 18px
    margin-bottom: 9px
    line-height: 1px
    font-size: 27px
    color: #27141A
  body.screen--sm &
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 52px
    // margin-bottom: -10px
    // font-size: 50px
  body.screen--xs &
    margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    margin-bottom: 9px
    line-height: 1px
    font-size: 24px
    color: #27141A

.userRole
  body.screen--md &
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 20px
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
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 15px
    color: #666666
    transition: all ease 0.4s

.text3
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    // margin-left: 62px
    margin-top: 40px
    // margin-bottom: 18px
    font-size: 57px
    color: #27141A
  body.screen--sm &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 52px
    margin-bottom: -10px
    font-size: 50px
  body.screen--xs &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 21px
    margin-bottom: -10px
    margin-top: -10px
    font-size: 32px
.searchItem:hover
  background: #E6B41D

.drawer
  body.screen--md &
    display: none

.footer-icon
   body.screen--xs &
    margin-top: 1px
   body.screen--sm &
    margin-top: 4px

.footer-bar
   body.screen--md &
    margin-top: 20px
    padding: 0 50px 0 30px
    background: #191919
    border: 1px solid white
    border-radius: 11px
   body.screen--sm &
    margin-top: 20px
    padding: 0 50px 0 30px
    background: #191919
    border: 1px solid white
    border-radius: 11px
   body.screen--xs &
    margin-top: 20px
    padding: none
    background: #191919
    border: 1px solid white
    border-radius: 11px
.footer-toolbar
  body.screen--xs &
    padding-left: 5px
    padding-right: 17px
    background-position: right
  body.screen--sm &
    padding-left: 1.5rem
    padding-right: 1.5rem
    background-position: right
  body.screen--md &
    padding-left: 3rem
    padding-right: 3rem

.footer-header
  body.screen--xs &
    font-size: 22px
    font-family: "Catellosdemo"
    line-height: 30px
    max-width: 240px
  body.screen--sm &
    font-size: 26px
    font-family: "Catellosdemo"
    line-height: 40px
    max-width: 440px
  body.screen--md &
    font-size: 45px
    font-family: "Catellosdemo"
    max-width: 640px

.footer-head
  font-family: "Catellosdemo"
  margin-bottom: 20px
.footerItem
  margin-top: 30px
  margin-left: -14px
.footerItem1
  margin-top: 30px
  margin-left: -14px
.footerItem2
  body.screen--md &
    margin-top: 30px
    margin-left: 40px
  body.screen--xs &
    margin-top: 30px
    margin-left: none
.footerItem3
  body.screen--md &
    margin-top: 30px
    margin-left: 40px
  body.screen--xs &
    margin-top: 30px
    margin-left: -15px
.footerlink
  font-family: "Manrope-ExtraLight"
.contact
  body.screen--md &
    font-size: 13px
    font-family: "Manrope-Regular"
  body.screen--xs &
    font-size: 13px
    font-family: "Manrope-Regular"
.copyright
  body.screen--md &
    font-size: 15px
    text-align: left
    font-family: "Manrope-Regular"
  body.screen--xs &
    font-size: 13px
    text-align: left
    font-family: "Manrope-Regular"
.logo
  body.screen--sm &
    width: 100px
  body.screen--md &
    width: 220px
.nav
  body.screen--sm &
    font-size: 12px
    min-width: 80px
    color: #27141A
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
  body.screen--md &
    font-size: 18px
    color: #27141A
    font-family: "Manrope-SemiBold"
    text-transform: capitalize
// .navbar
//   body.screen--sm &
//   body.screen--md &
    //
// .input
//    body.screen--sm &
//     width: 100px
//   body.screen--md &
//     width: 180px
.cta
  body.screen--sm &
    font-size: 12px
    border-radius: 12px
    background: #E6B41D
    padding: 7px 20px 7px 20px
    min-width: 100px
    font-family: "Manrope-SemiBold"
  body.screen--md &
    font-size: 15px
    background: #E6B41D
    border-radius: 12px
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xs &
    font-size: 15px
    border-radius: 12px
    background: #E6B41D
    padding: 12px 34px 12px 34px
    font-family: "Manrope-SemiBold"
.link
  font-size: 15px

.link >a
  text-decoration: none
  color: white

.input
  position: relative

.input >img
  position: absolute
  top: 15px
  left: 15px

.search
  body.screen--md &
    border-radius: 15px
    height: 50px
    width: 300px
    outline: none
    background: transparent
    border: 2px solid #27141A
    color: #27141A
    font-size: 19px
    padding-left: 40px
  body.screen--sm &
    border-radius: 15px
    height: 45px
    width: 150px
    outline: none
    background: transparent
    border: 1px solid #27141A
    color: #27141A
    font-size: 19px
    padding-left: 40px


::placeholder  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #27141A
  opacity: 1 /* Firefox */


:-ms-input-placeholder  /* Internet Explorer 10-11 */
  color: #27141A


::-ms-input-placeholder  /* Microsoft Edge */
  color: #27141A
</style>
