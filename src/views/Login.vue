<template>
    <div>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
        <h1 class="title">Login</h1>
        <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left">
                <input 
                class="input"
                type="text" 
                placeholder="Insert username here">
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
                <input 
                class="input"
                type="text" 
                placeholder="Insert password here">
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>                
            </div>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success">
                    Login
                </button>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>