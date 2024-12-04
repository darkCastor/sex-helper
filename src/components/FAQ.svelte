<script lang="ts">
  import { slide } from 'svelte/transition';
  interface FAQItem {
    question: string;
    answer: string;
  }

  export let faqs: FAQItem[] = [];

  // Track which FAQs are open
  let openFaqs = new Set<number>();

  // Toggle FAQ open/closed
  function toggleFaq(index: number) {
    if (openFaqs.has(index)) {
      openFaqs.delete(index);
    } else {
      openFaqs.add(index);
    }
    openFaqs = openFaqs; // Trigger reactivity
  }
</script>

<div class="space-y-4">
  {#each faqs as faq, index}
    <div class="faq-item">
      <button
        class="question-button"
        on:click={() => toggleFaq(index)}
        aria-expanded={openFaqs.has(index)}
      >
        <h3 class="question">
          {faq.question}
        </h3>
        <svg
          class="chevron"
          class:rotate-180={openFaqs.has(index)}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {#if openFaqs.has(index)}
        <div
          class="answer"
          transition:slide={{ duration: 300 }}
        >
          {faq.answer}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="postcss">
  .faq-item {
    @apply bg-pink-900/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply border border-pink-200/20;
    @apply transition-all duration-300;
    @apply hover:bg-pink-900/20;
    @apply overflow-hidden;
  }

  .question-button {
    @apply w-full;
    @apply flex items-center justify-between;
    @apply p-6;
    @apply text-left;
    @apply transition-colors duration-300;
  }

  .question {
    @apply text-xl text-pink-100;
    @apply font-light;
    @apply pr-8;
  }

  .chevron {
    @apply w-6 h-6;
    @apply text-pink-300;
    @apply transition-transform duration-300;
    @apply flex-shrink-0;
  }

  .answer {
    @apply px-6 pb-6;
    @apply text-pink-200/80;
    @apply leading-relaxed;
    @apply border-t border-pink-200/10;
    @apply pt-4;
  }

  /* Add hover state */
  .question-button:hover {
    @apply bg-pink-900/20;
  }

  /* Active state for better accessibility */
  .question-button:active {
    @apply bg-pink-900/30;
  }

  /* Focus state for accessibility */
  .question-button:focus {
    @apply outline-none ring-2 ring-pink-400/30;
  }

  /* Add some spacing between items */
  .faq-item + .faq-item {
    @apply mt-4;
  }
</style>
