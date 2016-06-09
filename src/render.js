import {readFileSync} from 'fs';
import {compile} from 'ejs';

export function render(ctx, src, data) {
  let filename = ctx.resourcePath;
  let delimiter = data.delimiter;
  let context = data.context;

  let tpl = compile(src, {filename, delimiter, context});

  return {
    rendered: tpl(data),
    deps: getDeps(tpl.dependencies, {delimiter, context})
  };
}

function getDeps(deps, opts, result=[]) {
  deps.forEach(name => {
    result.push(name);
    getDeps(getOwnDeps(name, opts), opts, result);
  });

  return result;
}

function getOwnDeps(filename, {delimiter, context}) {
  let src = readFileSync(filename, 'utf8');
  let tpl = compile(src, {filename, delimiter, context});
  return tpl.dependencies;
}
