function start() {
    var myWindow = window.open("details/index.html", "", "scrollbars=yes, resizable=yes, width=600, height=500");
}

function postContactToGoogle() {
        var gender = $('input[name="gender"]:checked').val();
        var nationality = $('input[name="nat"]:checked').val();
        var university = $('input[name="uni"]:checked').val();
        var faculty = $('input[name="fac"]:checked').val();
        var year = $('input[name="yr"]:checked').val();
        var id = Math.floor((Math.random() * 100000) + 1); 

            $.ajax({
                url: "https://docs.google.com/forms/d/1L9SncZIaGJCO2aFEWqsBEVOW-26ZVjHJlvZkhNKe8gg/formResponse",
                data: { "entry_1406130434": gender,
                "entry_405274992": nationality, "entry_911235950":
                university, "entry_1366992667": faculty, "entry_87725209": year, "entry_1878655020": id },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        window.location.replace("ThankYou.html");
                    },
                    200: function () {
                        window.location.replace("ThankYou.html");
                    }
                }
            });
        }