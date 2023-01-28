$(document).ready(function(){
    $('#search').click(function(){
        $('.menu-item').addClass('hide-item')
        $('.search-form').addClass('active')
        $('.close').addClass('active')
        $('#search').hide()
    })
    $('.close').click(function(){
        $('.menu-item').removeClass('hide-item')
        $('.search-form').removeClass('active')
        $('.close').addClass('active')
    })
    
    

    $('.thailand').click(function(){
        $('.content-thailand').slideToggle('showcon')
    })
    $('.turkey').click(function(){
        $('.content-turkey').slideToggle('showcon')
    })
    $('.russia').click(function(){
        $('.content-russia').slideToggle('showcon')
    })
    $('.china').click(function(){
        $('.content-china').slideToggle('showcon')
    })
    $('.brazil').click(function(){
        $('.content-brazil').slideToggle('showcon')
    })

    $('#youtubepopup').click(function(){
        $('#ytpopup-content').addClass('showpopup')

    })
    $('#closepopup').click(function(){
        $('#ytpopup-content').removeClass('showpopup')
    })

    $('.iconmenu').click(function(){
        $('.topnav ul li a').addClass('showmenures')
        $('.iconX').addClass('showiconx')
        $('.iconmenu').hide()
    })
    $('.iconX').click(function(){
        $('.topnav ul li a').removeClass('showmenures')
        $('.iconmenu').show()
        $('.iconX').hide()
    })
})