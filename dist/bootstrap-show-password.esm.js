import 'core-js/modules/es.array.concat';
import 'core-js/modules/es.array.find';
import 'core-js/modules/es.array.join';
import 'core-js/modules/es.parse-int';
import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.replace';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-show-password
 * version: 1.2.1
 */
var bootstrapVersion = 4;

try {
  var rawVersion = $.fn.dropdown.Constructor.VERSION; // Only try to parse VERSION if is is defined.
  // It is undefined in older versions of Bootstrap (tested with 3.1.1).

  if (rawVersion !== undefined) {
    bootstrapVersion = parseInt(rawVersion, 10);
  }
} catch (e) {// ignore
}

var Constants = {
  html: {
    inputGroups: {
      3: ['<span tabindex="100" class="add-on input-group-addon %s" title="%s">', '</span>'],
      4: ['<div class="%s"><button tabindex="100" title="%s" class="btn btn-outline-secondary" type="button">', '</button></div>']
    }[bootstrapVersion]
  } // TOOLS DEFINITION
  // ======================
  // it only does '%s', and return '' when arguments are undefined

};

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

var Password =
/*#__PURE__*/
function () {
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
      var elPlacementFuc;
      var iconPlacementFuc;
      var inputClass;

      if (this.options.placement === 'before') {
        elPlacementFuc = $.fn.insertBefore;
        iconPlacementFuc = $.fn.insertBefore;
        inputClass = 'input-group-prepend';
      } else if (this.options.placement === 'noWrap') {
        elPlacementFuc = $.fn.insertAfter;

        iconPlacementFuc = function iconPlacementFuc($target) {
          this.appendTo($target.parent());
          return this;
        };

        inputClass = 'input-group-append';
      } else {
        // default to 'after' placement
        elPlacementFuc = $.fn.insertAfter;
        iconPlacementFuc = $.fn.insertAfter;
        inputClass = 'input-group-append';
      }

      (function ($) {
        $.fn.elPlacementFuc = elPlacementFuc;
        $.fn.iconPlacementFuc = iconPlacementFuc;
      })(jQuery);

      if (this.options.placement !== 'noWrap') {
        // Create the text, icon and assign
        this.$element.wrap("<div class=\"input-group".concat(sprintf(' input-group-%s', this.options.size), "\" />"));
      }

      this.$text = $('<input type="text" />').elPlacementFuc(this.$element).attr('class', this.$element.attr('class')).attr('style', this.$element.attr('style')).attr('placeholder', this.$element.attr('placeholder')).attr('maxlength', this.$element.attr('maxlength')).attr('disabled', this.$element.attr('disabled')).css('display', this.$element.css('display')).val(this.$element.val()).hide(); // Copy readonly attribute if it's set

      if (this.$element.prop('readonly')) this.$text.prop('readonly', true);
      this.$icon = $(["".concat(sprintf(Constants.html.inputGroups[0], inputClass, this.options.message), "\n      <i class=\"icon-eye-open ").concat(this.options.eyeClass, " ").concat(this.options.eyeClassPositionInside ? '' : this.options.eyeOpenClass, "\">\n      ").concat(this.options.eyeClassPositionInside ? this.options.eyeOpenClass : '', "\n      </i>"), Constants.html.inputGroups[1]].join('')).iconPlacementFuc(this.$text).css('cursor', 'pointer'); // events

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

      this.$element.elPlacementFuc(this.$text);
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

      this.$text.elPlacementFuc(this.$element);
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
  eyeClassPositionInside: false // PASSWORD PLUGIN DEFINITION
  // =======================

};
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
    } else {
      if (!data) {
        data = new Password($this, options);
        $this.data('bs.password', data);
      } else {
        data.init(options);
      }
    }
  });
  return value ? value : this;
};

$.fn.password.Constructor = Password; // PASSWORD NO CONFLICT
// =================

$.fn.password.noConflict = function () {
  $.fn.password = old;
  return this;
};

$(function () {
  $('[data-toggle="password"]').password();
});
