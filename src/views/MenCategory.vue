<template>
<div>
    <h1 class="title">Men's</h1>
    <div class="columns">
        <div class="column is-one-fifth">
            <div name="FilterBrand">
                <h2 class="subtitle">Brands</h2>
                <div>        
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Nike
                    </label>
                </div>
                <div>
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Adidas
                    </label>
                </div>
                <div>
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Puma
                    </label>
                </div>
                <div>
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Under Armour
                    </label>                        
                </div>
            </div>
            <div name="FilterShoe">
                <h2 class="subtitle">Shoe type</h2>
                <div>        
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Sandale
                    </label>
                </div>
                <div>
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Botte
                    </label>
                </div>
                <div>
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Sport
                    </label>
                </div>
                <div>
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Casual
                    </label>                        
                </div>
                <div>
                    <label class="radio">
                        <input type="radio" name="Brand">
                        Formal
                    </label>                        
                </div>        
            </div>
        </div>
        <div class="column is-one-quarter is-horizontal">                        
            <Item class="item"></Item>
            <Item class="item"></Item>
            <Item class="item"></Item>
        </div>        
    </div>
</div>
</template>

<script>
import Item from '@/components/Item.vue'
export default {
    components: {
        Item,
    }
}
</script>

<style scoped>
div [name="FilterBrand"] {
    padding-bottom: 50px;
}
.item {
    padding-left: 20px;
}
</style>