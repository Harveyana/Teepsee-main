<template>
  <q-page class="flex flex-center page" style="">
    <img
      alt="Quasar logo"
      src="~assets/engrave.svg"
      style="width: 15%; position: absolute; top: 0px; left: 0px"
    />
    <img
      alt="Quasar logo"
      src="~assets/engrave2.svg"
      style="width: 14%; position: absolute; top: 0px; right: 0px"
    />
    <img
      alt="Quasar logo"
      src="~assets/engrave3.svg"
      style="width: 14%; position: absolute; bottom: 0px; left: 0px"
    />
    <img
      alt="Quasar logo"
      src="~assets/engrave4.svg"
      style="width: 14%; position: absolute; bottom: 0px; right: 0px"
    />
    <!-- Box -->
    <!-- Box -->
    <q-card class="container row flex flex-center q-pt-xl" style="">
      <img alt="teepsee logo" src="~assets/engrave-yel.svg" class="engrave" style="" />
      <q-card class="box-container q-mt-lg q-mt-xs-xl" style="">
        <q-card
          class="HeaderName bg-transparent"
          style="border: 1px solid; position: relative; top: 3%; z-index: 5"
          ><h3 class="Header card-header" style="">Forgot Password</h3>
          <h4 class="NameClass">Enter the email associated with your account</h4>
        </q-card>
        <q-card class="Input1 column q-mb-xl" style="border: 1px solid">
          <h4
            class="NameClass"
            style="position: relative; top: 12px; color: #1f1e26; font-size: medium"
          >
            Email
          </h4>
          <q-input filled v-model="text" :dense="dense" style="" />
        </q-card>
        <!-- <q-card class="Input2 column q-mb-md" style="border: 1px solid">
          <h4 class="NameClass" style="position: relative; top: 5px; color: #1f1e26">
            Password
          </h4>
          <q-input filled v-model="text" :dense="dense" style="" />
        </q-card> -->
        <q-card class="btns column items-center q-mt-xl" style="border: 1px solid">
          <q-btn
            text-color="white"
            class="checkoutBtn self-center"
            label="Next"
            style=""
          />
          <!-- <h4 class="NameClass" style="color: #e6b41d; font-weight: Bold">OR</h4>
          <q-btn
            color="primary"
            icon="img:/google-logo.png"
            label="Continue with Google"
            class="checkoutBtn self-center"
          /> -->
          <h4
            to="/login"
            class="NameClass"
            style="position: relative; bottom: 5px; cursor: pointer"
            clickable
          >
            Already have an account?<span
              to="/login"
              style="color: #e6b41d; margin-left: 5px"
              >Login</span
            >
          </h4>
          <q-img
            src="../assets/teepsee-logo.svg"
            spinner-color="black"
            class="favourite"
            style="width: 50%"
          />
        </q-card>
      </q-card>
    </q-card>
    <!-- Box -->
    <!-- Box -->
  </q-page>
</template>

<script setup></script>
<style scoped lang="sass">
.engrave
  width: 19%
  position: absolute
  top: 0px
  left: 0px
  body.screen--xs &
    width: 25%
.box-container
  border: 1px solid
  width: 75%
  height: 80%
  body.screen--xs &
    width: 82%
.container
  border: 1px solid
  border-radius: 15px
  width: 38%
  height: fit-content
  position: relative
  body.screen--md &
    margin-top: 5%
    margin-bottom: 5%
  body.screen--sm &
    width: 50%
    margin-top: 5%
    margin-bottom: 5%
  body.screen--xs &
    width: 90%
    margin-top: 20%
    margin-bottom: 18%

.page
  background-image: url("/signinBackground.svg")
  background-size: cover
  background-repeat: no-repeat
  // height: 90vh
  // width: 100vw
.checkoutBtn
  border-radius: 8px
  width: 100%
  height: 41px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
.NameClass
  body.screen--xl &
    line-height: 5px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 100%
  body.screen--md &
    line-height: 18px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 100%
  body.screen--sm &
    line-height: 16px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 100%
  body.screen--xs &
    line-height: 15px
    color: #666666
    font-family: 'Manrope-semiBold'
    font-size: 100%
.card-header
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 190%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 185%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 185%
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
