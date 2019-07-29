$(document).ready(function () {
    let buttons = $('.menuItem')
    let slides = $('.slide')

    $(buttons[0]).addClass('act').siblings().addClass('inact')

    for (i = 0; i < buttons.length; i++) {
        $(buttons[i]).on('click', function (e) {
            $(this).addClass('act').siblings().removeClass('act').addClass('inact')
            let index = $(e.currentTarget).index() - 1
            var px = index * (-920)
            $('#slides').css({
                transform: 'translateX(' + px + 'px)'
            })
        })
    }
})

