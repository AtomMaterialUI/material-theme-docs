// Build-time endpoint (/giscus/<theme>.css): a Giscus custom theme per Material theme.
// It layers the theme colors over Giscus' own transparent base so the widget matches the page.
import type { APIRoute, GetStaticPaths } from 'astro';
import { themes, type Theme } from '../../data/themes';
import darkBase from '../../data/giscus/transparent_dark.css?raw';
import lightBase from '../../data/giscus/noborder_light.css?raw';

const mix = (a: string, pct: number, b: string) =>
  `color-mix(in srgb, ${a} ${pct}%, ${b})`;

function css(t: Theme) {
  const base = t.light ? lightBase : darkBase;
  const bg = t.background;
  const fg = t.foreground;
  const border = mix(t.text, 40, bg);
  // Base is inlined: Giscus custom themes can't @import other themes.
  return `${base}

main {
  --color-fg-default: ${fg};
  --color-fg-muted: ${t.text};
  --color-fg-subtle: ${t.disabled};
  --color-canvas-default: transparent;
  --color-canvas-overlay: ${t.contrast};
  --color-canvas-inset: ${mix(t.text, 8, t.contrast)};
  --color-canvas-subtle: ${t.contrast};
  --color-border-default: ${border};
  --color-border-muted: ${t.border};
  --color-neutral-muted: ${mix(t.text, 8, 'transparent')};
  --color-neutral-subtle: ${mix(t.text, 14, 'transparent')};
  --color-accent-fg: ${t.accent};
  --color-accent-emphasis: ${t.accent};
  --color-accent-muted: ${mix(t.accent, 40, 'transparent')};
  --color-accent-subtle: ${mix(t.accent, 10, 'transparent')};
  --color-success-fg: ${t.green};
  --color-attention-fg: ${t.yellow};
  --color-danger-fg: ${t.red};
  --color-btn-text: ${fg};
  --color-btn-bg: ${t.button};
  --color-btn-border: ${t.border};
  --color-btn-hover-bg: ${t.second};
  --color-btn-hover-border: ${t.text};
  --color-btn-active-bg: ${t.hl};
  --color-btn-active-border: ${t.text};
  --color-btn-selected-bg: ${t.second};
  --color-btn-primary-text: ${t.selectFg};
  --color-btn-primary-bg: ${t.accent};
  --color-btn-primary-border: ${t.border};
  --color-btn-primary-hover-bg: ${mix(t.accent, 85, t.white)};
  --color-btn-primary-hover-border: ${t.border};
  --color-btn-primary-selected-bg: ${t.accent};
  --color-btn-primary-disabled-text: ${mix(t.selectFg, 70, 'transparent')};
  --color-btn-primary-disabled-bg: ${mix(t.accent, 55, bg)};
  --color-btn-primary-disabled-border: ${t.border};
  --color-action-list-item-default-hover-bg: ${t.hl};
  --color-segmented-control-bg: ${t.button};
  --color-segmented-control-button-selected-border: ${t.text};
  --color-social-reaction-bg-hover: ${t.second};
  --color-social-reaction-bg-reacted-hover: ${mix(t.accent, 25, bg)};
}

.gsc-pagination-button {
  background-color: var(--color-btn-bg);
}

.gsc-comment,
.gsc-comment-box,
.gsc-reply-box {
  background-color: ${t.contrast};
  border-radius: 8px;
}

.gsc-comment-box textarea,
.gsc-reply-box textarea,
.gsc-comment-box-textarea,
.gsc-reply-box-textarea {
  background-color: ${mix(t.text, 8, t.contrast)};
  border-radius: 6px;
}

.gsc-comment-box-tabs .tab-selected,
.gsc-comment-box-tabs button[aria-selected='true'] {
  background-color: ${mix(t.text, 8, t.contrast)};
}
`;
}

export const getStaticPaths: GetStaticPaths = () =>
  themes.map((t) => ({ params: { theme: t.className }, props: { t } }));

export const GET: APIRoute = ({ props }) =>
  new Response(css(props.t as Theme), {
    headers: {
      'Content-Type': 'text/css; charset=utf-8',
      // Giscus loads custom themes with a CORS request.
      'Access-Control-Allow-Origin': '*',
    },
  });
