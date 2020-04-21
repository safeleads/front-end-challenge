<template>
  <b-badge
    class="status-badge d-flex flex-column flex-sm-row justify-content-between align-items-center font-weight-normal flex-fill"
    :variant="statusState.variant"
    pill
  >
    <span class="text-14 line-height-19" v-text="statusState.label"></span>
    <div class="align-center text-10 line-height-14">
      <b-img
        :src="require('~/assets/icons/relogio.svg')"
        alt="Icone do tempo do status"
      />
      <span class="status-badge--time">{{ status.time | moment('h:mm') }}</span>
    </div>
  </b-badge>
</template>

<script>
export default {
  name: 'StatusBadge',
  props: {
    /**
     * status: {
     *  time: Date;
     *  state: String; -> 'waiting_contact' | 'collecting_data' | 'scheduling_visit' | 'visit_scheduled'
     * }
     */
    status: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusState() {
      switch (this.status.state) {
        case 'waiting_contact':
          return {
            variant: 'light',
            label: 'Aguardando Contato'
          };
        case 'collecting_data':
          return {
            variant: 'success',
            label: 'Coletando dados'
          };
        case 'scheduling_visit':
          return {
            variant: 'info',
            label: 'Agendando visita técnica'
          };
        default:
          return {
            variant: 'primary',
            label: 'Visita agendada'
          };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.status-badge {
  padding: 3px 20px 3px 18px;
  margin: auto;
  max-width: 185px;

  @include media-breakpoint-up(sm) {
    max-width: 245px;
  }

  img {
    margin-right: 5px;
  }
}
</style>
