<script lang="ts">
  const process = [
    {
      emoji: "👋",
      title: "Say Hi",
      description: "Start with a casual chat on Snapchat - no pressure, just friendly vibes",
      tips: ["Be yourself", "Ask anything", "No rush"]
    },
    {
      emoji: "☕️",
      title: "Get Comfy",
      description: "We'll take time to know each other through fun and engaging conversation",
      tips: ["Share interests", "Express desires", "Build trust"]
    },
    {
      emoji: "✨",
      title: "Connect",
      description: "If we click, we'll plan something special that matches your comfort level",
      tips: ["Your pace", "Your boundaries", "Your experience"]
    },
    {
      emoji: "💫",
      title: "Experience",
      description: "Enjoy a natural, flowing experience focused entirely on your wellbeing",
      tips: ["Feel free", "Be present", "Just enjoy"]
    }
  ];
</script>

<section class="py-20 bg-gradient-to-b from-pink-950/10 to-transparent" id="about">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light text-white text-center mb-6">
      How It Works
    </h2>
    <p class="text-xl text-white/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
      A natural, pressure-free journey to connection and self-discovery. Everything moves at your pace,
      with your comfort being the priority at every step.
    </p>

    <!-- Process Timeline -->
    <div class="relative max-w-5xl mx-auto">
      <!-- Connection Line -->
      <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-y-1/2 hidden md:block"></div>

      <div class="grid md:grid-cols-4 gap-8 relative">
        {#each process as step, i}
          <div class="process-card group">
            <div class="step-number">
              <span class="number">{i + 1}</span>
              <span class="pulse"></span>
            </div>

            <div class="emoji-wrapper">
              <div class="emoji">{step.emoji}</div>
              <div class="emoji-bg" aria-hidden="true">{step.emoji}</div>
            </div>

            <h4 class="title">{step.title}</h4>
            <p class="description">{step.description}</p>

            <!-- Tips that appear on hover -->
            <div class="tips-container">
              {#each step.tips as tip}
                <span class="tip">{tip}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .process-card {
    @apply bg-pink-950/20 backdrop-blur-md;
    @apply rounded-2xl;
    @apply p-6;
    @apply border border-pink-200/20;
    @apply text-center;
    @apply transition-all duration-500;
    @apply hover:bg-pink-950/30;
    @apply relative;
    @apply flex flex-col items-center;
  }

  .step-number {
    @apply relative;
    @apply w-10 h-10;
    @apply -mt-8 mb-4;
    @apply bg-gradient-to-br from-pink-400 to-purple-500;
    @apply rounded-full;
    @apply flex items-center justify-center;
    @apply text-white font-medium;
    @apply border-2 border-pink-900;
    @apply z-10;
  }

  .pulse {
    @apply absolute inset-0;
    @apply rounded-full;
    @apply bg-pink-400;
    @apply opacity-0;
    @apply group-hover:animate-ping;
  }

  .emoji-wrapper {
    @apply relative;
    @apply w-16 h-16;
    @apply mb-4;
  }

  .emoji {
    @apply text-4xl;
    @apply absolute inset-0;
    @apply flex items-center justify-center;
    @apply z-10;
    @apply transition-transform duration-300;
    @apply group-hover:scale-110;
    @apply select-none;
  }

  .emoji-bg {
    @apply absolute inset-0;
    @apply text-5xl;
    @apply flex items-center justify-center;
    @apply opacity-10;
    @apply blur-xl;
    @apply scale-150;
    @apply select-none;
  }

  .title {
    @apply text-white font-medium;
    @apply text-lg;
    @apply mb-2;
  }

  .description {
    @apply text-white/80;
    @apply text-sm;
    @apply leading-relaxed;
  }

  .tips-container {
    @apply mt-4;
    @apply flex flex-wrap gap-2 justify-center;
    @apply opacity-0 translate-y-2;
    @apply transition-all duration-300;
    @apply group-hover:opacity-100 group-hover:translate-y-0;
  }

  .tip {
    @apply bg-pink-400/10;
    @apply px-3 py-1;
    @apply rounded-full;
    @apply text-xs;
    @apply text-pink-200;
    @apply border border-pink-400/20;
  }

  /* Animate steps sequentially */
  .process-card {
    animation: fadeIn 0.5s ease-out backwards;
  }

  .process-card:nth-child(1) { animation-delay: 0.1s; }
  .process-card:nth-child(2) { animation-delay: 0.2s; }
  .process-card:nth-child(3) { animation-delay: 0.3s; }
  .process-card:nth-child(4) { animation-delay: 0.4s; }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
