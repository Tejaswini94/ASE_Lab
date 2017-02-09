/**
 * Created by Tejaswini Pulivartrh on 2/8/2017.
 */
/**
 * Created by Tejaswini Pulivartrh on 2/8/2017.
 */
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1848811695408528',
        xfbml      : true,
        version    : 'v2.8',
        status      : true
    });
    FB.getLoginStatus(function(response) {
        if(response.status === 'connected') {
            //not connected

        }else if(response.status === 'not_authorized') {
            // not  auth
        }else{
            // not logged in
        }
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));