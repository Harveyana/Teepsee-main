<template>
  <q-card class="range-group overflow-hidden" style="">
    <q-separator class="" style="margin-bottom: 4%; height: 2px" />
    <!-- ratings 1 -->
    <q-card class="row range no-wrap items-center">
      <h3 class="ratingnumber no-wrap" style="">5</h3>
      <q-icon name="img:/star.svg" class="star-icon" /><q-range
        v-model="standard"
        color="secondary"
        :min="0"
        :max="5"
        readonly
        thumb-size="1px"
        class="rangebar"
        style=""
      />
      <h3 class="rating" style="position: relative; left: 7%">(26)</h3>
    </q-card>
    <!-- ratings 2 -->
    <q-card class="row range no-wrap items-center">
      <h3 class="ratingnumber no-wrap">4</h3>
      <q-icon name="img:/star.svg" class="star-icon" /><q-range
        v-model="standard"
        color="secondary"
        :min="0"
        :max="5"
        readonly
        thumb-size="1px"
        class="rangebar"
      />
      <h3 class="rating" style="position: relative; left: 7%">(74)</h3>
    </q-card>
    <!-- ratings 3 -->
    <q-card class="row range no-wrap items-center">
      <h3 class="ratingnumber no-wrap">3</h3>
      <q-icon class="star-icon" name="img:/star.svg" /><q-range
        v-model="standard"
        color="secondary"
        :min="0"
        :max="5"
        readonly
        thumb-size="1px"
        class="rangebar"
      />
      <h3 class="rating" style="position: relative; left: 7%">(74)</h3>
    </q-card>
    <!-- ratings 4 -->
    <q-card class="row range no-wrap items-center">
      <h3 class="ratingnumber no-wrap">2</h3>
      <q-icon name="img:/star.svg" class="star-icon" style="" /><q-range
        v-model="standard"
        color="secondary"
        :min="0"
        :max="5"
        readonly
        thumb-size="1px"
        class="rangebar"
      />
      <h3 class="rating" style="position: relative; left: 7%">(74)</h3>
    </q-card>
    <!-- ratings 5 -->
    <q-card class="row range no-wrap items-center">
      <h3 class="ratingnumber no-wrap">1</h3>
      <q-icon class="star-icon" name="img:/star.svg" /><q-range
        v-model="standard"
        color="secondary"
        :min="0"
        :max="5"
        readonly
        thumb-size="1px"
        class="rangebar"
      />
      <h3 class="rating" style="position: relative; left: 7%">(74)</h3>
    </q-card>
    <!-- ratings -->
    <!-- ratings -->
    <q-separator style="margin-top: 4%; height: 2px" />
  </q-card>
</template>

<script setup>
import { ref } from "vue";

// const ratingModel = ref(3);
const standard = ref({
  min: 0,
  max: 2,
});
</script>
<style scoped lang="sass">
.range-group
  body.screen--xl &
    width: 100%
    height: 20vh
  body.screen--lg &
    width: 100%
    height: 30vh
  body.screen--md &
    width: 100%
    height: 40vh
  body.screen--sm &
    width: 100%
    height: 30vh
  body.screen--xs &
    width: 100%
    height: 33vh

.rating
  line-height: 5px
  color: #1f1e26
  font-family: 'Manrope-semiBold'
  font-size: 125%
  body.screen--sm &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 100%
  body.screen--xs &
    line-height: 5px
    color: #1f1e26
    font-family: 'Manrope-semiBold'
    font-size: 100%

.range
  height: 13%
  body.screen--sm &

.star-icon
  position: relative
  left: 1%
  font-size: 21px
  body.screen--sm &
    position: relative
    left: 1%
    font-size: 16px
  body.screen--xs &
    position: relative
    left: 1%
    font-size: 16px

.ratingnumber
  font-size: 160%
  body.screen--sm &
    font-size: 130%
  body.screen--xs &
    font-size: 125%

.rangebar
  width: 50%
  position: relative
  left: 4%
  body.screen--sm &
    width: 50%
    position: relative
    left: 4%
</style>
