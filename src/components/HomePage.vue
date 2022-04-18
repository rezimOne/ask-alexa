<template>
  <div class="wrapper">
    <img class="face-image" :src="faceImage"/>
    <header></header>
    <section>
      <p>{{ message}}</p>
    </section>
    <footer>
      <div class="logo-wrapper">
        <img id="logoAlexa" :src="logoAlexa"/>
        <img id="logoActemra" :src="logoActemra"/>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  props: { logoAlexa: String, logoActemra: String, faceImage: String },
  data() {
    return {
      message: "Hello, I'm Pavexa. Your virtual liflet."
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles.scss';
.wrapper {
  // border: 3px solid $blueSetColor3;
  overflow: hidden;
  margin-top: 30px;
  width: 86%;
  height: 70%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: $blueSetColor2;
  border-radius: 40px;
  footer {
    border-top: 5px solid $blueSetColor1;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    .logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      width: 70%;
      height: 100%;
      margin: 0 auto;
    }
    #logoAlexa {
      height: 37px;
    }
    #logoActemra {
      height: 35px;
    }
  }
  section {
    display: flex;
    align-items: center;
    position: absolute;
    height: 80%;
    width: 90%;
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    p {
      font-size: 5rem;
      font-weight: 700;
      line-height: 100px;
      line-height: 110%;
    }
  }
}
.face-image {
  opacity: 0.5;
  height: 920px;
  position: relative;
  right: 385px;
  bottom: 250px;
  }

</style>