<script>
    export let as = "div";
</script>

<svelte:element this={as} class="container">
    <slot/>
</svelte:element>

<style>
    .container {
        display: grid;
        gap: 64px;
    }

    .container > :global(*) {
        display: grid;
        gap: 32px;
    }

    .container > :global(*) > :global(*) {
        display: grid;
        gap: 16px;
    }
</style>