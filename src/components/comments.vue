<template>
  <q-card class="reviewbox column no-wrap q-mb-lg" style="">
    <q-rating v-model="ratingModel" readonly class="ratingStar" />
    <h3 class="comments no-wrap" style="">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper sit facilisi
      turpis nullam orci id at. In massa, quam ac felis mattis vulputate et luctus. Et nam
      mus dui laoreet senectus pulvinar et quam ipsum elit erat id libero.
    </h3>
    <h3 class="ratings-details no-wrap" style="">
      24/07/2021, 10:37p.m
      <span class="commentName" style="">by Anayo Obiajulu</span>
    </h3>
    <q-separator style="height: 2px" />
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const ratingModel = ref(3);
const standard = ref({
  min: 0,
  max: 2,
});
</script>
<style scoped lang="sass">
.ratingStar
  body.screen--xl &
    color: #e6b41d
    font-size: 30px
  body.screen--lg &
    color: #e6b41d
    font-size: 30px
  body.screen--md &
    color: #e6b41d
    font-size: 23px
  body.screen--sm &
    color: #e6b41d
    font-size: 16px
  body.screen--xs &
    color: #e6b41d
    font-size: 16px

.comments
  line-height: 23px
  color: #1f1e26
  font-family: 'Manrope-Regular'
  font-size: 125%
  body.screen--sm &
    line-height: 23px
    color: #1f1e26
    font-family: 'Manrope-Regular'
    font-size: 105%
  body.screen--xs &
    line-height: 17px
    color: #1f1e26
    font-family: 'Manrope-Regular'
    font-size: 88%
.reviewbox
  width: 100%
  max-height: 40%
  body.screen--xs &
    width: 100%
    max-height: 40%

.ratings-details
  line-height: 1px
  color: #1f1e26
  font-family: 'Manrope-semiBold'
  font-size: 125%
  position: relative
  bottom: 5%
  body.screen--sm &
    line-height: 1px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 99%
    position: relative
    bottom: 5%
  body.screen--xs &
    line-height: 1px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 80%
    margin-left: 6px
    position: relative
    bottom: 5%

.commentName
  font-family: 'Catellosdemo'
  font-weight: 500
  font-size: 128%
  margin-left: 12px
  body.screen--xs &
    font-family: 'Catellosdemo'
    font-weight: 500
    font-size: 108%
    margin-left: 6px
</style>
