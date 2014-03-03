
JS XSS AMD
------

Forked from: https://github.com/leizongmin/js-xss

### Usage

Read the official docs:

https://github.com/leizongmin/js-xss#quick-start

```bash
bower inistall git@github.com:teambition/js-xss-amd.git
```

### A demo of loading with RequireJS

In this repo, an AMD wrapper is added to the module.

```js
require.config({
  baseUrl: './'
})
require(['xss'], function(xss) {
  var source = '<div a="1" b="2" data-a="3" data-b="4">hello</div>';
  var html = xss(source, {
    onIgnoreTagAttr: function (tag, name, value, isWhiteAttr) {
      if (name.substr(0, 5) === 'data-') {
        // escape its value using built-in escapeAttrValue function
        return name + '="' + xss.escapeAttrValue(value) + '"';
      }
    }
  });

  console.log('%s\nconvert to:\n%s', source, html);
})
```