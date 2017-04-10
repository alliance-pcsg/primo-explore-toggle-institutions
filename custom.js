(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/
    /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
    /*var app = angular.module('centralCustom', ['angularLoad']);*/
    /****************************************************************************************************/
	
	/* Hide/Show Other Institutions Button */
	app.component('prmAlmaMoreInstAfter', {
		bindings: {parentCtrl: '<'},
		controller: function () {
			this.$onInit = function () {
				angular.element(document.querySelector('md-tabs')).addClass("hide");
			};
		},
		template: '<div class="hide_show_other_institutions_container"><button class="hide_show_other_institutions_button" onclick="hide_show_other_institutions()">Show Libraries</button></div>'
	});

})();


function hide_show_other_institutions() 
{
	if(angular.element(document.querySelector('md-tabs')).hasClass("hide"))
	{
		angular.element(document.querySelector('md-tabs')).removeClass("hide");
		angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text("Hide Libraries");
	}
	else
	{
		angular.element(document.querySelector('md-tabs')).addClass("hide");
		angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text("Show Libraries");
	}
	
	// place button above list of libraries 
	angular.element(document.querySelector('prm-alma-more-inst-after')).after(angular.element(document.querySelector('prm-alma-more-inst md-tabs')));
}