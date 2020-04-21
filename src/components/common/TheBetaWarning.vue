<template>
  <b-row class="beta-warning mb-3">
    <b-col
      class="beta-warning__version text-right text-white text-calibri font-weight-bold text-uppercase"
      sm="6"
      md="4"
      lg="4"
    >
      Versão Beta
    </b-col>
    <b-col
      class="beta-warning__development text-right text-calibri"
      sm="6"
      md="8"
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
  name: 'TheBetaWarning'
};
</script>

<style lang="scss" scoped>
.beta-warning {
  margin-left: -5px;
  background-color: #e7ebf1;

  @include media-breakpoint-up(md) {
    max-width: 90%;
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
    display: flex;
    color: #484848;
    line-height: 22px;

    @include media-breakpoint-up(sm) {
      display: inline;
    }
  }
}
</style>
