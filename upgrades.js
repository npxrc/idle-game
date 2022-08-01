let cookies = document.cookie;
let upgrades;
if (cookies === ""){
    document.cookie = 'upgrade=0; SameSite=None; Secure';
    cookies = document.cookie    
    upgrades = document.cookie.split(' ')[1]
    upgrades = upgrades.replace('upgrades=','')
    upgrades = upgrades.replace(';','')
} else{
    upgrades = document.cookie.split(' ')[1]
    upgrades = upgrades.replace('upgrades=','')
    upgrades = upgrades.replace(';','')
}
let view = false
function upgrades(){
    if (view){
        view = false
        document.getElementById('upgrades').innerHTML = ''
    } else {
        view = true
        document.getElementById('upgrades').innerHTML = '<button onclick="getUpgrade(\'dblclicks\')">Double Clicks</button>'
    }
}