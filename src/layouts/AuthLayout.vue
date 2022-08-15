<template>
  <div class="row justify-center">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders layout"
    >
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup></script>
<style scoped lang="sass">
.layout
  body.screen--xl &
    width: 50%
</style>
