<template>
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
          style="width: 15%; margin-top: -4%"
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
</template>

<script setup></script>

<style scoped lang="sass">
.footer-icon
   body.screen--xs &
    margin-top: 1px
   body.screen--sm &
    margin-top: 4px

.footer-bar
   body.screen--md &
    margin-top: 2%
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
    padding-left: 1.5%
    padding-right: 1.5%
    background-position: right
  body.screen--md &
    padding-left: 3%
    padding-right: 3%
  body.screen--lg &
    padding-left: 3%
    padding-right: 3%
  body.screen--xl &
    padding-left: 3%
    padding-right: 3%

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
    font-size: 330%
    // font-size: 45px
    font-family: "Catellosdemo"
    max-width: 640px
  body.screen--lg &
    font-size: 330%
    font-family: "Catellosdemo"
    max-width: 640px
  body.screen--xl &
    font-size: 330%
    font-family: "Catellosdemo"
    max-width: 640px

.footer-head
  font-family: "Catellosdemo"
  margin-bottom: 4%
  font-size: 130%
.footerItem
  margin-top: 6%
  margin-left: -2.8%
.footerItem1
  margin-top: 5%
  margin-left: -2.8%
  margin-bottom: -15%
.footerItem2
  body.screen--md &
    margin-top: 5%
    margin-left: 8%
    margin-bottom: -15%
  body.screen--lg &
    margin-top: 5%
    margin-left: 8%
    margin-bottom: -15%
  body.screen--xl &
    margin-top: 5%
    margin-left: 8%
    margin-bottom: -15%
  body.screen--sm &
    margin-top: 5%
    margin-left: 8%
    margin-bottom: -15%
  body.screen--xs &
    margin-top: 5%
    margin-left: none
.footerItem3
  body.screen--xl &
    margin-top: 5%
    margin-left: 8%
    margin-bottom: -15%
  body.screen--lg &
    margin-top: 5%
    margin-left: 8%
    margin-bottom: -15%
  body.screen--md &
    margin-top: 5%
    margin-left: 8%
    margin-bottom: -15%
  body.screen--sm &
    margin-top: 5%
    margin-left: 7%
    margin-bottom: -15%
  body.screen--xs &
    margin-top: 5%
    margin-left: -15px
.footerlink
  font-family: "Manrope-ExtraLight"
  font-size: 110%
.contact
  body.screen--xl &
    font-size: 85%
    font-family: "Manrope-Regular"
  body.screen--lg &
    font-size: 85%
    font-family: "Manrope-Regular"
  body.screen--md &
    font-size: 85%
    font-family: "Manrope-Regular"
  body.screen--sm &
    font-size: 85%
    font-family: "Manrope-Regular"
  body.screen--xs &
    font-size: 13px
    font-family: "Manrope-Regular"
.copyright
  body.screen--xl &
    font-size: 95%
    text-align: left
    font-family: "Manrope-Regular"
  body.screen--lg &
    font-size: 95%
    text-align: left
    font-family: "Manrope-Regular"
  body.screen--md &
    font-size: 95%
    text-align: left
    font-family: "Manrope-Regular"
  body.screen--sm &
    font-size: 95%
    text-align: left
    font-family: "Manrope-Regular"
  body.screen--xs &
    font-size: 13px
    text-align: left
    font-family: "Manrope-Regular"
</style>
