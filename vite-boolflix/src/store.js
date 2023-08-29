import axios from 'axios';
import { reactive } from 'vue'

export const store = reactive({
    lista: [],
    page: [],
    currentPage: 1,
    queryOfPerson :'Avenger',
    totalPage:'',
    mostra() {
        console.log('hey')
    },
    firstLaunch() {
        axios.get('https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                    query: this.queryOfPerson,
                    page: 1
                }
            }).then((response) => {
                this.lista = response.data.results
                this.page = response.data
                this.currentPage = this.page.page
                console.log(this.currentPage)
                console.log(this.lista)
                // console.log(this.page)
                // console.log(response.data.total_pages)
                this.totalPage = response.data.total_pages
                // let films = this.lista
                // console.log(films)
                // for(let i = 0;i<films.length;i++){
                //     let film = films[i]
                //     const voto = film['vote_average']
                    
                // }
            })
    },
    launchSearch(){
        store.lista = []
        axios.get('https://api.themoviedb.org/3/search/multi',
            {
                params: {
                    api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                    query: this.queryOfPerson,
                    page: 1
                }
            }).then((response) => {
                this.lista = response.data.results
                this.page = response.data
                this.currentPage = this.page.page
                console.log(this.currentPage)
                console.log(this.lista)
                // console.log(this.page)
                // console.log(response.data.total_pages)
                this.totalPage = response.data.total_pages
                // let films = this.lista
                // console.log(films)
                // for(let i = 0;i<films.length;i++){
                //     let film = films[i]
                //     const voto = film['vote_average']
                    
                // }
            })
    },
    LaunchSeries(){
            store.lista =[]
            axios.get('https://api.themoviedb.org/3/search/tv',
            {
                params: {
                    api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                    query: this.queryOfPerson,
                    page: this.currentPage
                }
            }).then((response) => {
                this.lista = response.data.results
                this.page = response.data
                console.log(this.currentPage)
                // console.log(this.page)
                // console.log(response.data.total_pages)
                this.totalPage = response.data.total_pages
                // let films = this.lista['results']
                // console.log(films)
                // for(let i = 0;i<films.length;i++){
                //     let film = films[i]
                //     const voto = film['vote_average']
                    
                // }
            })  
    },
    NextLaunch(){
        this.lista = []
        this.currentPage++
        axios.get('https://api.themoviedb.org/3/search/movie',
        {
            params: {
                api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                query: this.queryOfPerson,
                page: this.currentPage
            }
        }).then((response) => {
            this.lista = response.data.results
            this.page = response.data
            this.currentPage = this.page.page
            console.log(this.currentPage)
            // console.log(this.page)
            // console.log(response.data.total_pages)
            // this.totalPage = response.data.total_pages
            // let films = this.lista['results']
            // console.log(films)
            
        })
    },
    PrevLaunch(){
        this.lista =[]
        this.currentPage--
        axios.get('https://api.themoviedb.org/3/search/movie',
        {
            params: {
                api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                query: this.queryOfPerson,
                page: this.currentPage
            }
        }).then((response) => {
            this.lista = response.data.results
            this.page = response.data
            this.currentPage = this.page.page
            console.log(this.currentPage)
            // console.log(this.page)
            // console.log(response.data.total_pages)
            // this.totalPage = response.data.total_pages
            // let films = this.lista['results']
            // console.log(films)
            
        })
    }
})
