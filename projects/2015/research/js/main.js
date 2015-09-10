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
            /*$.ajax({
                url: "https://docs.google.com/forms/d/1L9SncZIaGJCO2aFEWqsBEVOW-26ZVjHJlvZkhNKe8gg/formResponse",
                data: { "entry.1406130434": gender,
                "entry.405274992": nationality, "entry.911235950":
                university, "entry.1366992667": faculty, "entry.87725209": year, "entry.1878655020": id },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        // alert("0");
                        window.location.replace("ThankYou.html");
                    },
                    200: function () {
                        // alert("200");
                        window.location.replace("ThankYou.html");
                    }
                }
            });*/
            window.location.replace("../instructions/index.html#"+id);
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
                url: "https://docs.google.com/forms/d/1XLDiXyjO1jcuLkrzlFMGGJWsK0btmvGnbIE0TsMnASY/formResponse",
                data: { 
                    "entry.1938129136": id,
                    // "entry.1257134574": Q01,
                    // "entry.990806122": Q02, 
                    // "entry.1715023159": Q03, 
                    // "entry.1478281001": Q04, 
                    // "entry.717030021": Q05,
                    // "entry.1787859164": Q06,
                    // "entry.1847886742": Q07, 
                    // "entry.73379146": Q08, 
                    // "entry.1383086265": Q09, 
                    // "entry.1294203626": Q10,
                    // "entry.1061195456": Q11,
                    // "entry.1338914658": Q12, 
                    // "entry.23628511": Q13, 
                    // "entry.365421779": Q14, 
                    // "entry.517382607": Q15,
                    // "entry.1355096368": Q16,
                    // "entry.1588564186": Q17, 
                    // "entry.2114137528": Q18, 
                    // "entry.1000525453": Q19, 
                    // "entry.965029355": Q20,
                    // "entry.1316189115": Q21,
                    // "entry.1214979730": Q22, 
                    // "entry.5430431": Q23, 
                    // "entry.1809279893": Q24, 
                    // "entry.1639678638": Q25,
                    // "entry.1678098973": Q26,
                    // "entry.781692084": Q27, 
                    // "entry.1899939120": Q28, 
                    // "entry.1632590199": Q29, 
                    // "entry.1453249927": Q30,
                    // "entry.1803770133": Q31,
                    // "entry.1978393813": Q32, 
                    // "entry.295473656": Q33, 
                    "entry.442765408": Q34 
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                         alert("Error 0");
                        // window.location.replace("ThankYou.html");
                    },
                    200: function () {
                         alert("Success 200");
                        // window.location.replace("ThankYou.html");
                    }
                }
            });
            // window.location.replace("../instructions/index.html#"+id);
}