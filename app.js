const NYTBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/'
const apiKey = '7d61a6720f1c464dbb2473ebb4823011'; 

function buildUrl (url) {
    return NYTBaseUrl + url + ".json?api-key=" + apiKey 
}

const vm = new Vue ({
    el: "#app", 
    data: {
        results: []
    }, 
     mounted() {
        // axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=7d61a6720f1c464dbb2473ebb4823011")
        // .then(response => {this.results = response.data.results})
        this.getPosts('home'); 
    }, 
    methods: {
        getPosts(section) {
            let url = buildUrl(section); 
            axios.get(url).then((response) => {
                this.results = response.data.results; 
            }).catch( error => { console.log(error); }); 
        }
    }
}); 
    