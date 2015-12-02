# base2


Artwork by [i5ting](http://www.github.com/i5ting/).

[![Deps](https://david-dm.org/i5ting/base2.svg)](https://david-dm.org/i5ting/base2) 
[![npm](https://img.shields.io/npm/v/base2.svg)](https://www.npmjs.com/package/base2)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/i5ting/base2/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/base2.svg)](https://www.npmjs.com/package/base2)


## Install

    [sudo]npm install -g base2

## Usages

```
var base2 = require('../')({
  debug: true,
  pre: function (app) {
    app.set('root', __dirname);
    // console.log(app);
  },
  routes: "routes"
})


// console.log(base2);
// base2.mount_routes(__dirname + '/routes2');

base2.start(3019);
```

## Extract

- settings
- global middlewares
- routes


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
