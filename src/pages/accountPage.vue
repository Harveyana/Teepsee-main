<template>
  <q-page class="flex flex-center overflow-hidden" style="background: #e5e5e5">
    <div class="pageContainer flex-center">
      <div class="text-h1 text3 self-start">My Account</div>
      <div class="container items-center row">
        <q-card class="my-card1 gt-sm">
          <q-list class="items-center q-py-xl q-px-xl" bordered>
            <q-item class="self-center" style="margin-left: -13px">
              <q-item-section avatar>
                <q-img
                  src="../assets/userImage.svg"
                  spinner-color="white"
                  style="height: 110px; min-width: 110px"
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
                <q-icon name="img:/profile.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Profile</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 8px">
              <q-item-section avatar>
                <q-icon name="img:/Bag.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">My Orders</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 8px">
              <q-item-section avatar>
                <q-icon name="img:/Heart.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Favourites</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 8px">
              <q-item-section avatar>
                <q-icon name="img:/Setting.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Settings</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 8px">
              <q-item-section avatar>
                <q-icon name="img:/Location.svg" />
              </q-item-section>
              <q-space />
              <q-item-section>
                <div class="text-h6 acc-link">Address</div>
              </q-item-section>
            </q-item>

            <q-item clickable class="self-start" style="margin-bottom: 8px">
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
        <q-card class="my-card2">
          <div class="secondContainer">
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
                    >Lastname</small
                  >
                  <input
                    class="Lastname inputEdit"
                    type="text"
                    placeholder="08120686653"
                  />
                </div>
              </div>

              <q-card-section>
                <q-btn text-color="white" class="EditButton" label="Edit Profile" />
              </q-card-section>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// import { ref } from 'vue';
// const Url = ref('../assets/userImage.svg');
</script>

<style lang="sass">
.pageContainer
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
.EditButton
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
  body.screen--md &
    padding-left: 15px
    margin-bottom: 20px
  body.screen--xs &
    padding-left: 15px
    margin-bottom: 10px
    flex-direction: column
.secondContainer
  body.screen--md &
    padding-top: 95px

.my-card1
  body.screen--md &
    width: 30%
    height: 579px
    border-radius: 15px
    margin-right: 25px
    margin-left: 15px

.my-card2
  body.screen--md &
    width: 65%
    height: 588px
    border-radius: 15px
  body.screen--sm &
    width: 100%
    border-radius: 15px
  body.screen--xs &
    width: 100%
    border-radius: 15px
    padding-bottom: 15%

.updateInfo
  body.screen--md &
    width: 800px
  body.screen--sm &
    width: 100%

.profileLabel
  body.screen--md &
    min-width: 250px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 27px
    margin-left: 35px
    color: #27141A
    line-height: 5px
  body.screen--sm &
    min-width: 200px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 30px
    margin-left: 35px
    color: #27141A
    line-height: 70px
  body.screen--xs &
    min-width: 200px
    font-family: "Catellosdemo"
    font-weight: 400
    font-size: 30px
    margin-left: 20px
    color: #27141A
    line-height: 20px
    margin-top: 20px
.card2-Image
  body.screen--md &
    height: 110px
    max-width: 110px
    margin-top: 20px
    margin-left: 30px
  body.screen--sm &
    height: 110px
    max-width: 110px
    margin-left: 30px
  body.screen--xs &
    height: 110px
    max-width: 110px
    margin-left: 5px
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
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 21px
    // margin-bottom: -10px
    // margin-top: -10px
    // font-size: 32px

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
    // margin: none
    // font-family: "Catellosdemo"
    // margin-left: 21px
    // margin-bottom: -10px
    // margin-top: -10px
    // font-size: 32px

.text3
  body.screen--md &
    margin: none
    font-family: "Catellosdemo"
    margin-left: 32px
    margin-top: 40px
    // margin-bottom: 18px
    font-size: 57px
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
