<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div>
                    <h2 class="text-center">{{ title }}</h2>
                </div>
                <div class="card px-5 py-5">
                    <form class="form-data" v-if="!submitted">
                        <div class="forms-inputs mb-4"> 
                            <span>Email</span> 
                            <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="email" 
                            v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}" 
                            v-on:blur="emailBlured = true"
                        >
                                <div class="invalid-feedback">A valid email is required!</div>
                        </div>
                        <div class="forms-inputs mb-4"> 
                            <span>Password</span> 
                            <input 
                            autocomplete="off" 
                            type="password" 
                            v-model="password" 
                            v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}" 
                            v-on:blur="passwordBlured = true"
                        >
                                <div class="invalid-feedback">Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#_$%^&*)')!</div>
                        </div>
                        <div class="mb-3"> 
                            <button 
                                v-on:click.stop.prevent="submit" 
                                class="btn btn-dark w-100"
                            >
                                Login
                            </button> 
                        </div>
                        <div>
                            <p>Forget your password?</p>
                            <router-link to="/reset" class="text-decoration-none">Reset Password</router-link>
                        </div>
                    </form>
                    <div class="success-data" v-else>
                        <div class="text-center d-flex flex-column"> 
                            <i class='bx bxs-badge-check'></i> 
                            <span class="text-center fs-1">
                                You have been logging in Successfully
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data: function() {
        return {
            title: 'Login',
            email : "",
            emailBlured : false,
            valid : false,
            submitted : false,
            password:"",
            passwordBlured:false
        }
    },
    methods:{
 
        validate : function(){
            this.emailBlured = true;
            this.passwordBlured = true;
            if( this.validEmail(this.email) && this.validPassword(this.password)){
                this.valid = true;
            }
        },
 
        validEmail : function(email) {
            if (
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email,
            )
        ) {
            return true;
        }
        return false;
 
        },

        validPassword : function(password) {
            if (
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
                password,
            )
        ) {
            return true;
        }
        return false;
        },

        submit : function(){
            this.validate();
            if(this.valid){
                this.submitted = true;
            }
        }
    } 
}
</script>
