function start() {
    var myWindow = window.open("details/index.html", "", "scrollbars=yes, resizable=yes");
}

function postContactToGoogle() {
		// alert("called");
	var gender = "dummy"; var nationality = "dummy"; var age = "dummy"; var faculty = "dummy"; var city = "dummy";
        gender = $('input[name="gender"]:checked').val();
        nationality = $('input[name="nat"]:checked').val();
        age = $('input[name="age"]:checked').val();
        faculty = $('input[name="fac"]:checked').val();
        city = $('input[name="city"]:checked').val();
        var id = Math.floor((Math.random() * 1000000) + 1);
        if (gender == undefined) {
    		alert("1")
	}
	else if(gender == 'undefined') {
	    	alert("2")
	}
        if(1){
            	//alert(gender);
                $.ajax({
                    url: "https://docs.google.com/forms/d/1IB8Ffk0TcJHu8mmFOLAtJtuF7LDqbcMCS95-RCB3n14/formResponse",
                    data: { "entry.1871888126": gender,
                    "entry.921556252": nationality, "entry.755141542":
                    age, "entry.61238065": faculty, "entry.1463185923": city, "entry.530096389": id },
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function () {
                            //alert("0");
                            window.location.replace("../instructions/index.html#"+id);
                        },
                        200: function () {
                            //alert("200");
                            window.location.replace("../instructions/index.html#"+id);
                        }
                    }
                });
                // window.location.replace("../instructions/index.html#"+id);
        }
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
        var Q = Q01+","+Q02+","+Q03+","+Q04+","+Q05+","+Q06+","+Q07+","+Q08+","+Q09+","+Q10+","+Q11+","+Q12+","+Q13+","+Q14+","+Q15+","+Q16+","+Q17+","+Q18+","+Q19+","+Q20+","+Q21+","+Q22+","+Q23+","+Q24+","+Q25+","+Q26+","+Q27+","+Q28+","+Q29+","+Q30+","+Q31+","+Q32+","+Q33+","+Q34;
        var array = Q.split(",");
        var id = (window.location).toString().split('#')[1];
        if(validateForm(array)){
         // alert(Q34);
            $.ajax({
                url: "https://docs.google.com/forms/d/1kJzgutXoCCJ-SCL_I6ONmLsKO3xZvTdvlywzmjlQQdo/formResponse",
                data: { 
                    "entry.1129400515": id,
                    "entry.426332218": Q
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
            window.location.replace("../scenarios1/index.html#"+id);
        }
}

function postScenario1ToGoogle() {
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
        var Q = Q01+","+Q02+","+Q03+","+Q04+","+Q05+","+Q06+","+Q07+","+Q08+","+Q09+","+Q10+","+Q11+","+Q12+","+Q13+","+Q14+","+Q15+","+Q16+","+Q17+","+Q18+","+Q19+","+Q20+","+Q21+","+Q22+","+Q23+","+Q24+","+Q25+","+Q26+","+Q27+","+Q28+","+Q29+","+Q30;
        var array = Q.split(",");
        var id = (window.location).toString().split('#')[1];
        if(validateForm(array)){
         // alert(Q34);
            $.ajax({
                url: "https://docs.google.com/forms/d/1WHU61xX_ZN9c7QDVOLu0GU2IjbuD3UPYE2NyHZznz4g/formResponse",
                data: { 
                    "entry.1426726444": id,
                    "entry.1874854669": Q
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        // alert("Error 0");
                        window.location.replace("../scenarios2/index.html#"+id);
                    },
                    200: function () {
                         // alert("Success 200");
                        window.location.replace("../scenarios2/index.html#"+id);
                    }
                }
            });
            window.location.replace("../scenarios2/index.html#"+id);
        }
}

function postScenario2ToGoogle() {
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
        var Q = Q01+","+Q02+","+Q03+","+Q04+","+Q05+","+Q06+","+Q07+","+Q08+","+Q09+","+Q10+","+Q11+","+Q12+","+Q13+","+Q14+","+Q15;
        var array = Q.split(",");
        var id = (window.location).toString().split('#')[1];
        if(validateForm(array)){
         // alert(Q34);
            $.ajax({
                url: "https://docs.google.com/forms/d/1kUol1t5StQozVG6E8N_Vp-bQweiE17esELapKGeC2sU/formResponse",
                data: { 
                    "entry.782870021": id,
                    "entry.1884208355": Q
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        // alert("Error 0");
                        window.location.replace("../thanks/index.html");
                    },
                    200: function () {
                        // alert("Success 200");
                        window.location.replace("../thanks/index.html");
                    }
                }
            });
            window.location.replace("../thanks/index.html");
        }
}

function end(){
    window.open('','_self').close();
}

function validateForm(fields)
{
  var i, l = fields.length;
  var fieldname;
  for (i = 0; i < l; i++) {
    fieldname = fields[i];
    if (fieldname == undefined) {
      alert("සියල්ල සලකුණු කල යුතුයි");
      return false;
    }
    else if(fieldname == 'undefined') {
      alert("සියල්ල සලකුණු කල යුතුයි");
      return false;
    }
  }
  return true;
}
