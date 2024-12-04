<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  let showFooter = false;

  onMount(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const threshold = 100;
      showFooter = pageHeight - scrollPosition < threshold;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

{#if showFooter}
  <footer
    class="footer-wrapper"
    transition:fade={{ duration: 300 }}
  >
    <div class="footer-content">
      <!-- Essential Legal Requirements -->
      <div class="legal-notice">
        <span class="warning">18+ Only</span>
        <span class="dot">•</span>
        <span class="privacy">100% Private</span>
        <span class="dot">•</span>
        <a href="/terms" class="terms-link">Terms Apply</a>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        © {currentYear} ConnectMe
      </div>
    </div>
  </footer>
{/if}

<style lang="postcss">
  .footer-wrapper {
    @apply fixed bottom-0 left-0 right-0;
    @apply bg-black/40 backdrop-blur-md;
    @apply border-t border-pink-200/10;
    @apply py-4;
    @apply z-50;
  }

  .footer-content {
    @apply container mx-auto px-4;
    @apply flex flex-col md:flex-row items-center justify-between;
    @apply gap-4;
  }

  .legal-notice {
    @apply flex items-center gap-3;
    @apply text-sm text-pink-200/80;
  }

  .warning {
    @apply text-red-400;
  }

  .dot {
    @apply text-pink-200/40;
  }

  .terms-link {
    @apply hover:text-pink-200;
    @apply transition-colors duration-200;
  }

  .social-links {
    @apply flex items-center gap-4;
  }

  .social-button {
    @apply flex items-center gap-2;
    @apply px-4 py-2;
    @apply rounded-full;
    @apply transition-all duration-200;
    @apply transform hover:scale-105;
  }

  .snapchat {
    @apply bg-yellow-400/20 hover:bg-yellow-400/30;
    @apply text-white;
  }

  .telegram {
    @apply bg-blue-500/20 hover:bg-blue-500/30;
    @apply text-white;
  }

  .social-icon {
    @apply w-5 h-5;
    @apply fill-current;
  }

  .copyright {
    @apply text-sm text-pink-200/40;
  }

  /* Mobile optimization */
  @media (max-width: 768px) {
    .footer-content {
      @apply text-center;
    }

    .legal-notice {
      @apply text-xs;
      @apply justify-center;
    }
  }
</style>
