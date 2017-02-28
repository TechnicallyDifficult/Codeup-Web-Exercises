$(document).ready(function () {
    'use strict';

    $('.container').css('padding', '30px');

    if (confirm('Would you like to make some paragraphs smaller?')) {
        $('.small').css('font-size', '8px');
    }

    alert('I am going to make some paragraphs larger.');
    $('.large').css('font-size', '18px');

    $('#name').text(prompt('What is your name?'));
});