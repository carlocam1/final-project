import { changePageContent } from "../model/model.js";

// import { anchorPageContent } from "../model/model.js";

function initListener() {
    $("a").click(function(e){
        let btnId = e.currentTarget.id;
        console.log("click " + btnId);
        changePageContent(btnId);
    });
}

// $(document).ready(function(){
//     initListener();
//     MODEL.changePageContent("home");
    
// })

$(document).ready(function(){
    initListener();
    changePageContent("home");
})