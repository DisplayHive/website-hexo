/* global hexo */
'use strict';

/**
 * Page-specific rendering for /what-is-displayhive/.
 *
 * The Markdown source is kept as plain prose (like /contact and /imprint), so
 * the two page-specific bits are applied here on the rendered HTML instead of
 * with <div>/<style> in the content file:
 *
 *   1. relabel the contact layout's hard-coded "Contact" title bar
 *   2. append a GitHub / docs button row at the end of the content card
 *
 * Kept in the site `scripts/` folder so the theme submodule stays untouched.
 * Delete this file to undo.
 */

const TITLE_TAG = '<title>What is DisplayHive | DisplayHive</title>';

const OLD_HEAD = '<i class="fas fa-comments"></i>&nbsp;&nbsp;Contact';
const NEW_HEAD = '<i class="fas fa-circle-info"></i>&nbsp;&nbsp;What is DisplayHive?';

const BUTTONS = [
  '<div style="margin-top:2rem;text-align:center">',
  '<p style="margin-bottom:1rem">DisplayHive is free and MIT-licensed. The code, issues and roadmap all live on GitHub.</p>',
  '<a href="https://github.com/displayhive" target="_blank" rel="noopener" class="waves-effect waves-light btn" style="margin:.3rem"><i class="fab fa-github"></i>&nbsp;&nbsp;View on GitHub</a>',
  '<a href="https://docs.displayhive.org/" target="_blank" rel="noopener" class="waves-effect waves-light btn" style="margin:.3rem"><i class="fas fa-book"></i>&nbsp;&nbsp;Read the docs</a>',
  '</div>'
].join('\n');

hexo.extend.filter.register('after_render:html', function (html) {
  if (html.indexOf(TITLE_TAG) === -1) return html;

  html = html.replace(OLD_HEAD, NEW_HEAD);

  if (html.indexOf('View on GitHub') === -1) {
    // insert right before the end of the .card-content block
    html = html.replace(/(\s*<\/div>\s*<!--valine)/, '\n' + BUTTONS + '$1');
  }
  return html;
});
