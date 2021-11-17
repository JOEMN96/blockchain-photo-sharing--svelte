<script>
	let arr = [
		{id:1,name:"osima"},
		{id:2,name:"julian"},
		{id:3,name:"pepe"},
	]
	 let name = "Joe";
	 let clr = "green"
	 const handleClick = () => {
		 name = "Mon" 
	 }
	 const handeleIp = (e) =>{
		 name = e.target.value
		
	 }
	 $:{
		 console.log(name);
	  }

	 $:reactive = name + clr;
</script>

<main>
	<h1 style="color:{clr}" >Hello {name}!</h1>
	<p>{reactive}</p>
	<button  on:click={handleClick}>Click Me</button>
	<input  on:input={handeleIp} type="text"  bind:value={name}>

	{#each arr as item (item.id)}
		<p>{item.name}</p>
		{:else}
			<p>No data Available</p>
	{/each}


	{#each arr as item (item.id)}
		<p>{item.id}</p>
		{:else} 
		<p>No data</p>
	{/each}

	{#if name == "Joe"}
		<h1>Hey Joe</h1>
		{:else if name == "mon"}
			<p>Hi MOon</p>
		{:else}
		<h2>Hey GGs</h2>
	{/if}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none; 
		}
	}
</style>