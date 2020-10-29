<svelte:head>
    <title>Svelte Bug: Safari Video Subtitles</title>
</svelte:head>

<h1>Svelte Bug: Safari Video Subtitles</h1>

<figure>
    <video controls>
        <source src="video/sintel-short.mp4" type="video/mp4">
        <track label="English" kind="subtitles" srclang="en" src="video/sintel-en.vtt" default>
        <track label="Deutsch" kind="subtitles" srclang="de" src="video/sintel-de.vtt">
        <track label="Español" kind="subtitles" srclang="es" src="video/sintel-es.vtt">
    </video>
    <figcaption>
        <strong>Subtitles on this video don't work in Safari.</strong><br>
	    Video &copy; copyright Blender Foundation | <a href="http://www.sintel.org">www.sintel.org</a>
    </figcaption>
</figure>

{#if mounted}
    <figure>
        <video controls>
            <source src="video/sintel-short.mp4" type="video/mp4">
            <track label="English" kind="subtitles" srclang="en" src="video/sintel-en.vtt" default>
            <track label="Deutsch" kind="subtitles" srclang="de" src="video/sintel-de.vtt">
            <track label="Español" kind="subtitles" srclang="es" src="video/sintel-es.vtt">
        </video>
        <figcaption>
            <strong>Subtitles on this video work in Safari because it's not SSR rendered.</strong><br>
            Video &copy; copyright Blender Foundation | <a href="http://www.sintel.org">www.sintel.org</a>
        </figcaption>
    </figure>
{/if}

<script>
    import {onMount} from 'svelte'
    let mounted = false
    onMount(() => {
        mounted = true
    })
</script>
