<script>
    import AppButton from "../lib/AppButton/index.svelte";
    import AppIcon from "../lib/AppIcon/index.svelte";
    import AppTypography from "../lib/AppTypography/index.svelte";
</script>

<div class="container">
    <header>
        <AppButton as="a" href="/">
            <AppIcon name="symbol" slot="left-icon" />
        </AppButton>

        <nav>
            <AppButton as="a" href="/#profile">Profile</AppButton>
            <AppButton as="a" href="/#philosophy">Philosophy</AppButton>
            <AppButton as="a" href="/#skills">Skills</AppButton>
            <AppButton as="a" href="/#social-accounts">Social accounts</AppButton>
        </nav>
    </header>
    
    <main>
        <slot/>
    </main>
    
    <footer>
        <AppTypography>&copy;Takehito Kita</AppTypography>
    </footer>
</div>

<style>
    header {
        display: flex;
        justify-content: space-between;
        padding: 32px;
    }

    main {
        padding: 32px 32px 64px;
        font-size: 1.8rem;
    }

    footer {
        padding: 32px;
        font-size: 1.8rem;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .container {
        display: grid;
        max-width: 1120px;
        margin: 0 auto;
    }
</style>