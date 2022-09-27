<template>
  <q-separator
    class=""
    style="width: 92%; margin-bottom: 2%; position: relative; left: 4%"
  />
  <q-card
    flat
    class="row product q-px-xs-sm q-px-sm-lg q-px-md-lg q-px-lg-lg q-px-xl-lg justify-between"
    style="width: 100%"
  >
    <!-- Product image and name -->
    <q-card
      class="image-And-Name row no-wrap justify-xl-between justify-lg-between justify-md-between justify-sm-between justify-xs-start items-center"
      style=""
    >
      <q-card class="image" style="">
        <q-img
          :src="productImage"
          spinner-color="black"
          class="favourite"
          style="width: 100%"
        />
      </q-card>
      <q-card class="gt-xs Name" style="width: 50%">
        <h4 class="productName NameClass" style="">
          {{ productName.slice(0, 10) + ".." }}
        </h4>
        <h4 class="productCat" style="">{{ productCategory }}</h4>
      </q-card>
    </q-card>
    <!-- Product Price -->
    <q-card class="gt-xs row ProductPrice flex flex-center" style="width: 15%">
      <h4 class="productPrice NameClass" style="">{{ productPrice }}</h4>
    </q-card>
    <!-- Product Quantity -->
    <q-card
      class="gt-xs row productBrandLabel flex flex-center"
      style="width: 8%; position: relative; right: 2.5%"
    >
      <h4 class="productBrand NameClass" style="">{{ productBrand }}</h4>
    </q-card>
    <!-- Product SubTotal -->
    <q-card
      class="gt-xs row CategoryNameLabel flex flex-center"
      style="width: 15%; position: relative; right: 5%"
    >
      <h4 class="CategoryName NameClass" style="">{{ productCategory }}</h4>
    </q-card>
    <q-card class="gt-xs row Edit flex flex-center" style="position: relative; right: 3%">
      <q-icon
        class="Editbtn"
        name="edit"
        style="background-color: #e6b41d; border-radius: 50%; cursor: pointer"
        size="25px"
      >
        <q-popup-proxy
          cover
          maxHeight="99vh"
          transition-show="slide-down"
          transition-hide="slide-up"
          style="position: relative; right: 10%; width: 80vw"
          class="overflow-hidden"
        >
          <q-card
            flat
            class="edit-container row no-wrap justify-between q-mx-md overflow-hidden"
            style="width: 100%"
          >
            <q-card class="inputs q-mx-ld" style="width: 50%">
              <!-- inputs -->
              <!-- Product Name  -->
              <q-card class="input1" style="width: 80%">
                <h4 class="NameClass" style="font-size: 150%">{{ productName }}</h4>
                <h4 class="NameClass">Field Name</h4>
                <q-select
                  v-model="field.name"
                  :options="fieldOptions"
                  label="Enter field value"
                  style="border-radius: 15px; width: 100%"
                />
              </q-card>
              <!-- Product Price -->
              <q-card class="input2" style="width: 80%">
                <h4 class="NameClass">Field value</h4>
                <q-input
                  filled
                  label="Enter field value"
                  v-model="field.value"
                  style="border-radius: 15px; width: 60%"
                />
              </q-card>
            </q-card>

            <!-- q-uploader -->
            <!-- q-uploader -->
            <q-uploader
              @added="savefile"
              class="bg-grey-3"
              label="Upload your Images"
              accept=".jpg, image/*"
              style="max-width: 300px"
            />
            <!-- q-uploader -->
            <!-- q-uploader -->

            <q-card class="images row wrap q-px-lg" style="width: 50%">
              <!-- image 1 -->
              <q-card v-for="image in productImages" class="image" style="width: 30%">
                <q-img
                  :src="image"
                  spinner-color="black"
                  class="favourite"
                  style="width: 100%"
                />
              </q-card>
            </q-card>
          </q-card>
          <!-- submitBtn and UploadBtn -->
          <!-- submitBtn and UploadBtn-->
          <q-card flat class="submitBtn q-ml-lg q-my-md row no-wrap" style="width: 50%">
            <q-btn
              text-color="white"
              class="checkoutBtn"
              label="Submit"
              @click="confirm = true"
            />
            <q-btn
              text-color="white"
              class="checkoutBtn"
              label="Delete Product"
              @click="confirm2 = true"
              style="background: #e6b41d; font-size: small"
            />
            <q-btn
              text-color="white"
              class="checkoutBtn"
              label="Add Image"
              @click="Store.addImage(images[0], productId)"
            />
            <q-btn
              text-color="white"
              class="checkoutBtn"
              label="Add to Chasers"
              style="background: #e6b41d; font-size: small"
            />
          </q-card>

          <!-- dialog box -->
          <!-- dialog box -->
          <!-- dialog box -->
          <q-dialog v-model="confirm" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="Edit" color="primary" text-color="white" />
                <span class="q-ml-sm"
                  >Are you sure you want to make changes to this product.</span
                >
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn
                  flat
                  label="Confirm"
                  color="secondary"
                  v-close-popup
                  @click="Store.UpdateProduct(productId)"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
          <q-dialog v-model="confirm2" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="Edit" color="primary" text-color="white" />
                <span class="q-ml-sm">Are you sure you want to delete this product.</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn
                  flat
                  label="Confirm"
                  color="secondary"
                  v-close-popup
                  @click="Store.deleteProduct(productId)"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-popup-proxy>
      </q-icon>
    </q-card>
  </q-card>
