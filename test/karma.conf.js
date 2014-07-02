module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'app/modules/common/common.js',
      'app/modules/metrics/metrics.js',
      'app/**/*.js',
      'app/*.js',
      'test/unit/**/*.js'
    ],

    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    
    plugins : [
               'karma-chrome-launcher',
               'karma-jasmine'
               ]
   
  });
};