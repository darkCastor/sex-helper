<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  interface Testimonial {
    id: string;
    avatar: string;
    name: string;
    age: number;
    location: string;
    quote: string;
    rating: number;
    verified?: boolean;
    activeTime?: string;
  }

  export let testimonials: Testimonial[] = [];

  let currentIndex = 0;
  let interval: NodeJS.Timeout;
  let direction: 'left' | 'right' = 'right';

  function nextTestimonial() {
    direction = 'right';
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  function prevTestimonial() {
    direction = 'left';
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  }

  onMount(() => {
    interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  });
</script>

<div class="testimonial-container">
  <div class="testimonial-content">
    {#each [testimonials[currentIndex]] as testimonial (currentIndex)}
      <div
        class="testimonial"
        in:fade|local={{ duration: 300, delay: direction === 'right' ? 200 : 0 }}
        out:fade|local={{ duration: 300 }}
      >
        <div class="testimonial-inner">
          <div class="avatar-section">
            <div class="avatar-wrapper">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                class="avatar"
                loading="eager"
              />
              {#if testimonial.verified}
                <div class="verified-badge" title="Verified Member">
                  <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
              {/if}
              {#if testimonial.activeTime}
                <div class="active-time">
                  <span class="dot"></span>
                  {testimonial.activeTime}
                </div>
              {/if}
            </div>
            <div class="user-info">
              <span class="name">{testimonial.name}</span>
              <span class="details">{testimonial.age} • {testimonial.location}</span>
            </div>
          </div>

          <div class="content-section">
            <p class="quote">"{testimonial.quote}"</p>
            <div class="rating" style="--rating: {testimonial.rating};">
              {#each Array(5) as _, i}
                <span class="star" class:filled={i < testimonial.rating}>★</span>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="controls">
    <button
      class="control-btn"
      on:click={prevTestimonial}
      aria-label="Previous testimonial"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <div class="indicators">
      {#each testimonials as _, i}
        <button
          class="indicator"
          class:active={i === currentIndex}
          on:click={() => currentIndex = i}
          aria-label={`Go to testimonial ${i + 1}`}
        />
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .testimonial-container {
    @apply max-w-3xl mx-auto;
    @apply bg-pink-900/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply p-6 md:p-8;
    @apply border border-pink-200/20;
  }

  .testimonial-content {
    @apply relative;
    min-height: 200px;
  }

  .testimonial {
    @apply absolute inset-0;
  }

  .testimonial-inner {
    @apply flex flex-col md:flex-row gap-6 md:gap-8;
    @apply h-full;
  }

  .avatar-section {
    @apply flex flex-col items-center md:items-start gap-4;
    @apply flex-shrink-0;
  }

  .avatar-wrapper {
    @apply relative;
  }

  .avatar {
    @apply w-24 h-24 md:w-32 md:h-32;
    @apply rounded-full;
    @apply object-cover;
    @apply border-4 border-pink-300/20;
    @apply transition-transform duration-300;
  }

  .verified-badge {
    @apply absolute -bottom-1 -right-1;
    @apply bg-green-500;
    @apply text-white;
    @apply rounded-full;
    @apply p-1;
  }

  .active-time {
    @apply absolute -bottom-2 left-1/2 -translate-x-1/2;
    @apply bg-black/80 text-white;
    @apply text-xs;
    @apply px-3 py-1;
    @apply rounded-full;
    @apply flex items-center gap-2;
    @apply whitespace-nowrap;
  }

  .dot {
    @apply w-2 h-2 rounded-full bg-green-500;
    @apply animate-pulse;
  }

  .content-section {
    @apply flex-1;
    @apply flex flex-col justify-center;
  }

  .quote {
    @apply text-lg md:text-xl;
    @apply text-pink-100;
    @apply font-light;
    @apply leading-relaxed;
    @apply mb-4;
  }

  .rating {
    @apply flex gap-1;
    @apply mb-3;
  }

  .star {
    @apply text-pink-300/30 text-xl;
    animation: popIn 0.3s ease-out backwards;
  }

  .star.filled {
    @apply text-pink-400;
  }

  .user-info {
    @apply text-center md:text-left;
  }

  .name {
    @apply block text-lg font-medium text-pink-100;
  }

  .details {
    @apply text-sm text-pink-200/60;
  }

  .controls {
    @apply flex items-center justify-between;
    @apply mt-6;
  }

  .control-btn {
    @apply p-2;
    @apply text-pink-300/80 hover:text-pink-300;
    @apply transition-all duration-200;
    @apply hover:scale-110;
  }

  .indicators {
    @apply flex gap-2;
  }

  .indicator {
    @apply w-2 h-2 rounded-full;
    @apply bg-pink-300/30;
    @apply transition-all duration-200;
    @apply cursor-pointer;
  }

  .indicator.active {
    @apply w-4 bg-pink-400;
  }

  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    70% {
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
