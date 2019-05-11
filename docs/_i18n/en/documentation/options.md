# Options []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/options.md)

---

The Options are defined in `jQuery.fn.password.defaults`.

<div class="start-table"></div>

| Name                   | Attribute                      | Type    | Default                            | Description                                                                             |
|------------------------|--------------------------------|---------|------------------------------------|-----------------------------------------------------------------------------------------|
| -                      | data-toggle                    | String  | 'password'                         | Active password without writing JavaScript.                                             |
| placement              | data-placement                 | String  | 'after'                            | The placement of show/hide icon, can be 'before' or 'after'.                            |
| message                | data-message                   | String  | 'Click here to show/hide password' | The tooltip of show/hide icon.                                                          |
| size                | data-size                   | String  | undefined | The size of the input group. |
| eyeClass               | data-eye-class                 | String  | 'fa'                               | Base eye icon class.                                                                    |
| eyeOpenClass           | data-eye-open-class            | String  | 'fa-eye'                           | Open eye icon class.                                                                    |
| eyeCloseClass          | data-eye-close-class           | String  | 'fa-eye-slash'                     | Close eye icon class.                                                                   |
| eyeClassPositionInside | data-eye-class-position-inside | Boolean | false                              | Puts the open/close class inside the `<i>`. Use this option with google material icons. |
