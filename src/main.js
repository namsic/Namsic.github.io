let info = JSON.parse(JSON.stringify(information));

$('#title').text(info['me']['name']);
$('#subtitle').text(info['introduce']['title']);
$('#content').html(info['introduce']['content']);
$('#phone').text(info['me']['phone']);
$('#email').text(info['me']['email']);

$("#home").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$('html').offset().top}, 100);
})

$('#themeToggle').click(function(){
    if($('body').attr("data-bs-theme") == "dark") {
        $('body').attr("data-bs-theme", "light");
    }
    else {
        $('body').attr("data-bs-theme", "dark");;
    }
});

$('.resume-btn').click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#resume-page').offset().top}, 100);
})