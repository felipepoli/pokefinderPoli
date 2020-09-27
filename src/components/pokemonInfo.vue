<template>
    <v-container class="mt-0 pt-0" >
        <v-row mt-0 justify="center">
            <v-col cols="12">
                <v-card color="#52616B">
                    <v-toolbar
                    color="#1E2022"
                    dark
                    
                    >
                        <v-toolbar-title style="font-size: 2rem;" class="text-capitalize pb-0">{{ pokemonInfo.name}}</v-toolbar-title>
                     </v-toolbar>
                    <v-row>
                        <v-col class="pt-0">
                            <v-img
                            style="justify-content: center"
                            :src="`${pokemonInfo.image}`"
                            height="350"
                            max-width="400"
                            ></v-img>
                        </v-col>
                        <v-col align="center">
                            <v-list rounded color="transparent" class="font-weight-bold">
                            <v-list-item-group>
                                <v-list-item style="background:#1E2022">
                                    <v-list-item-content >
                                    <v-list-item-title style="color:#F0F5F9">Altura: {{pokemonInfo.height}}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item style="background:#1E2022">
                                    <v-list-item-content>
                                    <v-list-item-title style="color:#F0F5F9">Peso: {{pokemonInfo.weight}} </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                            </v-list>
                        </v-col>
                        <v-col align="center">
                            <v-list rounded color="transparent" class="font-weight-bold">
                            <v-list-item-group>
                                <v-list-item style="background:#1E2022">
                                    <v-list-item-content>
                                    <v-list-item-title style="color:#F0F5F9"> Habilidades </v-list-item-title>
                                     </v-list-item-content>
                                </v-list-item>
                                <v-list-item style="background:#C9D6DF">
                                    <v-list-item-content v-for="(item,i) in pokemonInfo.abilities" :key="i">
                                        <v-list-item-subtitle style="color:#1E2022">{{ item.name}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item style="background:#1E2022">
                                    <v-list-item-content >
                                    <v-list-item-title style="color:#F0F5F9"> Tipos </v-list-item-title>
                                     </v-list-item-content>
                                </v-list-item>
                                <v-list-item style="background:#C9D6DF">
                                    <v-list-item-content v-for="(item,i) in pokemonInfo.types" :key="i">
                                        <v-list-item-subtitle style="color:#1E2022">{{ item.name}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                            </v-list>
                         </v-col>   
                    </v-row>
                </v-card>
            </v-col>
        </v-row> 
    </v-container>
</template>

<script>
import  axios from 'axios'
import router from '@/router'
export default {
    name: 'pokemonInfo',
    components: {
    },
    data() {
        return {
            id: '',
            pokemonInfo : []
        }
    },
    computed: {
    },
    methods: {
        async getPokemonInfo (id) {
            await axios.get(`https://pokefinderbff.glitch.me/PokemonById?id=${id}`)
            .then((response) => {
            this.pokemonInfo = response.data
            console.log(this.pokemonInfo)
            }).catch((error) => {
                console.log(error)
                throw error.response
                })
        }, 
    },
    created() {
    },
    mounted () {
        this.getPokemonInfo(this.$route.params.id)
    }
}
</script>