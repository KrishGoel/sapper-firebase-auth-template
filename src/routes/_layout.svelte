<script>
	import { onMount } from 'svelte';
    import { stores } from '@sapper/app';
    import Cookies from 'js-cookie';
    
    export let segment;
    const { session } = stores();
    onMount(async () => {
        firebase.auth().onIdTokenChanged(async (user) => {
            try {
                if (!user) {
                    console.log(`User does not exist`);
                    Cookies.set('token', false);
                    $session.user = false;
                    return;
                }
                const token = await user.getIdToken();
                $session.user = token;
                Cookies.set('token', token);
                console.log(`User found and session set!`);
            } catch (e) {
                console.log(`Something went wrong`);
                Cookies.set('token', false);
                $session.user = false;
                return;
            }
        });
    });
</script>

<style>
</style>

<!-- All the content for layout goes here or after the </main> tag -->

<main>
	<slot>
		<!-- This is where Svelte injects the content -->
	</slot>
</main>