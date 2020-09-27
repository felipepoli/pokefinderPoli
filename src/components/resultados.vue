<template>
    <div>
        <v-card>
             <v-card-title>{{ item.name}}</v-card-title>
                    <img
                    :src="`${item.image}`"
                    height="300"
                    >
            <v-card-text>
                <div> Altura:  {{item.height}}</div>
                <div>Peso: {{ item.weight}}</div>
            </v-card-text>

        </v-card>
 
    </div>
</template>

<script>
import { component } from 'vue/types/umd'
export default {
    name: 'dataResults',
    data() {
        return {
            
        }
    },
}
</script>
