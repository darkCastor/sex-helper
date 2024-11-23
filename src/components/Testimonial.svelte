<script lang="ts">
  export let testimonials: {
    id: string;
    avatar: string;
    name: string;
    age: number;
    location: string;
    quote: string;
    rating: number;
    verified?: boolean;
  }[] = [];

  let currentIndex = 0;

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  }

  // Auto-advance testimonials every 5 seconds
  let interval: NodeJS.Timeout;

  function startAutoAdvance() {
    interval = setInterval(nextTestimonial, 5000);
  }

  function stopAutoAdvance() {
    if (interval) clearInterval(interval);
  }
</script>

<div
  class="testimonial-container"
  on:mouseenter={stopAutoAdvance}
  on:mouseleave={startAutoAdvance}
>
  <div class="testimonial-wrapper">
    {#each [testimonials[currentIndex]] as testimonial (testimonial.id)}
      <div
        class="testimonial"
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 300 }}
      >
        <div class="avatar-wrapper">
          <img
            src={testimonial.avatar}
            alt={`${testimonial.name}'s avatar`}
            class="avatar"
          />
          {#if testimonial.verified}
            <div class="verified-badge" title="Verified Member">
              <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
          {/if}
        </div>

        <div class="quote-wrapper">
          <p class="quote">"{testimonial.quote}"</p>

          <div class="rating">
            {#each Array(5) as _, i}
              <span class="star" class:filled={i < testimonial.rating}>★</span>
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

  <div class="controls">
    <button class="control-btn" on:click={prevTestimonial} aria-label="Previous testimonial">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <div class="indicators">
      {#each testimonials as _, i}
        <button
          class="indicator"
          class:active={i === currentIndex}
          on:click={() => (currentIndex = i)}
          aria-label={`Go to testimonial ${i + 1}`}
        />
      {/each}
    </div>

    <button class="control-btn" on:click={nextTestimonial} aria-label="Next testimonial">
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
  }

  .testimonial-wrapper {
    @apply relative min-h-[12rem];
  }

  .testimonial {
    @apply flex flex-col md:flex-row items-center gap-6 md:gap-8;
  }

  .avatar-wrapper {
    @apply relative;
  }

  .avatar {
    @apply w-24 h-24 md:w-32 md:h-32;
    @apply rounded-full;
    @apply object-cover;
    @apply border-4 border-pink-300/20;
  }

  .verified-badge {
    @apply absolute -bottom-1 -right-1;
    @apply bg-green-500;
    @apply text-white;
    @apply rounded-full;
    @apply p-1;
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
    @apply transition-colors duration-200;
  }

  .indicators {
    @apply flex gap-2;
  }

  .indicator {
    @apply w-2 h-2;
    @apply rounded-full;
    @apply bg-pink-300/30;
    @apply transition-all duration-200;
  }

  .indicator.active {
    @apply w-4;
    @apply bg-pink-400;
  }
</style>
