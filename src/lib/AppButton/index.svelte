<script>
    export let as = "button";
    export let disabled = null;
    export let href = null;
</script>

<svelte:element
    this={as}
    class:disabled={disabled}
    {disabled}
    {href}
    class="button"
    on:click
    on:keydown
    on:keyup
    on:keypress
>
    {#if $$slots["left-icon"]}
    <span class="icon">
        <slot name="left-icon" class="icon" />
    </span>
    {/if}

    {#if $$slots.default}
    <span class="label"><slot /></span>
    {/if}

    {#if $$slots["right-icon"]}
    <span class="icon">
        <slot name="right-icon" class="icon" />
    </span>
    {/if}
</svelte:element>

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

.button {
    position: relative;
    color: var(--color-text);
    background-color: var(--color-background);
    border-radius: 8px;
    display: inline-flex;
    padding: 8px;
    gap: 8px;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    line-height: 2.4rem;
    vertical-align: top;
}

.button::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}

.button:focus {
    box-shadow: inset 0px 0px 0px 3px rgba(255, 251, 80, 0.64);
}

.button:hover::after {
    background-color: var(--hover);
}

.button:active::after {
    background-color: var(--active);
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.16);
}

:disabled,
.disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

:disabled::after,
.disabled::after {
    content: none;
}

.icon {
    font-size: 2.4rem;
    height: 1em;
}

.label {
    display: block;
}
</style>