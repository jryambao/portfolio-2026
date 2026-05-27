const HEADER_OFFSET = 120;

export function scrollToHash(hash) {
  if (!hash || hash === '#') return false;

  const target = document.querySelector(hash);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });

  window.history.pushState(null, '', hash);

  return true;
}

export function handleHashLinkClick(event, href) {
  if (!href?.startsWith('#')) return;

  const didScroll = scrollToHash(href);
  if (didScroll) {
    event.preventDefault();
  }
}
