!function (window) {
  let noop = function () {
  };
  const app = {
    _base: 'string' == typeof __pageclip_base ? __pageclip_base : 'https://send.pageclip.co',
    _successTemplate: '<div class="pageclip-form__success__message">Thank you!</div>',
    cssBase: 'pageclip-form',
    form: function (form, options) {
      if (options = options || {}, null == form) {
        throw new Error('form() must be passed an HTMLFormElement or String, not null');
      }
      if ('string' == typeof form && (form = document.querySelector(form)),
      window.jQuery && form instanceof window.jQuery && (form = form[0]),
        !(form instanceof window.HTMLFormElement)) {
        throw new Error('form() must be passed an HTMLFormElement or String');
      }
      const data            = getEndpointData(form.getAttribute('action')),
            headers         = {'X-REQMETHOD': 'form-v1', 'Content-Type': 'application/json'},
            className       = app.cssBase,
            submittingClass = app.cssBase + '--submitting',
            errorClass      = app.cssBase + '--error',
            successClass    = app.cssBase + '--success',
            successTemplate = options.successTemplate || app._successTemplate,
            pageclip        = new Pageclip(form);

      form.classList.add(className);

      form.onsubmit = function (e) {
        e.preventDefault();
        pageclip.start();
        const body         = JSON.stringify(app.formToJSON(form)),
              shouldSubmit = false !== (!options.onSubmit || options.onSubmit());

        if (shouldSubmit) {
          form.classList.add(submittingClass);
          app._showSubmitting(form);
          app._send(data.key, data.url, headers, body, options, callback);

          function callback(error, response) {
            shouldSubmit && app._hideSubmitting(form);
            form.classList.remove(submittingClass);
            form.classList.add(error ? errorClass : successClass);

            (!options.onResponse || options.onResponse(error, response)) !== false && !error && app._showSuccess(form, successTemplate);
            error ? console.error(error.message || error) : form.reset();
            setTimeout(function () {
              pageclip.stop();
            }, 200);
          }
        }
      };
    },
    send: function (key, formName, data, callback) {
      const url = app._base + '/' + key + '/' + (formName || '');
      app._send(key, url, {'X-REQMETHOD': 'send-v1', 'Content-Type': 'application/json'}, JSON.stringify(data), {}, callback);
    },
    formToJSON: function (form) {
      for (var elements = form.elements, body = {}, n = 0; n < elements.length; n++) {
        const el = elements[n];
        el.name.trim() && (('radio' !== el.type && 'checkbox' !== el.type || el.checked) && (body[el.name] = el.value));
      }
      return body;
    },
    _send: function (key, url, headers, body, options, callback) {
      try {
        app._xhrFetch(key, url, headers, body, callback);
      } catch (error) {
        app._sendError(key, error);
        callback(error);
      }
    },
    _xhrFetch: function (key, url, headers, body, callback) {
      const xhr = app._xhr();

      headers = addHeaders({'X-REQTRANSPORT': 'xhr', 'X-HASFETCH': !!window.fetch}, headers);
      callback = callback || noop;

      xhr.onreadystatechange =
        function () {
          try {
            if (4 === xhr.readyState) {
              var resp = xhr.response,
                  err  = 200 === xhr.status ? null : new Error('Error submitting data: ' + (resp ? resp.error : 'Unknown Error'));
              callback(err, err ? null : resp);
            }
          } catch (error) {
            app._sendError(key, error), callback(error);
          }
        };
      xhr.open('POST', url);
      xhr.responseType = 'json';

      function addHeaders(additional, headers) {
        if (headers) {
          for (let s in headers) additional[s] = headers[s];
        }
        return additional;
      }

      for (let u in headers) xhr.setRequestHeader(u, headers[u]);
      xhr.send(body);
    },
    _xhr: function () {
      return new (window.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    },
    _sendError: function (key, error) {
      const message   = '{"error": "' + (error.stack || error.message || error + '').replace(/"/g, '\\"')
              .replace(/\n/g, '\\n') + '"}',
            xhr = app._xhr();
      xhr.open('POST', app._base + '/error/' + (key || ''));
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('X-REQMETHOD', 'send-v1');
      xhr.send(message);
    },
    _showSubmitting: function (form) {
      disableInputs(form, true);
    },
    _hideSubmitting: function (form) {
      disableInputs(form, false);
    },
    _showSuccess: function (form, successTemplate) {
      const div = document.createElement('div');
      div.classList.add(app.cssBase + '__success');
      div.innerHTML = successTemplate;
      div.onclick = function () {
        app._hideSuccess(form);
      };
      form.appendChild(div);
    },
    _hideSuccess: function (form) {
      const successDiv = form.querySelector('.' + app.cssBase + '__success');
      successDiv && successDiv.remove();
    },
  };

  function disableInputs(form, disabled) {
    const inputs = form.querySelectorAll('input');
    let n = 0;
    for (; n < inputs.length; n++) {
      inputs[n].disabled = disabled;
    }
  }

  const regex = /^(.+)\/([\w\d]{32})(\/([^\/]*))?$/;

  function getEndpointData(action) {
    const t = 'Malformed action: ' + action, matches = regex.exec(action);
    if (!matches) {
      throw new Error(t);
    }
    const data = {base: matches[1], key: matches[2], bucket: matches[4] || ''};
    if (data.base !== app._base || !data.key.length) {
      throw new Error(t);
    }
    return data.url = data.base + '/' + data.key + '/' + data.bucket, data;
  }

  function Pageclip(form) {
    this.el = form.querySelector('.' + app.cssBase + '__submit');
  }

  const submitPrefix = '__submit--',
        startLoading = app.cssBase + submitPrefix + 'start-loading',
        loading      = app.cssBase + submitPrefix + 'loading',
        endLoading   = app.cssBase + submitPrefix + 'end-loading';

  function animate(element, onSuccess, onError) {
    const afterStyle = getComputedStyle(element, '::after'),
          animation  = afterStyle.animationName;
    animation && 'none' !== animation ? animate(afterStyle.animationDuration, onSuccess) : onError();

    function animate(duration, callback) {
      clearTimeout(timeout);
      duration = 1e3 * parseFloat(duration);
      timeout = setTimeout(callback, duration - 10);
    }
  }

  Pageclip.prototype.start = function () {
    if (this.el) {
      this.el.disabled = true;
      const classes = this.el.classList;

      classes.remove(endLoading);
      classes.remove(loading);
      classes.add(startLoading);

      animate(this.el, function onSuccess() {
        classes.remove(startLoading);
        classes.add(loading);
      }, function onError() {
        classes.remove(startLoading);
        classes.add(loading);
      });
    }
  };

  Pageclip.prototype.stop = function () {
    if (this.el) {
      this.el.disabled = false;
      const classes = this.el.classList;

      function removeEnd() {
        classes.remove(endLoading);
      }

      classes.remove(startLoading);
      classes.remove(loading);
      classes.add(endLoading);
      animate(this.el, removeEnd, removeEnd);
    }
  };

  var timeout = null;
  'undefined' != typeof module && void 0 !== module.exports ?
    (module.exports = app, module.exports.normalizeAction = getEndpointData) :
    (window.Pageclip = app, function () {
      const el = document.querySelectorAll('.' + app.cssBase);
      let i = 0;
      for (; i < el.length; i++) {
        app.form(el[i]);
      }
    }());
}(this || window || global);