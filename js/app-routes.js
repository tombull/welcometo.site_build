'use strict';

(function () {
  'use strict';

  angular.module('welcomeToSite').config(config).directive('showDuringResolve', showDuringResolveDirective);

  function config($urlRouterProvider, $stateProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('site', {
      abstract: true
    });
  }

  function showDuringResolveDirective($rootScope) {
    'ngInject';

    return {
      link: function link(scope, element) {
        var unregisterStart = $rootScope.$on('$stateChangeStart', function () {
          element.removeClass('ng-hide');
        }),
            unregisterEnd = $rootScope.$on('$stateChangeSuccess', function () {
          element.addClass('ng-hide');
        }),
            unregisterError = $rootScope.$on('$stateChangeError', function () {
          element.addClass('ng-hide');
        }),
            unregisterCancel = $rootScope.$on('$stateChangeCancel', function () {
          element.addClass('ng-hide');
        });
        element.addClass('ng-hide');
        scope.$on('$destroy', function () {
          unregisterStart();
          unregisterEnd();
          unregisterError();
          unregisterCancel();
        });
      }
    };
  }
})();
//# sourceMappingURL=app-routes.js.map
