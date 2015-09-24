console.log('implicit tests: code loaded')
var start=performance.now()
var end=start

var testType='intro'
var test=0
var MAXtests=43 + 1 // change!!!

var times=[]
var answers=[]

function hideEl(_id) {
    document.getElementById(_id).className += " imp-hidden";
}
function showEl(_id) {
    var el=document.getElementById(_id)
    el.className = el.className.replace( /(?:^|\s)imp-hidden(?!\S)/g , '' )
}

function pressE(){
    end=performance.now()
    console.log('e', end-start)
    times.push(end-start)
    answers.push(0)

    // load div
    hideEl('imp-'+test)
    if (test<MAXtests) {
        showEl('imp-'+(++test))
//                window.location.hash = '#'+test
        start=performance.now()
    } else {
        alert('thanks!')
    }
}

function pressI(){
    end=performance.now()
    console.log('i', end-start)
    times.push(end-start)
    answers.push(1)

    // load div
    hideEl('imp-'+test)
    if (test<MAXtests) {
        showEl('imp-'+(++test))
    //                window.location.hash = '#'+test
        start=performance.now()
    } else {
        alert('thanks!')
    }
}

document.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) {
//        alert("Character typed: " + String.fromCharCode(charCode));
        var key = String.fromCharCode(charCode);
        if (key=='e') {
            
            pressE()
            
        } else if (key=='i') {
            
            pressI()
        
        }
    }
};
