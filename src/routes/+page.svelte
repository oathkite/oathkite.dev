<script>
    import AppContainer from "../lib/AppContainer/index.svelte";

    export let data;
</script>

<AppContainer>
    <ul class="list">
        {#each data.contents as item}
        <li>
            <a href="/work/{ item.id }" class="item">
                <div class="item-image">
                    {@html item.svg}
                </div>
                <h2 class="title">
                    <p class="en">{item.id}</p>
                    <p class="ja">{item.title}</p>
                </h2>
            </a>
        </li>
        {/each}
    </ul>
</AppContainer>

<style>
    @media (prefers-color-scheme: light) {
        :root {
            --hover: rgba(255, 255, 255, 0.16);
            --active: rgba(0, 0, 0, 0.08);
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --hover: rgba(255, 255, 255, 0.08);
            --active: rgba(0, 0, 0, 0.08);
        }
    }

    .item {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .title {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .title .en {
        text-transform: capitalize;
    }

    .title .ja {
        font-size: 1.2rem;
    }

    .item-image {
        border-radius: 16px;
    }

    .item:hover .item-image {
        background-color: var(--hover);
    }

    .item:active .item-image {
        background-color: var(--active);
    }

    .item:focus .item-image {
        box-shadow: inset 0px 0px 0px 3px rgba(255, 251, 80, 0.64);
    }

    .item :global(svg) :global(*) {
        fill: var(--color-text);
    }

    .item :global(svg) {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;
    }

    @media screen and (max-width: 960px) {
        .list {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 640px) {
        .list {
            grid-template-columns: 1fr;
        }
    }
</style>