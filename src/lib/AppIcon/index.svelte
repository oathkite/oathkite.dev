<script>
    import Symbol from "./Icons/symbol.svelte"

    export let name = undefined;

    const icons = {
        symbol: Symbol,
    }
</script>

<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <svelte:component this={icons[name]} />
</svg>

<style>
svg {
    width: 1em;
    height: 1em;
}
</style>