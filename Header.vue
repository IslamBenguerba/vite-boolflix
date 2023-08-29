<script>
import { store } from '../store';
import {firstLaunch} from '../store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            result: [],
            wordKey: ''
        }
    },
    methods: {
        lancia(){
            firstLaunch()
        },
        mostra() {
            store.mostra()
            //store.lista serve per capire a che pagina siamo 
            this.result = store.lista.results
        },
        lancio() {
            store.queryOfPerson = this.wordKey
            store.launchSearch()
        },
        controlTotalPages(){
            console.log(store.totalPage);
        },
        lancioSeries(){
            store.LaunchSeries()
        }


    },
    mounted() {
        firstLaunch()
        this.controlTotalPages()
    }

}
</script>

<template>
    <nav class="navbar boolflix">
        <div class="container-fluid">
            <a class="navbar-brand">Boolflix</a>
            <div class="searc">
                <a href="" class="tv" @click.prevent="lancioSeries()" > Serie Tv </a>
                <input class="form-control me-2" placeholder="Search" aria-label="Search" v-model="wordKey"
                    @keyup.enter="lancio()">
                <button class="btn btn-outline-success" @click="lancio()"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            
        </div>
    </nav>
</template>
<style>
.searc{
    display: flex;
    align-items: center;

}
.tv{
    text-decoration: none;
    margin-right: 2rem;
    white-space: nowrap;
    flex-basis: 100;
    padding: 1rem;
    transition: background-color 2s;
}
.tv:hover{
    color: white;
    background-color: grey;

}
.boolflix{
    
    background-color: black;
}
.navbar-brand{
    color:  white !important;
}
</style>