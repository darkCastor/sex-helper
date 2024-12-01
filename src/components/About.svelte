<script lang="ts">
  const values = [
    {
      emoji: "💖",
      title: "Tackle Loneliness",
      description: "Creating meaningful connections in an increasingly isolated world"
    },
    {
      emoji: "✨",
      title: "Self-Discovery",
      description: "Supporting your journey of sexual exploration and personal growth"
    },
    {
      emoji: "🤝",
      title: "Real Connections",
      description: "Facilitating genuine human bonds without complicated commitments"
    },
    {
      emoji: "💫",
      title: "Fantasy Fulfillment",
      description: "Safe space to explore and realize your desires"
    }
  ];

  const process = [
    {
      emoji: "👋",
      title: "Initial Contact",
      description: "Connect with us on Snapchat for a casual, no-pressure chat"
    },
    {
      emoji: "🗣️",
      title: "The 36 Questions",
      description: "We use proven connection-building questions to ensure compatibility"
    },
    {
      emoji: "💆‍♀️",
      title: "Relaxation Session",
      description: "Professional massage to help you feel comfortable and at ease"
    },
    {
      emoji: "💝",
      title: "Personal Experience",
      description: "Enjoy a tailored experience focused on your comfort and desires"
    }
  ];
</script>

<section class="py-20 bg-pink-900/5" id="about">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light text-pink-100 text-center mb-6">
      About Us
    </h2>
    <p class="text-xl text-pink-200/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
      We're dedicated to helping people rediscover genuine connections and explore their sexuality in a safe,
      professional environment. Our approach combines comfort, discretion, and personal growth.
    </p>

    <!-- Values Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {#each values as value}
        <div class="value-card">
          <div class="text-4xl mb-4">{value.emoji}</div>
          <h3 class="text-xl text-pink-100 mb-2">{value.title}</h3>
          <p class="text-pink-200/80">{value.description}</p>
        </div>
      {/each}
    </div>

    <!-- Process Timeline -->
    <h3 class="text-2xl md:text-3xl font-light text-pink-100 text-center mb-12">
      Our Process
    </h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each process as step, i}
        <div class="process-card">
          <div class="step-number">{i + 1}</div>
          <div class="text-3xl mb-4">{step.emoji}</div>
          <h4 class="text-lg text-pink-100 mb-2">{step.title}</h4>
          <p class="text-pink-200/80">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  .value-card {
    @apply bg-pink-900/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply p-6;
    @apply border border-pink-200/20;
    @apply text-center;
    @apply transition-all duration-300;
    @apply hover:bg-pink-900/20;
    @apply hover:transform hover:-translate-y-1;
  }

  .process-card {
    @apply bg-pink-900/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply p-6;
    @apply border border-pink-200/20;
    @apply text-center;
    @apply transition-all duration-300;
    @apply hover:bg-pink-900/20;
    @apply relative;
  }

  .step-number {
    @apply absolute -top-3 -right-3;
    @apply w-8 h-8;
    @apply bg-pink-500;
    @apply rounded-full;
    @apply flex items-center justify-center;
    @apply text-white text-sm font-medium;
    @apply border-2 border-pink-900;
  }
</style>
