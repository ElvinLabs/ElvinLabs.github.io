console.log('implicit tests: code loaded')
var start=performance.now()
var end=start

var testType='intro'
var test=0
var set=1
var MAXtests=80 + 1 // change!!!

var times=[]
var answers=[]

function hideEl(_id) {
    document.getElementById(_id).className += " imp-hidden";
}
function showEl(_id) {
    var el=document.getElementById(_id)
    el.className = el.className.replace( /(?:^|\s)imp-hidden(?!\S)/g , '' )
}

function loadDiv() {
    if (test!==MAXtests) hideEl('imp-'+test)
    if (test<MAXtests) {
        if ( !(set==1&&test==20) && !(set==2&&test==40) ) {
            showEl('imp-'+(++test))
            if (test==21) {
                hideEl('imp-set-2')
            } else if (test==41) {
                hideEl('imp-set-3')
            }
        } else {
            if (set==1) {
                showEl('imp-set-2')
                set++
            } else if (set==2) {
                showEl('imp-set-3')
                set++
            }
        }
    //                window.location.hash = '#'+test
        start=performance.now()
    } else {
//        alert('thanks!')
    }
}

function pressE(){
    end=performance.now()
    console.log('e', end-start)
    times.push(end-start)
    answers.push(0)

    // load div
    loadDiv();
}

function pressI(){
    end=performance.now()
    console.log('i', end-start)
    times.push(end-start)
    answers.push(1)

    // load div
    loadDiv();
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
