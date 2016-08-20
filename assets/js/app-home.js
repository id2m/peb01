// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    'baseUrl': '/peb01/assets/js/lib',
    'paths': {
      'app': '/peb01/assets/js/app',
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
      'lunr': '../vendor/lunr.min',
      'moment': '../vendor/moment-with-fr.2.12.0.min',
      'sticky': '../plugin/jquery.sticky.min',
      'slick': '//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min',
      'picturefill': '../vendor/picturefill.min',
      'throttle-debounce': '../plugin/jquery.ba-throttle-debounce.min'
    },
    shim: {
        'slick': {
          deps: ['jquery'],
          exports: 'slick'
        },
        'throttle-debounce': {
          deps: ['jquery'],
          exports: 'throttle-debounce'
        }
    }
});

requirejs(['app/common']);

// Load the main app module to start the app
requirejs(['app/main-home']);


//https://github.com/danzel/Leaflet
//http://stackoverflow.com/questions/15471088/requirejs-why-and-when-to-use-shim-config
