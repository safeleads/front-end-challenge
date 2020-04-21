<template>
  <b-form-group class="one-choise-button" :label="label" label-cols-sm="5">
    <b-form-radio-group :id="name" :name="name" buttons>
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
  </b-form-group>
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
  label.btn {
    background-color: #dde1e6;
    color: #717277;

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
</style>
