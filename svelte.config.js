import begin from '@ryanbethel/sveltekit-begin-adapter'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: begin(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
