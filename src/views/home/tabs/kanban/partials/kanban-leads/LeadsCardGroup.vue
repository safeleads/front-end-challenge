<template>
  <div class="leads-card-group d-flex ">
    <LeadsCardColumn
      v-for="(t, idx) in tarefas"
      :key="`leads-card-column__${idx}`"
      :tarefa="t"
    />
  </div>
</template>

<script>
import LeadsCardColumn from './LeadsCardColumn';
import TASKS_DATA from '~/data/tarefas.json';
export default {
  name: 'LeadsCardGroup',
  components: {
    LeadsCardColumn
  },
  computed: {
    tarefas() {
      return TASKS_DATA.tarefas;
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-group {
  .leads-card-column {
    flex: 1 0 100%;
    max-width: 350px;

    &:nth-of-type(odd) {
      background-color: tomato;
      /deep/ .card-header {
        background-color: $body-bg;

        .header-badge {
          background: #f6f6f9;
        }

        .header-title {
          font-weight: normal;
        }
      }
    }
    &:nth-child(1n + 2) {
      /deep/ .card-body {
        margin-left: 8px;
      }
    }
  }
}
</style>
