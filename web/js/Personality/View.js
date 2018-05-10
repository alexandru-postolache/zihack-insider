var PersonalityView = function () {

    /**
     * Toggle Big 5 Subtraits
     */
    $(document).on('click', '.output-big-5--trait-label', function () {
        $(this).closest('.percent-bar-and-score').toggleClass('toggled');
    });


};

PersonalityView.prototype.render = function (data) {
    this.renderTemplate(data);
    this.renderChart(data);
    this.renderSummary(data);
    this.renderLikely(data);
};


PersonalityView.prototype.renderTemplate = function (data) {
    var html = $(data.template);
    var words = data['data']['word_count'];
    $('span#words').html(words);
    $('#personality_results').append(html);
    var $needsToggle = $('.output-needs--toggle');
    var $needsMoreTraits = $('.output-needs--more-traits');
    $needsToggle.click(function () {
        $needsMoreTraits.toggle();
        $needsToggle.text($needsToggle.text() == '<<' ? '>>' : '<<');
    });

};

PersonalityView.prototype.renderChart = function (data) {
    var imageUrl = data.profile_url;
    var chart = new PersonalitySunburstChart({selector: '#sunburstChart', version: 'v3'});
    chart.show(data.data, imageUrl);
};

PersonalityView.prototype.renderSummary = function (data) {
    var textSummary = new TextSummary({version: 'v3', locale: 'en'});
    var summary = textSummary.getSummary(data.data);

    $('.output-summary--summary p').text(summary);
};

PersonalityView.prototype.renderLikely = function (data) {
    loadConsumptionPreferences(data.data);
};