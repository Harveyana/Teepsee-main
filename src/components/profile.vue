<template>
  <q-tab-panels
    v-model="Store.panel"
    animated
    transition-prev="jump-up"
    transition-next="jump-up"
  >
    <q-tab-panel :name="Store.profile">
      <div class="profileContainer" style="">
        <q-icon name="img:/back.svg" size="28px" class="flex lt-md q-ml-md q-mt-md" />
        <div class="text-h1 profileLabel">Profile</div>
        <q-card-section class="imageEdit">
          <q-img
            src="../assets/userImage.svg"
            spinner-color="white"
            class="card2-Image"
          />
          <q-icon
            clickable
            name="img:/edit.svg"
            size="30px"
            style="position: relative; top: 31px; right: 15px"
          />
        </q-card-section>
        <q-card-section class="updateInfo">
          <div class="inputGroup1 row items-center" style="width: inherit">
            <div class="Firstname col">
              <small
                style="
                  font-size: 18px;
                  font-family: 'Manrope-SemiBold';
                  color: #27141a;
                  width: 450px;
                "
                >Firstname</small
              >
              <input class="Firstname inputEdit" type="text" placeholder="Obiajulu" />
            </div>

            <div class="Lastname col">
              <small
                style="
                  font-size: 18px;
                  font-family: 'Manrope-SemiBold';
                  color: #27141a;
                  width: 450px;
                "
                >Lastname</small
              >
              <input class="Lastname inputEdit" type="text" placeholder="Anayo" />
            </div>
          </div>
          <div class="inputGroup2 row items-center" style="width: inherit">
            <div class="Firstname col">
              <small
                style="
                  font-size: 18px;
                  font-family: 'Manrope-SemiBold';
                  color: #27141a;
                  width: 450px;
                "
                >Email</small
              >
              <input
                class="Firstname inputEdit"
                type="text"
                placeholder="obiianayo@gmail.com"
              />
            </div>

            <div class="Lastname col">
              <small
                style="
                  font-size: 18px;
                  font-family: 'Manrope-SemiBold';
                  color: #27141a;
                  width: 450px;
                "
                >Phone Number</small
              >
              <input class="Lastname inputEdit" type="text" placeholder="08120686653" />
            </div>
          </div>

          <q-card-section>
            <q-btn text-color="white" class="EditButton" label="Edit Profile" />
          </q-card-section>
        </q-card-section>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { useCounterStore } from "stores/counter";
const Store = useCounterStore();
</script>

<style scoped lang="sass">


.EditButton
  body.screen--xl &
    min-width: 50%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--lg &
    min-width: 50%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--md &
    min-width: 50%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--sm &
    min-width: 50%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--xs &
    min-width: 100%
    min-height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"

.inputEdit
  body.screen--xl &
    min-width: 95%
    min-height: 49px
    border-radius: 15px
    border: none
    outline: none
    background: #F5F5F5
    font-size: 18px
    padding-left: 15px
    font-family: "Manrope-SemiBold"
  body.screen--lg &
    min-width: 95%
    min-height: 49px
    border-radius: 15px
    border: none
    outline: none
    background: #F5F5F5
    font-size: 18px
    padding-left: 15px
    font-family: "Manrope-SemiBold"
  body.screen--md &
    min-width: 95%
    min-height: 49px
    border-radius: 15px
    border: none
    outline: none
    background: #F5F5F5
    font-size: 18px
    padding-left: 15px
    font-family: "Manrope-SemiBold"
  body.screen--sm &
    min-width: 95%
    min-height: 55px
    border-radius: 15px
    border: none
    outline: none
    background: #F5F5F5
    font-size: 18px
    padding-left: 15px
    font-family: "Manrope-SemiBold"
  body.screen--xs &
    min-width: 95%
    min-height: 45px
    margin-bottom: 17px
    border-radius: 15px
    border: none
    outline: none
    background: #F5F5F5
    font-size: 18px
    padding-left: 15px
    font-family: "Manrope-SemiBold"
.inputGroup1,.inputGroup2
  body.screen--xl &
    padding-left: 3%
    margin-bottom: 6%
  body.screen--lg &
    padding-left: 3%
    margin-bottom: 3%
  body.screen--md &
    padding-left: 3%
    margin-bottom: 3%
  body.screen--xs &
    padding-left: 15px
    margin-bottom: 10px
    flex-direction: column
.profileContainer
  body.screen--md &
    padding-top: 35px
  body.screen--xs &
    width: 100%

.updateInfo
  // margin-left: 10%
  // margin-right: 10%
  body.screen--xl &
    width: inherit
    // width: 800px
  body.screen--lg &
    width: inherit
    // width: 800px
  body.screen--md &
    width: inherit
    // width: 800px
  body.screen--sm &
    width: 100%


.profileLabel
  body.screen--xl &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // font-size: 27px
    margin-left: 4.5%
    margin-top: 6%
    color: #27141A
    // line-height: 5px
  body.screen--lg &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 215%
    // font-size: 27px
    margin-left: 4.5%
    margin-top: 5%
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

.card2-Image
  body.screen--xl &
    border-radius: 50%
    border: 1px solid black
    height: 100%
    max-width: 110px
    margin-top: 20px
    margin-left: 30px
  body.screen--lg &
    border-radius: 50%
    border: 1px solid black
    height: 100%
    max-width: 110px
    margin-top: 20px
    margin-left: 30px
  body.screen--md &
    border-radius: 50%
    border: 1px solid black
    height: 100%
    max-width: 110px
    margin-top: 20px
    margin-left: 30px
  body.screen--sm &
    border-radius: 50%
    border: 1px solid black
    height: 100%
    max-width: 110px
    margin-left: 30px
  body.screen--xs &
    border-radius: 50%
    border: 1px solid black
    height: 100%
    max-width: 110px
    margin-left: 5px
</style>
