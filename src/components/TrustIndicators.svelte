<script lang="ts">
  export let items: {
    emoji: string;
    title: string;
    description: string;
  }[] = [
    {
      emoji: "🔒",
      title: "100% Private",
      description: "Your privacy is guaranteed"
    },
    {
      emoji: "✨",
      title: "Verified Members",
      description: "Real people, real connections"
    },
    {
      emoji: "💫",
      title: "24/7 Support",
      description: "Professional help anytime"
    }
  ];
</script>

<div class="grid md:grid-cols-3 gap-6 text-center">
  {#each items as item}
    <div class="trust-item">
      <div class="emoji">{item.emoji}</div>
      <h3 class="title">{item.title}</h3>
      <p class="description">{item.description}</p>
    </div>
  {/each}
</div>

<style lang="postcss">
  .trust-item {
    @apply p-6;
    @apply bg-pink-900/10;
    @apply backdrop-blur-md;
    @apply rounded-2xl;
    @apply border border-pink-200/10;
    @apply transition-all duration-300;
    @apply hover:bg-pink-900/20;
  }

  .emoji {
    @apply text-3xl mb-2;
  }

  .title {
    @apply text-xl mb-1 text-pink-100 font-light;
  }

  .description {
    @apply text-sm text-pink-200/60;
  }
</style>
