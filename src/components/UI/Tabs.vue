<template>
  <b-card class="custom-tabs h-100 border-0" no-body>
    <b-tabs
      class="custom-tabs--tabs"
      v-on="$listeners"
      content-class="custom-tabs--content"
      nav-class="custom-tabs--tab"
      nav-wrapper-class="custom-tabs--header border-0"
      card
      lazy
    >
      <b-tab v-for="(tab, index) in tabs" :key="index" :title="tab.title">
        <div class="custom-tabs--content-body">
          <component :is="tab.content" />
        </div>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
%custom-tabs-background-default {
  background-color: $body-bg !important;
}
.custom-tabs {
  border-radius: 0;
  @extend %custom-tabs-background-default;

  &--header {
    background-color: $background-light;
    padding: 17px 40px 12px;
  }

  &--tab {
    .nav-item {
      .nav-link {
        padding: 10px 32px;
        font-family: Calibri, sans-serif;
        font-size: 22px;
        font-weight: bold;
        line-height: 27px;
        @extend %custom-tabs-background-default;
      }
    }
  }

  &--content {
    > .card-body {
      @include media-breakpoint-up(sm) {
        padding: 0 0 0 11px;
      }
    }
  }
}
</style>
