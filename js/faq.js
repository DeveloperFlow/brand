(function(){
    var questions = document.getElementsByClassName("faq")
    for(var i = 0; i < questions.length; i++){
        addAnsEvent(questions[i])
    }
    function addAnsEvent(faqElem){
        var question = faqElem.children[0]
        var open = true
        addEvent(question,"click",toggleAnswer)
        toggleAnswer()

        function toggleAnswer(){
            if(open){
                changeClass(faqElem,"","closed")
                open = false
            }
            else{
                changeClass(faqElem,"closed","")
                open = true
            }
        }
    }
}())