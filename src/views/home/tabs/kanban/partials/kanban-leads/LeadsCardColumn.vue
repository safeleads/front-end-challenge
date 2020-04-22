<template>
  <b-card class="leads-card-column border-0 bg-transparent" no-body>
    <b-card-header
      class="leads-card-column--header position-relative flex-center text-center"
      :style="`border-bottom-color: ${tarefa.borderColor}`"
      tag="header"
    >
      <h2
        class="header-title text-15 line-height-20 mb-0 mr-2"
        v-text="tarefa.column"
      ></h2>
      <b-badge
        class="header-badge text-15 line-height-20 font-weight-bold text-dark"
        >{{ tarefa.data.length }}</b-badge
      >
      <b-button class="header-button" variant="blank">
        <b-img
          class="mr-0"
          :src="require('~/assets/icons/adicionar.svg')"
          alt="Adicionar tarefa"
        />
        <span class="sr-only">Adicionar tarefa</span>
      </b-button>
    </b-card-header>

    <b-card-body class="leads-card-column--body bg-white">
      <LeadsCard
        v-for="(data, idx) in tarefa.data"
        :key="`leads-card__${idx}`"
        :data="data"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import LeadsCard from './LeadsCard';
export default {
  name: 'LeadsCardColumn',
  components: {
    LeadsCard
  },
  props: {
    tarefa: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-column {
  &--header,
  &--body {
    border-radius: 4px;
  }

  &--header {
    height: 74px;
    padding: 17px 11px 7px;
    background: white;
    border-bottom: 10px solid $light;

    @include media-breakpoint-up(sm) {
      height: auto;
    }

    .header-title {
      color: #0f1922;
      font-weight: bold;
    }

    .header-badge {
      padding: 4px 10px;
      border-radius: 50%;
      background-color: $body-bg;
    }

    .header-button {
      display: none;
      padding: 9px 10px;
      position: absolute;
      top: 12px;
      right: 11px;
      border: 1px solid $light;
      border-radius: 50%;

      &:hover {
        background-color: #fff;
        border: 0;
        box-shadow: 0 2px 4px rgba($dark, 0.25);
      }

      @include media-breakpoint-up(sm) {
        display: block;
      }
    }
  }

  &--body {
    margin-top: 11px;
    padding: 13px;
  }
}
</style>
