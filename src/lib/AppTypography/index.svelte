<script>
    export let as = "p";
    export let bold = null;
</script>

<svelte:element this={as} class:bold={bold}><slot/></svelte:element>

<style>
    .bold {
        font-weight: bold;
    }

    h1 {
        font-size: 3.2rem;
        font-weight: bold;
        line-height: 4.8rem;
    }

    h2 {
        font-size: 2.8rem;
        font-weight: bold;
        line-height: 3.2rem;
    }

    h3 {
        font-size: 2.2rem;
        font-weight: bold;
        line-height: 3.2rem;
    }

    sup {
        font-size: 70%;
        vertical-align: super;
    }

    small {
        font-size: 1.2rem;
        line-height: 1.6rem;
    }
</style>