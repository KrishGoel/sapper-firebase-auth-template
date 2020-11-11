<script context="module">
    import { goto } from '@sapper/app';
    
    let userState = false;

	export async function preload(page, session) {
        let { user } = session;
        if (!user) {
            return this.redirect(302, '/login');
            // userState = false
        }
        else {
            userState = true
        }
    }
    
    async function logout() {
        return firebase.auth().signOut().then(() => {
            goto('/login');
        });
    }

</script>

{#if !userState}

    <h1>This is our protected dashboard! Only visible when you are logged in with Firebase</h1> 
    <button on:click={logout}>Logout</button>
    
{/if}