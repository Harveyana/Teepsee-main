<template>
  <q-drawer
    class="lt-md drawer"
    overlay
    v-model="Store.leftDrawerOpen"
    side="left"
    bordered
  >
    <!-- drawer content -->

    <q-list padding class="overflow-hidden">
      <q-icon
        name="img:/close.svg"
        class="flex"
        style="position: absolute; top: 25px; right: 25px"
        @click="Store.toggleLeftDrawer()"
      />

      <q-item clickable>
        <q-input
          outlined
          bottom-slots
          color="grey"
          rounded
          label=" Search Products"
          style="width: 280px; border-radius: 30px; margin-top: 40px"
        >
          <template v-slot:prepend>
            <q-icon
              name="img:/wineCup.svg"
              size="35px"
              class="searchIcon"
              style="height: 10px; transform: rotate(40deg)"
            />
          </template>
          <!-- <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template> -->

          <template v-slot:hint> Search Products </template>
        </q-input>
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
          <div class="text-h6 acc-link">Track order</div>
        </q-item-section>
      </q-item>

      <q-item clickable class="self-start" style="margin-bottom: 8px">
        <q-item-section avatar>
          <q-icon name="img:/Bag.svg" style="margin-left: 16px" />
        </q-item-section>
        <q-space />
        <q-item-section>
          <div class="text-h6 acc-link">Cart</div>
        </q-item-section>
        <q-item-section
          ><small
            style="
              color: #ffff;
              font-family: 'Manrope-Bold';
              font-size: small;
              background-color: #27141a;
              border-radius: 50%;
              width: fit-content;
              padding: 1px 4px;
            "
            >2</small
          ></q-item-section
        >
      </q-item>

      <q-item clickable class="self-start" style="margin-bottom: 8px">
        <q-item-section avatar>
          <q-icon name="img:/Heart.svg" style="margin-left: 16px" />
        </q-item-section>
        <q-space />
        <q-item-section>
          <div class="text-h6 acc-link">Faqs</div>
        </q-item-section>
      </q-item>

      <!-- Categories Button -->
      <!-- login button -->
      <q-item clickable>
        <q-item-section avatar>
          <q-btn
            text-color="white"
            class="cta"
            to="/account"
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
            to="/account"
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
</template>

<script setup>
import { useCounterStore } from "stores/counter";
const Store = useCounterStore();
</script>

<style scoped lang="sass">
.drawer
  body.screen--md &
    display: none

.searchItem:hover
  background: #E6B41D

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


::placeholder  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: whitesmoke
  opacity: 1 /* Firefox */


:-ms-input-placeholder  /* Internet Explorer 10-11 */
  color: whitesmoke


::-ms-input-placeholder  /* Microsoft Edge */
  color: whitesmoke
</style>
