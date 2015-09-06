function start() {
    var myWindow = window.open("details/index.html", "", "scrollbars=yes, resizable=yes, width=600, height=500");
}

function postContactToGoogle() {
		alert("called");
        var gender = $('input[name="gender"]:checked').val();
        var nationality = $('input[name="nat"]:checked').val();
        var university = $('input[name="uni"]:checked').val();
        var faculty = $('input[name="fac"]:checked').val();
        var year = $('input[name="yr"]:checked').val();
        var id = Math.floor((Math.random() * 100000) + 1); 
        alert(id);
            $.ajax({
                url: "https://docs.google.com/forms/d/1L9SncZIaGJCO2aFEWqsBEVOW-26ZVjHJlvZkhNKe8gg/formResponse",
                data: { "entry.1406130434": gender,
                "entry.405274992": nationality, "entry.911235950":
                university, "entry.1366992667": faculty, "entry.87725209": year, "entry.1878655020": id },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        alert("0");
                    },
                    200: function () {
                        alert("200");
                    }
                }
            });
        }