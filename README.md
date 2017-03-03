# primo5-hide-show-other-institutions
Adds a toggle button to hide/show other institutions that own the item when viewing a record's details in Ex Libris Primo 5.

## Installation

To add the feature to a view in Primo 5, you must download the UI theme in your Primo Admin for a view and edit the *js/custom.js* and *css/custom1.css* files in the theme. 

Add the following to your custom1.css file
```css

prm-alma-more-inst md-tabs {display:none;}
.display-block-important {display:block !important;}

```

Add the following to your custom.js file
```js

(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/
    /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
    /*var app = angular.module('centralCustom', ['angularLoad']);*/
    /****************************************************************************************************/
	
	/* Hide/Show Button */
	app.component('prmAlmaMoreInstAfter', {
		 bindings: {parentCtrl: '<'},
		 template: '<div><hr />   <button class="hide_show_other_institutions_button" onclick="hide_show_other_institutions()" something>Show Libraries</button></div>'
	});

})();


function hide_show_other_institutions() 
{
	if(angular.element(document.querySelector('md-tabs')).hasClass("display-block-important"))
	{
		angular.element(document.querySelector('md-tabs')).removeClass("display-block-important");
		angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text("Show Libraries");
	}
	else
	{
		angular.element(document.querySelector('md-tabs')).addClass("display-block-important");
		angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text("Hide Libraries");
	}
	
	// place button above list of libraries 
	angular.element(document.querySelector('prm-alma-more-inst-after')).after(angular.element(document.querySelector('prm-alma-more-inst md-tabs')));
}

```
