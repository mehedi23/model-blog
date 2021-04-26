$(document).ready(function(){

    $('#loginbtn').click(function(){
        $('#loginwapper').css({
            'display':'grid'
        });
        $('body').css({
            'overflow' : 'hidden'
        })
    });

    function hideLogInForm(){
        $('#loginwapper').hide();
        $('body').css({
            'overflow-y' : 'scroll'
        })
    }

    let showLogInForm = true

    $('#logcrosbtn').click(function(){
        hideLogInForm()
    });

    $(document).mousedown(function(e){
        var login_container = $('#log-in-area');
        var logInBtn = $('#loginbtn')
    
        if (!login_container.is(e.target) && login_container.has(e.target).length === 0 && !logInBtn.is(e.target)){
            hideLogInForm()
        }
    });



});