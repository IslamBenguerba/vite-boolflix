<script>
import { store } from '../store';
import LangFlag from 'vue-lang-code-flags';
import { NextLaunch, PrevLaunch } from '../store';

export default {
    components: {
        LangFlag
    },
    data() {
        return {
            store,
            voto: '',
            page: ''
        }
    },
    methods: {
        creaatedFlag(film) {
            let flag = film['original_language']
            return flag
        },
        converVote(film) {
            this.voto = Math.ceil((film['vote_average'] / 2))
            return this.voto
            // return console.log(this.currrentFilm)
            // Math.ceil((this.film['vote_average'] / 2))

        },
        getImgUrl(path = null) {
            if (path === null) {
                console.log('è nullo')
            }
            let image = 'https://image.tmdb.org/t/p/w342//' + path

            return image
        },
        getAlt(film) {
            this.currrentFilm = film
            return film['title']
        },
        prossimatPage() {
            NextLaunch()
            // store.NextLaunch()
        },
        prevPage() {
            PrevLaunch()
            // store.PrevLaunch()
        }

    }
}
</script>
<template>
    <div class="container-buttons mb-3">
        <button class="btn btn-light" v-if="store.totalPage > 1 && store.currentPage < store.totalPage"
            @click="prossimatPage()"> avanti</button>
        <button class="btn btn-light" v-if="store.currentPage > 1 && store.currentPage <= store.totalPage"
            @click="prevPage()"> Indietro</button>
    </div>
    <div class="container">


        <ul class="lista-cards">
            <li v-for="film in store.lista" :key="film.id">
                <div class="card cards" style="width: 18rem; height: 100%;position: relative;">
                    <div class="my-card">
                        <img class="card-img" :src="getImgUrl(film['poster_path'])" :alt="getAlt(film)">
                        <div class="card-body " style="width: 100%;height: 100%; padding: 0;">
                            <div class="body-film">
                                <h5 class="card-title">Titolo Originale{{ film['original_title'] ?
                                    film['original_title'] : film['"original_name"'] }}</h5>
                                <p class="card-text">
                                <h3>Titolo{{ film['title'] ? film['title'] : film['name'] }}</h3>
                                <span>Lingua Originale: {{ film['original_language'] }}</span><br>
                                <span>{{ film['release_date'] }}</span>
                                <span>voto {{ converVote(film) }}
                                    <i class="fa-solid fa-star" style="color: #e7c93c;;" v-for="stella in voto"></i>
                                    <LangFlag :iso=creaatedFlag(film)></LangFlag>
                                </span>.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>

                        </div>
                    </div>

                </div>




            </li>
        </ul>
    </div>
</template>
<style>
.lista-cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}

.card {

    height: 100%;
    --bs-card-height: 100%
}

.card-body {
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    transition: opacity 2s linear;
    opacity: 0;
}

.body-film {
    background-color: black;
    color: white;
    width: 100%;
    height: 100%;
}

.card:hover .card-body {
    display: block;
    opacity: 1;

}

.cards {
    background-color: black;

}

.container-buttons {
    background-color: black;
}
</style>

