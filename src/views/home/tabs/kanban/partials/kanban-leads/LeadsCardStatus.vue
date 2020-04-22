<template>
  <div class="leads-card-status align-center">
    <span class="leads-card-status--text text-14 line-height-19">Status</span>
    <StatusBadge :status="$attrs.status" />
  </div>
</template>

<script>
import { StatusBadge } from '~/components/common';
export default {
  name: 'LeadsCardStatus',
  inheritAttrs: false,
  components: {
    StatusBadge
  }
};
</script>

<style lang="scss" scoped>
.leads-card-status {
  &--text {
    display: none;

    @include media-breakpoint-up(sm) {
      display: inline-flex;
      margin-right: 11px;
    }
  }
}
</style>
