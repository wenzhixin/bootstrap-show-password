# Events []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/events.md)

---

To use event syntax:

```js
$('#password').on('show.bs.password', function (e) {
    // code here
});
```

<div class="start-table"></div>

| Event Type       | Description                                                                                                                                                              |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| show.bs.password | This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event. |
| hide.bs.password | This event is fired immediately when the hide instance method has been called.                                                                                           |
