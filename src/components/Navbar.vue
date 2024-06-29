<template>
    <v-app-bar :elevation="19" color="green">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Application Bar</v-app-bar-title>
  <v-btn to="/">Home</v-btn>
  <v-btn to="/product">Product</v-btn>
  <v-btn to="/aboutus">Aboutus</v-btn>
 
  <v-btn to="/contactus">ContactUs</v-btn>
  <v-btn to="/servicesoffered">ServicesOffered</v-btn>
  <v-btn to="/cart">Cart<v-badge color="white" :content="Cart"><v-icon>mdi-store-outline</v-icon></v-badge></v-btn>
</v-app-bar>

</template>
<script>
import {mapGetters } from 'vuex'
export default {
     computed: {
             ...mapGetters({
                  Cart: 'Cart'
              })
           },
      }
</script>
