/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

!function ($) {

    'use strict'; // jshint ;_;

    $.fn.extend({
        showPassword: function (options) {

            var $this = $(this),
                $div, $text, $icon;

            options = $.extend({}, {
                white: false, // v2
                message: '点击查看/隐藏密码'
            }, options);

            // Create the text, icon and assign
            $div = $this.wrap('<div class="input-append input-group" />').parent();

            $text = $('<input type="text" />')
                .attr('class', $this.attr('class'))
                .val($this.val()).hide().insertAfter($this);

            $icon = $([
                '<span href="javascript:void(0)" tabindex="100" title="' +
                    options.message + '" class="add-on input-group-addon">',
                '<i class="icon-eye-open' + (options.white ? ' icon-white' : '') +
                    ' glyphicon glyphicon-eye-open"></i>',
                '</span>'].join('')).css('cursor', 'pointer').insertAfter($text);

            // events
            $text.off('keyup').on('keyup', function() {
                $this.val($(this).val());
            });

            $icon.off('click').on('click', function () {
                // v3 input-group
                $div.find('input:eq(0)').before($div.find('input:eq(1)'));

                // toggle
                $this.toggle();
                $text.val($this.val()).toggle();

                $(this).find('i')
                    .toggleClass('icon-eye-open')
                    .toggleClass('icon-eye-close')
                    .toggleClass('glyphicon-eye-open')
                    .toggleClass('glyphicon-eye-close');
            });
        }
    });
}(window.jQuery);
