const model = function() {
    const attrs = {};

    this.set = function(name, value) {
        attrs[name] = value;
        this.trigger('change', {
            name: name,
            value: value
        })
    };

    this.get = function(name, value) {
        return attrs[name];
    }

    _.extend(this, Backbone.Events);
};

const module = (function() {
    const _privateMethod = function() {

    };

    const someMethod = function() {

    };

    const anotherMethod = function() {

    };

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod
    }
})();

const module2 = (function(module) {
    module.extension = function() {

    };

    return module;
})(module || {});