import {getOptions, parseQuery} from 'loader-utils';
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
  let data = getData(ctx);
  let {rendered, deps} = render(ctx, src, data);

  saveDependencies(ctx, deps);

  return rendered;
}

function getData(ctx) {
  return Object.assign({}, getOptions(ctx), getResourceQuery(ctx));
}

function getResourceQuery(ctx) {
  return parseQuery(ctx.resourceQuery || "?");
}

function emitError(ctx, msg) {
  addDependencies(ctx);
  ctx.emitError(`ejs-html-loader\n${msg}`);
}
