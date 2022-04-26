<template>
  <div class="navbar-wrapper">
    <div class="control-buttons">
      <button @click="showCards">{{ isCardOpen ? 'QUIT' : 'START' }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isCardOpen: false
    }
  },
  methods: {
    showCards(){
      this.isCardOpen = !this.isCardOpen;
      this.$emit('showCards', this.isCardOpen);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles.scss';
 .navbar-wrapper {
  background-color: $blueSetColor2;
  height: 128px;
  width: 420px;
  position: absolute;
  border-radius: 40px;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
}
.control-buttons {
  display: flex;
  flex-direction: row;
  padding: 5px;
  height: fit-content;
  // gap: 1.2rem;
  margin: 0 auto;
  // width: 95%;
  justify-content: center;
}
button {
  font-size: 1.6rem;
  font-weight: 900;
  cursor: pointer;
  user-select: none;
  display: block;
  height: 102px;
  width: 180px;
  border: 8px solid #ffffff;
  border-radius: 40px;
  background-color: $blueSetColor3;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  transition: 0.2s all;
  &:active {
    transform: scale(0.9)
  }
}
</style>