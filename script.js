var currentItem = 0;
var crossCss = "cross-item-text";
var completedTask = 0;
var remainingTask = 0;

function addItemClicked(e) {
    let toAddEle = $("#to-be-added");
    let newItemEle = $("#new-item");
    let newItem = newItemEle.val();
    let template = $(`<div class='to-do-item' id='item-${currentItem}'>
                        <span class='to-do-item-text' onclick="crossItem(${currentItem})">${newItem}</span>  
                        <button class="delete" onclick="deleteItemClicked(${currentItem});"><strong>-</strong></button> 
                      </div>`);
    if(newItem.trim() !== "") {
        toAddEle.append(template);
        newItemEle.val("");
        currentItem++;
        remainingTask++;
        updateRemaining(remainingTask);
    }
}

function deleteItemClicked(itemNum) {
    let deleteItemEle = $("#item-" + itemNum);
    let crossItemEle = $("#item-" + itemNum + " > .to-do-item-text");
    deleteItemEle.remove();

    if(crossItemEle.hasClass(crossCss)) {
        completedTask--;
        updateCompleted(completedTask);
    } else {
        remainingTask--;
        updateRemaining(remainingTask);
    }
}

function crossItem(itemNum) {
    let crossItemEle = $("#item-" + itemNum + " > .to-do-item-text");
    
    if(crossItemEle.hasClass(crossCss)) {
        crossItemEle.removeClass(crossCss);
        completedTask--;
        remainingTask++;
        updateCompleted(completedTask);
        updateRemaining(remainingTask);
    } else {
        crossItemEle.addClass(crossCss);
        completedTask++;
        remainingTask--;
        updateCompleted(completedTask);
        updateRemaining(remainingTask);
    }

}

function updateCompleted(completedTask) {
    let completeTaskEle = $(".tracker > .tasks-done");
    let completedTaskContent = completeTaskEle.val();
    $(".tasks-done").text(completedTask);
}

function updateRemaining(remainingTask) {
    let remainTaskEle = $(".tracker > .tasks-remain");
    let remainTaskContent = remainTaskEle.val();
    $(".tasks-remain").text(remainingTask);
}

$(document).ready(function() {
    console.log( "ready!" );
});





