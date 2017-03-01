jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Person in the list
// * All 3 Person have at least one Skills

sap.ui.require([
	"sap/ui/test/Opa5",
	"be/flexso/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"be/flexso/test/integration/pages/App",
	"be/flexso/test/integration/pages/Browser",
	"be/flexso/test/integration/pages/Master",
	"be/flexso/test/integration/pages/Detail",
	"be/flexso/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "be.flexso.view."
	});

	sap.ui.require([
		"be/flexso/test/integration/MasterJourney",
		"be/flexso/test/integration/NavigationJourney",
		"be/flexso/test/integration/NotFoundJourney",
		"be/flexso/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});