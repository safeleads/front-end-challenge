<template>
  <b-row class="beta-warning">
    <b-col
      class="beta-warning__version text-right text-white text-calibri font-weight-bold text-uppercase"
      sm="6"
      lg="4"
    >
      Versão Beta
    </b-col>
    <b-col
      class="beta-warning__development text-right text-calibri"
      sm="6"
      lg="8"
    >
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
  margin-left: -5px;
  background-color: #e7ebf1;

  @include media-breakpoint-up(sm) {
    max-width: 88%;
  }

  @include media-breakpoint-up(lg) {
    max-width: 68%;
  }

  > [class*='col-'] {
    padding: 11px 14px;
    font-size: 18px;
  }

  &,
  &__version {
    border-radius: 4px;
  }

  &__version {
    background-color: $primary;
  }

  &__development {
    color: #484848;
    line-height: 22px;
  }
}
</style>
