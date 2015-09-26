console.log('implicit tests: code loaded')
var start=performance.now()
var end=start

var testType='intro'
var test=0
var set=1
var MAXtests=140 + 1 // change!!!

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
        if ( !(set==1&&test==20) && !(set==2&&test==40) && !(set==3&&test==80)  && !(set==4&&test==100) ) {
            showEl('imp-'+(++test))
            if (test==21) {
                hideEl('imp-set-2')
            } else if (test==41) {
                hideEl('imp-set-3')
            } else if (test==81) {
                hideEl('imp-set-4')
            } else if (test==101) {
                hideEl('imp-set-5')
            }
        } else {
            if (set==1) {
                showEl('imp-set-2')
                set++
            } else if (set==2) {
                showEl('imp-set-3')
                set++
            } else if (set==3) {
                showEl('imp-set-4')
                set++
            } else if (set==4) {
                showEl('imp-set-5')
                set++
            }
        }
    //                window.location.hash = '#'+test
        start=performance.now()
    } else {
//        alert('thanks!')
    }
}

var err=false

function pressE(){

    if (
        test==0
        || ( test==20 && set==2)
        || ( test==40 && set==3)
        || ( test==80 && set==4)
        || (test==100 && set==5)
    ) {
        err=false
        loadDiv();
        return
    }

    // var x=$('#imp-'+test+' .imp-ans')[0].innerHTML
    var x=document.getElementById("imp-"+test).getElementsByClassName("imp-ans")[0].innerHTML
    if (x!=='1' && x!=='3') {
        console.log('pressE(',x,')')
        if (err)
            return
        err=true
        showEl('imp-cross')
        console.log(answers)
        console.log(times)
        end=performance.now()
        console.log('e: wrong', Math.ceil((end-start)*1000)/1000)
        times.push(Math.ceil((start-end)*1000)/1000)
        answers.push(0)
        return;
    }

    hideEl('imp-cross')
    end=performance.now()
    console.log('e', Math.ceil((end-start)*1000)/1000)
    if (
        test==0
        || ( test==20 && set==2)
        || ( test==40 && set==3)
        || ( test==80 && set==4)
        || (test==100 && set==5)
    )
        err=true
    if (!err) {
        times.push(Math.ceil((end-start)*1000)/1000)
        answers.push(1)
    }
    console.log(answers)
    console.log(times)
    err=false

    // load div
    loadDiv();
}

function pressI(){

    if (
        test==0
        || ( test==20 && set==2)
        || ( test==40 && set==3)
        || ( test==80 && set==4)
        || (test==100 && set==5)
    ) {
        err=false
        loadDiv();
        return
    }

    // var x=$('#imp-'+test+' .imp-ans')[0].innerHTML
    var x=document.getElementById("imp-"+test).getElementsByClassName("imp-ans")[0].innerHTML
    if (x!=='2' && x!=='3') {
        console.log('pressI(',x,')')
        if (err)
            return
        err=true
        showEl('imp-cross')
        console.log(answers)
        console.log(times)
        end=performance.now()
        console.log('i: wrong', Math.ceil((end-start)*1000)/1000)
        times.push(Math.ceil((start-end)*1000)/1000)
        answers.push(0)
        return;
    }

    hideEl('imp-cross')
    end=performance.now()
    console.log('i', Math.ceil((end-start)*1000)/1000)
    if (
        test==0
        || ( test==20 && set==2)
        || ( test==40 && set==3)
        || ( test==80 && set==4)
        || (test==100 && set==5)
    )
        err=true
    if (!err) {
        times.push(Math.ceil((end-start)*1000)/1000)
        answers.push(1)
    }
    console.log(answers)
    console.log(times)
    err=false

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

function postImplicitToGoogle(){
    var id = (window.location).toString().split('#')[1];
    var ans = times.join(", ");
    $.ajax({
                url: "https://docs.google.com/forms/d/14fAyDloQJrVe6462PE_liiTmih6DyCPK8JauuIVE3gs/formResponse",
                data: { 
                    "entry.715380020": id,
                    "entry.1912938860": ans
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                         alert("Error 0");
                        window.location.replace("../translation/index.html#"+id);
                    },
                    200: function () {
                         alert("Success 200");
                        window.location.replace("../translation/index.html#"+id);
                    }
                }
    });
    window.location.replace("../translation/index.html#"+id);
}
