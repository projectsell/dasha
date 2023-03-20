$(function(){
    $('.katalog__acc-title').on('click', function(e){
        e.preventDefault()
        $(this).next().slideToggle()
        $(this).toggleClass('katalog__acc-title--active')
        
    })
})