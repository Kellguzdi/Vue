<template lang="">
    <div>
        <b-link :to="{name:'nextFlight'}">Siguiente</b-link>
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
            active:true
          },
                  
        ]
      }
    }
}
</script>
<style lang="">
    
</style>