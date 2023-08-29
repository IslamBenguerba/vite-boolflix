import axios from 'axios';
import { reactive } from 'vue'

export const store = reactive({
    lista: [],
    page: [],
    currentPage: 1,
    queryOfPerson :'Avenger',
    totalPage:'',
    
    NextLaunch(){
        store.lista = []
        store.currentPage++
        axios.get('https://api.themoviedb.org/3/search/movie',
        {
            params: {
                api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                query: store.queryOfPerson,
                page: store.currentPage
            }
        }).then((response) => {
            store.lista = response.data.results
            store.page = response.data
            store.currentPage = store.page.page
            console.log(store.currentPage)
            // console.log(store.page)
            // console.log(response.data.total_pages)
            // store.totalPage = response.data.total_pages
            // let films = store.lista['results']
            // console.log(films)
            
        })
    },
    PrevLaunch(){
        store.lista =[]
        store.currentPage--
        axios.get('https://api.themoviedb.org/3/search/movie',
        {
            params: {
                api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                query: store.queryOfPerson,
                page: store.currentPage
            }
        }).then((response) => {
            store.lista = response.data.results
            store.page = response.data
            store.currentPage = store.page.page
            console.log(store.currentPage)
            // console.log(store.page)
            // console.log(response.data.total_pages)
            // store.totalPage = response.data.total_pages
            // let films = store.lista['results']
            // console.log(films)
            
        })
    }
})


export const   firstLaunch = ()=> {
    axios.get('https://api.themoviedb.org/3/search/movie',
        {
            params: {
                api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                query: this.queryOfPerson,
                page: 1
            }
        }).then((response) => {
            store.lista = response.data.results
            store.page = response.data
            store.currentPage = store.page.page
            console.log(store.currentPage)
            console.log(store.lista)
            // console.log(store.page)
            // console.log(response.data.total_pages)
            store.totalPage = response.data.total_pages
            // let films = store.lista
            // console.log(films)
            // for(let i = 0;i<films.length;i++){
            //     let film = films[i]
            //     const voto = film['vote_average']
                
            // }
            return store.lista
        })
        
}

export function launchSearch(){
    store.lista = []
    axios.get('https://api.themoviedb.org/3/search/multi',
        {
            params: {
                api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
                query: store.queryOfPerson,
                page: 1
            }
        }).then((response) => {
            store.lista = response.data.results
            store.page = response.data
            store.currentPage = this.page.page
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
}
export function LaunchSeries(){
    store.lista =[]
    axios.get('https://api.themoviedb.org/3/search/tv',
    {
        params: {
            api_key: 'd5d5ec4185f2040099f0eb35f3c76fa7',
            query: store.queryOfPerson,
            page: store.currentPage
        }
    }).then((response) => {
        store.lista = response.data.results
        store.page = response.data
        console.log(store.currentPage)
        // console.log(store.page)
        // console.log(response.data.total_pages)
        store.totalPage = response.data.total_pages
        // let films = store.lista['results']
        // console.log(films)
        // for(let i = 0;i<films.length;i++){
        //     let film = films[i]
        //     const voto = film['vote_average']
            
        // }
    })  
}