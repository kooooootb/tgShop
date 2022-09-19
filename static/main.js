var app = new Vue({
    el: "#app",
    data: {
        product: "Sneakers",
        selectedVariant: 0,
        variants: [
            {
                variantImage: "/static/samplePicGreen.jpg",
                variantColor: "green",
                variantAlttext: "Old sneakers",
                variantId: 2201,
            },
            {
                variantImage: "/static/samplePicBlue.jpg",
                variantColor: "blue",
                variantAlttext: "Soft slippers",
                variantId: 2202,
            },
            {
                variantImage: "/static/samplePicBlack.jpg",
                variantColor: "black",
                variantAlttext: "Soft slippers",
                variantId: 2203,
            },
        ]
    },
    methods: {
        updateProduct(index){
            this.selectedVariant = index;
        }
    },
    computed: {
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        alttext(){
            return this.variants[this.selectedVariant].variantAlttext
        }
    }


})