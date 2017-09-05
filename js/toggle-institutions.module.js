angular
  .module('toggleInstitutions', [])
  .component('prmAlmaMoreInstAfter', {
    template: `
		<md-button class="md-raised" ng-click="toggleLibs()" id="summitButton" aria-controls="summitLinks" aria-expanded="false" aria-label="Show/Hide Summit Libraries">
 			{{ showLibs ? 'Hide Libraries' : 'Show Libraries' }}
 			<span aria-hidden="true">{{showLibs ? '&laquo;' : '&raquo;' }}</span>
		</md-button>`,
    controller: ['$scope', function($scope) {
      this.$onInit = function() {
        $scope.showLibs = false;
        $scope.button = angular.element(document.querySelector('prm-alma-more-inst-after button'));
        $scope.tabs = angular.element(document.querySelector('prm-alma-more-inst md-tabs'));
        $scope.tabs.attr('id', 'summitLinks');
        $scope.tabs.addClass('hide');
        $scope.button.parent().after($scope.tabs);
        $scope.toggleLibs = function() {
          $scope.showLibs = !$scope.showLibs;
          if ($scope.tabs.hasClass('hide')) {
            $scope.tabs.removeClass('hide');
            $scope.button.attr("aria-expanded", "true");
          } else {
            $scope.tabs.addClass('hide');
            $scope.button.attr("aria-expanded", "false");
          }
        };
      };
    }]
  })
