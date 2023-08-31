<script lang="ts" setup>
  const { productStatus, statusUpdates, pending, refetch } = useStatus();
</script>
<template>
  <main>
    <img src="~/assets/branding/logo_small.svg" />
  </main>
</template>

<style lang="scss" scoped>
  :global(body) {
    background-color: var(--background);
  }

  main {
    display: grid;
    min-height: 100vh;
    place-items: center;

    > img {
      height: 5rem;
    }
  }
</style>
