// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    'baseUrl': '/peb01/assets/js/lib',
    'paths': {
      'app': '/peb01/assets/js/app',
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
      'headroom': '../vendor/headroom.0.8.0.min',
      'picturefill': '../vendor/picturefill.min',
      'throttle-debounce': '../plugin/jquery.ba-throttle-debounce.min',
      'easing': '../plugin/jquery.easing.1.3.2'
    },
    shim: {
        'slick': {
          deps: ['jquery'],
          exports: 'slick'
        },
        'throttle-debounce': {
          deps: ['jquery'],
          exports: 'throttle-debounce'
        },
        'easing': {
          deps: ['jquery'],
          exports: 'easing'
        }
    }
});

requirejs(['app/common']);
requirejs(['app/common-default']);

// Load the main app module to start the app
requirejs(['app/main-default']);
