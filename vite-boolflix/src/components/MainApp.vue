<script>
import { store } from '../store';
import LangFlag from 'vue-lang-code-flags';

export default {
    components: {
        LangFlag
    },
    data() {
        return {
            store,
            listaFilm: [],
            voto: '',
            currrentFilm: '10',
            page: ''
        }
    },
    computed: {
        converVote() {
            this.voto = Math.ceil((this.currrentFilm['vote_average'] / 2))
            return this.voto
            return console.log(this.currrentFilm)
            // Math.ceil((this.film['vote_average'] / 2))

        },
        creaatedFlag() {

            let flag = this.currrentFilm['original_language']
            return flag
        },
        // viewIndex() {
        //     store.totalPage
        //     console.log(store.totalPage)
        // }
    },
    methods: {
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
            store.NextLaunch()
        },
        prevPage(){
            store.PrevLaunch()
        }

    }
}
</script>
<template>
    <div class="container">
        <button class="btn btn-success" v-if="store.totalPage > 1 && store.currentPage < store.totalPage" @click="prossimatPage()"> avanti</button>
        <button class="btn btn-success" v-if="store.currentPage > 1 && store.currentPage <= store.totalPage" @click="prevPage()"> Indietro</button>
        <ul class="lista-cards">
            <li v-for="film in store.lista">
                <div class="card cards" style="width: 18rem; height: 100%;position: relative;">
                    <div class="my-card">
                        <img class="card-img" :src="getImgUrl(film['poster_path'])" :alt="getAlt(film)">
                        <div class="card-body " style="width: 100%;height: 100%; padding: 0;">
                            <div class="body-film">
                                <h5 class="card-title">Titolo Originale{{film['original_title']? film['original_title']:film['"original_name"'] }}</h5>
                                <p class="card-text">
                                <h3>Titolo{{ film['title']? film['title']:film['name'] }}</h3>
                                <span>Lingua Originale: {{ film['original_language'] }}</span><br>
                                <span>{{film['release_date']}}</span>
                                <span>voto {{ converVote }}
                                    <i class="fa-solid fa-star" style="color: #e7c93c;;" v-for="stella in voto"></i>
                                    <LangFlag :iso=creaatedFlag></LangFlag>
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
</style>