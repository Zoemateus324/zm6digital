declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackFaleConosco = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'fale_conosco', {});
  }
};

