<!--Este componente trae la bar en la app aloja la busqueda de artista y canción-->
<template>
<v-app-bar
      app
      color="#F0F5F9"
      
    >
    <router-link to="/">
      <div class="d-flex align-center">
        <v-img
          alt="Pokemon logo"
          class="shrink mr-2"
          contain
          src="https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png"
          transition="scale-transition"
          width="160"
        />
      </div>
    </router-link>
    </v-app-bar>  
</template>

<script>
import router from '@/router'
export default {
    data() {
        return {
        }
    },
    name: 'Appbar',

    
}
</script>