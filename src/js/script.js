$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        let newList = $('#new-task-list');
        let newItem = $(`<li></li>`);
        let newCheck = $('<input type="checkbox">');
        $(newCheck).appendTo(newItem);
        $(`<p id="task"></p>`).text(newList.val()).appendTo(newItem);
        $(newItem).appendTo('#new-task');
        newItem.after('<hr>');
        $(newList).val('');
        
    });
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});

