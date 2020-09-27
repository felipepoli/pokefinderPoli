<template>
    <div class="pb-0">
        <v-hover>
        <template v-slot="{ hover }">
        <v-card 
            color="#1E2022"
            class="mx-auto pa-6 transition-swing"
            max-width="500"
            max-height="150"
            outlined
            :elevation="hover ? 12 : 2">
            <v-card-title style="justify-content: center" class="pt-0">
                <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
                max-width="60"
                ></v-img><span class="ml-3 white--text" >PokeFinder</span>
            </v-card-title>
            <v-card-actions style="justify-content: center" class="pt-0">
                <v-btn @click="dialogSelect=true,getTypeList(),getAbilityList(),goHome()" color="#52616B" class="white--text">Búsqueda Avanzada
                    <v-icon ></v-icon>
                    </v-btn>
            </v-card-actions>  
        </v-card>
        </template>
        </v-hover>
        <v-dialog
        v-model="dialogSelect"
        max-width="400">
        <v-list rounded color="transparent">
        <v-list-item-group>
            <v-list-item
            style="background:#C9D6DF"
            v-for="(item,i) in busqueda "
            :key="i"
            @click="gosearch(item.action)">
            <v-list-item-icon>
                <v-icon v-text="item.icon" large></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.name" class="font-weight-bold"></v-list-item-title>
            </v-list-item>
        </v-list-item-group>
        </v-list>
        </v-dialog>
        <v-dialog
        v-model="searchDialog"
        max-width="400"
        >
            <v-card rounded="lg" color="#C9D6DF">
                <v-card-title class="headline" style="justify-content: center; color:#52616B">Busqueda Avanzada</v-card-title>
                <v-container>
                <v-select dense outlined :items="typeList" label="Selecciona un tipo" v-model="typeName" v-if="type" style="background:#C9D6DF;border-radius: 15px;">Tipo</v-select>
                <v-text-field label="Búsqueda por nombre" v-model="PokemonName" v-if="name" style="background:#C9D6DF;border-radius: 15px">nombre</v-text-field>
                <v-select dense outlined :items="abiltyList" label="Selecciona una habilidad" v-model="abilityName" v-if="ability" style="background:#C9D6DF;border-radius: 15px;">Habilidad</v-select>
                <v-text-field label="Búsqueda por ID" v-model="idNumber" v-if="id" style="background:#C9D6DF;border-radius: 15px">Nombre</v-text-field>  
                <v-card-actions style="justify-content: center">
                    <v-btn @click="searchDialog=false, getPokemonType(typeName)" color="#52616B" class="white--text" v-if="type">Buscar</v-btn>
                    <v-btn @click="searchDialog=false, getPokemonByName(PokemonName)" color="#52616B" class="white--text" v-if="name">Buscar</v-btn>
                    <v-btn @click="searchDialog=false, getPokemonAbility(abilityName)"  color="#52616B" class="white--text" v-if="ability">Buscar</v-btn>
                    <v-btn @click="searchDialog=false, getPokemonById(idNumber)" color="#52616B" class="white--text" v-if="id">Buscar</v-btn>
                </v-card-actions>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import  axios from 'axios'
export default {
    name: 'BusquedaAvanzada',
    data() {
        return {
            busqueda: [
                {
                    name: 'Búsqueda por tipo',
                    icon: 'mdi-format-list-bulleted-type' ,
                    action: '1'
                },
                {
                    name: 'Búsqueda por Habilidad',
                    icon: 'mdi-pokemon-go',
                    action: '2'
                },
                {
                    name: 'Búsqueda por nombre',
                    icon: 'mdi-rename-box',
                    action: '3'
                },
                {
                    name: 'Búsqueda por ID',
                    icon: 'mdi-format-list-numbered-rtl',
                    action: '4'
                }
            ],
            type:false,
            ability:false,
            name:false,
            id:false,
            searchDialog: false,
            dialogSelect: false,
            PokemonName: '',
            idNumber: '',
            typeName: '',
            abilityName: '',
            pokemonInfo: {},
            typeList: [],
            abiltyList: [],
            url : 'https://pokefinderbff.glitch.me/',
            endpointName : 'PokemonByName?name=',
            endpointId : 'PokemonById?id=',
            endpointTypeList : 'typesList',
            endpointAbilitiesList : 'abilitiesList'
        }
    },
    methods: {
        async getPokemonByName (name) {
          await axios.get(this.url + this.endpointName + name).then((response) => { 
            this.$router.push(`/pokemon/${response.data.id}`)
          }).catch((error) => { console.log(error)
            throw error.response
          })      
        },
        async getPokemonById (idNumber) {
          await axios.get(this.url + this.endpointId + idNumber).then((response) => { 
            this.$router.push(`/pokemon/${response.data.id}`)
          }).catch((error) => { console.log(error)
            throw error.response
          })      
        },
        async getTypeList () {
          await axios.get(this.url + this.endpointTypeList).then((response) => { 
            response.data.forEach(element => {this.typeList.push(element.name)});
          }).catch((error) => { console.log(error)
            throw error.response
          })
        }, 
        async getAbilityList () {
          await axios.get(this.url + this.endpointAbilitiesList).then((response) => { 
            response.data.forEach(element => { this.abiltyList.push(element.name)});
          }).catch((error) => { console.log(error)
            throw error.response
          })
        },
        getPokemonType (typeName) {
            this.$router.push(`/results?type=${typeName}`)
        },
        getPokemonAbility (abilityName) {
            this.$router.push(`/results?ability=${abilityName}`)
        },
        gosearch (n) {
            this.type=false
            this.name=false
            this.id=false
            this.ability=false
            switch(n) {
                case '1':
                    this.type=true
                    break;
                case '2':
                    this.ability=true
                    break;
                case '3':
                    this.name=true
                    break;
                case '4':
                    this.id=true
                    break;
                default:
                    break
            }
            this.searchDialog=true
            this.dialogSelect=false

        },
        goHome () {
            if ( this.$route.path != '/') { this.$router.push('/') }
        }
    },
}


</script>