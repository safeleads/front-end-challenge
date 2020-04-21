<template>
  <section class="kanban">
    <b-row class="kanban__header" tag="header" align-v="center">
      <b-col md="6">
        <OneChoiseButton
          class="mb-0"
          name="kanban-type"
          label="Mudar para kanban de:"
          :options="kanbanTypeOptions"
        />
      </b-col>
      <b-col md="6">
        <b-btn class="btn-filter" variant="dark">
          <img
            :src="require('~/assets/icons/filtrar.svg')"
            alt="Icone de filtragem."
          />
          Filtrar por
        </b-btn>
      </b-col>
    </b-row>

    <div class="kanban__body">
      <BetaWarning />
    </div>
  </section>
</template>

<script>
import { OneChoiseButton, BetaWarning } from '~/components/common';
export default {
  name: 'Kanban',
  components: {
    OneChoiseButton,
    BetaWarning
  },
  data() {
    return {
      kanbanTypeOptions: [
        {
          text: 'Leads',
          value: 'leads',
          img: require('~/assets/icons/person.svg'),
          alt: 'Icone indicando Kanban Leads'
        },
        {
          text: 'Projeto',
          value: 'projeto',
          img: require('~/assets/icons/projeto.svg'),
          alt: 'Icone indicando Kanban Projeto'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
