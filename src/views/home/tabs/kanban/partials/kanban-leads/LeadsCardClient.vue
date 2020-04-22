<template>
  <b-row class="leads-card-client" align-h="between" align-v="center">
    <b-col class="flex-center" sm="auto">
      <b-img
        :src="require('~/assets/icons/person.svg')"
        alt="Icone de pessoa"
      />
      <span class="text-14 line-height-19" v-text="client.name"></span>
    </b-col>
    <b-col class="text-11 line-height-15 text-center" sm="auto">
      <span class="leads-card-client--label text-primary">Origem: </span>
      <span v-text="client.origin"></span>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'LeadsCardClient',
  props: {
    /**
     * client: {
     *  name: String;
     *  origin: String
     * }
     */
    client: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-client img {
  width: 13px;
  height: 15px;
  margin-right: 9px;
}
</style>
