System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' }, { route: 'musescore', name: 'musescore', moduleId: './musescore', nav: true, title: 'MuseScore' }, { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }, { route: 'score/:id/page/:p', name: 'score', moduleId: './score', nav: false, title: 'Score' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFHYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBTyxRQUFRLEVBQUUsV0FBVyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUN2RyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVEsSUFBSSxFQUFFLFFBQVEsRUFBUSxRQUFRLEVBQUUsVUFBVSxFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFFBQVEsRUFBRSxFQUN0RyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUssSUFBSSxFQUFFLFdBQVcsRUFBSyxRQUFRLEVBQUUsYUFBYSxFQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBRSxFQUN6RyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsY0FBYyxFQUFFLEVBQzVHLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUksUUFBUSxFQUFFLFNBQVMsRUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FDdkcsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBWlUsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5jc3MhJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCd3ZWxjb21lJ10sIG5hbWU6ICd3ZWxjb21lJywgICAgICBtb2R1bGVJZDogJy4vd2VsY29tZScsICAgICAgbmF2OiB0cnVlLCB0aXRsZTonV2VsY29tZScgfSxcbiAgICAgIHsgcm91dGU6ICdmbGlja3InLCAgICAgICBuYW1lOiAnZmxpY2tyJywgICAgICAgbW9kdWxlSWQ6ICcuL2ZsaWNrcicsICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6J0ZsaWNrcicgfSxcbiAgICAgIHsgcm91dGU6ICdtdXNlc2NvcmUnLCAgICBuYW1lOiAnbXVzZXNjb3JlJywgICAgbW9kdWxlSWQ6ICcuL211c2VzY29yZScsICAgIG5hdjogdHJ1ZSwgdGl0bGU6J011c2VTY29yZScgfSxcbiAgICAgIHsgcm91dGU6ICdjaGlsZC1yb3V0ZXInLCBuYW1lOiAnY2hpbGQtcm91dGVyJywgbW9kdWxlSWQ6ICcuL2NoaWxkLXJvdXRlcicsIG5hdjogdHJ1ZSwgdGl0bGU6J0NoaWxkIFJvdXRlcicgfSxcbiAgICAgIHsgcm91dGU6ICdzY29yZS86aWQvcGFnZS86cCcsIG5hbWU6ICdzY29yZScsICAgbW9kdWxlSWQ6ICcuL3Njb3JlJywgICAgICAgIG5hdjogZmFsc2UsIHRpdGxlOiAnU2NvcmUnfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==