<script lang="ts">
  import { languages } from '../i18n/utils';
  export let currentLang: string = 'en';

  // Convert languages object to array for iteration
  const languageList = Object.entries(languages).map(([code, name]) => ({
    code,
    name,
    flag: code === 'en' ? '🇬🇧' : code === 'fr' ? '🇫🇷' : '🇨🇿'
  }));

  function switchLanguage(lang: string) {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|fr|cs)/, '');
    window.location.href = `/${lang}${newPath || '/'}`;
  }
</script>

<div class="relative inline-block text-left group">
  <button
    type="button"
    class="inline-flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:text-white transition-colors"
  >
    <span class="text-lg">
      {languageList.find(l => l.code === currentLang)?.flag}
    </span>
    <span class="hidden md:inline">
      {languageList.find(l => l.code === currentLang)?.name}
    </span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <div class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
    <div class="py-1" role="menu">
      {#each languageList as { code, name, flag }}
        <button
          class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
          role="menuitem"
          on:click={() => switchLanguage(code)}
        >
          <span>{flag}</span>
          <span>{name}</span>
        </button>
      {/each}
    </div>
  </div>
</div>
