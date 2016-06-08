import {getLoaderConfig} from 'loader-utils';
import {addDependencies, saveDependencies} from './cache';
import {render} from './render';

export default function ejsHtmlLoader(src) {
  this.cacheable();

  let rendered = '';

  try {
    rendered = renderTemplate(this, src);
  } catch (e) {
    emitError(this, e.message);
  }

  return rendered;
}

function renderTemplate(ctx, src) {
  let data = getLoaderConfig(ctx, 'ejsHtml');
  let {rendered, deps} = render(ctx, src, data);

  saveDependencies(ctx, deps);

  return rendered;
}

function emitError(ctx, msg) {
  addDependencies(ctx);
  ctx.emitError(`ejs-html-loader\n${msg}`);
}
