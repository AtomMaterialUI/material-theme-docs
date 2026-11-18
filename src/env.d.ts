interface Window {
  materialTheme: { apply: (id: string, persist?: boolean) => string; current: () => string };
}

// Starlight resolves overridable components (Search, ThemeSelect...) through virtual modules, which ship no types.
declare module 'virtual:starlight/components/*' {
  const component: import('astro/runtime/server/index.js').AstroComponentFactory;
  export default component;
}
