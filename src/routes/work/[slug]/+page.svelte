<script>
    import AppContainer from "../../../lib/AppContainer/index.svelte";

    export let data;
</script>

<svelte:head>
    <title>{data.title_en} ({data.title_ja}) | Work | oathkite.dev</title>
</svelte:head>

<AppContainer>
    <div class="image">
        {@html data.svg}
    </div>

    <h1 as="h1" class="title">
        <span class="en">{ data.title_en }</span>
        <span class="ja">{ data.title_ja }</span>
    </h1>
</AppContainer>

<style>
    .image {
        aspect-ratio: 16 / 9;
    }

    .image :global(svg) :global(*) {
        fill: var(--color-text);
    }

    .image :global(svg) {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        text-align: center;
    }

    .title .en {
        font-size: 2.4rem;
        line-height: 3.2rem;
    }

    .title .ja {
        font-size: 1.6rem;
        line-height: 2.4rem;
    }

    @media screen and (max-width: 960px) {
        .image {
            aspect-ratio: 3 / 2;
        }
    }

    @media screen and (max-width: 640px) {
        .image {
            aspect-ratio: 1 / 1;
        }

        .title .en {
            font-size: 1.8rem;
            line-height: 2.4rem;
        }

        .title .ja {
            font-size: 1.2rem;
            line-height: 1.6rem;
        }
    }
</style>