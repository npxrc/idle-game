let cookies = document.cookie;
let clicks;
let upgrades;
if (cookies === ""){
    console.log('cookie is empty lol')
    document.cookie = 'clicks=0; SameSite=None; Secure';
    document.cookie = 'upgrade=69; SameSite=None; Secure';
    cookies = document.cookie
    clicks = Math.floor(clicks)
    clicks = document.cookie.split(' ')[0]
    clicks = clicks.replace('clicks=','')
    clicks = clicks.replace(';','')
} else{
    clicks = Math.floor(clicks)
    clicks = document.cookie.split(' ')[1]
    clicks = clicks.replace('clicks=','')
    clicks = clicks.replace(';','')
}
console.log(clicks)
clicks = Math.floor(clicks)
function clickup(){
    clicks +=1
    document.cookie = 'clicks=' + clicks + '; SameSite=None; Secure'
    document.getElementById('clicks').innerHTML = clicks
}