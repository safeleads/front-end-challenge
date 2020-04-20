<template>
  <div class="sidebar bg-white">
    <b-nav class="sidebar__nav" vertical>
      <b-nav-item
        class="text-center"
        v-for="{ icon, alt, active } in items"
        :key="icon"
        :active="!!active"
      >
        <b-img :src="require(`~/assets/icons/${icon}`)" :alt="alt" />
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  data() {
    return {
      items: [
        {
          icon: 'house.svg',
          alt: 'icone da opção HOME da sidebar',
          active: 'true'
        },
        { icon: 'store.svg', alt: 'icone da opção LOJA da sidebar' },
        { icon: 'user.svg', alt: 'icone da opção USUÁRIOS da sidebar' },
        { icon: 'projeto.svg', alt: 'icone da opção PROJETOS da sidebar' },
        { icon: 'money.svg', alt: 'icone da opção DESCONHECIDO da sidebar' },
        { icon: 'percent.svg', alt: 'icone da opção DECONHECIDO da sidebar' },
        { icon: 'calendar.svg', alt: 'icone da opção CALENDÁRIO da sidebar' },
        {
          icon: 'dashboard.svg',
          alt: 'icone da opção DESCONHECIDO da sidebar'
        },
        { icon: 'task.svg', alt: 'icone da opção TAREFAS da sidebar' },
        { icon: 'info.svg', alt: 'icone da opção DESCONHECIDO da sidebar' },
        { icon: 'file.svg', alt: 'icone da opção ARQUIVOS da sidebar' },
        { icon: 'selecao.svg', alt: 'icone da opção DESCONHECIDO da sidebar' },
        { icon: 'flow.svg', alt: 'icone da opção FLUXO da sidebar' },
        { icon: 'lapis.svg', alt: 'icone da opção DESCONHECIDO da sidebar' },
        { icon: 'engrenagem.svg', alt: 'icone da opção OPÇÕES da sidebar' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.sidebar__nav {
  .nav-link {
    position: relative;
    padding: 18.5px 20px;
    min-height: 64px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 100%;
      background-color: $primary;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }

    @include hover-focus-active {
      &:after {
        opacity: 1;
        pointer-events: visible;
      }
    }
  }
}
</style>
