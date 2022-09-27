var bag = new Vue({
    el: "#bag",
    data: {
        elements: []
    },
    methods: {
        getUrl(id){
            return urlRoot + `${id}/`
        }
    },
})

fetch('api/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then((response) => response.json())
    .then((data) => bag.elements = data)
