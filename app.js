const vm = new Vue ({
    el: "#app", 
    data: {
        results: [
            // mocks res from NYT API with test data
            {title: 'the very first post', abstract: 'lorem ipsum some test dimpsum'},
            {title: 'the second post', abstract: 'lorem ipsum some test dimpsum'},
            {title: 'the lucky thrid post', abstract: 'lorem ipsum some test dimpsum'},
            {title: 'four the last time', abstract: 'lorem ipsum some test dimpsum'}            
        ]
    }
}); 