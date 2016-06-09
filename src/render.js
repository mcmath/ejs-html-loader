import {compile} from 'ejs';

export function render(ctx, src, data) {
  let template = compile(src, {
    filename: ctx.resourcePath,
    delimiter: data.delimiter,
    context: data.context
  });

  return {
    rendered: template(data),
    deps: template.dependencies
  };
}
