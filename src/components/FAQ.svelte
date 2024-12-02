<script lang="ts">
  interface FAQItem {
    question: string;
    answer: string;
  }

  export let faqs: FAQItem[] = [];
</script>

<div class="space-y-6">
  {#each faqs as faq}
    <div class="faq-item">
      <h3 class="question">{faq.question}</h3>
      <p class="answer">{faq.answer}</p>
    </div>
  {/each}
</div>

<style lang="postcss">
  .faq-item {
    @apply bg-pink-900/10 backdrop-blur-md;
    @apply rounded-2xl p-6;
    @apply border border-pink-200/20;
    @apply transition-all duration-300;
    @apply hover:bg-pink-900/20;
  }

  .question {
    @apply text-xl text-pink-100 mb-2;
    @apply font-light;
  }

  .answer {
    @apply text-pink-200/80;
    @apply leading-relaxed;
  }
</style>
