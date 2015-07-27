import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'flickr',       name: 'flickr',       moduleId: './flickr',       nav: true, title:'Flickr' },
      { route: 'musescore',    name: 'musescore',    moduleId: './musescore',    nav: true, title:'MuseScore' },
      { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' },
      { route: 'score/:id/page/:p', name: 'score',   moduleId: './score',        nav: false, title: 'Score'}
    ]);

    this.router = router;
  }
}
