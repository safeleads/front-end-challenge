<template>
  <section class="kanban">
    <b-row class="kanban__header" tag="header" align-v="center">
      <b-col sm="6" md="8" lg="6">
        <OneChoiseButton
          class="mb-0"
          name="kanban-type"
          label="Mudar para kanban de:"
          :options="kanbanTypeOptions"
        />
      </b-col>
      <b-col sm="6" md="4" lg="6">
        <b-btn class="btn-filter text-calibri" variant="dark">
          <img
            :src="require('~/assets/icons/filtrar.svg')"
            alt="Icone de filtragem."
          />
          Filtrar por
        </b-btn>
      </b-col>
    </b-row>

    <div class="kanban__body">
      <TheBetaWarning />
    </div>
  </section>
</template>

<script>
import { TheBetaWarning } from '~/components/common';
import { OneChoiseButton } from '~/components/UI';
export default {
  name: 'Kanban',
  components: {
    OneChoiseButton,
    TheBetaWarning
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

<style lang="scss" scoped>
.kanban {
  &__header {
    @include media-breakpoint-up(xl) {
      margin-left: 25px;
    }

    [class*='col-'] {
      padding: 8px 25px;

      @include media-breakpoint-up(sm) {
        padding: 23px 25px;
      }
    }

    .btn-filter {
      width: 100%;
      margin: auto;

      @include media-breakpoint-up(sm) {
        width: auto;
      }

      @include media-breakpoint-up(md) {
        margin: unset;
      }
    }
  }
  &__body {
    padding: 14px 0;
    background-color: $background;
  }
}
</style>
