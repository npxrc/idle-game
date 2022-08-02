let cookies = document.cookie;
let currentupgrades;
let upgradelist = [
    "dblclicks",
    "tplclicks",
    "qdclicks",
    "0"
]
if (cookies === ""){
    document.cookie = 'upgrade=0; SameSite=None; Secure';
    cookies = document.cookie    
    currentupgrades = document.cookie.split(' ')[1]
    currentupgrades = currentupgrades.replace('upgrades=','')
    currentupgrades = currentupgrades.replace(';','')
} else{
    currentupgrades = document.cookie.split(' ')[0]
    currentupgrades = currentupgrades.replace('upgrades=','')
    currentupgrades = currentupgrades.replace(';','')
}
if (!currentupgrades.match(upgradelist)){
    document.cookie = 'cheated=true; SameSite: None; Secure'
} else{

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
function getUpgrade(upgrade){
    if (!upgradelist.match(upgrade)){
        document.cookie = 'cheated=true; SameSite: None; Secure'
    } else if (upgrade == '0'){
        document.cookie = 'cheated=true; SameSite: None; Secure'
    } else{
        
    }
}