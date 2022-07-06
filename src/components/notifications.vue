<template>
  <q-banner class="text-white banner over-hidden" v-if="Store.ShowNotification">
    <div>
      <q-icon
        name="img:/back.svg"
        size="20px"
        class="flex q-ml-md q-mt-md"
        @click="
          (Store.ShowNotification = !Store.ShowNotification),
            (Store.Showsetup = !Store.Showsetup)
        "
      />
      <div class="text-h1 NotificationLabel" style="color: #27141a">Notifcations</div>
    </div>
    <q-card flat class="inputs flex-center" style="width: inherit">
      <q-card flat class="toggle1 row no-wrap" style="">
        <q-card-section class="column flex-center align-center">
          <div class="text-h3 self-start heading" style="">Order Confirmation</div>
          <div class="text-h6 self-start subheading" style="">
            You will be notified when customer orders any products
          </div>
        </q-card-section>
        <q-card-section>
          <q-toggle v-model="value" size="60px" color="yellow" />
        </q-card-section>
      </q-card>

      <q-separator />

      <q-card Flat class="toggle2 row no-wrap">
        <q-card-section class="column flex-center align-center">
          <div class="text-h3 self-start heading" style="">Order Delivered</div>
          <div class="text-h6 self-start subheading no-wrap" style="">
            You will be notified once the order is delivered
          </div>
        </q-card-section>
        <q-card-section style="margin-left: 5%">
          <q-toggle v-model="value" size="60px" color="yellow" />
        </q-card-section>
      </q-card>

      <q-separator />

      <q-card Flat class="toggle2 row no-wrap">
        <q-card-section class="column flex-center align-center">
          <div class="text-h3 self-start heading" style="">Email Notification</div>
          <div class="text-h6 self-start subheading no-wrap" style="">
            Turm on email notification to get updates through email
          </div>
        </q-card-section>
        <q-card-section>
          <q-toggle v-model="value" size="60px" color="yellow" />
        </q-card-section>
      </q-card>
    </q-card>
  </q-banner>
</template>

<script setup>
import { useCounterStore } from "stores/counter";
import { ref } from "vue";
const Store = useCounterStore();

const value = ref(true);
// const hide2 = ref(false);
// const hide3 = ref(false);
// const ShowChangePass = ref(false);
// const Showsetup = ref(true);
</script>
<style scoped lang="sass">
.heading
  body.screen--xl &
    color: #27141a
    font-size: 140%
    font-family: 'Manrope-SemiBold'
    line-height: 20px
  body.screen--lg &
    color: #27141a
    font-size: 140%
    font-family: 'Manrope-SemiBold'
    line-height: 20px
  body.screen--md &
    color: #27141a
    font-size: 140%
    font-family: 'Manrope-SemiBold'
    line-height: 20px
  body.screen--sm &
    color: #27141a
    font-size: 130%
    font-family: 'Manrope-SemiBold'
    line-height: 20px
  body.screen--xs &
    color: #27141a
    font-size: 110%
    font-family: 'Manrope-Bold'
    line-height: 20px
.subheading
  body.screen--xl &
    color: #27141a
    font-size: 90%
    font-family: 'Manrope-SemiBold'
  body.screen--lg &
    color: #27141a
    font-size: 90%
    font-family: 'Manrope-SemiBold'
  body.screen--md &
    color: #27141a
    font-size: 90%
    font-family: 'Manrope-SemiBold'
  body.screen--sm &
    color: #27141a
    font-size: 90%
    font-family: 'Manrope-SemiBold'
  body.screen--xs &
    color: #27141a
    font-size: 70%
    font-family: 'Manrope-SemiBold'
    line-height: 20px


.NotificationLabel
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
    width: 95vw
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
