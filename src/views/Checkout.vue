<template>
    <div>
        <CheckoutForm></CheckoutForm>
        <Item @add-commande="addToCart"></Item>
    </div>
</template>
<script>
// import axios from 'axios'
import CheckoutForm from '@/components/CheckoutForm.vue'
import Item from '@/components/Item.vue'
export default {
    name: 'Checkout',
    components: {
        CheckoutForm,
        Item
    },
    data() {
        return{
            cart: [],
        }
    },
    methods: {
        addToCart(object) {
            this.cart.push(object);
        }
    }
}
</script>