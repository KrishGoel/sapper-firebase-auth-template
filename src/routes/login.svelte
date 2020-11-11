<!-- <script>
    import { goto } from '@sapper/app';
    
    let email = '';
    let password = '';
    async function login() {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
                goto('/dashboard');
            });
        } catch(e) {
            let message = e.message || e;
            console.log("Something went wrong:", message);
        }
    }
</script>

<svelte:head>
	<title>Log in</title>
</svelte:head>

<h1>Login form</h1>

<input type="email" bind:value={email} placeholder="your email"/>
<br />

<input type="password" bind:value={password} placeholder="your password"/>
<br />

<button on:click={login}>Login</button> -->

<script>
    import { goto } from '@sapper/app';
    

    async function login() {
        var provider = new firebase.auth.GoogleAuthProvider();
        try {
            firebase.auth().signInWithPopup(provider).then((res) => {
                goto('/dashboard');
            });
        } catch(e) {
            let message = e.message || e;
            console.log("Something went wrong:", message);
        }
    }
</script>

<svelte:head>
	<title>Log in</title>
</svelte:head>

<h1>Login form</h1>

<button on:click={login}>Login</button>