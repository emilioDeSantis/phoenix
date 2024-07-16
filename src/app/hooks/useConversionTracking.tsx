import { useCallback } from 'react';

declare global {
  interface Window {
    gtag: (command: string, action: string, params: object) => void;
  }
}

export const useConversionTracking = () => {
  const trackConversion = useCallback((url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const callback = () => {
        if (typeof url !== 'undefined') {
          window.location.href = url;
        }
      };
      
      window.gtag('event', 'conversion', {
        'send_to': 'AW-10979067928/oXqHCNuTs8MZEJiQnfMo',
        'event_callback': callback
      });
    }
  }, []);

  return trackConversion;
};