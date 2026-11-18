interface Window {
  materialTheme: { apply: (id: string, persist?: boolean) => string; current: () => string };
}
