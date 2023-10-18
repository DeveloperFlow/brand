(function(){
    var servicesSection = document.getElementById("section-2")
    for(var i = 0; i < Services.length; i++){
        var thisService = Services[i]
        displayServices(thisService,servicesSection)
    }
}())

function displayServices(service,servicesSection){
    var name = service.name
    var services = service.services

    var servicesElem = document.createElement("div")
    servicesElem.className = "service-list grid-3 grid"

    for(var i = 0; i < services.length; i++){
        displayService(services[i],servicesElem)
    }
    if(i > 0){
        var servicesContainer = document.createElement("div")
        var nameElem = document.createElement("h2"); nameElem.innerHTML = name
        nameElem.className = "webkit-bg-clip-text site-gradient-2 center-text transparent"
        var clearFix = document.createElement("div"); clearFix.className = "clear-fix"
        servicesElem.appendChild(clearFix)
        append(servicesContainer,[nameElem,servicesElem])
        servicesSection.appendChild(servicesContainer)
    }
}

function displayService(service,listContainer){
    var serviceTab
    var name = service.name
    var image = "img/what-we-do/" + service.image.toString()

    var serviceElem = document.createElement("div"); serviceElem.className = "grid-item"
    var imageElem = document.createElement("img"); imageElem.src = image
    var nameElem = document.createElement("div"); nameElem.innerHTML = name;
    nameElem.className = "oneline ellipsis"
    append(serviceElem,[imageElem,nameElem])
    listContainer.appendChild(serviceElem)
    addEvent(serviceElem,"click",openService)

    function openService(){
        if(!serviceTab){
            serviceTab = new miniTab()
            var container = document.createElement("div"); container.className = "view-service relative"

            //header
            var header = document.createElement("h2");
            header.className = "webkit-bg-clip-text site-gradient-2 center-text transparent"
            header.innerHTML = "Contact us for the service \"" + name + "\""

            //email address
            var email = document.createElement("div");
            var emailLabel = document.createElement("label"); emailLabel.innerHTML = "Your email address"
            emailLabel.className = "white"
            var emailInput = document.createElement("input"); emailInput.className = "input curved"
            emailInput.placeholder = "Your Email Address"
            append(email,[emailLabel,emailInput])

            //message
            var message = document.createElement("div");
            var messageLabel = document.createElement("label"); messageLabel.innerHTML = "Your Message"
            messageLabel.className = "white"
            var messageInput = document.createElement("textarea"); messageInput.className = "input curved"
            messageInput.placeholder = "Your Message"; messageInput.style.height = "200px"
            append(message,[messageLabel,messageInput])

            //send
            var send = document.createElement("div"); send.className = "flex apart space-up"
            var sendBtn = document.createElement("button"); sendBtn.innerHTML = "Send";
            sendBtn.className = "button curved pointer"
            var cancelBtn = document.createElement("button"); cancelBtn.innerHTML = "Cancel"
            cancelBtn.className = "button curved pointer"
            append(send,[cancelBtn,sendBtn])
            addEvent(sendBtn,"click",function(){customAlert("Message Sent")})
            addEvent(cancelBtn,"click",function(){serviceTab.close()})

            //curtain
            var curtain = document.createElement("div"); curtain.className = "absolute top left full-width full-height"
            curtain.style.backgroundColor = "rgba(0,0,0,0.5)"; curtain.style.zIndex = 2
            //content wrapper
            var wrapper = document.createElement("div"); wrapper.className = "relative"; wrapper.style.zIndex = 5
            append(wrapper,[header,email,message,send])
            append(container,[curtain,wrapper])
            serviceTab.tab.style.backgroundImage = "url('" + image.toString() + "')"
            append(serviceTab.tab,[container])
        }
        serviceTab.open()
    }
}