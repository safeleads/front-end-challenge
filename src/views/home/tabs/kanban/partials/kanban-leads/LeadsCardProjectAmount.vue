<template>
  <div
    class="leads-card-project-amount align-center justify-content-center justify-content-sm-start"
  >
    <b-img
      class="leads-card-project-amount--icon"
      :src="require('~/assets/icons/projeto.svg')"
      alt="icone de quantidades de projetos."
    />
    <span
      class="leads-card-project-amount--label text-10 line-height-14 text-primary-alt"
    >
      QTD. Projeto:
    </span>
    <span
      class="leads-card-project-amount--quantity text-12 line-height-17 font-weight-bold"
      v-text="projects"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'LeadsCardProjectAmount',
  props: {
    /**
     * quantidade de projetos
     */
    projects: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-project-amount {
  > *:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
