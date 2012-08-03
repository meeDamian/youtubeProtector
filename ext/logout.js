window.onload = function() {

    document.getElementById('footer-links-secondary').innerHTML += '<li><a id="gdhsatd6astgduyasyhdasghdnasmnd">Disable Youtube!</a></li>';
    document.getElementById('gdhsatd6astgduyasyhdasghdnasmnd').onclick = function(){
        chrome.extension.sendMessage({logout: "yes"}, function(response) {
            if(response.refresh=="yes") location.reload();
        });
    };
}
