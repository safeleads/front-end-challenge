<template>
  <b-card class="body-tabs h-100 border-0" no-body>
    <b-tabs
      class="body-tabs__tabs"
      v-on="$listeners"
      content-class="body-tabs__content"
      nav-class="body-tabs__tab"
      nav-wrapper-class="body-tabs__header border-0"
      card
      lazy
    >
      <b-tab v-for="(tab, index) in tabs" :key="index" :title="tab.title">
        <component :is="tab.content" />
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
export default {
  name: 'BodyTabs',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
%body-tabs-background-default {
  background-color: $body-bg !important;
}
.body-tabs {
  border-radius: 0;
  @extend %body-tabs-background-default;

  &__header {
    background-color: #ebeef3;
    padding: 17px 40px 12px;
  }

  &__tab {
    .nav-item {
      // min-width: 206px;
      .nav-link {
        padding: 10px 32px;
        font-size: 22px;
        line-height: 27px;
        @extend %body-tabs-background-default;
      }
    }
  }
}
</style>
