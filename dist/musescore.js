System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, MuseScore;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      MuseScore = (function () {
        function MuseScore(http) {
          _classCallCheck(this, _MuseScore);

          this.heading = 'MuseScore';
          this.images = [];
          this.url = 'http://api.musescore.com/services/rest/score.jsonp?oauth_consumer_key=musichackday2014';

          this.http = http;
        }

        _createClass(MuseScore, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.jsonp(this.url, 'callback').then(function (response) {
              console.log("test");
              console.log(response.content);
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = response.content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var score = _step.value;

                  console.log(score["id"]);
                  var u = "http://static.musescore.com/" + score["id"] + "/" + score["secret"] + "/" + "thumb.png";
                  console.log(u);
                  _this.images.push({ "url": u });
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });
          }
        }]);

        var _MuseScore = MuseScore;
        MuseScore = inject(HttpClient)(MuseScore) || MuseScore;
        return MuseScore;
      })();

      _export('MuseScore', MuseScore);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2VzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBSWEsU0FBUzs7Ozs7Ozs7aUNBSmQsTUFBTTs7c0NBQ04sVUFBVTs7O0FBR0wsZUFBUztBQUtULGlCQUxBLFNBQVMsQ0FLUixJQUFJLEVBQUM7OztlQUpqQixPQUFPLEdBQUcsV0FBVztlQUNyQixNQUFNLEdBQUcsRUFBRTtlQUNYLEdBQUcsR0FBRyx3RkFBd0Y7O0FBRzVGLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztxQkFQVSxTQUFTOztpQkFTWixvQkFBRTs7O0FBQ1IsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDNUQscUJBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkIscUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7Ozs7QUFFN0IscUNBQWtCLFFBQVEsQ0FBQyxPQUFPLDhIQUFFO3NCQUEzQixLQUFLOztBQUNaLHlCQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ3hCLHNCQUFJLENBQUMsR0FBRyw4QkFBOEIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFBO0FBQ2hHLHlCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2Qsd0JBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUM3Qjs7Ozs7Ozs7Ozs7Ozs7O2FBQ0YsQ0FBQyxDQUFDO1dBQ0o7Ozt5QkFyQlUsU0FBUztBQUFULGlCQUFTLEdBRHJCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixTQUFTLEtBQVQsU0FBUztlQUFULFNBQVM7OzsyQkFBVCxTQUFTIiwiZmlsZSI6Im11c2VzY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgTXVzZVNjb3Jle1xuICBoZWFkaW5nID0gJ011c2VTY29yZSc7XG4gIGltYWdlcyA9IFtdO1xuICB1cmwgPSAnaHR0cDovL2FwaS5tdXNlc2NvcmUuY29tL3NlcnZpY2VzL3Jlc3Qvc2NvcmUuanNvbnA/b2F1dGhfY29uc3VtZXJfa2V5PW11c2ljaGFja2RheTIwMTQnO1xuXG4gIGNvbnN0cnVjdG9yKGh0dHApe1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICBhY3RpdmF0ZSgpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy51cmwsICdjYWxsYmFjaycpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5jb250ZW50KVxuICAgICAgLy90aGlzLmltYWdlcy5hcHBlbmQoXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vc3RhdGljLm11c2VzY29yZS5jb20vMTk3MTQ2LzU0NmVjYzgzOWYvdGh1bWIucG5nP25vY2FjaGU9MTQzNzU1NzczOFwiKVxuICAgICAgZm9yIChsZXQgc2NvcmUgb2YgcmVzcG9uc2UuY29udGVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzY29yZVtcImlkXCJdKVxuICAgICAgICB2YXIgdSA9IFwiaHR0cDovL3N0YXRpYy5tdXNlc2NvcmUuY29tL1wiICsgc2NvcmVbXCJpZFwiXSArIFwiL1wiICsgc2NvcmVbXCJzZWNyZXRcIl0gKyBcIi9cIiArIFwidGh1bWIucG5nXCJcbiAgICAgICAgY29uc29sZS5sb2codSlcbiAgICAgICAgdGhpcy5pbWFnZXMucHVzaCh7XCJ1cmxcIjp1fSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==