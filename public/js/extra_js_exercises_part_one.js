$(document).ready(function () {
    'use strict';

    (function exerciseOne() {
        $('#exercise_one').append('<ul>');
        for (var i = 1; i <= 5; i++) {
            $('#exercise_one').append('<li>' + i + '</li>');
        }
        $('#exercise_one').append('</ul>');
    })();

    (function exerciseTwo() {
        $('#exercise_two').append('<ul>');
        for (var i = 10; i <= 20; i += 2) {
            $('#exercise_two').append('<li>' + i + '</li>');
        }
        $('#exercise_two').append('</ul>');
    })();
});