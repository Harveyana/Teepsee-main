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
          src="../assets/userImage.svg"
          spinner-color="black"
          class="favourite q-ml-md"
          style="width: 75%"
        />
      </q-card>
      <q-card class="gt-xs Name" style="width: 50%">
        <h4 class="productName NameClass" style="">Harvey Ana</h4>
        <h4 class="productCat" style="">Teepseer</h4>
      </q-card>
    </q-card>
    <!-- Product Price -->
    <q-card
      class="row ProductPrice flex flex-center"
      style="width: 15%; position: relative; right: 3%"
    >
      <h4 class="productPrice NameClass" style="">anayoobi@gmail.com</h4>
    </q-card>
    <!-- Product Quantity -->
    <q-card
      class="gt-xs row productBrandLabel flex flex-center"
      style="width: 8%; position: relative; right: 3.5%"
    >
      <h4 class="productBrand NameClass" style="">090123559071</h4>
    </q-card>
    <!-- Product SubTotal -->
    <q-card
      class="gt-xs row CategoryNameLabel flex flex-center"
      style="width: 15%; position: relative; right: 3%"
    >
      <h4 class="CategoryName NameClass" style="">1, Ikoyi Falomo street...</h4>
    </q-card>
    <q-card class="gt-xs row Edit flex flex-center" style="position: relative; right: 4%">
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
                <h4 class="NameClass">User Name</h4>
                <q-input
                  filled
                  label="User Name"
                  v-model="text"
                  style="border-radius: 15px; width: 100%"
                />
              </q-card>
              <!-- Product Price -->
              <q-card class="input2" style="width: 80%">
                <h4 class="NameClass">User Email</h4>
                <q-input
                  filled
                  label="User Email"
                  v-model="text"
                  style="border-radius: 15px; width: 100%"
                />
              </q-card>
              <!-- Product Category -->
              <q-card class="input3" style="width: 80%">
                <h4 class="NameClass">Phone Number</h4>
                <q-input
                  filled
                  label="Phone Number"
                  v-model="text"
                  style="border-radius: 15px; width: 70%"
                />
              </q-card>
              <q-card class="input4" style="width: 80%">
                <h4 class="NameClass">User Address</h4>
                <q-input
                  filled
                  label="User Address"
                  v-model="text"
                  style="border-radius: 15px; width: 100%"
                />
              </q-card>
              <!-- inputs -->
            </q-card>

            <!-- q-uploader -->
            <!-- q-uploader -->
            <q-uploader
              :factory="factoryFn"
              class="bg-grey-3"
              multiple
              label="Upload Profile Image"
              accept=".jpg, image/*"
              style="max-width: 300px"
            />
            <!-- q-uploader -->
            <!-- q-uploader -->

            <q-card class="images row flex-center wrap q-px-lg" style="width: 50%">
              <!-- user image -->
              <!-- user image -->
              <q-card class="image" style="width: 60%">
                <q-img
                  src="../assets/userImage.svg"
                  spinner-color="black"
                  class="favourite"
                  style="width: 100%"
                />
              </q-card>
            </q-card>
          </q-card>
          <!-- submitBtn and UploadBtn -->
          <!-- submitBtn and UploadBtn-->
          <q-card flat class="submitBtn q-ml-lg q-my-md" style="width: 20%">
            <q-btn
              text-color="white"
              class="checkoutBtn"
              label="Submit"
              @click="confirm = true"
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
                  >Are you sure you want to make changes to this Profile.</span
                >
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn flat label="Confirm" color="secondary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-popup-proxy>
      </q-icon>
    </q-card>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
const confirm = ref(false);
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
    line-height: 16px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--lg &
    line-height: 16px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--md &
    line-height: 16px
    color: #27141a
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--sm &
    line-height: 16px
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
    color: #e6b41d
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--lg &
    line-height: 5px
    color: #e6b41d
    font-family: 'Manrope-Bold'
    font-size: 70%
  body.screen--md &
    line-height: 5px
    color: #e6b41d
    font-family: 'Manrope-Bold'
    font-size: 78%
  body.screen--sm &
    line-height: 5px
    color: #e6b41d
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
