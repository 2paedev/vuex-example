<template>
  <div class="info-wrapper" v-if="characterInfo.name">
    <ImageCaption :dataImage="characterInfo"></ImageCaption>
    <span>Status: {{ characterInfo.status }}</span>
    <span>Species: {{ characterInfo.species }}</span>
    <span>Gender: {{ characterInfo.gender }}</span>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { ImageCaption } from "@/components";

export default {
  name: "CharacterInfo",
  components: {
    ImageCaption
  },
  computed: {
    ...mapState("character", ["characterInfo"]),
    ...mapGetters("character", ["getCharacterData"])
  },
  methods: {
    ...mapActions("character", ["getCharacterInfo"])
  }
};
</script>

<style lang="scss" scoped>
.info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  span {
    margin-top: 8px;
  }
}

.info-wrapper:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
