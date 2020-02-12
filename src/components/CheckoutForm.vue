<template>
    <div>
        <form  @submit="validateRegistration" action="/" novalidate="true">
            <div class="field">
                <label class="label">Card number</label>
                <input name="name" v-model="CreditCardNumber" type="text" class="input" v-bind:class="{'is-danger' : !validateCardNumber}" placeholder="Enter card number here" v-number-only/>
                <p v-if="!validateCardNumber" class="help is-danger">
                    *Invalid card number
                </p>
            </div>
            <div class="field">
                <label class="label">Card holder</label>
                <input v-model="CardHolder" type="text" class="input" placeholder="Enter card holder here" v-letter-only/>
            </div>
            <div class="field">
                <label class="label">Expiration date</label>
                <div class="select">
                    <select v-model="month">
                        <option disabled selected>Month</option>
                        <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">
                            {{n &lt; 10 ? '0' + n : n}}
                        </option>
                    </select>                
                </div>
                <div class="select">
                    <select v-model="Year">
                        <option disabled selected>Year</option>
                        <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
                            {{$index + minimumYear}}
                        </option>
                    </select>                
                </div>
                <label class="label">CVC</label>
                <input class="input" v-bind:class="{'is-danger' : !validateCVC}" v-model="CVC" type="text" placeholder="Insert CVC here">
                <p v-if="!validateCVC" class="help is-danger">
                    *Invalid CVC, 3 numbers required
                </p>              
            </div>
            <div class="field">
                <p class="control">
                    <input type="submit" value="Submit" class="button is-success">
                </p>
            </div>            
        </form>
    </div>
</template>
<script>

export default {
    name: 'CheckoutForm',
    directives: {
        'number-only': {
            bind (el) {
                function checkValue (event) {
                event.target.value = event.target.value.replace(/[^0-9]/g, '')
                if (event.charCode >= 48 && event.charCode <= 57) {
                    return true
                }
                event.preventDefault()
                }
                el.addEventListener('keypress', checkValue)
            }
        },
        'letter-only': {
            bind (el) {
                function checkValue (event) {
                if (event.charCode >= 48 && event.charCode <= 57) {
                    event.preventDefault()
                }
                return true
                }
                el.addEventListener('keypress', checkValue)
            }
        }
  },
    data() {
        return {
            CreditCardNumber: '',
            CardHolder: '',
            Month: '',
            Year: '',
            CVC: '',
            Card: {},
            minimumYear: new Date().getFullYear(),
            
        }
    },
    methods: {
        validateRegistration: function(e){
            if(!this.validateCardNumber && !this.validateCVC){
                e.preventDefault();
            }
            else{
                this.registerCard;  
            }
        },
        registerCard(){
            this.Card.number = this.CreditCardNumber;
            this.Card.holder = this.CardHolder;
            this.Card.Month = this.Month;
            this.Card.Year = this.Year;
            this.Card.CVC = this.CVC;
        }
    },
    computed: {
        validateCardNumber() {
            let amexFormat = /^(?:3[47][0-9]{13})$/;
            let visaFormat = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
            let masterCardFormat = /^(?:5[1-5][0-9]{14})$/;

            if(this.CreditCardNumber.match(amexFormat)) {
                return true;
            }
            else if(this.CreditCardNumber.match(visaFormat)){
                return true;
            }
            else if(this.CreditCardNumber.match(masterCardFormat)){
                return true;
            }
            return false;
        },
        validateCVC() {
            if(parseInt(this.CVC.length) === 3){
                return true;
            }
            return false;
        },
    }
}
</script>
<style scoped>
.select {
    padding-left: 0.5rem;
}
.input {
    width: 300px;
}
</style>