# Usage []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/usage.md)

---

Include jQuery library, bootstrap library (if your project doesn't use it already) and `bootstrap-show-password.js` in the head tag or at the very bottom of your document, just before the closing body tag (usually recommended for better performance).

```html
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script src="bootstrap-show-password.js"></script>
```

---

The plugin acts on `<input>` elements (typically password fields).

## Via data attributes

Activate Bootstrap Show Password without writing JavaScript. Set `data-toggle="password"` on a normal input.

```html
<input class="form-control" type="password" data-toggle="password">
```
## Via JavaScript

Call a Bootstrap Show Password with id select with JavaScript.

```html
<input id="password" class="form-control" type="password">
```

```js
$('#password').password();
```
