<template>
  <div class="spinner">
    <img
      class="image-animation"
      src="@/assets/spinner.gif"/>
  </div>
</template>

<script>
export default {
  name: 'TheSpinner'
}
</script>

<style lang="scss" scoped>
.spinner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(var(--white-rgb), 0.95);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  .image-animation {
    width: 50px;
    height: 50px;
  }
}
</style>
