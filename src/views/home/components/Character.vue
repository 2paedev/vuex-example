<template>
  <div v-on:click="UpdatePanelInfo">
    <ImageCaption :dataImage="dataInfo"></ImageCaption>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { ImageCaption } from "@/components";

export default {
  name: "Character",
  components: {
    ImageCaption
  },
  computed: {
    ...mapState("character", ["characterInfo"])
  },
  props: {
    dataInfo: { type: Object, required: true }
  },
  methods: {
    ...mapActions("character", ["getCharacterInfo"]),
    async requestCharacterInfo() {
      try {
        //this.setRequestInProgress(true)
        await this.getCharacterInfo(this.dataInfo.id);
        //this.setRequestInProgress(false)
      } catch (error) {
        console.log(error);
        //this.setRequestInProgress(false)
        //this.isUserInfoError = true
        //this.openPopup()
      }
    },
    UpdatePanelInfo: function(event) {
      this.requestCharacterInfo();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
