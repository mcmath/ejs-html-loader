import {readFileSync} from 'fs';
import {compile} from 'ejs';

export function render(ctx, src, data) {
  let filename = ctx.resourcePath;
  let delimiter = data.delimiter;
  let context = data.context;

  let tpl = compile(src, {filename, delimiter, context});

  return {
    rendered: tpl(data)
  };
}
