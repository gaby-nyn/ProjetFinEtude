<template>
    <form @submit="validateCreation" action="/" novalidate="true">
        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
            <h1 class="title">Sign up</h1>
            
            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input
                    v-if="!validateUsername"
                    v-model="username"
                    name="name"
                    class="input is-danger"
                    type="text" 
                    placeholder="Insert username here">
                    <input
                    v-else
                    v-model="username"
                    name="name"
                    class="input is-success"
                    type="text" 
                    placeholder="Insert username here">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span v-if="!validateUsername" class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p v-if="!validateUsername" class="help is-danger">
                    *Minimum 6 characters    
                    *Maximum 16 characters   
                    *No special characters
                </p>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                    <input
                    v-if="!validatePassword"
                    v-model="password" 
                    class="input is-danger"
                    type="password" 
                    placeholder="Insert password here">
                    <input
                    v-else
                    v-model="password" 
                    class="input is-success"
                    type="password" 
                    placeholder="Insert password here">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>        
                    <span v-if="!validatePassword" class="icon is-small is-right">
                        <i class="fas fas fa-exclamation-triangle"></i>
                    </span>                        
                </div>
                <p v-if="!validatePassword" class="help is-danger">
                    *Minimum 6 characters    
                    *Maximum 25 characters   
                    *No special characters
                    *Minimum 1 number
                </p>
            </div>

            <div class="field">
                <label class="label">Confirm password</label>
                <div class="control has-icons-left has-icons-right">
                    <input 
                    v-if="!validateMatchingPassword"
                    v-model="passwordMatch"
                    class="input is-danger"
                    type="password" 
                    placeholder="Re-enter password here">
                    <input 
                    v-else
                    v-model="passwordMatch"
                    class="input is-success"
                    type="password" 
                    placeholder="Re-enter password here">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>  
                    <span v-if="!validateMatchingPassword" class="icon is-small is-right">
                        <i class="fas fas fa-exclamation-triangle"></i>
                    </span>                              
                </div>
                <p v-if="!validateMatchingPassword" class="help is-danger">
                    *Both passwords need to match
                </p>
            </div>

            <div class="field">
                <p class="control">
                    <input type="submit" value="Submit" class="button is-success">
                </p>
            </div>

        </div>
    </form>
</template>

<script>
export default {
    data() {
        return{
            username: '',
            password: '',
            passwordMatch: null,
            user: {},
            role: {},
        }
    },
    methods: {
        validateCreation: function(e) {
            if(!this.validateUsername && !this.validatePassword && !this.validateMatchingPassword){                
                e.preventDefault();
            }
            else {
                this.createUser;
            }
        },
        createUser() {
            this.user.username = this.username;
            this.user.password = this.password;            
        }
    },
    computed: {
        
        validateUsername() {
            let regexSpecialCharacters = /^\w+$/;
            if(this.username.length > 5 && this.username.length < 17 && regexSpecialCharacters.test(this.username)){
                return true;
            }
            return false;
        },
        validatePassword() {
            let regexSpecialCharacters = /^\w+$/;
            let regexNumber = /[0-9]/;
            if(this.password.length > 5 && this.password.length < 26 && regexSpecialCharacters.test(this.password) && regexNumber.test(this.password)){
                return true;
            }
            return false;
        },
        validateMatchingPassword() {
            if(this.password === this.passwordMatch){
                return true;
            }
            return false;
        }
    }
}
</script>