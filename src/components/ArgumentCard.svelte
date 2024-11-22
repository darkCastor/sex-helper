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
    @apply bg-white/10 backdrop-blur-sm;
    @apply rounded-xl transform transition-all duration-300;
    @apply flex flex-col items-center justify-between;
    @apply p-4 md:p-6 lg:p-8;
    @apply h-full;
    @apply hover:scale-105; /* Changed from hover:scale-102 to hover:scale-105 */
    @apply cursor-pointer;
  }

  .emoji {
    @apply text-4xl md:text-5xl lg:text-6xl;
    @apply mb-4 md:mb-6;
    @apply transition-transform duration-300;
    @apply select-none;
  }

  .card:hover .emoji {
    @apply transform scale-110;
  }

  .title {
    @apply text-white font-bold;
    @apply text-lg md:text-xl lg:text-2xl;
    @apply mb-2 md:mb-3;
    @apply text-center;
  }

  .description {
    @apply text-white/80;
    @apply text-sm md:text-base lg:text-lg;
    @apply mb-4 md:mb-6;
    @apply text-center;
    @apply flex-grow;
  }

  .action-button {
    @apply bg-white/20 text-white;
    @apply px-4 md:px-6 lg:px-8;
    @apply py-2 md:py-2.5 lg:py-3;
    @apply rounded-full;
    @apply text-sm md:text-base lg:text-lg;
    @apply font-medium;
    @apply transition-all duration-300;
    @apply hover:bg-white/30;
    @apply active:scale-95;
    @apply w-full md:w-auto;
  }
</style>
