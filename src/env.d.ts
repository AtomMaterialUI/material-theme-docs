interface Window {
  materialTheme: { apply: (id: string, persist?: boolean) => string; current: () => string };
}

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
}

// Starlight resolves overridable components (Search, ThemeSelect...) through virtual modules, which ship no types.
declare module 'virtual:starlight/components/*' {
  const component: import('astro/runtime/server/index.js').AstroComponentFactory;
  export default component;
}
