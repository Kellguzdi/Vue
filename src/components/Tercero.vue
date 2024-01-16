<template>
  <div>
    <b-link :to="{ name: 'inicio' }">Siguiente</b-link>
    <b-breadcrumb router-component-name :items="items"></b-breadcrumb>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "#",
          to: "inicio",
        },
        {
          text: "Main",
          href: "#",
          to: 'main'
        },
        {
          text:"Tercero",
          href:'#',
          active:true
        }
      ],
    };
  },
};
</script>

<style>
</style>