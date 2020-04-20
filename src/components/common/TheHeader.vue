<template>
  <header class="header">
    <b-navbar
      class="the-navbar pl-2"
      toggleable="md"
      variant="white"
      type="light"
    >
      <b-navbar-brand>
        <router-link to="/">
          <b-img
            :src="require('~/assets/icons/a-safelead-isotipo.svg')"
            alt="Logo da empresa."
          />
        </router-link>
      </b-navbar-brand>

      <b-navbar-nav class="the-navbar__nav-left">
        <b-nav-item>
          <img
            :src="require('~/assets/icons/indent-increase.svg')"
            alt="Icone para indentar."
          />
        </b-nav-item>
        <b-nav-item>Tela inicial</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="the-navbar__nav-right ml-auto align-items-center">
        <b-nav-item class="the-navbar__fullscreen">
          <b-img
            class="the-navbar__fullscreen__icon"
            :src="require('~/assets/icons/fullscreen.svg')"
            alt="Botão para tela cheia."
          />
        </b-nav-item>
        <b-nav-item-dd class="the-navbar__dd" right>
          <template #button-content>
            <img
              class="the-navbar__dd__profile"
              :src="require('~/assets/icons/profile.svg')"
              alt="Icone de profile do usuário."
            />
          </template>

          <b-dd-item href="#">Dashboard</b-dd-item>
          <b-dd-item href="#">Painel</b-dd-item>
          <b-dd-item href="#">Sair</b-dd-item>
        </b-nav-item-dd>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style lang="scss">
.the-navbar {
  &__dd {
    .dropdown-menu.show {
      position: absolute;
    }
  }
}
</style>

<style lang="scss" scoped>
.the-navbar {
  height: 93px;

  &__nav-left {
    display: none;

    @include media-breakpoint-up(md) {
      display: inline-flex;
      margin-left: 22px;
    }
  }

  &__fullscreen {
    display: none;

    &__icon {
      width: 22px;
    }

    @include media-breakpoint-up(md) {
      display: inline-flex;
    }
  }

  &__dd {
    &__profile {
      width: 60px;
    }
  }
}
</style>
