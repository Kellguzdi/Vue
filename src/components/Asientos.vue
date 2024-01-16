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
            text: 'Reservas de vuelos',
            href: '#',
            to:'reservations'
          },
          {
            text:'Asientos reservados',
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