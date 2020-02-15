<template>
<div>
    <article class="tile is-child is-10 notification is-info">
        <figure class="image is-4by3">
            <img v-bind:src="item.photo"/>
        </figure>
        <p class="title">{{ item.marque }}</p>
        <p class="subtitle">{{ item.description }}</p>
        <p>{{item.prix}} $</p>
        <button class="button" v-on:click="showModal">Add to cart</button>
    </article>
    <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Add to cart</p>         
            </header>
            <section class="modal-card-body">
            <div class="field">
                <h3 class="title">{{item.description}}</h3>
                <h3 class="subtitle">{{item.prix}} $</h3>
                <label class="label">Size</label>
                <input v-if="!validateSize" class="input" v-bind:class="{'is-danger' : !validateSize}" type="text" placeholder="Enter size here" v-model="size"/>
                <input v-else class="input" type="text" placeholder="Enter size here" v-model="size"/>
                <p v-if="!validateSize" class="help is-danger">
                    *Can't be empty
                </p>                
            </div>
            <div class="field">
                <label class="label">Quantity</label>
                <input v-if="!validateQuantity" class="input" v-bind:class="{'is-danger' : !validateQuantity}" type="text" placeholder="Enter quantity here" v-model="quantity"/>
                <input v-else class="input" type="text" placeholder="Enter quantity here" v-model="quantity"/>
                <p v-if="!validateQuantity" class="help is-danger">
                    *Can't be empty
                </p> 
            </div>               
            </section>
            <footer class="modal-card-foot">
            <button
                class="button is-success"
                @click="hideModal"
            >
                Confirm</button>
            <button class="button is-danger" @click="hideModal">Cancel</button>
            </footer>
        </div>
    </div>    
</div>
</template>
<script>
// import axios from 'axios';
export default {
    data() {
        return {     
            isActive : false,
            quantity : '',
            size: '',       
        };
    },
    props : ["item"],
    methods : {
        showModal() {
            this.isActive = true;
        },
        hideModal() {
            this.isActive = false;
        }        
    },
    computed : {
        validateSize() {
            if(this.size !== ''){
                return true;
            }
            return false;
        },
        validateQuantity() {
            if(this.quantity !== '') {
                return true;
            }
            return false;
        }
    }
}
</script>