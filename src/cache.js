const cache = {};

export function addDependencies(ctx) {
  add(ctx, get(ctx));
}

export function saveDependencies(ctx, deps) {
  add(ctx, save(ctx, deps));
}

function get(ctx) {
  return cache[ctx.resourcePath] || [];
}

function save(ctx, deps=[]) {
  cache[ctx.resourcePath] = deps;
  return get(ctx);
}

function add(ctx, deps) {
  deps.forEach(name => {
    ctx.addDependency(name);
  });
}
