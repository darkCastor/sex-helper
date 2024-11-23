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

  function goToTestimonial(index: number) {
    direction = index > currentIndex ? 'right' : 'left';
    currentIndex = index;
  }

  function startAutoAdvance() {
    interval = setInterval(nextTestimonial, 5000);
  }

  function stopAutoAdvance() {
    if (interval) clearInterval(interval);
  }

  onMount(() => {
    startAutoAdvance();
    return () => stopAutoAdvance();
  });
</script>

<div
  class="testimonial-container"
  on:mouseenter={stopAutoAdvance}
  on:mouseleave={startAutoAdvance}
>
  <div class="testimonial-wrapper">
    <div class="testimonial-content">
      {#each [testimonials[currentIndex]] as testimonial (currentIndex)}
        <div
          class="testimonial"
          in:fade|local={{
            duration: 300,
            delay: direction === 'right' ? 200 : 0
          }}
          out:fade|local={{
            duration: 300,
            delay: direction === 'left' ? 200 : 0
          }}
        >
          <div
            class="avatar-wrapper"
            in:slide|local={{
              delay: 200,
              duration: 400,
              axis: 'y',
              amount: 20
            }}
          >
            <img
              src={testimonial.avatar}
              alt={`${testimonial.name}'s avatar`}
              class="avatar"
              loading="eager"
            />
            {#if testimonial.verified}
              <div
                class="verified-badge"
                title="Verified Member"
                in:fade={{ delay: 500, duration: 300 }}
              >
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
            {/if}
          </div>

          <div
            class="quote-wrapper"
            in:slide|local={{
              delay: 200,
              duration: 400,
              axis: direction === 'right' ? 'x' : '-x',
              amount: 50
            }}
          >
            <p class="quote">"{testimonial.quote}"</p>

            <div class="rating">
              {#each Array(5) as _, i}
                <span
                  class="star"
                  class:filled={i < testimonial.rating}
                  style="animation-delay: {i * 100}ms"
                >
                  ★
                </span>
              {/each}
            </div>

            <div class="user-info">
              <span class="name">{testimonial.name}</span>
              <span class="details">{testimonial.age} • {testimonial.location}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
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
          on:click={() => goToTestimonial(i)}
          aria-label={`Go to testimonial ${i + 1}`}
        />
      {/each}
    </div>

    <button
      class="control-btn"
      on:click={nextTestimonial}
      aria-label="Next testimonial"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>

<style lang="postcss">
  .testimonial-container {
    @apply w-full max-w-3xl mx-auto;
    @apply bg-pink-900/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply p-6 md:p-8;
    @apply border border-pink-200/20;
    @apply overflow-hidden;
  }

  .testimonial-wrapper {
    @apply relative;
  }

  .testimonial-content {
    @apply relative;
    min-height: 200px;
  }

  .testimonial {
    @apply flex flex-col md:flex-row items-center gap-6 md:gap-8;
    @apply absolute inset-0;
  }

  .avatar-wrapper {
    @apply relative flex-shrink-0;
  }

  .avatar {
    @apply w-24 h-24 md:w-32 md:h-32;
    @apply rounded-full;
    @apply object-cover;
    @apply border-4 border-pink-300/20;
    @apply transition-transform duration-300;
  }

  .avatar:hover {
    @apply transform scale-105;
  }

  .verified-badge {
    @apply absolute -bottom-1 -right-1;
    @apply bg-green-500;
    @apply text-white;
    @apply rounded-full;
    @apply p-1;
    @apply transform;
  }

  .quote-wrapper {
    @apply flex-1;
    @apply text-center md:text-left;
  }

  .quote {
    @apply text-lg md:text-xl;
    @apply text-pink-100;
    @apply font-light;
    @apply leading-relaxed;
    @apply mb-4;
  }

  .rating {
    @apply flex justify-center md:justify-start;
    @apply gap-1;
    @apply mb-3;
  }

  .star {
    @apply text-pink-300/30;
    @apply text-xl;
    @apply transition-colors duration-300;
    animation: popIn 0.3s ease-out backwards;
  }

  .star.filled {
    @apply text-pink-400;
  }

  .user-info {
    @apply flex flex-col;
  }

  .name {
    @apply text-pink-100;
    @apply font-medium;
    @apply text-lg;
  }

  .details {
    @apply text-pink-300/80;
    @apply text-sm;
  }

  .controls {
    @apply flex items-center justify-between;
    @apply mt-8;
  }

  .control-btn {
    @apply p-2;
    @apply text-pink-300/80;
    @apply hover:text-pink-300;
    @apply transition-all duration-200;
    @apply hover:scale-110;
  }

  .indicators {
    @apply flex gap-2;
  }

  .indicator {
    @apply w-2 h-2;
    @apply rounded-full;
    @apply bg-pink-300/30;
    @apply transition-all duration-200;
    @apply hover:bg-pink-300/50;
    @apply cursor-pointer;
  }

  .indicator.active {
    @apply w-4;
    @apply bg-pink-400;
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
