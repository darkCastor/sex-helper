<script lang="ts">
  export let emoji: string;
  export let title: string;
  export let description: string;
  export let buttonText: string = "Learn More";
  export let onClick: () => void = () => {};
  export let target: string = "_self"; // Add default target prop
</script>

<div class="card">
  <div class="emoji-wrapper">
    <div class="emoji">{emoji}</div>
    <div class="emoji-bg" aria-hidden="true">{emoji}</div>
  </div>
  <h3 class="title">{title}</h3>
  <p class="description">{description}</p>
  <button on:click={onClick} class="action-button">
    {buttonText}
  </button>
</div>

<style lang="postcss">
  .card {
    @apply bg-pink-900/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply flex flex-col items-center justify-between;
    @apply p-6 md:p-8;
    @apply h-full;
    @apply border border-pink-200/20;
    @apply transition-all duration-300;
    @apply hover:bg-pink-900/20;
    @apply relative overflow-hidden;
  }

  .emoji-wrapper {
    @apply relative;
    @apply w-20 h-20;
    @apply mb-6;
  }

  .emoji {
    @apply text-5xl md:text-6xl;
    @apply absolute inset-0;
    @apply flex items-center justify-center;
    @apply z-10;
    @apply transition-transform duration-300;
    @apply select-none;
  }

  .emoji-bg {
    @apply absolute inset-0;
    @apply text-6xl md:text-7xl;
    @apply flex items-center justify-center;
    @apply opacity-5;
    @apply blur-2xl;
    @apply scale-150;
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
    @apply bg-pink-500/20 text-pink-100;
    @apply px-6 py-2;
    @apply rounded-full;
    @apply text-sm font-light;
    @apply border border-pink-300/20;
    @apply transition-all duration-300;
    @apply hover:bg-pink-500/30 hover:border-pink-300/30;
    @apply active:scale-95;
    @apply w-full md:w-auto;
  }

  .card:hover .emoji {
    @apply transform scale-110;
  }
</style>
