<template>
  <header>
    <!-- <img id="companyLogo" :src="companyLogo"> -->
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  // props: { companyLogo: String }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles.scss';
header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $blueSetColor1;
  // #companyLogo{
  //   user-select: none;
  //   max-width: 100px;
  //   height: 60px;
  // }
}
</style>