<!--contiene el componente album, para crear ruta dinamica-->
<template>
   <v-container>
        <pokemonInfo></pokemonInfo>
    </v-container>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import pokemonInfo from '@/components/pokemonInfo.vue'
export default {
    components:{
        pokemonInfo
    },
    computed: {
   
    },
    methods: {
    },
    created() {
    },

  }
    

</script>