<script>
    import AppTypography from "../lib/AppTypography/index.svelte";
</script>

<svelte:head>
    <title>Takehito Kita | Interface designer</title>
</svelte:head>

<div class="container">
    <section id="profile">
        <AppTypography as="h1">Takehito Kita</AppTypography>

        <div>
            <AppTypography>I am a UI designer in Japan. I go by the name oathkite online. Designing “Kamon”<AppTypography as="sup">※1</AppTypography> is my private work.</AppTypography>
            <AppTypography as="small">※1 The term "Kamon" refers to a crest used in Japan to indicate one's origins; that is, one's family lineage, blood line, ancestry and status from ancient times.</AppTypography>
        </div>
    </section>

    <section id="philosophy">
        <AppTypography as="h2">Philosophy</AppTypography>

        <AppTypography>I value creating well-organized designs that are easy to engineer. The following keywords are important to me in design.</AppTypography>
        
        <ul class="list">
            <li>Simplicity</li>
            <li>Usability</li>
            <li>Scalability</li>
            <li>Accessibility</li>
            <li>Availability</li>
            <li>Reliability</li>
        </ul>
    </section>

    <section id="skills">
        <AppTypography as="h2">Skills</AppTypography>

        <AppTypography>I stand between the business and the engineer, and focus on building simple UI designs that are scalable and maintainable.</AppTypography>

        <div id="design-tools">
            <AppTypography as="h3">Design tools</AppTypography>
            <AppTypography>I create UI designs using Figma, which allows for easy collaboration with clients, designers, engineers, and other people in various roles. I can also use common Adobe design tools. Animation is not my forte.</AppTypography>
        </div>

        <div id="design-methodology">
            <AppTypography as="h3">Design methodology</AppTypography>
            <AppTypography>The design of the UI will be based primarily on Atomic Design. I am also conscious of styling in accordance with A11y. I prefer general UI design that does not deviate from browser standard specifications.</AppTypography>
        </div>
    </section>

    <section id="social-accounts">
        <AppTypography as="h2">Social accounts</AppTypography>

        <AppTypography>To contact me, please send me a message through one of my social accounts.</AppTypography>

        <ul class="list">
            <li>
                <a href="https://www.figma.com/@oathkite" target="_blank" rel="noreferrer">Figma</a>
            </li>
            <li>
                <a href="https://github.com/oathkite" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li>
                <a href="https://twitter.com/takehitokita" target="_blank" rel="noreferrer">Twitter</a>
            </li>
            <li>
                <a href="https://note.com/oathkite/" target="_blank" rel="noreferrer">note</a>
            </li>
        </ul>
    </section>
</div>

<style>
    .container {
        display: grid;
        gap: 64px;
    }

    .container > * {
        display: grid;
        gap: 32px;
    }

    .container > * > * {
        display: grid;
        gap: 16px;
    }

    .list {
        list-style-type: disc;
        list-style-position: inside;
        display: grid;
        gap: 8px;
    }

    a {
        text-decoration: underline;
    }

    a:hover {
        text-decoration: none;
    }
</style>