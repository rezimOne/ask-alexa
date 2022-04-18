<template>
  <header>
    <img id="logoRoche" :src="logoRoche">
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  props: { logoRoche: String }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles.scss';
header {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $blueSetColor1;
  #logoRoche {
    max-width: 100px;
    height: 60px;
  }
}
</style>