var PersonalityService = function (profile) {
    this.view = new PersonalityView();
    this.profile = profile
};

PersonalityService.prototype.view = null;
PersonalityService.prototype.profile = null;

PersonalityService.prototype.startPersonalityProcess = function () {
    var _this = this;
    var profileId = '';
    if (typeof this.profile !== "undefined") {
        profileId = this.profile;
    }
    $.ajax({
        'url': '/analyze_personality?profile=' + profileId,
        'method': 'GET',
        'success': function (response) {
            _this.successCallback(response);
        },
        'error': function (response) {
            _this.errorCallback(response);
        }
    });
};

PersonalityService.prototype.successCallback = function (response) {
    this.view.render(response);
};

PersonalityService.prototype.errorCallback = function (response) {
    throw new Error('Error!');
};