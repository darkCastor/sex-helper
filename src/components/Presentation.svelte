<div class="bio-section">
  <span class="category">Professional Intimacy Coach</span>

  <div class="bio-content">
    <p class="intro-text">
      Hey, I'm James - your certified intimacy coach and guide to sexual wellness.
    </p>

    <div class="section-title">My Mission</div>
    <p class="mission-text">
      I created this space because I believe everyone deserves to:
    </p>

    <div class="specialties">
      <div class="specialty-item">
        <span class="specialty-icon">✨</span>
        <span>Feel confident in their sexuality</span>
      </div>
      <div class="specialty-item">
        <span class="specialty-icon">💝</span>
        <span>Experience genuine connections</span>
      </div>
      <div class="specialty-item">
        <span class="specialty-icon">🦋</span>
        <span>Explore desires safely</span>
      </div>
      <div class="specialty-item">
        <span class="specialty-icon">💫</span>
        <span>Break free from loneliness</span>
      </div>
    </div>

    <div class="section-title">My Approach</div>
    <div class="highlights-container">
      <span class="highlight">Professional massage therapy</span>
      <span class="highlight">Intimacy coaching</span>
      <span class="highlight">Body positivity guidance</span>
      <span class="highlight">Sexual wellness education</span>
      <span class="highlight">Emotional support</span>
    </div>

    <div class="section-title">Perfect For You If</div>
    <ul class="benefits-list">
      <li>You're curious about exploring your sexuality</li>
      <li>You're looking to build confidence</li>
      <li>You want to practice without commitment</li>
      <li>You're seeking genuine connection</li>
      <li>You're interested in learning new experiences</li>
      <li>You just want to feel good again</li>
    </ul>

    <div class="highlight-pulse">
      Your comfort and safety are my absolute priorities. Everything moves at your pace.
    </div>
  </div>
</div>

<style lang="postcss">
  :global(.bio-content ul) {
    @apply space-y-2 my-4;
  }

  :global(.bio-content li) {
    @apply flex items-start gap-2 text-pink-200/80;
  }

  :global(.bio-content strong) {
    @apply text-pink-300 font-medium;
  }

  :global(.bio-content a) {
    @apply text-pink-400 underline decoration-pink-400/30 underline-offset-2 transition-colors duration-300 hover:text-pink-300;
  }

  .bio-content {
    @apply space-y-6;
  }

  .intro-text {
    @apply text-base md:text-lg text-pink-100/90 leading-relaxed font-light;
  }

  .mission-text {
    @apply text-pink-200/80 mb-4;
  }

  .highlights-container {
    @apply flex flex-wrap gap-2 my-4;
  }

  .benefits-list {
    @apply space-y-2 list-none pl-4;
  }

  .benefits-list li {
    @apply flex items-center gap-2 text-pink-200/80;
    @apply before:content-['•'] before:text-pink-400;
  }

  .bio-section {
    @apply max-w-2xl mx-auto;
    @apply bg-pink-950/10 backdrop-blur-md;
    @apply rounded-2xl;
    @apply p-6 md:p-8;
    @apply border border-pink-200/20;
    @apply transition-all duration-300;
    @apply hover:border-pink-200/30;
    @apply shadow-lg shadow-pink-900/10;
    @apply relative;
    background: linear-gradient(
      165deg,
      rgba(219, 39, 119, 0.1) 0%,
      rgba(236, 72, 153, 0.05) 100%
    );
    animation: fadeIn 0.6s ease-out;
    scroll-margin-top: 2rem;
  }

  .section-title {
    @apply text-xl md:text-2xl text-pink-200 font-light mb-4 border-b border-pink-200/10 pb-2;
  }

  .highlight {
    @apply bg-pink-400/10 px-2 py-1 rounded-md text-pink-200 inline-block transition-all duration-300 hover:bg-pink-400/20;
  }

  .category {
    @apply text-sm uppercase text-pink-300/60 tracking-wider mb-2;
  }

  .specialties {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4 my-6;
  }

  .specialty-item {
    @apply flex items-center gap-3 bg-pink-900/10 rounded-lg p-3 transition-all duration-300 hover:bg-pink-900/20;
  }

  .specialty-icon {
    @apply text-2xl opacity-80;
  }

  .highlight-pulse {
    @apply relative;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

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

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  @media (max-width: 640px) {
    .bio-section {
      @apply mx-4 p-5;
    }

    .specialty-item {
      @apply text-sm;
    }
  }
</style>
