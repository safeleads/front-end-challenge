<template>
  <b-card
    class="leads-card border-0 position-relative"
    :class="{ disabled: data.disabled }"
    no-body
  >
    <LeadsCardHeader :last-update="data.last_update" />

    <b-card-body class="leads-card--body">
      <LeadsCardClient :client="data.client" />
      <LeadsCardStatus :status="data.status" />
      <LeadsCardProjectAmount v-if="data.projects" :projects="data.projects" />
      <LeadsCardTaskResponsible :responsible="data.responsible" />
    </b-card-body>

    <b-card-footer v-if="data.simulation" class="p-0 border-0">
      <LeadsCardSimulation :simulation="data.simulation" />
    </b-card-footer>
  </b-card>
</template>

<script>
import LeadsCardHeader from './LeadsCardHeader';
import LeadsCardClient from './LeadsCardClient';
import LeadsCardStatus from './LeadsCardStatus';
import LeadsCardTaskResponsible from './LeadsCardTaskResponsible';
import LeadsCardSimulation from './LeadsCardSimulation';
import LeadsCardProjectAmount from './LeadsCardProjectAmount';
export default {
  name: 'LeadsCard',
  inheritAttrs: false,
  components: {
    LeadsCardHeader,
    LeadsCardClient,
    LeadsCardStatus,
    LeadsCardTaskResponsible,
    LeadsCardSimulation,
    LeadsCardProjectAmount
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
%background-disabled {
  background-color: $background !important;
}
%background-alt-disabled {
  background-color: #c0cbd4 !important;
}
%text-disabled {
  color: #717277 !important;
}
%text-alt-disabled {
  color: #484848 !important;
}
%text-dark-disabled {
  color: $dark !important;
}
.leads-card {
  background-color: #f6f6f9;
  border-radius: $border-radius-small;
  box-shadow: 0 2px 1px $background;

  &:not(:last-of-type) {
    margin-bottom: 11px;
  }

  &--body {
    padding: 9.5px 15px;

    > div:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}

.leads-card.disabled {
  @extend %background-disabled;
  @extend %text-disabled;

  &:after {
    content: '';
    z-index: 8;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
  }

  /deep/ .leads-card-header {
    border-bottom-color: #becedb;

    &--last-update {
      @extend %background-alt-disabled;
      @extend %text-alt-disabled;
    }
  }

  /deep/ .leads-card-client--label {
    @extend %text-disabled;
  }

  /deep/ .status-badge {
    @extend %background-alt-disabled;
    @extend %text-disabled;

    &--time {
      @extend %text-dark-disabled;
    }
  }

  /deep/ .leads-card-project-amount {
    &--label {
      @extend %text-alt-disabled;
    }
    &--quantity {
      @extend %text-dark-disabled;
    }
  }

  /deep/ .leads-card-task-responsible--name {
    @extend %text-alt-disabled;
  }

  /deep/ .leads-card-simulation {
    @extend %background-alt-disabled;
    @extend %text-alt-disabled;

    &--label {
      @extend %text-disabled;
    }
  }
}
</style>
