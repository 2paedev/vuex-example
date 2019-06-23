<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <CharactersWrapper></CharactersWrapper>
  </div>
</template>

<script>
import CharactersWrapper from "@/views/home/components/CharactersWrapper.vue";

export default {
  name: "Home",
  components: {
    CharactersWrapper
  }
};
</script>

<style lang="scss" scoped>
</style>
