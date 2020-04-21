<template>
  <div class="one-choise-button">
    <span
      class="one-choise-button__text text-calibri text-center text-md-right mb-2 mb-md-0"
      v-text="label"
    ></span>
    <b-form-radio-group
      class="one-choise-button__radio"
      :id="name"
      :name="name"
      buttons
    >
      <b-form-radio
        v-for="(opt, i) in options"
        :key="`__one-choise-button__${i}__`"
        :value="opt.value"
        button-variant="blank"
      >
        <b-img :src="opt.img" :alt="opt.alt" />
        {{ opt.text }}
      </b-form-radio>
    </b-form-radio-group>
  </div>
</template>

<script>
export default {
  name: 'OneChoiseButton',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Label'
    },
    options: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.one-choise-button {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }

  &__text {
    font-size: 18px;

    @include media-breakpoint-up(md) {
      font-size: 20px;
      line-height: 24px;
      margin-right: 14px;
    }
  }

  &__radio {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    @include media-breakpoint-up(sm) {
      flex-direction: row;
      align-items: center;
      width: auto;
    }

    .btn {
      flex: 1 1 auto;
      width: 100%;
      font-family: Calibri, sans-serif;
      font-weight: normal;
      border-radius: 3px !important;
      background-color: #dde1e6;
      color: #717277;

      &:not(:last-child) {
        margin-bottom: 2px;
      }

      &:not(:first-child) {
        margin-left: 0;
      }

      img {
        width: 13px;
        height: 15px;
      }

      @include hover-focus-active {
        background-color: $primary;
        color: white;
      }
    }
  }
}
</style>
