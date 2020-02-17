<template>
    <div></div>
</template>
<script>
export default {
    props: ["item", "quantity"],
    data() {
        return {
            product : {},
            commandeProduit: '', 
        }
    },
    watch: {
        item: (newValue) => {
            this.product = newValue;
        } 
    }
}
</script>