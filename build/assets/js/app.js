"use strict";

$.when($.ready).then(function () {
  var THEME_KEY = 'material-theme';
  var jekyllApp = {
    setBodyClass: function setBodyClass(css) {
      $('body').removeClass(function (i, c) {
        return (c.match(/\btheme-\S+/) || []).join(' ');
      });
      $('body').addClass("index theme-" + css);
      window.currentTheme = css;
      $('.screenshot').hide();
      $(".screenshot.-" + css).show();
    },
    setTheme: function setTheme(theme) {
      this.setBodyClass(theme.className);
    },
    showMenu: function showMenu() {
      $('.menu').toggleClass('active');
    },
    scrollSpyOn: function scrollSpyOn(wrapper, opt) {
      new window.ScrollSpy(wrapper, opt).init();
    },
    toggleSidebar: function toggleSidebar() {
      $('.sidebar').toggleClass('open');
    },
    init: function init() {
      var theme = localStorage.getItem(THEME_KEY) || 'oceanic';
      var urlParams = new URLSearchParams(window.location.search);
      var themeParam = urlParams.get('theme');

      if (themeParam && window.jekyllAppThemes) {
        var foundTheme = window.jekyllAppThemes.find(function (t) {
          return t.docId === themeParam;
        });

        if (foundTheme) {
          theme = foundTheme.id;
        }
      }

      this.setBodyClass(theme);
      var $target = $('.doc');
      var $toc = $('.toc');
      $(document).ready(function () {
        $('select').formSelect();
        $('.fixed-action-btn').floatingActionButton({
          hoverEnabled: false
        });
        $('.tooltipped').tooltip();
      });

      if ($toc.length) {
        $toc.pushpin({
          top: 284,
          bottom: $target.offset().top + $target.outerHeight() - $toc.height(),
          offset: 64
        });
      } // custom scroll spy (is that necessary?)


      this.scrollSpyOn('.doc', {
        nav: '.toc a'
      });
      this.initMenu();
      this.initThemeChooser();
      this.initSidebar();
      this.onSubmit(); // this.initSearch();
    },

    /**
     * Init Menu events
     */
    initMenu: function initMenu() {
      var _this = this;

      $('.js-menu-toggle').on('click touch', function () {
        _this.showMenu();
      });
    },

    /**
     * Init Theme Chooser events
     */
    initThemeChooser: function initThemeChooser() {
      var _this2 = this;

      $('.js-theme').on('click touch', function (event) {
        var $el = $(event.target);
        var themeClass = $el.data('themeClass');

        _this2.setBodyClass(themeClass);

        localStorage.setItem(THEME_KEY, themeClass);
      });
    },

    /**
     * Init Sidebar events
     */
    initSidebar: function initSidebar() {
      var _this3 = this;

      $('.js-sidebar-toggle').on('click touch', function () {
        _this3.toggleSidebar();
      });
    },
    initSearch: function initSearch() {
      var search = instantsearch({
        // Replace with your own values
        appId: '77GG697EBY',
        apiKey: 'b102643f245ea01e97b9a54047386402',
        // search only API key, no ADMIN key
        indexName: 'localhost',
        urlSync: true
      });
      search.addWidget(instantsearch.widgets.searchBox({
        container: '#search',
        magnifier: false,
        reset: false
      }));
      search.addWidget(instantsearch.widgets.hits({
        container: '#hits',
        hitsPerPage: 5,
        cssClasses: {
          root: 'search-results-hits',
          empty: 'search-results-empty',
          item: 'search-results-item'
        },
        templates: {
          item: "\n              <p>{{{_highlightResult.title.value}}}</p>\n              ",
          empty: 'We didn\'t find any results for the search <em>"{{query}}"</em>'
        }
      }));
      search.start();
    },

    /**
     * Submit form handlers
     */
    onSubmit: function onSubmit() {
      $('#contact-us-form').on('submit', function (e) {
        var frm = this;
        e.preventDefault(); // Check if email is empty
        // TODO Better validation

        if ($('#email').val() === '') {
          return;
        }

        grecaptcha.execute('6LetNpAUAAAAAPamFzSqTvqNaPdWgFyuJvfGRaGc', {
          action: 'contactForm'
        }).then(function (token) {
          $('[name="g-recaptcha-response"]').val(token); // Submit form to pageclip

          Pageclip.form(document.getElementById('contact-us-form'), {
            onSubmit: function onSubmit() {
              return true;
            },
            onResponse: function onResponse() {
              return true;
            },
            successTemplate: '<span>Thank you!</span>'
          });
        }, function () {// todo
        });
      });
    }
  }; // init

  jekyllApp.init();
  window.jekyllApp = jekyllApp;
});
//# sourceMappingURL=app.js.map
