declare module 'data-aos' {
    export function init(options?: any): void;
    export function refreshHard(): void;
    export function refresh(): void;
    export function hasAnimations(): boolean;
    export function getVersion(): string;
    export const Aos: {
      init(options?: any): void;
      refreshHard(): void;
      refresh(): void;
      hasAnimations(): boolean;
      getVersion(): string;
    };
    export const animate: {
      (
        element: HTMLElement | HTMLElement[],
        options?: any,
        offset?: number | null,
        delay?: number | null,
        duration?: number | null,
        easing?: string | null,
        once?: boolean | null
      ): void;
    };
    export const init: typeof Aos.init;
    export const refreshHard: typeof Aos.refreshHard;
    export const refresh: typeof Aos.refresh;
    export const hasAnimations: typeof Aos.hasAnimations;
    export const getVersion: typeof Aos.getVersion;
  }
  