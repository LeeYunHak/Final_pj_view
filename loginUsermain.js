document.getElementById('nav3-2-Select').addEventListener('mouseover', function() {

    document.getElementsByClassName('opennavi')[0].style.display ='block'
});
document.getElementsByClassName('opennavi')[0].addEventListener('mouseover', function() {

    document.getElementsByClassName('opennavi')[0].style.display ='block'
});
document.getElementsByClassName('opennavi')[0].addEventListener('mouseout', function() {

    document.getElementsByClassName('opennavi')[0].style.display ='none'
});

document.getElementById('nav3-7-MyPage').addEventListener('click', function() {

    document.getElementsByClassName('arrow_box')[0].style.display ='block'
});
document.getElementsByClassName('arrow_box')[0].addEventListener('mouseover', function() {

    document.getElementsByClassName('arrow_box')[0].style.display ='block'
});
document.getElementsByClassName('arrow_box')[0].addEventListener('mouseout', function() {

    document.getElementsByClassName('arrow_box')[0].style.display ='none'
});


// 검색창 JS 시작
$(document).on('ready', function() {
    $('.field').on('focus', function() {
        $('body').addClass('is-focus');
    });
    $('.field').on('blur', function() {
        $('body').removeClass('is-focus is-type');
    });
    $('.field').on('keydown', function(event) {
        $('body').addClass('is-type');
        if((event.which === 8) && $(this).val() === '') {
            $('body').removeClass('is-type');
        }
    });
});
// 검색창 JS 끝