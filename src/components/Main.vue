<template>
  <div>
    <b-link :to="{name:'tercero'}">Siguiente</b-link>
    <b-breadcrumb router-component-name :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '#',
            to:"inicio"
          },
          {
            text:'Main',
            href:'#',
            active:true
          }
        ]
      }
    }
}
</script>

<style>

</style>