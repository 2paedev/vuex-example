<template>
  <section class="characters-wrapper">
    <CharacterInfo></CharacterInfo>
    <ul class="block-list">
      <li v-for="character in allCharacters" v-bind:key="character.id">
        <Character :dataInfo="character"></Character>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import Character from "@/views/home/components/Character.vue";
import CharacterInfo from "@/views/home/components/CharacterInfo.vue";

export default {
  name: "CharactersWrapper",
  components: {
    CharacterInfo,
    Character
  },
  beforeMount() {
    this.requestAllCharacters();
  },
  computed: {
    ...mapState("character", ["allCharacters"]),
    ...mapGetters("character", ["getAllCharacterData"])
  },
  methods: {
    ...mapActions("character", ["getAllCharacters"]),
    async requestAllCharacters() {
      try {
        //this.setRequestInProgress(true)
        await this.getAllCharacters();
        //this.setRequestInProgress(false)
      } catch (error) {
        console.log(error);
        //this.setRequestInProgress(false)
        //this.isUserInfoError = true
        //this.openPopup()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.characters-wrapper {
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.block-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
