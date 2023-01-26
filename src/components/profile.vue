<template>
  <q-tab-panels
    v-model="Store.panel"
    animated
    transition-prev="jump-up"
    transition-next="jump-up"
  >
    <q-tab-panel class="panel" :name="Store.profile" style="">
      <q-card flat class="profileContainer">
        <q-card class="column q-mb-xs-lg q-mb-sm-lg q-mb-md-sm" style="width: 100%">
          <q-icon name="img:/back.svg" size="28px" class="flex lt-md q-ml-md q-mt-md" />
          <div class="text-h1 profileLabel">Profile</div>
        </q-card>
        <q-card class="imageEdit" style="width: 100%">
          <!-- <q-img
            src="../assets/userImage.svg"
            spinner-color="white"
            class="card2-Image"
          /> -->
          <q-img
            :src="user.profilePic ? user.profilePic : Store.defaultPic"
            class="card2-Image"
          />
          <q-icon
            clickable
            name="img:/edit.svg"
            size="30px"
            style="position: relative; top: 31px; right: 15px"
            @click="showUploader = true"
          />
        </q-card>
        <!-- image uploader -->
        <q-dialog v-model="showUploader" persistent>
          <q-card style="border-radius: 10%">
            <q-file
              v-model="files"
              label="click to upload image image"
              outlined
              use-chips
              style="max-width: 300px; height: 200px"
            />

            <!-- <q-card-actions align="right">
              <q-btn flat label="Completed" color="green" v-close-popup />
            </q-card-actions> -->
            <q-btn
              class="bg-primary text-secondary"
              @click="Store.uploadImage(files), (showUploader = false)"
              >submit</q-btn
            >
          </q-card>
        </q-dialog>
        <!-- image uploader -->
        <q-card class="updateInfo q-mt-xl" style="width: 100%">
          <q-card class="inputGroup1 row flex flex-center" style="width: 100%">
            <q-card class="Firstname col flex flex-center" style="width: 100%">
              <small
                style="
                  font-size: 18px;
                  font-family: 'Manrope-SemiBold';
                  color: #27141a;
                  width: 450px;
                  margin-left: 2%;
                "
                >Firstname</small
              >
              <input
                v-model="data.name"
                class="Firstname inputEdit"
                type="text"
                :placeholder="user.name"
              />
            </q-card>

            <q-card class="Lastname col flex flex-center" style="width: 100%">
              <small
                style="
                  font-size: 18px;
                  font-family: 'Manrope-SemiBold';
                  color: #27141a;
                  width: 450px;
                  margin-left: 2%;
                "
                >Lastname</small
              >
              <input
                v-model="data.lastName"
                class="Lastname inputEdit"
                type="text"
                :placeholder="user.lastName"
              />
            </q-card>
          </q-card>
          <q-card class="inputGroup2 row items-center" style="width: 100%">
            <div class="Firstname col flex flex-center">
              <small
                style="
                  font-size: 18px;
                  font-family: 'Manrope-SemiBold';
                  color: #27141a;
                  width: 450px;
                  margin-left: 2%;
                "
                >Email</small
              >
              <input
                v-model="data.email"
                class="Firstname inputEdit"
                type="text"
                :placeholder="user.email"
              />
            </div>

            <div class="Lastname col flex flex-center">
              <small
                style="
                  font-size: 18px;
                  font-family: 'Manrope-SemiBold';
                  color: #27141a;
                  width: 450px;
                  margin-left: 2%;
                "
                >Phone Number</small
              >
              <input
                v-model="data.phoneNumber"
                class="Lastname inputEdit"
                type="text"
                :placeholder="Store.user.phoneNumber"
              />
            </div>
          </q-card>

          <q-card style="width: 100%">
            <q-btn
              text-color="white"
              class="EditButton"
              label="Edit Profile"
              @click="confirm = true"
            />
          </q-card>
        </q-card>
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="Edit" color="primary" text-color="white" />
              <span class="q-ml-sm"
                >Are you sure you want to make changes to your profile.</span
              >
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="primary" v-close-popup />
              <q-btn
                flat
                label="Confirm"
                color="secondary"
                v-close-popup
                @click="updateDetails(data, 'QvpMKEciWXJXdKfaXxXW')"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-card>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import {LocalStorage} from 'quasar'
import { useCounterStore } from "stores/counter";
import { auth, db, Storage } from "src/boot/firebase";
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";

import { ref, reactive, computed } from "vue";
const data = reactive({
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
});
const showUploader = ref(false);
const confirm = ref(false);
const files = ref(null);
const Store = useCounterStore();

const updateDetails = (payload, id) => {
  if (
    payload.name.length === 0 ||
    payload.lastName.length === 0 ||
    payload.email.length === 0 ||
    payload.phoneNumber.length === 0
  ) {
    Store.notifyUser(Store.defaultPic, "Please Complete Your Details");
  } else {
    Store.updateData(payload, id);
  }
};

const user = computed(() =>{

return LocalStorage.getItem('userDetails')

})

// const updateData = (Update) => {
//   const docToUpdate = doc(db, "users", "");

//   updateDoc(docToUpdate, {
//     name: data.name,
//     lastName: data.lastName,
//     email: data.email,
//     phoneNumber: data.phoneNumber,
//   });
// };
// const uploadImage = (files) => {
//   const storageRef = ref(Storage, "profilePic");
//   const uploadTask = uploadBytesResumable(storageRef, files);
//   uploadTask.on("state_changed", (snapshot) => {
//     const progress = snapshot.bytesTransferred / snapshot.totalBytes + 300;
//     console.log("upload is " + progress + "is done");
//   }),
//     (error) => {
//       console.log(error.message);
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log("file available at ", downloadURL);
//       });
//     };
//   // const docToupdate = doc(db, "users", Store.user.uid);
//   // updateDoc(docToupdate, { file }).then(() => {
//   //   confirm = false;
//   // });
// };
</script>

<style scoped lang="sass">

.panel
  width: 100%
  body.screen--xs &
    width:100vw

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
    margin-top: 3%
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"
  body.screen--xs &
    width: 100%
    height: 48px
    border-radius: 15px
    background: #27141A
    font-family: "Manrope-Bold"

.inputEdit
  body.screen--xl &
    width: 92%
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
    margin-bottom: 6%
  body.screen--lg &
    margin-bottom: 3%
  body.screen--md &
    margin-bottom: 3%
  body.screen--xs &
    margin-bottom: 10px
    flex-direction: column
.profileContainer
  // body.screen--md &
  //   padding-top: 35px
  // body.screen--xl &
  //   width: 100%
  // body.screen--lg &
  //   width: 100%
  // body.screen--md &
  //   width: 100%
  // body.screen--xs &
  width: 100%

.updateInfo
  // // margin-left: 10%
  // // margin-right: 10%
  // body.screen--xl &
  //   width: 100%
  //   // width: 800px
  // body.screen--lg &
  //   width: 100%
  //   // width: 800px
  // body.screen--md &
  //   width: 100%
  //   // width: 800px
  // body.screen--sm &
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
    width: 20%
    // height: 100%
    // max-width: 110px
    // margin-top: 20px
    margin-left: 3%
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
