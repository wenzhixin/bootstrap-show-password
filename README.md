Bootstrap Show Password
=======================

Show/hide password plugin for bootstrap.

## Demos

This plugin support bootstrap v2 and bootstrap v3.

[Live demo](http://wenzhixin.net.cn/p/bootstrap-show-password/)

## Usage

The plugin acts on ```<input>``` elements (typically password fields):

```
<input id="password" type="password" data-message="Show/hide password">
```

```
$('#password').password();
```

### Options

Options can be passed via data attributes or JavaScript.
For data attributes, append the option name to ```data-```, as in ```data-message="Show/hide password"```.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>message</td>
            <td>string</td>
            <td>Click here show/hide password</td>
            <td>The tooltip of show/hide icon.</td>
        </tr>
        <tr>
            <td>white</td>
            <td>boolean</td>
            <td>false</td>
            <td>Show the white icon.(Just work in bootstrap v2)</td>
        </tr>
    </tbody>
</table>

### Methods

#### .password('show')

Manually show the password.
```
$('#password).password('show');
```

#### .password('hide')

Manually hide the password.
```
$('#password).password('hide');
```

#### .password('toggle')

Manually toggle the password.
```
$('#password).password('toggle');
```

### Events

The plugin exposes a few events.

<table>
    <thead>
        <tr>
            <th>Event Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>show.bs.password</td>
            <td>This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event.</td>
        </tr>
        <tr>
            <td>hide.bs.password</td>
            <td>This event is fired immediately when the hide instance method has been called.</td>
        </tr>
    </tbody>
</table>

```
$('#password).on('show.bs.password', function (e) {

});
```

## LICENSE

[The MIT License](https://github.com/wenzhixin/bootstrap-show-password/blob/master/LICENSE)
