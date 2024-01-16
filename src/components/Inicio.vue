<template>
  <div>        
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
            to:'inicio'
          },
          
        ]
      }
    }
}
</script>

<style>

</style>