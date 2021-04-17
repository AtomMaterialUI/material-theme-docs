$.when($.ready).then(() => {
  const THEME_KEY = 'material-theme';
  const jekyllApp = {

    setBodyClass(css) {
      $('body').removeClass((i, c) => (c.match(/\btheme-\S+/) || []).join(' '));
      $('body').addClass(`index theme-${css}`);
      $('.screenshot').hide();
      $(`.screenshot.-${css}`).show();
    },
    setTheme(theme) {
      this.setBodyClass(theme.className);
    },
    showMenu() {
      $('.menu').toggleClass('active');
    },
    scrollSpyOn(wrapper, opt) {
      new window.ScrollSpy(wrapper, opt).init();
    },

    toggleSidebar() {
      $('.sidebar').toggleClass('open');
    },

    init() {
      let theme = localStorage.getItem(THEME_KEY) || 'oceanic';
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme');

      if (themeParam) {
        theme = themeParam || 'oceanic';
      }
      this.setBodyClass(theme);

      const $target = $('.doc');
      const $toc = $('.toc');

      $(document).ready(() => {
        $('select').formSelect();
        $('.fixed-action-btn').floatingActionButton({hoverEnabled: false});
        $('.tooltipped').tooltip();
      });

      if ($toc.length) {
        $toc.pushpin({
          top: 284,
          bottom: $target.offset().top + $target.outerHeight() - $toc.height(),
          offset: 64,
        });
      }

      // custom scroll spy (is that necessary?)
      this.scrollSpyOn('.doc', {nav: '.toc a'});

      this.initMenu();
      this.initThemeChooser();
      this.initSidebar();
      this.onSubmit();
      // this.initSearch();
    },

    /**
     * Init Menu events
     */
    initMenu() {
      $('.js-menu-toggle').on('click touch', () => {
        this.showMenu();
      });
    },

    /**
     * Init Theme Chooser events
     */
    initThemeChooser() {
      $('.js-theme').on('click touch', (event) => {
        const $el = $(event.target);
        const themeClass = $el.data('themeClass');

        this.setBodyClass(themeClass);
        localStorage.setItem(THEME_KEY, themeClass);
      });
    },

    /**
     * Init Sidebar events
     */
    initSidebar() {
      $('.js-sidebar-toggle').on('click touch', () => {
        this.toggleSidebar();
      });
    },

    initSearch() {
      const search = instantsearch({
        // Replace with your own values
        appId: '77GG697EBY',
        apiKey: 'b102643f245ea01e97b9a54047386402', // search only API key, no ADMIN key
        indexName: 'localhost',
        urlSync: true,
      });

      search.addWidget(
        instantsearch.widgets.searchBox({
          container: '#search',
          magnifier: false,
          reset: false,
        }),
      );

      search.addWidget(
        instantsearch.widgets.hits({
          container: '#hits',
          hitsPerPage: 5,
          cssClasses: {
            root: 'search-results-hits',
            empty: 'search-results-empty',
            item: 'search-results-item',
          },
          templates: {
            item: `
              <p>{{{_highlightResult.title.value}}}</p>
              `,
            empty: 'We didn\'t find any results for the search <em>"{{query}}"</em>',
          },
        }),
      );

      search.start();
    },

    /**
     * Submit form handlers
     */
    onSubmit() {
      $('#contact-us-form').on('submit', function (e) {
        const frm = this;
        e.preventDefault();

        // Check if email is empty
        // TODO Better validation
        if ($('#email').val() === '') {
          return;
        }

        grecaptcha.execute('6LetNpAUAAAAAPamFzSqTvqNaPdWgFyuJvfGRaGc', {action: 'contactForm'}).then((token) => {
          $('[name="g-recaptcha-response"]').val(token);

          // Submit form to pageclip
          Pageclip.form(document.getElementById('contact-us-form'), {
            onSubmit() {
              return true;
            },
            onResponse() {
              return true;
            },
            successTemplate: '<span>Thank you!</span>',
          });
        }, () => {
          // todo
        });
      });
    },
  };

  // init
  jekyllApp.init();

  window.jekyllApp = jekyllApp;
});

