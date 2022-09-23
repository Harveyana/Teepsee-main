<template>
  <q-page class="items-center overflow-hidden" style="background: #e5e5e5">
    <!-- hero -->
    <FaqPageHero></FaqPageHero>
    <!-- hero -->

    <div
      class="track-container column justify-center items-center no-wrap"
      style="position: relative; bottom: 85px"
    >
      <q-card
        class="track-box column justify-center items-start q-pb-lg q-pt-xs-md q-pt-sm-xl q-pt-md-xl q-pt-lg-xl q-pt-xl-xl"
        style=""
      >
        <q-card
          class="column no-wrap justify-around items-center faq q-my-md"
          style="width: 100%; height: 50%"
        >
          <q-card class="row justify-between items-center no-wrap" style="width: 100%">
            <div style="" class="text-h1 text-black">
              Does Teepsee offer same day delivery?
            </div>
            <q-icon
              name="img:/faqextend.svg"
              size="25px"
              class=""
              style=""
              @click="showfaq = !showfaq"
            />
          </q-card>
          <q-card
            class="row justify-between items-center"
            style="width: 100%"
            v-if="showfaq"
          >
            <div
              class="text-h4 q-my-md-sm q-my-xl-sm q-my-lg-sm q-my-sm-none sub-heading"
              style=""
            >
              Yes, Teepsee offers same day delivery for orders placed within Lagos.
            </div>
          </q-card>
          <q-separator class="q-mt-lg" style="width: 100%; height: 2px" />
        </q-card>


        <q-card
          class="column no-wrap justify-around items-center faq q-my-md"
          style="width: 100%; height: 50%"
        >
          <q-card class="row justify-between items-center no-wrap" style="width: 100%">
            <div style="" class="text-h1 text-black">
              Does Teepsee offer delivery across all states in Nigeria?
            </div>
            <q-icon
              name="img:/faqextend.svg"
              size="25px"
              class=""
              style=""
              @click="showfaq = !showfaq"
            />
          </q-card>
          <q-card
            class="row justify-between items-center"
            style="width: 100%"
            v-if="showfaq"
          >
            <div
              class="text-h4 q-my-md-sm q-my-xl-sm q-my-lg-sm q-my-sm-none sub-heading"
              style=""
            >
              Yes, Teepsee offers Liquor delivery across all states in Nigeria. This only
              applies to bulk and party orders. Nevertheless, these orders have to be
              placed 48hrs before delivery day.
            </div>
          </q-card>
          <q-separator class="q-mt-lg" style="width: 100%; height: 2px" />
        </q-card>
        <q-card
          class="column no-wrap justify-around items-center faq q-my-md"
          style="width: 100%; height: 50%"
        >
          <q-card class="row justify-between items-center no-wrap" style="width: 100%">
            <div style="" class="text-h1 text-black">
              Do i need to Sign up to place an order on Teepsee?
            </div>
            <q-icon
              name="img:/faqextend.svg"
              size="25px"
              class=""
              style=""
              @click="showfaq = !showfaq"
            />
          </q-card>
          <q-card
            class="row justify-between items-center"
            style="width: 100%"
            v-if="showfaq"
          >
            <div
              class="text-h4 q-my-md-sm q-my-xl-sm q-my-lg-sm q-my-sm-none sub-heading"
              style=""
            >
              Yes, sigining up is a pre-requisite to place an order on Teepsee.
            </div>
          </q-card>
          <q-separator class="q-mt-lg" style="width: 100%; height: 2px" />
        </q-card>
        <q-card
          class="column no-wrap justify-around items-center faq q-my-md"
          style="width: 100%; height: 50%"
        >
          <q-card class="row justify-between items-center no-wrap" style="width: 100%">
            <div style="" class="text-h1 text-black">
              Does Teepsee offer wholesale delivery?
            </div>
            <q-icon
              name="img:/faqextend.svg"
              size="25px"
              class=""
              style=""
              @click="showfaq = !showfaq"
            />
          </q-card>
          <q-card
            class="row justify-between items-center"
            style="width: 100%"
            v-if="showfaq"
          >
            <div
              class="text-h4 q-my-md-sm q-my-xl-sm q-my-lg-sm q-my-sm-none sub-heading"
              style=""
            >
              Yes we do, users are required to click on our live chat to place wholesale
              orders.
            </div>
          </q-card>
          <q-separator class="q-mt-lg" style="width: 100%; height: 2px" />
        </q-card>
        <q-card
          class="column no-wrap justify-around items-center faq q-my-md"
          style="width: 100%; height: 50%"
        >
          <q-card class="row justify-between items-center no-wrap" style="width: 100%">
            <div style="" class="text-h1 text-black">Where is Teepsee based?</div>
            <q-icon
              name="img:/faqextend.svg"
              size="25px"
              class=""
              style=""
              @click="showfaq = !showfaq"
            />
          </q-card>
          <q-card
            class="row justify-between items-center"
            style="width: 100%"
            v-if="showfaq"
          >
            <div
              class="text-h4 q-my-md-sm q-my-xl-sm q-my-lg-sm q-my-sm-none sub-heading"
              style=""
            >
              Lagos Nigeria.
            </div>
          </q-card>
          <q-separator class="q-mt-lg" style="width: 100%; height: 2px" />
        </q-card>
      </q-card>
    </div>
    <!-- <q-dialog class="" v-model="Store.showTrackBox" persistent>
      <Track></Track>
    </q-dialog> -->
  </q-page>
</template>

<script setup>
import { useCounterStore } from "stores/counter";

import { ref } from "vue";
import Track from "../components/track.vue";
import FaqPageHero from "src/components/faqPageHero.vue";
const showfaq = ref(false);
const Store = useCounterStore();
</script>

<style scoped lang="sass">
.track-input
  border-radius: 10px
  height: 44px
  width: 69%
  background: #f5f5f5
  border: 1px solid black
  body.screen--sm &
    height: 44px
  body.screen--xs &
    width: 60%
.track-box
  width: 80%
  border-radius: 15px
  padding-left: 5%
  padding-right: 5%
  body.screen--sm &
  body.screen--xs &
    width: 90%

.text-black
  font-family: 'Catellosdemo'
  line-height: 20px
  font-size: 30px
  body.screen--sm &
    font-size: 22px
  body.screen--xs &
    font-size: 15px

.sub-heading
  font-family: 'Manrope-SemiBold'
  font-size: 15px
  opacity: 0.7
  body.screen--sm &
    font-size: 14px
    line-height: 30px
  body.screen--xs &
    font-size: 11px
    line-height: 18px
    margin-top: 10px
    margin-bottom: 10px


.track-container
  height: fit-content
  width: 100%
  body.screen--xs &

  body.screen--xl &
    margin-bottom: 8%
  body.screen--lg &
    margin-bottom: 8%
  body.screen--md &
    margin-bottom: 8%
  body.screen--sm &
    margin-bottom: 5%
</style>
