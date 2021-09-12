<script lang="ts">
	let keyword = "";
</script>

<input bind:value={keyword} id="search-bar" type="name" placeholder="Search">
<h1> Abhishek Kumar</h1>
<p>
	{keyword}
</p>

<style>
	input {
        color: greenyellow;
    }
</style>