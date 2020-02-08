<template>
    <div>
        <h1 class="title">Enter credit card information here</h1>
        <CreditCardForm></CreditCardForm>
    </div>
</template>
<script>
import CreditCardForm from '@/components/CreditCardForm.vue'
export default {
    name: 'Cart',
    components: {
        CreditCardForm,
    }
}
</script>