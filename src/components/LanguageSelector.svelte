<script lang="ts">
  import { languages } from '../i18n/utils';
  export let currentLang: string = 'en';

  let isOpen = false;

  const languageList = Object.entries(languages).map(([code, name]) => ({
    code,
    name,
    flag: code === 'en' ? '🇬🇧' : code === 'fr' ? '🇫🇷' : '🇨🇿'
  }));

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function switchLanguage(lang: string) {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|fr|cs)/, '');
    window.location.href = `/${lang}${newPath || '/'}`;
    isOpen = false;
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector')) {
      isOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="relative inline-block text-left language-selector">
  <button
    type="button"
    class="inline-flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:text-white transition-colors"
    on:click={toggleDropdown}
  >
    <span class="text-lg">
      {languageList.find(l => l.code === currentLang)?.flag}
    </span>
    <span class="hidden md:inline">
      {languageList.find(l => l.code === currentLang)?.name}
    </span>
    <svg
      class="w-4 h-4 transition-transform duration-200"
      class:rotate-180={isOpen}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-out"
      transition:slide={{ duration: 200 }}
    >
      <div class="py-1" role="menu">
        {#each languageList as { code, name, flag }}
          <button
            class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2
                   {code === currentLang ? 'bg-gray-50 font-medium' : ''}"
            role="menuitem"
            on:click={() => switchLanguage(code)}
          >
            <span>{flag}</span>
            <span>{name}</span>
            {#if code === currentLang}
              <svg class="w-4 h-4 ml-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  /* Optional: Add animation for the dropdown */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .language-selector {
    z-index: 50;
  }
</style>
