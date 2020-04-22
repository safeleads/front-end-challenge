<template>
  <b-row
    class="leads-card-simulation text-12 line-height-17 mx-0"
    align-h="start"
    no-gutters
  >
    <b-col class="flex-center" sm="auto">
      <b-img
        class="leads-card-simulation--icon"
        :src="require('~/assets/icons/unidade_consumidora.svg')"
        alt="Imagem da simulação do valor de uma tarefa."
      />
      <span class="leads-card-simulation--label">Valor da simulação:</span>
    </b-col>

    <b-col
      class="leads-card-simulation--money text-center font-weight-bold"
      sm="auto"
    >
      {{ simulation | currency }}
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'LeadsCardSimulation',
  props: {
    simulation: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-simulation {
  padding: 12px 17px;
  background-color: $light;

  &--icon {
    margin-right: 5px;
  }

  [class*='col-']:first-child {
    @include media-breakpoint-up(sm) {
      margin-right: 5px;
    }
  }

  &--label {
    color: #6a1476;
  }
}
</style>
