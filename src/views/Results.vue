<template>
    <v-container class="pa-4 text-center">
        <v-row>
            <template v-for="(item,i) in pokemonResults">
            <v-col cols="12" lg="3" md="4" sm="6"  :key="i">
                <v-hover v-slot:default="{ hover }">
                <router-link :to="`/pokemon/${item.id}`">
                <v-card
                color="#1E2022"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                class="transition-swing">
                    <v-img 
                    height="300px"
                    :src = "item.image"
                    >
                    </v-img>
                    <v-card-title  style="display: inline-block; color:#F0F5F9" class="text-capitalize"> {{ item.name }} </v-card-title>
                </v-card>
                </router-link>
                </v-hover>
            </v-col>
        </template>
        </v-row>
    </v-container>
</template>

<script>

import  axios from 'axios'
import pokemonInfo from '@/components/BusquedaAvanzada.vue'
export default {
  name: 'Inicio',
  data() {
    return {
        pokemonlist : [],
        url : 'https://pokefinderbff.glitch.me/',
        endpointAbility : 'PokemonByAbility?ability=',
        endpointType : 'PokemonByType?type=',
        pokemonResults: {},
    }
  },
  methods: {
    async getPokemonFilter () {
        let query = this.$route.query
        if (query.type) {
            await axios.get(this.url + this.endpointType + query.type).then((response) => { 
                this.pokemonResults = response.data
            }).catch((error) => { console.log(error)
                throw error.response
            })
        } else if (query.ability) {
            await axios.get(this.url + this.endpointAbility + query.ability).then((response) => { 
                this.pokemonResults = response.data
            }).catch((error) => { console.log(error)
                throw error.response
            })
        }
    }
  },
  computed: {
  },
  created() { 
  },
  mounted() {
    this.getPokemonFilter()
  }
}
</script>