
(function () {

	'use strict';

	var
		ko = require('ko'),

		Enums = require('Common/Enums'),

		Settings = require('Storage/Settings')
	;

	/**
	 * @constructor
	 */
	function CapaAdminStore()
	{
		this.additionalAccounts = ko.observable(false);
		this.additionalIdentities = ko.observable(false);
		this.gravatar = ko.observable(false);
		this.attachmentThumbnails = ko.observable(false);
		this.sieve = ko.observable(false);
		this.filters = ko.observable(false);
		this.themes = ko.observable(true);
		this.userBackground = ko.observable(false);
		this.openPGP = ko.observable(false);
		this.twoFactorAuth = ko.observable(false);
	}

	CapaAdminStore.prototype.populate = function()
	{
		this.additionalAccounts(Settings.capa(Enums.Capa.AdditionalAccounts));
		this.additionalIdentities(Settings.capa(Enums.Capa.AdditionalIdentities));
		this.gravatar(Settings.capa(Enums.Capa.Gravatar));
		this.attachmentThumbnails(Settings.capa(Enums.Capa.AttachmentThumbnails));
		this.sieve(Settings.capa(Enums.Capa.Sieve));
		this.filters(Settings.capa(Enums.Capa.Filters));
		this.themes(Settings.capa(Enums.Capa.Themes));
		this.userBackground(Settings.capa(Enums.Capa.UserBackground));
		this.openPGP(Settings.capa(Enums.Capa.OpenPGP));
		this.twoFactorAuth(Settings.capa(Enums.Capa.TwoFactor));
	};

	module.exports = new CapaAdminStore();

}());
