//Task1
$(function() {
$('#but1').click(function() {
    $('p.red').css('color','red')
});
});

//Task2
$(function() {
    $('#but2').click(function() {
        $('div p').css('color','blue')
    });
});

//Task3
$(function() {
    $('#but3').click(function() {
        $('p:first strong').css('font-style','italic')
    });
});

//Task4
$(function() {
    $('#but4').click(function() {
        $('div.blocks').css('background-color','yellow')
    });
});

