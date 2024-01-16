<template lang="">
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
          {
            text: 'Vuelos disponibles',
            href: '#',
            to:'availableFlights'
          },
          {
            text: 'Lineas de vuelo',
            href:'#',
            active:true
          }
          
        ]
      }
    }
}
</script>
<style lang="">
    
</style>