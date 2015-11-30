
module.exports = function(opts) {

    return function(req, res, next) {
        if (res.locals.tpl) {
            var view = res.locals.tpl.split('/');
            var tpl = view[view.length - 1];
            if (!/\./.test(tpl)) {
                view.push(tpl);
            }
            res.render( view.join('/'), res.locals );
        }
        else {
            res.status(404).send('not found.');
        }
    };
}
