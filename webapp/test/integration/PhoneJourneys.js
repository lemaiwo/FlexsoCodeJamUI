jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"be/flexso/test/integration/NavigationJourneyPhone",
		"be/flexso/test/integration/NotFoundJourneyPhone",
		"be/flexso/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});