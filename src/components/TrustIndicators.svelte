<script lang="ts">
  interface TrustItem {
    emoji: string;
    title: string;
    description: string;
  }

  export let items: TrustItem[] = [
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
      title: "Instant Access",
      description: "No long registration"
    }
  ];
</script>

<div class="grid md:grid-cols-3 gap-6 text-center">
  {#each items as item}
    <div class="trust-item">
      <div class="text-3xl mb-2">{item.emoji}</div>
      <h3 class="text-xl mb-1 text-pink-100 font-light">{item.title}</h3>
      <p class="text-sm text-pink-200/60">{item.description}</p>
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
</style>
