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
      <q-item class="self-center" style="margin-left: -13px; margin-top: 10%">
        <q-item-section avatar>
          <q-img
            :src="Store.user.profilePic ? Store.user.profilePic : Store.defaultPic"
            spinner-color="white"
            class="avatar"
            style=""
          />
        </q-item-section>
        <q-space />
        <q-item-section>
          <div class="userDetails self-end">
            <div class="text-h1 userName self-start" style="min-width: 250px">
              {{ Store.user.name + " " + Store.user.lastName }}
            </div>
            <div class="text-h6 userRole self-start" style="color: #e6b41d">Teepseer</div>
          </div>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        padding
        class="self-start"
        style="margin-bottom: 8px; margin-top: 20px"
        @click="Store.toggleAccPanel1()"
      >
        <q-item-section avatar>
          <q-icon name="img:/profile.svg" style="margin-left: 16px" />
        </q-item-section>
        <q-space />
        <q-item-section>
          <!-- <div class="text-h6 acc-link">Profile</div> -->
          <div name="Profile" class="text-h6 acc-link">Profile</div>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="self-start"
        style="margin-bottom: 8px"
        @click="Store.toggleAccPanel2()"
      >
        <q-item-section avatar>
          <q-icon name="img:/Bag.svg" style="margin-left: 16px" />
        </q-item-section>
        <q-space />
        <q-item-section>
          <div class="text-h6 acc-link">My Orders</div>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="self-start"
        style="margin-bottom: 8px"
        @click="Store.toggleAccPanel5()"
      >
        <q-item-section avatar>
          <q-icon name="img:/Heart.svg" style="margin-left: 16px" />
        </q-item-section>
        <q-space />
        <q-item-section>
          <div class="text-h6 acc-link">Favourites</div>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="self-start"
        style="margin-bottom: 8px"
        @click="Store.toggleAccPanel3()"
      >
        <q-item-section avatar>
          <q-icon name="img:/Setting.svg" style="margin-left: 16px" />
        </q-item-section>
        <q-space />
        <q-item-section>
          <div class="text-h6 acc-link">Settings</div>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="self-start"
        style="margin-bottom: 8px"
        @click="Store.toggleAccPanel4()"
      >
        <q-item-section avatar>
          <q-icon name="img:/Location.svg" style="margin-left: 16px" />
        </q-item-section>
        <q-space />
        <q-item-section>
          <div class="text-h6 acc-link">Address</div>
        </q-item-section>
      </q-item>

      <q-item clickable v-if="!Store.isLoggedIn">
        <q-item-section avatar>
          <q-btn
            text-color="white"
            class="cta"
            to="/login"
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
            <div to="/" class="text-h6 acc-link">Brandy</div>
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
import { ref } from "vue";
import footerVue from "src/components/footer.vue";
import { useCounterStore } from "stores/counter";

const leftDrawerOpen = ref(false);
const Store = useCounterStore();

// let link = ref("inbox");
// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
</script>

<style scoped lang="sass">
.avatar
  body.screen--xs &
    border-radius: 50%
    border: 1px solid black
    min-height: 100%
    min-width: 100px
    margin-left: 10px
  body.screen--sm &
    border-radius: 50%
    border: 1px solid black
    min-height: 100%
    min-width: 100px
    margin-left: 10px
.searchItem:hover
  background: #E6B41D

.drawer
  body.screen--md &
    display: none


.userDetails
  body.screen--xs &
    margin-top: 12px
    margin-left: 7px
  body.screen--sm &
    margin-top: 20px
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
    margin: none
    font-family: "Catellosdemo"
    font-weight: 400
    margin-bottom: 9px
    line-height: 1px
    font-size: 24px
    color: #27141A
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
    margin: none
    font-family: "Manrope-SemiBold"
    // margin-left: 62px
    // margin-top: 18px
    // margin-bottom: 5px
    // line-height: 1px
    font-size: 16px
    color: #666666
    transition: all ease 0.4s
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
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--lg &
    font-size: 110%
    border-radius: 12px
    background: #E6B41D
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xl &
    font-size: 110%
    border-radius: 12px
    background: #E6B41D
    padding: 12px 46px 12px 46px
    font-family: "Manrope-SemiBold"
  body.screen--xs &
    font-size: 15px
    border-radius: 12px
    background: #E6B41D
    padding: 12px 34px 12px 34px
    font-family: "Manrope-SemiBold"
</style>
