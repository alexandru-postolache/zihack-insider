$(document).ready(function () {

    $.ajax({
        url: "/get-joke",
        success: function (data) {
            $('h2#joke').fadeOut("slow", function () {
                $('h2#joke').html(data['joke']).fadeIn();
            });
        },
        async: true
    });
    setInterval(function () {
        $.ajax({
            url: "/get-joke",
            success: function (data) {
                $('h2#joke').fadeOut("slow", function () {
                    $('h2#joke').html(data['joke']).fadeIn();
                });
            },
            async: true
        });
    }, 10000);

    var cardTemplate = _.template($("#card-template").html());
    var messageTemplate = _.template($("#message-template").html());
    var analyzeTemplate = _.template($("#analyze-template").html());

    var personalityService = new PersonalityService();

    $.ajax({
        url: "start_process",
        success: function (data) {
            $('body').fadeOut("slow", function(){
                $('.body-wrapper').html(analyzeTemplate(data));
                $('.full-bg-img-analyze').css({"background-image": "url('" + data['photos'][0].url + "')", "filter": "blur(1px) grayscale(100%)"});
                for (var i = 0; i < 10; i++) {
                    if(data['photos'][i]) {
                        $('#photos .row').append(cardTemplate(data['photos'][i]));
                    }
                }
                for(i = 0; i < 20; i++) {
                    if(data['feed'][i]) {
                        $('#messages .card').append(messageTemplate(data['feed'][i]));
                    }
                }
                $('body').fadeIn();
            });
            personalityService.startPersonalityProcess();
        },
        async: true
    });
});