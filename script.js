/*
  Hey, it's Yan! This is the small JavaScript layer.
  My rule for this page: the content and links should work even if this file doesn't load.
  JavaScript adds a couple of nice extras; it doesn't hold the website hostage.
*/

(() => {
  'use strict';

  // Querying by data attributes keeps behavior separate from styling class names.
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const themeSymbol = document.querySelector('[data-theme-symbol]');
  const outlineButton = document.querySelector('[data-outline-toggle]');
  const outlineLabel = document.querySelector('[data-outline-label]');
  const yearElement = document.querySelector('[data-year]');
  const storageKey = 'yan-portfolio-theme';

  // localStorage can be blocked by privacy settings. The site still needs to work.
  function readSavedTheme() {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // No problem; the selection will still work until the page reloads.
    }
  }

  // Respect the visitor's system preference unless they've made their own choice.
  const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  let currentTheme = readSavedTheme() ?? (systemPrefersDark ? 'dark' : 'light');

  function applyTheme(theme) {
    currentTheme = theme;
    root.dataset.theme = theme;

    // An accessible button tells you what it WILL do, not just what it looks like.
    if (themeButton) {
      themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      themeButton.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    }
    if (themeSymbol) themeSymbol.textContent = theme === 'dark' ? '☀' : '☾';

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#121b17' : '#f7f7f2');
  }

  applyTheme(currentTheme);

  if (themeButton) {
    themeButton.hidden = false; // Now that the event works, it's safe to show the button.
    themeButton.addEventListener('click', () => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  }

  // This is a playful HTML lesson: a single attribute controls the CSS outlines.
  // aria-pressed lets screen readers announce whether the lesson mode is on.
  if (outlineButton) {
    outlineButton.hidden = false;
    outlineButton.addEventListener('click', () => {
      const isOn = root.dataset.outlineMode === 'true';
      const nextState = !isOn;
      root.dataset.outlineMode = String(nextState);
      outlineButton.setAttribute('aria-pressed', String(nextState));
      // textContent is all I need: no HTML parsing or string-building required.
      if (outlineLabel) outlineLabel.textContent = nextState ? 'Hide semantic outlines' : 'Show semantic outlines';
    });
  }

  // One less tiny thing to remember every New Year's Day.
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());
})();
