const elements = []

var app = new Vue({
    el: "#app",
    data: {
        selectedVariant: 0,
        elements: elements
    },
    methods: {
        updateProduct(index){
            this.selectedVariant = index;
        },
        getUrl(id){
            return urlRoot + `${id}/`
        }
    },
    computed: {
        image(){
            return this.elements[this.selectedVariant].image
        },
        alttext(){
            return this.elements[this.selectedVariant].name
        },
        description() {
            return this.elements[this.selectedVariant].description
        }
    }
})

fetch(`api/?user_id=${777}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then((response) => response.json())
    .then((data) => app.elements = data)
