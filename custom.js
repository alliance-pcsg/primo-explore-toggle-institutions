(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/
    /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
    /*var app = angular.module('centralCustom', ['angularLoad']);*/
    /****************************************************************************************************/
	
	// Summit Hide/Show Button
	app.component('prmAlmaMoreInstAfter', {
		 bindings: {parentCtrl: '<'},
		 template: '<div><hr />   <button class="hide_show_summit_libraries_button" onclick="hide_show_summit_libraries()" something>Show Summit Libraries</button></div>'
	});

})();


function hide_show_summit_libraries() 
{
	if(angular.element(document.querySelector('md-tabs')).hasClass("display-block-important"))
	{
		angular.element(document.querySelector('md-tabs')).removeClass("display-block-important");
		angular.element(document.getElementsByClassName('hide_show_summit_libraries_button')).text("Show Summit Libraries");
	}
	else
	{
		angular.element(document.querySelector('md-tabs')).addClass("display-block-important");
		angular.element(document.getElementsByClassName('hide_show_summit_libraries_button')).text("Hide Summit Libraries");
	}
}