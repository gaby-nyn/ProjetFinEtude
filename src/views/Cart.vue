<template>
    <div>
        <h1 class="title">Enter credit card information here</h1>
        <CheckoutForm></CheckoutForm>
    </div>
</template>
<script>
import CreditCardForm from '@/components/CheckoutForm.vue'
export default {
    name: 'Cart',
    components: {
        CheckoutForm,
    }
}
</script>