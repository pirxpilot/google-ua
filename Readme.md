[![NPM version](https://img.shields.io/npm/v/google-ua.svg)](https://www.npmjs.com/package/google-ua)
[![NPM version](https://img.shields.io/npm/l/google-ua.svg)](https://www.npmjs.com/package/google-ua)

# google-ua

  [Google Universal Analytics][gua] tracking snippet

## Installation

    $ npm install -S google-ua

## API

  Activate Google Analytics on the page and track page

```javascript
require('google-ua')("UA-XXXX-X");
```

  Alternatively you can define ua property ID as a data attribute of document body

```html
<body data-ua-property-id="UA-XXXX-X">
```

  Check [test/index.html](https://github.com/pirxpilot/google-ua/blob/master/test/index.html) for example.

  Optional `fields` parameter lets you set [general tracker fields][fields] before the `pageview` event is sent.

```javascript
require('google-ua')("UA-XXXX-X", {
  anonymizeIP: true,
  forceSSL: true,
  userId: 'as8eknlll'
});

// set fields, retrieve property ID from data attribute of document body
require('google-ua')({
  anonymizeIP: true,
  forceSSL: true,
  userId: 'as8eknlll'
});

```

  You can prevent snippet from sending `pageview` event automatically by setting the first parameter to false
```javascript
// initilize tracker, do not send `pageview` event
require('google-ua')(false, "UA-XXXX-X")

// initialize tracker, do not send `pageview` event, retrieve property ID from data attribute of document body
require('google-ua')(false);

```

## License

  MIT

[gua]: https://support.google.com/analytics/answer/2790010?hl=en
[fields]: https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#general
