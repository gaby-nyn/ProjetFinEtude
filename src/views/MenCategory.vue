<template>
<div>
    <h1 class="title">Men's</h1>
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

</template>
<style scoped>
div [name="FilterBrand"] {
    padding-bottom: 50px;
}
</style>