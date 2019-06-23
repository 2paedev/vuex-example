<template>
  <figure class="polaroid-style">
    <img class="character-img" :src="dataImage.image" alt>
    <figcaption class="character-caption">{{ dataImage.name }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "ImageCaption",
  props: {
    dataImage: { type: Object, required: true }
  }
};
</script>

<style lang="scss" scoped>
.polaroid-style {
  width: 200px;
  background-color: #42b983;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
}
.character-img {
  width: 100%;
}
.character-caption {
  font-weight: 600;
}
</style>
