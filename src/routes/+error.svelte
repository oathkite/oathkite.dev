<script>
    import AppContainer from "../lib/AppContainer/index.svelte";
    import AppTypography from "../lib/AppTypography/index.svelte";
    import { page } from '$app/stores';
</script>

<AppContainer>
    <AppTypography as="h1">{$page.status} {$page.error.message}</AppTypography>
</AppContainer>