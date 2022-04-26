<template>
  <div class="wrapper">
    <img class="face-image" :src="faceImage"/>
    <section>
      <h1>{{ message }}</h1>
      <h2>{{ description }}</h2>
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
      message: "Hello, I'm Pavexa",
      description: "Your virtual leaflet"
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles.scss';
.wrapper {
  overflow: hidden;
  width: 85%;
  height: 70%;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: $blueSetColor2;
  border-radius: 40px;
  footer {
    border-top: 8px solid $blueSetColor1;
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
      user-select: none;
    }
    #logoAlexa {
      height: 37px;
    }
    #logoActemra {
      height: 35px;
    }
  }
  section {
    position: absolute;
    align-items: center;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 5rem;
      font-weight: 700;
      line-height: 110%;
      margin: 0;
      user-select: none;
    }
    h2 {
      font-size: 3rem;
      font-weight: 700;
      user-select: none;
    }
  }
}
.face-image {
  opacity: 0.5;
  position: relative;
  right: 400px;
  bottom: 340px;
  height: 140%;
}

</style>