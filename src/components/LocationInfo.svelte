<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let currentLocation: string;
  export let nextLocation: string;
  export let departureTime: Date;

  let timeRemaining: string = '';
  let isUrgent: boolean = false;
  let interval: NodeJS.Timeout;

  function calculateTimeRemaining() {
    const now = new Date();
    const diff = departureTime.getTime() - now.getTime();

    if (diff <= 0) {
      timeRemaining = 'Last few minutes!';
      isUrgent = true;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    isUrgent = diff < (24 * 60 * 60 * 1000);

    if (days > 0) {
      timeRemaining = `${days}d ${hours}h remaining`;
    } else if (hours > 0) {
      timeRemaining = `${hours}h ${minutes}m remaining`;
    } else if (minutes > 0) {
      timeRemaining = `${minutes} minutes remaining!`;
    } else {
      timeRemaining = 'Last minute!';
    }
  }

  $: updateInterval = isUrgent ? 10000 : 60000;

  onMount(() => {
    calculateTimeRemaining();
    interval = setInterval(calculateTimeRemaining, updateInterval);
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });
</script>

<div class="location-wrapper">
  <div class="location-card">
    <div class="current-location">
      <div class="location-header">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>Current Location</span>
      </div>
      <div class="location-name">{currentLocation}</div>
    </div>

    <div class="location-divider">
      <div class="line"></div>
      <svg class="plane-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35 7.54 1.93-.51-4.13-7.17 5.25-1.41c.81-.23 1.28-1.05 1.07-1.85z"/>
      </svg>
      <div class="line"></div>
    </div>

    <div class="next-location">
      <div class="location-header">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
        <span>Next Destination</span>
      </div>
      <div class="location-name">{nextLocation}</div>
    </div>

    <div class="time-remaining" class:urgent={isUrgent}>
      <div class="pulse-dot"></div>
      <span class="time-text">{timeRemaining}</span>
      {#if isUrgent}
        <span class="urgent-label">Act now!</span>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .location-wrapper {
    @apply max-w-lg mx-auto;
    @apply transform transition-all duration-500;
    @apply hover:scale-[1.02];
  }

  .location-card {
    @apply bg-pink-900/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply p-6 md:p-8;
    @apply border border-pink-200/20;
    @apply relative;
    @apply shadow-xl shadow-pink-900/10;
    @apply transition-all duration-300;
  }

  .location-card:hover {
    @apply border-pink-200/30;
    @apply shadow-2xl shadow-pink-900/20;
    @apply bg-pink-900/20;
  }

  .location-header {
    @apply flex items-center gap-2;
    @apply text-pink-200/60;
    @apply text-sm;
    @apply mb-2;
  }

  .icon {
    @apply w-4 h-4;
  }

  .location-name {
    @apply text-xl md:text-2xl text-pink-100;
    @apply font-light;
    @apply transition-all duration-300;
  }

  .location-card:hover .location-name {
    @apply text-pink-50;
  }

  .location-divider {
    @apply flex items-center gap-4;
    @apply my-6;
  }

  .line {
    @apply flex-1 h-px;
    @apply bg-gradient-to-r from-transparent via-pink-300/20 to-transparent;
  }

  .plane-icon {
    @apply w-6 h-6;
    @apply text-pink-300/40;
    @apply transform -rotate-45;
    animation: fly 2s ease-in-out infinite;
  }

  .time-remaining {
    @apply flex items-center gap-2;
    @apply mt-6;
    @apply justify-center;
    @apply text-pink-400;
    @apply font-medium;
    @apply transition-all duration-300;
    @apply text-lg;
  }

  .time-remaining.urgent {
    @apply text-red-400;
  }

  .urgent-label {
    @apply text-red-400;
    @apply text-sm;
    @apply ml-2;
    @apply font-bold;
    animation: blink 1s ease-in-out infinite;
  }

  .pulse-dot {
    @apply w-2 h-2;
    @apply bg-pink-400;
    @apply rounded-full;
    @apply transition-all duration-300;
  }

  .urgent .pulse-dot {
    @apply bg-red-400;
    animation: urgentPulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .time-text {
    @apply transition-all duration-300;
  }

  .urgent .time-text {
    @apply font-bold;
  }

  @keyframes fly {
    0%, 100% {
      transform: translate(0, 0) rotate(-45deg);
    }
    50% {
      transform: translate(4px, -4px) rotate(-45deg);
    }
  }

  @keyframes urgentPulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: .5;
      transform: scale(1.5);
    }
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Mobile Optimization */
  @media (max-width: 640px) {
    .location-card {
      @apply p-4;
    }

    .location-name {
      @apply text-lg;
    }

    .time-remaining {
      @apply text-base;
    }

    .urgent-label {
      @apply text-xs;
    }
  }
</style>
