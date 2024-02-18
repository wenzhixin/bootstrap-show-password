(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.function.name.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.parse-int.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.function.name.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.parse-int.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.replace.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_find_js, es_array_includes_js, es_array_indexOf_js, es_array_join_js, es_function_name_js, es_object_toString_js, es_parseInt_js, es_regexp_exec_js, es_string_replace_js, $) { 'use strict';

  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * @author zhixin wen <wenzhixin2010@gmail.com>
   * https://github.com/wenzhixin/bootstrap-show-password
   * version: 1.3.0
   */

  var bootstrapVersion = 5;
  try {
    var rawVersion = $.fn.dropdown.Constructor.VERSION;

    // Only try to parse VERSION if it is defined.
    // It is undefined in older versions of Bootstrap (tested with 3.1.1).
    if (rawVersion !== undefined) {
      bootstrapVersion = parseInt(rawVersion, 10);
    }
  } catch (e) {
    // ignore
  }
  try {
    // eslint-disable-next-line no-undef
    var _rawVersion = bootstrap.Tooltip.VERSION;
    if (_rawVersion !== undefined) {
      bootstrapVersion = parseInt(_rawVersion, 10);
    }
  } catch (e) {
    // ignore
  }
  var Constants = {
    html: {
      inputGroups: {
        3: ['<span tabindex="100" class="add-on input-group-addon %s" title="%s">', '</span>'],
        4: ['<div class="%s"><button tabindex="100" title="%s" class="btn btn-outline-secondary" type="button">', '</button></div>'],
        5: ['<button tabindex="100" title="%s" class="btn btn-outline-secondary" type="button">', '</button>']
      }[bootstrapVersion]
    }
  };

  // TOOLS DEFINITION
  // ======================

  // it only does '%s', and return '' when arguments are undefined
  var sprintf = function sprintf(str) {
    var args = arguments;
    var flag = true;
    var i = 1;
    str = str.replace(/%s/g, function () {
      var arg = args[i++];
      if (typeof arg === 'undefined') {
        flag = false;
        return '';
      }
      return arg;
    });
    if (flag) {
      return str;
    }
    return '';
  };
  var Password = /*#__PURE__*/function () {
    function Password(element, options) {
      _classCallCheck(this, Password);
      this.options = options;
      this.$element = $(element);
      this.isShown = false;
      this.init();
    }
    _createClass(Password, [{
      key: "init",
      value: function init() {
        var placementFuc;
        var inputClass;
        if (this.options.placement === 'before') {
          placementFuc = 'insertBefore';
          inputClass = 'input-group-prepend';
        } else {
          this.options.placement = 'after'; // default to after
          placementFuc = 'insertAfter';
          inputClass = 'input-group-append';
        }

        // Create the text, icon and assign
        this.$element.wrap("<div class=\"input-group".concat(sprintf(' input-group-%s', this.options.size), "\" />"));
        this.$text = $('<input type="text" />')[placementFuc](this.$element).css('display', this.$element.css('display')).val(this.$element.val()).hide();
        var _iterator = _createForOfIteratorHelper(this.$element[0].attributes),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attr = _step.value;
            if (!attr.specified || ['id', 'type'].includes(attr.name) || attr.name.indexOf('data-') === 0) {
              continue;
            }
            this.$text.attr(attr.name, attr.value);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.$icon = $(["".concat(sprintf(Constants.html.inputGroups[0], inputClass, this.options.message), "\n      <i class=\"icon-eye-open ").concat(this.options.eyeClass, " ").concat(this.options.eyeClassPositionInside ? '' : this.options.eyeOpenClass, "\">\n      ").concat(this.options.eyeClassPositionInside ? this.options.eyeOpenClass : '', "\n      </i>"), Constants.html.inputGroups[1]].join(''))[placementFuc](this.$text).css('cursor', 'pointer');

        // events
        this.$text.off('keyup').on('keyup', $.proxy(function () {
          if (!this.isShown) return;
          this.$element.val(this.$text.val()).trigger('change');
        }, this));
        this.$icon.off('click').on('click', $.proxy(function () {
          this.$text.val(this.$element.val()).trigger('change');
          this.toggle();
        }, this));
      }
    }, {
      key: "toggle",
      value: function toggle(_relatedTarget) {
        this[!this.isShown ? 'show' : 'hide'](_relatedTarget);
      }
    }, {
      key: "show",
      value: function show(_relatedTarget) {
        var e = $.Event('show.bs.password', {
          relatedTarget: _relatedTarget
        });
        this.$element.trigger(e);
        this.isShown = true;
        this.$element.hide();
        this.$text.show();
        if (this.options.eyeClassPositionInside) {
          this.$icon.find('i,svg').removeClass('icon-eye-open').addClass('icon-eye-close').html(this.options.eyeCloseClass);
        } else {
          this.$icon.find('i,svg').removeClass("icon-eye-open ".concat(this.options.eyeOpenClass)).addClass("icon-eye-close ".concat(this.options.eyeCloseClass));
        }
        this.$text[this.options.placement](this.$element);
      }
    }, {
      key: "hide",
      value: function hide(_relatedTarget) {
        var e = $.Event('hide.bs.password', {
          relatedTarget: _relatedTarget
        });
        this.$element.trigger(e);
        this.isShown = false;
        this.$element.show();
        this.$text.hide();
        if (this.options.eyeClassPositionInside) {
          this.$icon.find('i,svg').removeClass('icon-eye-close').addClass('icon-eye-open').html(this.options.eyeOpenClass);
        } else {
          this.$icon.find('i,svg').removeClass("icon-eye-close ".concat(this.options.eyeCloseClass)).addClass("icon-eye-open ".concat(this.options.eyeOpenClass));
        }
        this.$element[this.options.placement](this.$text);
      }
    }, {
      key: "val",
      value: function val(value) {
        if (typeof value === 'undefined') {
          return this.$element.val();
        }
        this.$element.val(value).trigger('change');
        this.$text.val(value);
      }
    }, {
      key: "focus",
      value: function focus() {
        this.$element.focus();
      }
    }]);
    return Password;
  }();
  Password.DEFAULTS = {
    placement: 'after',
    // 'before' or 'after'
    message: 'Click here to show/hide password',
    size: undefined,
    // '', 'sm', 'large'
    eyeClass: 'fa',
    // 'glyphicon',
    eyeOpenClass: 'fa-eye',
    // 'glyphicon-eye-open',
    eyeCloseClass: 'fa-eye-slash',
    // 'glyphicon-eye-close',
    eyeClassPositionInside: false
  };

  // PASSWORD PLUGIN DEFINITION
  // =======================

  var old = $.fn.password;
  $.fn.password = function () {
    var option = arguments[0]; // public function
    var args = arguments;
    var value;
    var allowedMethods = ['show', 'hide', 'toggle', 'val', 'focus'];
    this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.password');
      var options = $.extend({}, Password.DEFAULTS, $this.data(), _typeof(option) === 'object' && option);
      if (typeof option === 'string') {
        if ($.inArray(option, allowedMethods) < 0) {
          throw new Error("Unknown method: ".concat(option));
        }
        value = data[option](args[1]);
      } else if (!data) {
        data = new Password($this, options);
        $this.data('bs.password', data);
      } else {
        data.init(options);
      }
    });
    return value ? value : this;
  };
  $.fn.password.Constructor = Password;

  // PASSWORD NO CONFLICT
  // =================

  $.fn.password.noConflict = function () {
    $.fn.password = old;
    return this;
  };
  $(function () {
    $('[data-toggle="password"]').password();
  });

}));
