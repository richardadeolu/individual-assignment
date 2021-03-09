new Vue({
    el:'#app',
    data: {
        subject: '',
        location: '',
        spaces_left: '',
        price: '',
        icon:'',
        
        name:'',
        phone_number:'',

        lessons: [],
        carts: [] //carts array 
    },
    mounted(){
        this.get_all_lessons();//push all the lessons from the bd_lessons.js to the vue data lessons array and run it on page load
    },
    methods: {
        get_all_lessons(){
            this.lessons = Lessons;
            console.log(this.lessons);
        },
        methods: {
            add_to_cart(_lesson) {
                if (this.space > 0) {
                    this.space--
                }
            }
        },
        
        submit_new_lesson(){
            if (this.subject === '' || this.location === '' || this.spaces_left === '' || this.price === '' || this.icon === '') {
                alert('some fields are missing , please check again and confirm');//throw error if fields are empty
            } else {
                let lesson = {//load up all the input value in an object
                    'subject': this.subject,
                    'id': Math.random(),
                    'location': this.location,
                    'price': this.price,
                    'space_left': this.spaces_left,
                    'icon': this.icon
                };

                Lessons.push(lesson);//push all the input values into the lessons array
                this.get_all_lessons();//fetch all current lessons in the lessons array
                alert('lesson has been added successfully'); 
            }
        },
        add_to_cart(lesson){
            var find_lesson = this.carts.find(item => item.id === lesson.id);//find if the lesson is already is cart so you don't add the same item twice
            
            if (find_lesson) {
                alert('item already in cart');//if lesson is in the cart then throw an error
            } else {
                
                let cart_lesson = lesson;

                this.carts.push(cart_lesson);//push the selected lesson to the cart array
                //alert('lesson has been added to cart');//alert successful message after adding the cart, just uncomment the code
            } 
        },
        fetch_carts() {
            console.log(carts);
        },
        remove_from_array(id) {
            this.carts.splice(id);//remove the item from the cart array
            alert('lesson haS been removed from cart');
        },

        //sorting the array by ascending the subject
        ascending_sort() {
            this.lessons.sort(this.compare); //referencing the method below

        },
        compare(a,b) {
            const subject_a = a.subject.toUpperCase();
            const subject_b = b.subject.toUpperCase();

            let comparison = 0;
            if (subject_a > subject_b) {
                comparison = 1;
            } else if (subject_a < subject_b) {
                comparison = -1;
            }
            return comparison;
        },

        //sorting the array by descending the subject
        descending_sort() {
            this.lessons.sort(this.descending_compare);//referencing the method below 
        },
        descending_compare(a,b) {
             const subject_a = a.subject.toUpperCase();
             const subject_b = b.subject.toUpperCase();

             let comparison = 0;
             if (subject_a > subject_b) {
                 comparison = 1;
             } else if (subject_a < subject_b) {
                 comparison = -1;
             }
             return comparison * -1;
        },

        //  sorting the price in ascending order
        descending_sort_price() {
            this.lessons.sort(this.descending_compare_price);//referencing the method below 
        },
        descending_compare_price(a, b) {
            const price_a = a.price;
            const price_b = b.price;

            let comparison = 0;
            if (price_a > price_b) {
                comparison = 1;
            } else if (price_a < price_b) {
                comparison = -1;
            }
            return comparison;
        },

        // sorting the location ins ascending order
        descending_sort_location() {
            this.lessons.sort(this.descending_compare_location);//referencing the method below 
        },
        descending_compare_location(a, b) {
            const location_a = a.location;
            const location_b = b.location;

            let comparison = 0;
            if (location_a > location_b) {
                comparison = 1;
            } else if (location_a < location_b) {
                comparison = -1;
            }
            return comparison;
        },

        check_out() {
            var check_letters = /^[A-Za-z]+$/;
            if (this.name.match(check_letters)) {
                if (this.carts.length < 1) {
                    alert('cart is empty and you cannot check out an empty cart');
                } else {
                    alert(this.name + ' ' + 'you have checked out your order with this number' + this.phone_number);
                }
                
            } else {
                alert('name can be letters only and nothing else');
            }
            
        }
    }
});

function newFunction(lesson) {
    add_to_cart(lesson)();
    {
        if (this.space_left > 0) {
            parseInt(this.space_left(lesson)--);
        }
    }
}
