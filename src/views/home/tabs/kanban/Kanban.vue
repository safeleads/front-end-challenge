<template>
  <section class="kanban">
    <b-row class="kanban__header mr-0" tag="header" align-v="center">
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
      <div class="body-container">
        <LeadsCardGroup />
      </div>
    </div>
  </section>
</template>

<script>
import { TheBetaWarning } from '~/components/common';
import { OneChoiseButton } from '~/components/UI';
import LeadsCardGroup from './partials/kanban-leads/LeadsCardGroup';
export default {
  name: 'Kanban',
  components: {
    OneChoiseButton,
    TheBetaWarning,
    LeadsCardGroup
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

    > .body-container {
      overflow-x: auto;
      width: 100vw;
      max-width: 70vw;
      margin: 0 auto;
      padding-left: 15px;
      padding-right: 15px;

      @include media-breakpoint-up(md) {
        max-width: 80vw;
      }

      @include media-breakpoint-up(lg) {
        max-width: 90vw;
      }

      @media screen and (min-width: 1920px) {
        max-width: 1750px;
      }
    }
  }

  &-card-group__body {
    padding: 20px 13px;
  }
}
</style>
