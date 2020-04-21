<template>
  <b-row class="beta-warning">
    <b-col class="beta-warning__version text-right" md="6" lg="4">
      Versão Beta
    </b-col>
    <b-col class="beta-warning__development text-right" md="6" lg="8">
      Tela em desenvolvimento
      <img
        style="margin-left: 12px;"
        :src="require('~/assets/icons/desenvolvimento.svg')"
        alt="Icone de tela em versão beta."
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'BetaWarning'
};
</script>

<style lang="scss" scoped>
.beta-warning {
  max-width: 68%;
  margin: 0 0 0 -5px;
  background-color: #e7ebf1;

  > [class*='col-'] {
    padding: 11px 14px;
  }

  &__version {
    background-color: $primary;
  }
}
</style>
