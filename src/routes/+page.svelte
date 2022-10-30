<script>
    import AppButton from "../lib/AppButton/index.svelte";
    import AppIcon from "../lib/AppIcon/index.svelte";
</script>

<main>
    <AppButton>about</AppButton>
    <AppButton as="a" href="/">
        <AppIcon name="symbol" slot="left-icon" />
        about
        <AppIcon name="symbol" slot="right-icon" />
    </AppButton>
    <AppButton disabled>about</AppButton>
</main>