<template>
  <q-card
    flat
    class="edit-container row no-wrap justify-between q-mx-md scroll"
    style="width: 95%; height: inherit"
  >
    <q-card flat class="inputs q-mx-ld" style="width: 80%">
      <!-- inputs -->
      <!-- Product Name  -->
      <q-card class="input1" style="width: 90%">
        <h4 class="NameClass">Product Name</h4>
        <q-input
          filled
          label="Product Name"
          v-model="product.name"
          style="border-radius: 15px; width: 100%"
        />
      </q-card>
      <!-- Product Price -->
      <q-card class="input2" style="width: 80%">
        <h4 class="NameClass">Product Price</h4>
        <q-input
          filled
          type="number"
          label="Product Price"
          v-model="product.price"
          style="border-radius: 15px; width: 60%"
        />
      </q-card>
      <!-- Product Category -->
      <q-card class="input3" style="width: 80%">
        <h4 class="NameClass">Product Category</h4>

        <q-select
          v-model="product.category"
          :options="categoryOptions"
          label="Product Category"
          style="border-radius: 15px; width: 60%"
        />
      </q-card>
      <!-- Product Description -->
      <q-card class="input3" style="width: 80%">
        <h4 class="NameClass">Product Description</h4>
        <q-input
          filled
          label="Product Description"
          v-model="product.description"
          style="border-radius: 15px; width: 100%"
        />
      </q-card>
      <q-card class="input4 row no-wrap" style="width: 100%">
        <q-card style="width: 50%">
          <h4 class="NameClass">Product Brand(Optional)</h4>
          <q-select
            v-model="product.brand"
            :options="brandOptions"
            label="Product Brand"
            style="border-radius: 15px; width: 90%"
          />
        </q-card>
        <q-card style="width: 50%">
          <h4 class="NameClass">Product Tag(Optional)</h4>
          <q-input
            filled
            label="Product Tag"
            v-model="product.tag"
            style="border-radius: 15px; width: 90%"
          />
        </q-card>
      </q-card>
      <!-- inputs -->
    </q-card>

    <!-- q-uploader -->
    <!-- q-uploader -->
    <q-uploader
      @added="savefile"
      @removed="savefile"
      label="Upload your product Images"
      accept=".jpg, image/*"
      class="q-mr-md q-ml-md"
      style="width: 55%"
    />
    <!-- q-uploader -->
    <!-- q-uploader -->

    <!--  -->
    <!-- images -->
    <!-- images -->
    <!-- images -->
  </q-card>
  <!-- submitBtn and UploadBtn -->
  <!-- submitBtn and UploadBtn-->
  <q-card flat class="submitBtn q-ml-lg q-my-md" style="width: 20%">
    <q-btn
      text-color="white"
      class="checkoutBtn"
      label="Submit"
      @click="uploadProduct(images[0])"
    />
  </q-card>
  <q-inner-loading :showing="Store.ShowLoading">
    <q-spinner-ball size="50px" color="primary" />
  </q-inner-loading>
</template>

<script setup>
import { reactive } from "vue";
import { db, Storage } from "src/boot/firebase";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  query,
  arrayUnion,
  onSnapshot,
  where,
  doc,
  addDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { useCounterStore } from "stores/counter";
const Store = useCounterStore();
// const files = ref(null);
const categoryOptions = [
  "brandy",
  "wine",
  "cognac",
  "whiskey",
  "vodka",
  "tequila",
  "champagne",
  "gin",
  "herb",
];
const brandOptions = ["henessey", "vodka", "azul"];
const images = [];
const product = reactive({
  name: "",
  price: "",
  category: null,
  description: "",
  brand: null,
  tag: "",
});

const savefile = (files) => {
  images.push(files[0]);
  console.log(images);
};

const uploadProduct = (file) => {
  // const imageList = {};

  // images.forEach((element, index) => {
  //   imageList["key" + index] = element;
  // });
  // console.log(imageList);
  // const uid = () => {
  //   return Date.now().toString(36) + Math.random().toString(36).substr(2);
  // };

  // const imageUrls = [];
  // const colRef = collection(db, "products", `${uid}`);
  // Object.entries(imageList).forEach((file, index) => {
  // console.log(file.length);
  if (file) {
    if (
      product.name.length === 0 ||
      product.price.length === 0 ||
      product.category === null ||
      product.description.length === 0
    ) {
      Store.notifyUser(Store.user.profilePic, "Complete Product Details");
    } else {
      Store.ShowLoading = true;
      const metadata = {
        contentType: "image/jpeg",
      };

      const storageRef = ref(Storage, "images/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          console.log("File available at", downloadURL);

          const docRef = await addDoc(collection(db, "products"), {
            images: [downloadURL],
            name: product.name,
            price: product.price,
            category: product.category,
            description: product.description,
            brand: product.brand,
            tag: product.tag,
            rating: 0,
            ratings: { one: 0, two: 0, three: 0, four: 0, five: 0 },
            reviews: [],
            favouriters: [],
          });

          updateDoc(doc(db, "products", docRef.id), {
            id: docRef.id,
          }).then(() => {
            Store.ShowLoading = false;
            Store.notifyUser(Store.user.profilePic, "Product Uploaded");
          });
        });
      });
    }
  } else {
    Store.notifyUser(Store.user.profilePic, "Please upload Product Image");
  }
};

// const addProduct = () => {

//   console.log(file);
// };
</script>

<style scoped lang="sass">
.checkoutBtn
  border-radius: 8px
  margin-top: 2%
  margin-left: 2%
  width: 100%
  height: 51px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
.NameClass
  body.screen--xl &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--md &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--sm &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--xs &
    line-height: 5px
    color: #666666
    font-family: 'Manrope-Bold'
    font-size: 120%
.productCat
  body.screen--xl &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--lg &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--md &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 78%
  body.screen--sm &
    line-height: 5px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 70%

.quantity-counter
  body.screen--xl &
    border: 1px solid black
    width: 120px
    height: 41px
    border-radius: 12px
  body.screen--lg &
    border: 1px solid black
    width: 120px
    height: 41px
    border-radius: 12px
  body.screen--md &
    border: 1px solid black
    width: 120px
    height: 41px
    border-radius: 12px
  body.screen--sm &
    border: 1px solid black
    width: 100px
    height: 41px
    border-radius: 12px
  body.screen--xs &
    border: 1px solid black
    width: 80%
    height: 30px
    border-radius: 12px
.CounterNumber
  body.screen--xl &
    font-size: 110%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666
  body.screen--lg &
    font-size: 105%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666
  body.screen--md &
    font-size: 100%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666
  body.screen--sm &
    font-size: 100%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666
  body.screen--xs &
    font-size: 100%
    font-family: 'Manrope-Bold'
    line-height: 1px
    color: #666666

.image-And-Name

  width: 25%
  position: relative
  left: 2%
  body.screen--xs &
    width: 90%

.image
  width: 45%
  body.screen--xs &
    width: 45%
    margin-right: 4%
</style>
