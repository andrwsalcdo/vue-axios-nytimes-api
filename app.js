const apiKey = '7d61a6720f1c464dbb2473ebb4823011'; 


const vm = new Vue ({
    el: "#app", 
    data: {
        results: []
    }, 
     mounted() {
        axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=7d61a6720f1c464dbb2473ebb4823011")
        .then(response => {this.results = response.data.results})
  }
}); 
     