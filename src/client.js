/* eslint-env browser */
import App from './App.svelte'

new App({
    target: document.querySelector('#app'),
    hydrate: true,
})
