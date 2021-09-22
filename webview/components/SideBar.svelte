<script lang="ts">
	import Emoji from "./Emoji.svelte";
	import Gif from "./Gif.svelte";

	let toSearch = "";
	const options = [{ component: Emoji }, { component: Gif }];
	let selected = options[0];

	function toggle() {
		if(selected == options[0]){
			selected = options[1];
		}else{
			selected = options[0];
		}
	}
</script>


<input bind:value={toSearch} placeholder="Search"/>


<button on:click={toggle}>
	<svelte:component this={selected.component}/>
</button>

<div>text : {toSearch}</div>

