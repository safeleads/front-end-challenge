<template>
  <div
    class="leads-card-header py-1 py-sm-0 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-end"
  >
    <span class="leads-card-header--title text-12 line-height-17 py-sm-1">
      Última atualização:
    </span>
    <div class="leads-card-header--last-update flex-center text-right">
      <b-img
        :src="require('~/assets/icons/clock.svg')"
        alt="Icone do relógio indicando a última atualização da tarefa."
      />
      <span class="last-update__date-time text-12 line-height-17">
        {{ lastUpdate | moment('D MMM - hh:mm') }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeadsCardHeader',
  props: {
    lastUpdate: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.leads-card-header {
  border-bottom: 1px solid $light;

  @include media-breakpoint-up(sm) {
    max-height: 24px;
  }

  &--title {
    @include media-breakpoint-up(sm) {
      margin-right: 6px;
    }
  }

  &--last-update {
    @include media-breakpoint-up(sm) {
      padding: 4px 6px 4px 11px;
      background-color: $light;
      border-radius: $border-radius-small;
    }

    img {
      margin-right: 6px;
    }
  }
}
</style>
