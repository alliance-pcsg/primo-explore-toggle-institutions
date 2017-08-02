angular
	.module('toggleInstitutions', [])
	.component('prmAlmaMoreInstAfter', {
		template: `
			<md-button class="md-raised" ng-click="$ctrl.toggleLibs()">
				{{ showLibs ? 'Hide Libraries &laquo;' : 'Show Libraries &raquo;' }}
			</md-button>`,
		controller: ['$scope', function ($scope) {
			$scope.showLibs = false
			this.toggleLibs = function () {
				$scope.showLibs = !$scope.showLibs
				this.tabs.hasClass('hide') ? this.tabs.removeClass('hide') : this.tabs.addClass('hide')
			}
			this.$onInit = function () {
				this.button = angular.element(document.querySelector('prm-alma-more-inst-after'))
				this.tabs = angular.element(document.querySelector('prm-alma-more-inst md-tabs'))
				this.button.after(this.tabs)
				if (!$scope.showLibs) this.tabs.addClass('hide')
			}
		}]
	})
