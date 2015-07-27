System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, Score;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      Score = (function () {
        function Score() {
          _classCallCheck(this, Score);

          this.heading = 'Score';
        }

        _createClass(Score, [{
          key: 'activate',
          value: function activate(score) {
            console.log(score.id);
          }
        }]);

        return Score;
      })();

      _export('Score', Score);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztjQUVhLEtBQUs7Ozs7Ozs7O2lDQUZWLE1BQU07OztBQUVELFdBQUs7aUJBQUwsS0FBSztnQ0FBTCxLQUFLOztlQUNoQixPQUFPLEdBQUcsT0FBTzs7O3FCQUROLEtBQUs7O2lCQUlSLGtCQUFDLEtBQUssRUFBQztBQUdiLG1CQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtXQUV0Qjs7O2VBVFUsS0FBSzs7O3VCQUFMLEtBQUsiLCJmaWxlIjoic2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgU2NvcmV7XG4gIGhlYWRpbmcgPSAnU2NvcmUnO1xuXG5cbiAgYWN0aXZhdGUoc2NvcmUpe1xuICAgIC8vY29uc29sZS5sb2coXCJpZFwiICsgaWQpO1xuICAgIC8vY29uc29sZS5sb2coXCJwYWdlXCIgKyBwKTtcbiAgICBjb25zb2xlLmxvZyhzY29yZS5pZClcbiAgICBcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9