app.component('prmAlmaMoreInstAfter', {
	controller: 'institutionToggleController',
	template: `<md-button class="md-raised" ng-click="toggleLibs()">
			{{ showLibs ? 'Hide Libraries &laquo;' : 'Show Libraries &raquo;' }}
			</md-button>`
})
.controller('institutionToggleController', ['$scope', function($scope) {
    this.$onInit = function() {
		$scope.showLibs = false;
		$scope.button = angular.element(document.querySelector('prm-alma-more-inst-after'));
        $scope.tabs = angular.element(document.querySelector('prm-alma-more-inst md-tabs'));
        $scope.tabs.addClass('hide');
		$scope.button.after($scope.tabs);
		$scope.toggleLibs = function() {
			$scope.showLibs = !$scope.showLibs;
			if ($scope.tabs.hasClass('hide')) $scope.tabs.removeClass('hide');
			else $scope.tabs.addClass('hide');
		};
    };
}]);
