
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