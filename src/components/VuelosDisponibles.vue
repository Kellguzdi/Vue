<template lang="">
    <div>
        <b-link :to="{name:'lineFlights'}">Siguiente</b-link>
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
          {
            text: 'Vuelos disponibles',
            href: '#',
            active:true
          },
          
        ]
      }
    }
}
</script>
<style lang="">
    
</style>