</template>

<script>
// import { db, Storage } from "src/boot/firebase";
// import { uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import {
//   collection,
//   query,
//   arrayUnion,
//   onSnapshot,
//   where,
//   doc,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   updateDoc,
// } from "firebase/firestore";
import { useCounterStore } from "stores/counter";
import { reactive, ref } from "vue";

export default {
  name: "adminProduct",

  props: {
    productName: String,
    productPrice: String,
    productCategory: String,
    productImage: String,
    productBrand: String,
    productTag: String,
    productId: String,
    productImages: Array,
  },
  data() {
    return {
      favourite: false,
      Store: useCounterStore(),
      confirm: ref(false),
      confirm2: ref(false),
      images: [],
      // image: this.images[0],
      fieldOptions: ["name", "price", "category", "brand", "tag"],
      field: reactive({
        name: null,
        value: "",
      }),
    };
  },
  methods: {
    savefile(files) {
      console.log(files);

      this.images.push(files[0]);
      console.log(this.images);
      //   // const [first] = files;
      //   this.images.push(files);
      //   console.log(this.images);
      // } else {
      //   console.log("no image");
      // }
    },
    UpdateProduct(id) {
      let name = this.field.name;
      let value = thisfield.value;
      Store.ShowLoading = true;
      let docToUpdate = doc(db, "products", id);
      updateDoc(docToUpdate, {
        name: value,
      }).then(() => {
        Store.ShowLoading = false;
        Store.notifyUser(Store.user.profilePic, "Product Updated");
      });
    },
  },
  computed: {
    // a computed getter
    image() {
      // `this` points to the component instance
      return this.images[0];
    },
  },
};

// const props = defineProps({
//   productName: String,
//   productPrice: String,
//   productCategory: String,
//   productImage: String,
//   productBrand: String,
//   productTag: String,
// });

// const {
//   productName,
//   productPrice,
//   productImage,
//   productCategory,
//   productBrand,
//   productTag,
// } = toRefs(props);
// const Store = useCounterStore();

// const confirm = ref(false);
// const confirm2 = ref(false);

// const images = [];
// const product = reactive({
//   name: "",
//   price: "",
//   category: "",
//   description: "",
//   brand: "",
// });
// const field = reactive({
//   name: "",
//   value: "",
// });

// const savefile = (files) => {
//   images.push(files[0]);
//   console.log(images);
// };

// const deleteProduct = (id) => {
//   Store.ShowLoading = true;
//   deleteDoc(doc(db, "products", id)).then(() => {
//     Store.notifyUser(Store.user.profilePic, "Product deleted Successfully");
//     Store.ShowLoading = false;
//   });
// };

// const UpdateProduct = () => {
//   let name = field.name;
//   let value = field.value;
//   Store.ShowLoading = true;
//   let docToUpdate = doc(db, "products", "KbHDF2HwbeY80EvU1gUt");
//   updateDoc(docToUpdate, {
//     name: value,
//   }).then(() => {
//     Store.ShowLoading = false;
//     Store.notifyUser(Store.user.profilePic, "Product Updated");
//   });
// };

// const addImage = (file) => {
// if (file) {
//   Store.ShowLoading = true;
//   const metadata = {
//     contentType: "image/jpeg",
//   };
//   let docToUpdate = doc(db, "products", "KbHDF2HwbeY80EvU1gUt");
//   const storageRef = ref(Storage, "images/" + file.name);
//   uploadBytesResumable(storageRef, file, metadata).then(() => {
//     getDownloadURL(storageRef).then((downloadURL) => {
//       // const docToUpdate = doc(db, "users", this.userId);
//       updateDoc(docToUpdate, {
//         images: arrayUnion(downloadURL),
//       }).then(() => {
//         Store.ShowLoading = false;
//         Store.notifyUser(Store.user.profilePic, "image Uploaded");
//       });
//     });
//   });
// } else {
//   Store.notifyUser(Store.user.profilePic, "No image to upload");
// }
// };

// const files = ref(null);
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
