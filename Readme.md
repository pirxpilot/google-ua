[![NPM version](https://img.shields.io/npm/v/code42day-ua.svg)](https://www.npmjs.com/package/code42day-ua)
[![NPM version](https://img.shields.io/npm/l/code42day-ua.svg)](https://www.npmjs.com/package/code42day-ua)

# code42day-ua

  [Google Universal Analytics][gua] tracking snippet

## Installation

    $ npm install -S code42day-ua

## API

  Activate Google Analytics on the page and track page

```javascript
require('code42day-ua')("UA-XXXX-X");
```

  Alternatively you can define ua property ID as a data attribute of document body

```html
<body data-ua-property-id="UA-XXXX-X">
```

  Check [test/index.html](https://github.com/code42day/ua/blob/master/test/index.html) for example.

  Optional `fields` parameter lets you set [general tracker fields][fields] before the `pageview` event is sent.

```javascript
require('code42day-ua')("UA-XXXX-X", {
  anonymizeIP: true,
  forceSSL: true,
  userId: 'as8eknlll'
});

// set fields, retrieve property ID from data attribute of document body
require('code42day-ua')({
  anonymizeIP: true,
  forceSSL: true,
  userId: 'as8eknlll'
});

```

  You can prevent snippet from sending `pageview` event automatically by setting the first parameter to false
```javascript
// initilize tracker, do not send `pageview` event
require('code42day-ua')(false, "UA-XXXX-X")

// initialize tracker, do not send `pageview` event, retrieve property ID from data attribute of document body
require('code42day-ua')(false);

```

## License

  MIT

[gua]: https://support.google.com/analytics/answer/2790010?hl=en
[fields]: https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#general
