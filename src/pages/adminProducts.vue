<template>
  <q-page class="">
    <q-toolbar class="self-start overflow-hidden">
      <q-item class="q-ml-xl">
        <div class="input q-ml-md">
          <img src="/search.png" alt="" />
          <input
            class="search q-pl-xl"
            type="text"
            placeholder=" Products search"
            @keydown="showsearch = true"
          />
        </div>
      </q-item>
      <q-item class="" style="position: relative; left: 9%">
        <q-btn
          flat
          label="Add Products"
          style="
            background-color: #27141a;
            color: #e6b41d;
            height: 44px;
            font-size: x-large;
            border-radius: 12px;
          "
        >
          <q-popup-proxy
            cover
            maxHeight="99vh"
            transition-show="slide-down"
            transition-hide="slide-up"
            style="position: relative; right: 10%; width: 55vw"
            class="overflow-hidden bg-grey-3"
          >
            <ProductUploader />
          </q-popup-proxy>
        </q-btn>
      </q-item>
    </q-toolbar>

    <!-- body -->
    <!-- body -->
    <div class="container row justify-center self-start" style="">
      <q-card flat class="cart" style="">
        <q-card class="card-headers q-mt-lg row justify-around">
          <q-card class="ImageAndName"
            ><h3 class="ImageAndNameLabel card-header" style="">
              Product Image & Item Name
            </h3></q-card
          >
          <q-card class="Price"
            ><h3 class="PriceLabel card-header" style="">Price</h3></q-card
          >
          <q-card class="Brand"
            ><h3 class="BrandLabel card-header" style="">Brand</h3></q-card
          >
          <q-card class="Category"
            ><h3 class="CategoryLabel card-header" style="">Category</h3></q-card
          >
          <q-card class="Edit"
            ><h3 class="EditLabel card-header" style="">Edit</h3></q-card
          >
        </q-card>
        <q-list class="scroll hide-scrollbar" style="">
          <!--  Product -->
          <!--  Product -->
          <AdminProduct
            v-for="product in Store.products.value"
            :productName="product.name"
            :productImage="product.images[0]"
            :productPrice="product.price"
            :productCategory="product.category"
            :productTag="product.tag"
            :productBrand="product.brand"
            :productImages="product.images"
            :key="product.id"
          >
          </AdminProduct>
          <!-- <AdminProduct />
          <AdminProduct />
          <AdminProduct />
          <AdminProduct />
          <AdminProduct />
          <AdminProduct />
          <AdminProduct />
          <AdminProduct /> -->

          <!-- Product -->
        </q-list>

        <q-separator class="" style="height: 5px" />
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import ProductUploader from "src/components/productUploader.vue";
import { useCounterStore } from "stores/counter";
import { onMounted } from "vue";
import AdminProduct from "src/components/adminProduct.vue";

const Store = useCounterStore();

onMounted(() => {
  Store.Fetchproducts("general");
});
</script>
<style scoped lang="sass">
.search
  body.screen--md &
    border-radius: 15px
    min-height: 50px
    min-width: 160%
    outline: none
    background: transparent
    border: 1px solid #27141A
    color: #27141A
    font-size: 120%
    // padding-left: 40%
  body.screen--lg &
    border-radius: 15px
    min-height: 50px
    min-width: 180%
    outline: none
    // margin-right: 70px
    background: transparent
    border: 1px solid #27141A
    color: #27141A
    font-size: 120%
    // padding-left: 40%
  body.screen--xl &
    border-radius: 15px
    min-height: 50px
    min-width: 180%
    outline: none
    background: transparent
    border: 1px solid #27141A
    color: #27141A
    font-size: 120%
    // padding-left: 40%
  body.screen--sm &
    border-radius: 15px
    min-height: 45px
    min-width: 120%
    outline: none
    background: transparent
    border: 1px solid #27141A
    color: #27141A
    font-size: 130%
    // padding-left: 40px

.input
  body.screen--md &
    position: relative
    right: 25%
  body.screen--lg &
    position: relative
    right: 30%
  body.screen--xl &
    position: relative
    right: 30%

.input >img
  body.screen--md &
    position: absolute
    top: 15px
    left: 9%
  body.screen--lg &
    position: absolute
    top: 15px
    left: 15px
  body.screen--xl &
    position: absolute
    top: 15px
    left: 15px

// products
// products
// products


.card-header
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Catellosdemo'
    font-size: 125%

.AddToCartBtn
  border-top-right-radius: 8px
  border-bottom-right-radius: 8px
  width: 35%
  height: 100%
  font-family: 'Manrope-Regular'
  text-transform: capitalize
  background: #e6b41d
.checkoutBtn
  border-radius: 8px
  width: 80%
  height: 41px
  font-family: 'Manrope-semiBold'
  text-transform: capitalize
  background: #27141a
.NameClassLess
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-regular'
    font-size: 100%
.NameClass
  body.screen--xl &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--lg &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--md &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-Bold'
    font-size: 100%
// .productCat
//   body.screen--md &
//     line-height: 5px
//     color: #1f1e26
//     font-family: 'Manrope-Bold'
//     font-size: 70%

.search
  // padding-left: 10px
  // margin-top: 15px
  border-radius: 10px
  width: 100%
  height: 40px
  font-size: 14px
  border: 0.5px solid #1f1e26
  body.screen--sm &
    font-size: 12px
.discountEntry
  width: 65%
  border-top-left-radius: 12px
  border-bottom-left-radius: 12px
  border: 1px solid #e4e4e4
  height: 100%
  font-size: 14px
  padding-left: 15px
  body.screen--sm &
    font-size: 12px

// Product Counter
// Product Counter
// Product Counter
// Product Counter
.container
  body.screen--xl &
    width: 70%
    height: 50vh
  body.screen--lg &
    width: 98%
    height: 70vh
  body.screen--md &
    width: 100%
    height: 60vh
  // body.screen--sm &
  //   width: 100%
  //   height: fit-content
  //   flex-direction: column
  // body.screen--xs &
  //   width: 90%
  //   height: fit-content
  //   flex-direction: row
.PageName
  body.screen--xl &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 290%
    position: relative
    left: 23%
    margin-right: auto
  body.screen--lg &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 250%
    position: relative
    left: 2.5%
    margin-right: auto
  body.screen--md &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 220%
    margin-right: auto
  body.screen--sm &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 210%
    margin-right: auto
  body.screen--xs &
    line-height: 25px
    color: #27141a
    font-family: 'Catellosdemo'
    font-size: 210%
    margin-right: auto
    position: relative
    left: 5%
.scroll
  width: 100%
  height: 100%



.cart
  body.screen--xl &
    width: 62%
    height: inherit
    border-radius: 15px
  body.screen--lg &
    width: 62%
    height: inherit

    border-radius: 15px
  body.screen--md &
    width: 80%
    height: inherit

    border-radius: 15px
  body.screen--sm &
    width: 100%

    border-radius: 15px
  body.screen--xs &
    width: 100%

    border-radius: 15px
.summary
  body.screen--xl &
    width: 35%

    border-radius: 15px
  body.screen--lg &
    width: 35%

    border-radius: 15px
  body.screen--md &
    width: 35%

    border-radius: 15px
  body.screen--sm &
    margin-top: 5%
    margin-bottom: 7%
    align-self: center
    width: 65%

    border-radius: 15px
</style>
