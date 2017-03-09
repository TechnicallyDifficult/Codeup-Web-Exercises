$(document).ready(function () {
    'use strict';
    const td = '</td><td>';

    function renderTable() {
        $('#insertProducts').html('');
        $.get('./data/inventory.json').done(function (data) {
            data.forEach(function (element, index, array) {
                $('#insertProducts').append('<tr><td>' + element.title + td + element.quantity + td + element.price + td + element.categories.join(', ') + '</td></tr>');
            });
        });
    }
    renderTable();
    $('#refresh').click(renderTable);
});