<template>
   <!--navbar-->
   <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link 
                            to="/" 
                            class="nav-link"
                            >
                            Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                            to="/login" 
                            class="nav-link"
                            >
                            Login
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                            to="/signup" 
                            class="nav-link"
                            >
                            Sign Up
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <RouterView />
</template>

<style>

</style>
