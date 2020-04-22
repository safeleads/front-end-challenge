<template>
  <div
    class="leads-card-task-responsible text-12 line-height-17 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-start"
  >
    <span class="text">Responsável:</span>
    <span
      class="leads-card-task-responsible--name font-weight-bold"
      v-text="responsible"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'LeadsCardTaskResponsible',
  props: {
    responsible: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-task-responsible {
  .text {
    margin-right: 7px;
  }

  &--name {
    color: #6a1476;
  }
}
</style>
