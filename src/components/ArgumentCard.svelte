<script lang="ts">
  export let emoji: string;
  export let title: string;
  export let description: string;
  export let buttonText: string = "Learn More";
  export let onClick: () => void = () => {};
</script>

<div class="card">
  <div class="emoji">{emoji}</div>
  <h3 class="title">{title}</h3>
  <p class="description">{description}</p>
  <button on:click={onClick} class="action-button">
    {buttonText}
  </button>
</div>

<style lang="postcss">
  .card {
    @apply bg-white/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply flex flex-col items-center justify-between;
    @apply p-6 md:p-8;
    @apply h-full;
    @apply border border-white/20;
    @apply transition-all duration-300;
  }

  .emoji {
    @apply text-4xl md:text-5xl;
    @apply mb-6;
    @apply transition-transform duration-300;
    @apply select-none;
  }

  .title {
    @apply text-white font-light;
    @apply text-xl md:text-2xl;
    @apply mb-3;
    @apply text-center;
    @apply tracking-wide;
  }

  .description {
    @apply text-white/80 font-light;
    @apply text-base;
    @apply mb-6;
    @apply text-center;
    @apply leading-relaxed;
    @apply flex-grow;
  }

  .action-button {
    @apply bg-white/10 text-white;
    @apply px-6 py-2;
    @apply rounded-full;
    @apply text-sm font-light;
    @apply border border-white/20;
    @apply transition-all duration-300;
    @apply hover:bg-white/20 hover:border-white/30;
    @apply active:scale-95; /* Valid Tailwind class */
    @apply w-full md:w-auto;
  }
</style>
