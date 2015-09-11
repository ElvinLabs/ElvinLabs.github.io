function start() {
    var myWindow = window.open("details/index.html", "", "scrollbars=yes, resizable=yes, width=900, height=500");
}

function postContactToGoogle() {
		// alert("called");
        var gender = $('input[name="gender"]:checked').val();
        var nationality = $('input[name="nat"]:checked').val();
        var university = $('input[name="uni"]:checked').val();
        var faculty = $('input[name="fac"]:checked').val();
        var year = $('input[name="yr"]:checked').val();
        var id = Math.floor((Math.random() * 1000000) + 1); 
        // alert(id);
            $.ajax({
                url: "https://docs.google.com/forms/d/1L9SncZIaGJCO2aFEWqsBEVOW-26ZVjHJlvZkhNKe8gg/formResponse",
                data: { "entry.1406130434": gender,
                "entry.405274992": nationality, "entry.911235950":
                university, "entry.1366992667": faculty, "entry.87725209": year, "entry.1878655020": id },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        // alert("0");
                        window.location.replace("../instructions/index.html#"+id);
                    },
                    200: function () {
                        // alert("200");
                        window.location.replace("../instructions/index.html#"+id);
                    }
                }
            });
}

function startImplicit(){
    var id = (window.location).toString().split('#')[1];
    window.location.replace("../implicit/index.html#"+id);
}

function startTranslation(){
    var id = (window.location).toString().split('#')[1];
    window.location.replace("../translation/index.html#"+id);
}

function postTranslatonToGoogle() {
        // alert("called");
        var Q01 = $('input[name="q01"]:checked').val();
        var Q02 = $('input[name="q02"]:checked').val();
        var Q03 = $('input[name="q03"]:checked').val();
        var Q04 = $('input[name="q04"]:checked').val();
        var Q05 = $('input[name="q05"]:checked').val();
        var Q06 = $('input[name="q06"]:checked').val();
        var Q07 = $('input[name="q07"]:checked').val();
        var Q08 = $('input[name="q08"]:checked').val();
        var Q09 = $('input[name="q09"]:checked').val();
        var Q10 = $('input[name="q10"]:checked').val();
        var Q11 = $('input[name="q11"]:checked').val();
        var Q12 = $('input[name="q12"]:checked').val();
        var Q13 = $('input[name="q13"]:checked').val();
        var Q14 = $('input[name="q14"]:checked').val();
        var Q15 = $('input[name="q15"]:checked').val();
        var Q16 = $('input[name="q16"]:checked').val();
        var Q17 = $('input[name="q17"]:checked').val();
        var Q18 = $('input[name="q18"]:checked').val();
        var Q19 = $('input[name="q19"]:checked').val();
        var Q20 = $('input[name="q20"]:checked').val();
        var Q21 = $('input[name="q21"]:checked').val();
        var Q22 = $('input[name="q22"]:checked').val();
        var Q23 = $('input[name="q23"]:checked').val();
        var Q24 = $('input[name="q24"]:checked').val();
        var Q25 = $('input[name="q25"]:checked').val();
        var Q26 = $('input[name="q26"]:checked').val();
        var Q27 = $('input[name="q27"]:checked').val();
        var Q28 = $('input[name="q28"]:checked').val();
        var Q29 = $('input[name="q29"]:checked').val();
        var Q30 = $('input[name="q30"]:checked').val();
        var Q31 = $('input[name="q31"]:checked').val();
        var Q32 = $('input[name="q32"]:checked').val();
        var Q33 = $('input[name="q33"]:checked').val();
        var Q34 = $('input[name="q34"]:checked').val();
        var id = (window.location).toString().split('#')[1];
         // alert(Q34);
            $.ajax({
                url: "https://docs.google.com/forms/d/1hrxCOuZNO30EKOGMI9a3kgZ4M9DVaftFj1eaw2lzX28/formResponse",
                data: { 
                    "entry.1231102897": id,
                    "entry.1145627788": Q01,
                    "entry.1063036401": Q02, 
                    "entry.99503744": Q03, 
                    "entry.27329915": Q04, 
                    "entry.874539017": Q05,
                    /*"entry.1504474377": Q06,
                    "entry.244884792": Q07, 
                    "entry.943421634": Q08, 
                    "entry.1133563758": Q09, 
                    "entry.581674732": Q10,
                    "entry.1091644268": Q11,
                    "entry.536674163": Q12, 
                    "entry.23628511": Q13, 
                    "entry.365421779": Q14, 
                    "entry.685360834": Q15
                    "entry.1221279935": Q16,
                    "entry.1087670815": Q17, 
                    "entry.1060588509": Q18, 
                    "entry.1981006741": Q19, 
                    "entry.965029355": Q20,
                    "entry.404879522": Q21,
                    "entry.983957449": Q22, 
                    "entry.352790619": Q23, 
                    "entry.318772959": Q24, 
                    "entry.820554948": Q25,
                    "entry.1664099026": Q26,
                    "entry.984518721": Q27, 
                    "entry.1330830829": Q28, 
                    "entry.74245676": Q29, 
                    "entry.1020820635": Q30,
                    "entry.471808136": Q31,
                    "entry.309099364": Q32, 
                    "entry.295473656": Q33, 
                    "entry.869532277": Q34 */
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        // alert("Error 0");
                        window.location.replace("../scenarios1/index.html#"+id);
                    },
                    200: function () {
                         // alert("Success 200");
                        window.location.replace("../scenarios1/index.html#"+id);
                    }
                }
            });
            // window.location.replace("../instructions/index.html#"+id);
}

