'use strict';

var cache = {};

// Add dependencies from cache in case of error
exports.addFromCache = function(context) {
  add(context, get(context));
};

// Add dependencies and from compiled template and save to cache
exports.addAndSave = function(context, deps) {
  add(context, save(context, deps));
};

function get(context) {
  return cache[context.resourcePath] || [];
}

function save(context, deps) {
  cache[context.resourcePath] = deps;
  return get(context);
}

function add(context, deps) {
  deps.forEach(function(dep) {
    context.addDependency(dep);
  });
}
