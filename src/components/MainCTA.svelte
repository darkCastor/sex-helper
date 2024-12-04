<script lang="ts">
  export let snapchatUsername: string;
  export let telegramUsername: string;
  export let title: string = "Ready to Connect?";
  export let subtitle: string = "Join thousands of members already experiencing genuine connections";
</script>

<div class="text-center">
  <h2 class="text-3xl md:text-4xl mb-4 text-pink-100 font-light">{title}</h2>
  <p class="text-xl text-pink-200/80 mb-8 max-w-2xl mx-auto font-light">{subtitle}</p>

  <div class="flex flex-col md:flex-row items-center justify-center gap-4">
    <!-- Snapchat Button -->
    <button
      class="cta-button snapchat"
      on:click={() => window.open(`https://www.snapchat.com/add/${snapchatUsername}`, '_blank')}
    >
      <div class="icon-container">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.878 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
        </svg>
      </div>
      <span class="text">Add on Snapchat</span>
    </button>

    <!-- Telegram Button -->
    <button
      class="cta-button telegram"
      on:click={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
    >
      <div class="icon-container">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </div>
      <span class="text">Message on Telegram</span>
    </button>
  </div>

  <div class="flex items-center justify-center gap-4 mt-6">
    <div class="flex items-center gap-2 text-pink-200/60">
      <span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      <span class="text-sm">Online Now - Fast Response</span>
    </div>
  </div>
</div>

<style lang="postcss">
  .cta-button {
    @apply flex items-center gap-3;
    @apply px-6 py-3;
    @apply rounded-full;
    @apply font-medium;
    @apply transition-all duration-300;
    @apply hover:transform hover:scale-105;
    @apply shadow-lg hover:shadow-xl;
    @apply w-full md:w-auto;
  }

  .snapchat {
    @apply bg-yellow-400 hover:bg-yellow-300;
    @apply text-black;
    @apply shadow-yellow-400/20 hover:shadow-yellow-400/30;
  }

  .telegram {
    @apply bg-blue-500 hover:bg-blue-400;
    @apply text-white;
    @apply shadow-blue-500/20 hover:shadow-blue-500/30;
  }

  .icon-container {
    @apply bg-black;
    @apply p-2;
    @apply rounded-full;
    @apply w-10 h-10;
    @apply flex items-center justify-center;
  }

  .telegram .icon-container {
    @apply bg-white;
  }

  .icon {
    @apply w-6 h-6;
  }

  .snapchat .icon {
    @apply fill-yellow-400;
  }

  .telegram .icon {
    @apply fill-blue-500;
  }

  .text {
    @apply text-lg;
    @apply px-2;
  }
</style>
