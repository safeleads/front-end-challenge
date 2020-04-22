<template>
  <b-card class="leads-card-column border-0 bg-transparent" no-body>
    <b-card-header
      class="leads-card-column--header position-relative flex-center text-center"
      :style="`border-bottom-color: ${header.borderColor}`"
      tag="header"
    >
      <h2
        class="header-title text-15 line-height-20 mb-0 mr-2"
        v-text="header.title"
      ></h2>
      <b-badge
        class="header-badge text-15 line-height-20 font-weight-bold text-dark"
        v-text="tarefa.data.length"
      ></b-badge>
      <b-button class="header-button" variant="blank" @click="addTask">
        <b-img
          class="mr-0"
          :src="require('~/assets/icons/adicionar.svg')"
          alt="Adicionar tarefa"
        />
        <span class="sr-only">Adicionar tarefa</span>
      </b-button>
    </b-card-header>

    <b-card-body class="leads-card-column--body bg-white scroller">
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
  },
  computed: {
    header() {
      switch (this.tarefa.type) {
        case 'waiting_contact':
          return {
            borderColor: '#E7EBF1',
            title: 'Aguardando contato'
          };
        case 'in_progress':
          return {
            borderColor: '#29B52E',
            title: 'Em atendimento'
          };
        case 'pre_proposal':
          return {
            borderColor: '#364299',
            title: 'Elaboração pré-proposta'
          };
        case 'visit_scheduled':
          return {
            borderColor: '#84037E',
            title: 'Visita Agendada'
          };
        default:
          return {
            borderColor: '#C5B30C',
            title: 'Visita técnica'
          };
      }
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch('tasks/post', {
        id: this.tarefa.id,
        data: {
          last_update:
            'Tue Mar 24 2020 15:00:00 GMT-0300 (Horário Padrão de Brasília)',
          projects: '01',
          responsible: 'Gustavo Souza',
          client: {
            name: 'Rodrigo Santos',
            origin: 'Campo'
          },
          status: {
            state: 'waiting_contact',
            time: '8:20'
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-column {
  min-width: 360px;
  min-height: 100%;

  &--header {
    height: 74px;
    padding: 17px 11px 7px;
    background: white;
    border-bottom: 10px solid $light;
    border-radius: 0;

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
      padding: 9px 10px;
      position: absolute;
      top: 16px;
      right: 11px;
      border: 1px solid $light;
      border-radius: 50%;

      &:hover {
        background-color: #fff;
        border: 0;
        box-shadow: 0 2px 4px rgba($dark, 0.25);
      }

      @include media-breakpoint-up(sm) {
        top: 8px;
      }
    }
  }

  &--body {
    max-height: 720px;
    margin-top: 11px;
    padding: 13px;
    border-radius: 4px;
    overflow-y: auto;
  }
}
</style>
