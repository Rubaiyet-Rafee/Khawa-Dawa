/* ======= Sticky Header Menu Start ======== */
$(document).on("scroll", function () {
  if ($(this).scrollTop() > 25) {
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }
});
/* ======= Sticky Header Menu Start ======== */

/* ======= Slick Slider Area Start ======== */
$(document).ready(function () {
  // Banner Slider Start //
  $(".banner-area").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-angles-right"></i></button>',
  });
  // Banner Slider End //

  // testimonials Slider Start //
  $(".testimonials").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  // testimonials Slider End //
});
/* ======= Slick Slider Area End ======== */

/* ======= Scroll Top Area Start ======== */
var scrolltotop = {
  setting: {
    startline: 100,
    scrollto: 0,
    scrollduration: 1e3,
    fadeduration: [500, 100],
  },
  controlHTML: '<img src="assets/images/others/scroll-img.png"/>',
  controlattrs: { offsetx: 5, offsety: 5 },
  anchorkeyword: "#top",
  state: { isvisible: !1, shouldvisible: !1 },
  scrollup: function () {
    this.cssfixedsupport || this.$control.css({ opacity: 0 });
    var t = isNaN(this.setting.scrollto)
      ? this.setting.scrollto
      : parseInt(this.setting.scrollto);
    (t =
      "string" == typeof t && 1 == jQuery("#" + t).length
        ? jQuery("#" + t).offset().top
        : 0),
      this.$body.animate({ scrollTop: t }, this.setting.scrollduration);
  },
  keepfixed: function () {
    var t = jQuery(window),
      o =
        t.scrollLeft() +
        t.width() -
        this.$control.width() -
        this.controlattrs.offsetx,
      s =
        t.scrollTop() +
        t.height() -
        this.$control.height() -
        this.controlattrs.offsety;
    this.$control.css({ left: o + "px", top: s + "px" });
  },
  togglecontrol: function () {
    var t = jQuery(window).scrollTop();
    this.cssfixedsupport || this.keepfixed(),
      (this.state.shouldvisible = t >= this.setting.startline ? !0 : !1),
      this.state.shouldvisible && !this.state.isvisible
        ? (this.$control
            .stop()
            .animate({ opacity: 1 }, this.setting.fadeduration[0]),
          (this.state.isvisible = !0))
        : 0 == this.state.shouldvisible &&
          this.state.isvisible &&
          (this.$control
            .stop()
            .animate({ opacity: 0 }, this.setting.fadeduration[1]),
          (this.state.isvisible = !1));
  },
  init: function () {
    jQuery(document).ready(function (t) {
      var o = scrolltotop,
        s = document.all;
      (o.cssfixedsupport =
        !s ||
        (s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest)),
        (o.$body = t(
          window.opera
            ? "CSS1Compat" == document.compatMode
              ? "html"
              : "body"
            : "html,body"
        )),
        (o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>")
          .css({
            position: o.cssfixedsupport ? "fixed" : "absolute",
            bottom: o.controlattrs.offsety,
            right: o.controlattrs.offsetx,
            opacity: 0,
            cursor: "pointer",
          })
          .attr({ title: "Scroll to Top" })
          .click(function () {
            return o.scrollup(), !1;
          })
          .appendTo("body")),
        document.all &&
          !window.XMLHttpRequest &&
          "" != o.$control.text() &&
          o.$control.css({ width: o.$control.width() }),
        o.togglecontrol(),
        t('a[href="' + o.anchorkeyword + '"]').click(function () {
          return o.scrollup(), !1;
        }),
        t(window).bind("scroll resize", function (t) {
          o.togglecontrol();
        });
    });
  },
};
scrolltotop.init();
/* ======= Scroll Top Area End ======== */

/* ======= Pree-Loader Area Start ======== */
(function ($) {
  "use strict";
  var win = $(window);
  /* ======= Preloader ======= */
  win.on("load", function () {
    $("#loading-area").delay("100").fadeOut(2000);
  });
})(jQuery);
/* ======= Pree-Loader Area End ======== */
