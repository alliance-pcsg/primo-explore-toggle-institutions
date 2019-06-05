/* eslint-disable max-len */
angular
  .module('toggleInstitutions')
  .component('toggleInstitutions', {
    bindings: {
      startHidden: '<',
    },
    template: `
    <md-button class="md-raised" ng-click="$ctrl.toggleLibs()" id="summitButton" aria-controls="summitLinks" aria-expanded=false aria-label="Show/Hide Summit Libraries">
        {{$ctrl.showLibs ? 'Hide Summit Libraries' : 'Show Summit Libraries'}}
      <span aria-hidden=true>{{$ctrl.showLibs ? '&laquo;' : '&raquo;'}}</span>
    </md-button>`,
    controller: function() {
      this.$onInit = function() {
        this.showLibs = this.startHidden === false ? true : false
        this.button = angular.element(document.querySelector('prm-alma-more-inst-after button'))
        this.tabs = angular.element(document.querySelector('prm-alma-more-inst md-tabs'))
        this.tabs.attr('id', 'summitLinks')
        this.button.parent().after(this.tabs)
        if (!this.showLibs) this.tabs.addClass('hide')
      }
      this.toggleLibs = function() {
        this.showLibs = !this.showLibs
        this.tabs.hasClass('hide') ?
        this.tabs.removeClass('hide') && this.button.attr('aria-expanded', true) :
        this.tabs.addClass('hide') && this.button.attr('aria-expanded', false)
      }
    },
  })
