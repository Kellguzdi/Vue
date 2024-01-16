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
            text: 'Vuelos cancelados',
            href: '#',
            to:'canceledFlights'
          },
          {
            text: 'Proximos vuelos',
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