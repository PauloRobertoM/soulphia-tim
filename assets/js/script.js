(function($, window) {
	$(function () {
        var seconds = getCountDownTime('09/01/2019 23:59');
        $('.clock').FlipClock( seconds, {
            clockFace: 'DailyCounter',
            countdown: true,
            language: 'pt-br'
        });
    });
    function getCountDownTime(eventDate) {
        var date = new Date(eventDate);
        var now = new Date();
        var diff = (date - now) / 1000;
    	return diff;
    }

    var topo = $("#topo").position();
    $('.topo').click(function() {
        $('html, body').animate({
            scrollTop: perfil.top
        }, 500);
        return false;
    });
    $('#myModal').modal('show');
})(jQuery, window);