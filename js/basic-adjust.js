function adjustMenu(){
    var menu = document.getElementById("menu")
    var main = document.getElementById("main")
    var menuBtn = document.getElementById("menu-ini")
    var ssmenu = document.getElementById("ss-menu")
    var open = false
    var ss = 500
    if(!menu || !main){return }
    adjust(); 
    addEvent(window,"resize",adjust)
    addEvent(menuBtn,"click",openMenu)
    function adjust(){
        var wd = windowDim()
        if(wd.w <= ss){
            changeClass(document.body,"","ss")
            for(var i = 0; i < menu.children.length; i++){
                if(hasClass(menu.children[i],"bs")){
                    ssmenu.appendChild(menu.children[i])
                    i--
                }
            }
        }
        else{
            changeClass(document.body,"ss","")
            for(var i = 0; i < ssmenu.children.length; i++){
                if(hasClass(ssmenu.children[i],"bs")){
                    menu.appendChild(ssmenu.children[i])
                    i--
                }
            }
        }
        main.style.marginTop = elementDim(menu,"h").toString() + "px"
    }
    function openMenu(){
        if(open){changeClass(ssmenu,"","closed"); open = false}
        else{changeClass(ssmenu,"closed",""); open = true}
    }
}
function iniActionBlock(){
    var actionElements = document.getElementsByClassName("sa")
    for(var i = 0; i < actionElements.length; i++){addBlockEvt(actionElements[i])}
    function addBlockEvt(element){
        addEvent(element,"click",function(e){
            stopDefault(e); customAlert("This is just a demo so you cannot perform this action")
        })
    }
}