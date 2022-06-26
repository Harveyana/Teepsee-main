<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style>
@font-face {
  font-family: "Catellosdemo";
  src: local("Catellosdemo"), url(./fonts/Catellosdemo.ttf) format("truetype");
}
@font-face {
  font-family: "Manrope-Bold";
  src: local("Manrope-Bold"), url(./fonts/Manrope-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Manrope-ExtraBold";
  src: local("Manrope-ExtraBold"), url(./fonts/Manrope-ExtraBold.ttf) format("truetype");
}
@font-face {
  font-family: "Manrope-ExtraLight";
  src: local("Manrope-ExtraLight"), url(./fonts/Manrope-ExtraLight.ttf) format("truetype");
}
@font-face {
  font-family: "Manrope-Light";
  src: local("Manrope-Light"), url(./fonts/Manrope-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Manrope-Medium";
  src: local("Manrope-Medium"), url(./fonts/Manrope-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Manrope-Regular";
  src: local("Manrope-Regular"), url(./fonts/Manrope-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Manrope-SemiBold";
  src: local("Manrope-SemiBold"), url(./fonts/Manrope-SemiBold.ttf) format("truetype");
}
</style>
