# base2


Artwork by [i5ting](http://www.github.com/i5ting/).

[![Deps](https://david-dm.org/i5ting/base2.svg)](https://david-dm.org/i5ting/base2) 
[![npm](https://img.shields.io/npm/v/base2.svg)](https://www.npmjs.com/package/base2)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/i5ting/base2/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/base2.svg)](https://www.npmjs.com/package/base2)

## Features

- 基于expressjs，可使用connect中间件，路由
- 抽象app生命周期和中间件（不是connect的中间件），可随意扩展
- 参数配置，可高度定制
- 自动挂载路由

## Install

    [sudo]npm install --save base2

## Usages

```
var app = require('base2')({
  // debug: true,
  root:__dirname,
  "views": "views",
  "routes": "routes2",
  "public": "public",
})

// console.log(app);
// app.mount_routes(__dirname + '/routes2');
// app.mount_plugins(__dirname + '/plugins');
app.start(3019);
```

说明

- app.mount_routes
- app.mount_plugins

更多，见 https://github.com/i5ting/base2-examples

## Extract

- config.pre
- settings
  - config.before_settings
  - config.after_settings
- global_middlewares
  - config.before_global_middlewares
  - config.after_global_middlewares
- routes
  - config.before_routes
  - config.after_routes
- config.post

## middleware

```
module.exports = function (app) {
  if (app.debug) {
    console.log(app.get('views'));
  }
  
  if (app.get('views')) {
    app.set('views', app.get('views'));
    app.set('view engine', 'jade');
  }
};
```

in app.js


```
app.mount_plugin('xxxx_plugins_dir');
```

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
