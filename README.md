# ⛔️ **DEPRECATED** — do not use for new projects

See [our current docs](https://docs.apostrophecms.org/)

# apostrophe-browser-requirements

Display a polite message telling users with browsers that are too old that they must upgrade or switch browsers to view the site.

```
npm install --save apostrophe-browser-requirements
```

In app.js:

```
modules: {
  apostrophe-browser-requirements: {
    minimums: {
      // Currently only supports IE version detection
      ie: 9
    },
    // optional, should be something simple for bc, not SVG
    logo: '/images/my-custom-logo.png',
    // The default: invite users to visit browsehappy.com for
    // information about upgrading their browser. If you shut
    // this off with `browseHappy: false`, you still get
    // a helpful sentence about the supported alternatives
    browseHappy: true    
  }
}
```

In `layout.html`:

```markup
{# At the END of the DOM so it can easily remove everything else #}
{% block extraBody %}
{{ apos.browserRequirements.message() }}
{% endblock %}
```

And optionally, in your CSS:

```
#apos-browser-requirements {
  background-color: #somethingthatmatchesyourlogonicely
}
```

If you don't configure a logo, it looks a little "unofficial," so we recommend providing one.

You can override `views/content.html` at project level if you need to change the text or don't want to link to `browsehappy.com`.

## IE version support

This module can display the message on versions of IE going back to IE6.

## "What about Microsoft Edge?"

This module treats Microsoft Edge as IE 12, 13, etc. Set the `ie` minimum accordingly.

## "What about blocking IE completely?"

Oh come on kids, that browser's come a long way.

## Changelog

2.0.0: compatible with Apostrophe 2.x.
