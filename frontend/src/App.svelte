<script>

	import Header from "./components/Header.svelte";
	import Main from "./components/home.svelte"
	// import WEB3 from 'web3'
	
	$: metaMAskError = null 

	async function  loadWeb3 () {
		try {
			if (window.ethereum) {
			window.web3 = new Web3(ethereum) 
			await window.ethereum.enable()
			window.isConnected = window.ethereum.isConnected()
		} else {
			metaMAskError = "MetaMAsk is not Available"
		}
		} catch (error) {
			metaMAskError = error.message
		}
	}

	$:load = loadWeb3()

</script>

<main>
	<Header/>

	<Main/>

	{#if metaMAskError}
		<p>{metaMAskError}</p>
		<button on:click={loadWeb3} > Connect MetaMask </button>
	{/if}

</main>

<style>
	p {
		text-align: center;
	}
</style>