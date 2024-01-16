<script setup>
</script>

<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-navbar toggleable="lg" type="light" variant="light">
          <b-navbar-brand href="#">Logo</b-navbar-brand>
          <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

          <b-collapse id="navbar-nav" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Inicio</b-nav-item>
              <b-nav-item href="#">Acerca de</b-nav-item>
              <b-nav-item href="#">Contacto</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3">
        <div class="sidebar">
          <b-sidebar
          z-index="-1"          
          id="sidebar"
          shadow
          visible
          no-close-on-route-change
          
        >
          <b-nav vertical class="pt-5">
            <b-nav-item 
            ><b-link :to="{ name: 'inicio' }">Inicio</b-link>
            </b-nav-item>
            
            <b-nav-item 
              ><b-link :to="{ name: 'main' }">Main</b-link>
            </b-nav-item>

            <b-nav-item 
              ><b-link :to="{ name: 'tercero' }">Tercero</b-link>
            </b-nav-item>    
            <b-nav-item 
              ><b-link :to="{ name: 'seats' }">Asientos</b-link>
            </b-nav-item>
            
            <b-nav-item 
              ><b-link :to="{ name: 'lineFlights' }">Lineas de vuelo</b-link>
            </b-nav-item>

            <b-nav-item 
              ><b-link :to="{ name: 'nextFlight' }">Proximo vuelo</b-link>
            </b-nav-item>  
            <b-nav-item 
              ><b-link :to="{ name: 'reservations' }">Reservas de vuelos</b-link>
            </b-nav-item>
            
            <b-nav-item 
              ><b-link :to="{ name: 'availableFlights' }">Vuelos disponibles</b-link>
            </b-nav-item>

            <b-nav-item 
              ><b-link :to="{ name: 'canceledFlights' }">Vuelos cancelados</b-link>
            </b-nav-item>          
          </b-nav>
        </b-sidebar>
        </div>
      </b-col>
      <b-col md="9">
        <router-view></router-view>
      </b-col>
    </b-row>

  </b-container>
</template>
<style scoped></style>
