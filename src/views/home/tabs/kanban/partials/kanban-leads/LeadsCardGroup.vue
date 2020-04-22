<template>
  <div class="leads-card-group d-flex ">
    <LeadsCardColumn v-for="t in tarefas" :key="t.id" :tarefa="t" />
  </div>
</template>

<script>
import LeadsCardColumn from './LeadsCardColumn';
export default {
  name: 'LeadsCardGroup',
  components: {
    LeadsCardColumn
  },
  computed: {
    tarefas() {
      return this.$store.state.tasks.tasks;
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-group {
  .leads-card-column {
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
