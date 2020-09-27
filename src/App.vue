<template>
    <v-app>
      <Appbar></Appbar>
      <v-main  class="mainBackground">
        <v-container>
          <v-row cols="6">
            <v-col>
                <BusquedaAvanzada></BusquedaAvanzada>
            </v-col>
          </v-row>
        </v-container>  
        <router-view></router-view>
      </v-main>
    </v-app>
</template>

<script>
import Appbar from '@/components/Appbar.vue'
import BusquedaAvanzada from '@/components/BusquedaAvanzada.vue'

export default {
  name: 'App',

  components: {
    Appbar,
    BusquedaAvanzada

  },

  data: () => ({
    //
  }),
};
</script>

<style>
.mainBackground {
  background: #1E2022;
}

</style>
