$(function () {
    var $from = $('.from');
    var $to =$('.to');
    var $fun =$('.fun');
    var $block1 =$('.block1');
    var $button =$('.button');
    var $button2 =$('.button2');
   $button.click(function(e)
    {
        e.preventDefault();
        var from = parseFloat($from.val());
        var to = parseFloat($to.val());
        var fun = ($fun.val());
        const points = [];
        for(var x = from; x<= to; x += 0.01 )
            points.push([x, eval(fun)]);
        $.plot($block1, [{ label: fun, data: points }], [points], {});
    });
});