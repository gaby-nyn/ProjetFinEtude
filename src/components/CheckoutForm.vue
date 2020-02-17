<template>
    <div>
        <form  @submit.prevent="validateRegistration">
            <div class="columns">
                <div class="column is-one-quarter" name="CreditCardInformation">
                    <h2 class="subtitle">Payment</h2>
                    <div class="field">
                        <label class="label">Card number</label>
                        <input name="name" v-model="CreditCardNumber" type="text" class="input" v-bind:class="{'is-danger' : !validateCardNumber}" placeholder="Enter card number here" v-number-only/>
                        <p v-if="!validateCardNumber" class="help is-danger">
                            *Invalid card number
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Card holder</label>
                        <input v-bind:class="{'is-danger' : !validateCardHolder}" v-model="CardHolder" type="text" class="input" placeholder="Enter card holder here" v-letter-only/>
                        <p v-if="!validateCardHolder" class="help is-danger">
                            *Card holder required
                        </p>                        
                    </div>
                    <div class="field">
                        <label class="label">Expiration date</label>
                        <div class="select" v-bind:class="{'is-danger' : !validateMonth}" name="Month">
                            <select v-model="Month">
                                <option disabled selected>Month</option>
                                <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">
                                    {{n &lt; 10 ? '0' + n : n}}
                                </option>
                            </select> 
                            <p v-if="!validateMonth" class="help is-danger">
                                *Month required
                            </p>                                           
                        </div>
                        <div class="select" v-bind:class="{'is-danger' : !validateYear}" name="Year">
                            <select v-model="Year">
                                <option disabled selected>Year</option>
                                <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
                                    {{$index + minimumYear}}
                                </option>
                            </select>
                            <p v-if="!validateYear" class="help is-danger">
                                *Year required
                            </p>                                            
                        </div>
                    </div>
                    <div class="field" name="cvcField">
                        <label class="label">CVC</label>
                        <input class="input" v-bind:class="{'is-danger' : !validateCVC}" v-model="CVC" type="text" placeholder="Insert CVC here" v-number-only>
                        <p v-if="!validateCVC" class="help is-danger">
                            *Invalid CVC, 3 numbers required
                        </p>              
                    </div>
                </div>
                <div class="column is-one-quarter" name="BillingInformation">
                    <h2 class="subtitle">Billing details</h2>
                    <div class="field">
                        <label class="label">Address</label>
                        <input v-bind:class="{'is-danger' : !validateAddress}" v-model="Address" type="text" class="input" placeholder="Enter your address here"/>
                        <p v-if="!validateAddress" class="help is-danger">
                            *Address required
                        </p>                        
                    </div>
                    <div class="field">
                        <label class="label">Country</label>
                        <div class="select" v-bind:class="{'is-danger': !validateCountry}">
                            <select v-model="Country">
                                <option disabled selected>Country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">Guinea-bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                        <p v-if="!validateCountry" class="help is-danger">
                            *Country is required
                        </p>                         
                    </div>
                    <div class="field is-horizontal">
                        <div name="City">
                            <label class="label">City</label>
                            <input v-model="City" v-bind:class="{'is-danger' : !validateCity}" type="text" class="input" placeholder="Enter your city here" v-letter-only/>
                            <p v-if="!validateCity" class="help is-danger">
                                *City required
                            </p>                             
                        </div>
                        <div name="State">
                            <label class="label">State</label>
                            <input v-model="State" v-bind:class="{'is-danger': !validateState}" type="text" class="input" placeholder="Enter your state here" v-letter-only/>
                            <p v-if="!validateState" class="help is-danger">
                                *State required
                            </p>                             
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Zip Code</label>
                        <input v-bind:class="{'is-danger' : !validateZipCode}" v-model="ZipCode" type="text" class="input" placeholder="Enter your zip code here"/>
                            <p v-if="!validateZipCode" class="help is-danger">
                                *Zip code required
                            </p>                         
                    </div>           
                </div>
            </div>
            <div class="field">
                <button
                class="button is-success"
                type="submit"
                >
                Submit
                &nbsp;
                <i
                    :class="{
                    'fa fa-check' : CreationSuccess === true,
                    'far fa-times-circle' : CreationSuccess === false,}"
                ></i>
                </button>                    
            </div>            
        </form>
    </div>
</template>
<script>
import axios from 'axios'

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
            //Credit card information
            CreditCardNumber: '',
            CardHolder: '',
            Month: '',
            Year: '',
            CVC: '',
            Card: {},
            //Billing information
            Address: '',
            Country: '',
            State: '',
            City: '',
            ZipCode: '',
            AddressObj: {},
            
            //Other values
            CreationSuccess: null,
            minimumYear: new Date().getFullYear(),
            
        }
    },
    methods: {
        validateRegistration() {
            if(!this.validateCardNumber || !this.validateCVC || !this.validateMonth
            || !this.validateYear || !this.validateCardHolder || !this.validateAddress
            || !this.validateCountry || !this.validateState || !this.validateZipCode || !this.validateCity){
                this.CreationSuccess = false;
            }
            else{
                this.CreationSuccess = true;
                this.registerCard();
                this.registerAddress();
                this.$router.push('/');  
            }
        },
        registerCard() {                                    //Méthode pour ajouter carte à commande
            this.Card.number = this.CreditCardNumber;
            this.Card.holder = this.CardHolder;
            this.Card.Month = this.Month;
            this.Card.Year = this.Year;
            this.Card.CVC = this.CVC;
            axios({
                method: 'POST',
                url: '/api/Credits/',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: {
                    Id : this.CreditCardNumber,
                    proprietaire : this.CardHolder,
                    month : this.Month,
                    annee : this.Year,
                    cvc : this.CVC,
                    adresse : this.Adresse,
                },
            }).then({
                method: 'POST',
                url: `/api/Commandes/${this.commande.id}`,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: {
                    //
                },                
            });            
        },
        registerAddress() {
            this.AddressObj.Address = this.Address;
            this.AddressObj.Country = this.Country;
            this.AddressObj.State = this.State;
            this.AddressObj.City = this.City;
            this.AddressObj.ZipCode = this.ZipCode;
        },
        submitInformation() {
            this.registerCard();            
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
        validateMonth() {
            if(this.Month != '') {
                return true;
            }
            return false;
        },
        validateYear() {
            if(this.Year != '') {
                return true;
            }
            return false;
        },
        validateCardHolder() {
            if(this.CardHolder != '') {
                return true;
            }
            return false;
        },
        validateAddress() {
            if(this.Address !='') {
                return true;
            }
            return false;
        },
        validateCountry() {
            if(this.Country !='') {
                return true;
            }
            return false;
        },
        validateState() {
            if(this.State !='') {
                return true;
            }
            return false;
        },
        validateZipCode() {
            if(this.ZipCode !='') {
                return true;
            }
            return false;
        },
        validateCity() {
            if(this.City !='') {
                return true;
            }
            return false;
        },
    }
}
</script>
<style scoped>
div [name="Year"]{
    padding-left: 0.5rem;
}
div [name="cvcField"] {
    padding-top: 20px;
}
div [name="State"] {
    padding-left: 0.5rem;
}
.input {
    width: 300px;
}
</style>