<script>
export let prop;
let show = true;

</script>

{#if show}  
    <div>
        <button>{prop}</button>
    </div>
{/if}

<style>
    button {
        background-color: turquoise;
    }
</style>