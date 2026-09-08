/* global hexo */
'use strict';

/**
 * Adds a "What is?" button to the home-page cover, between the existing
 * "Start" and "Github" buttons, styled exactly like them.
 *
 * Kept here (site `scripts/`) instead of in the theme so the theme
 * submodule stays untouched. Remove this file to undo.
 */

const MARKER = 'data-what-is-btn';
const BUTTON = [
  '<a href="/what-is-displayhive/" class="waves-effect waves-light btn" ' + MARKER + '>',
  '                    <i class="fas fa-circle-info"></i>What is?',
  '                </a>'
].join('\n');

hexo.extend.filter.register('after_render:html', function (html) {
  if (html.indexOf('<div class="cover-btns">') === -1) return html; // not the cover page
  if (html.indexOf(MARKER) !== -1) return html;                     // already injected

  // Insert right after the first button (the "Start" link) inside .cover-btns.
  return html.replace(
    /(<div class="cover-btns">[\s\S]*?<\/a>)/,
    '$1\n                ' + BUTTON
  );
});
