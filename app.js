function main(){
    $("#skill_1_left").hide();
    $("#skill_1_right").hide();
    $("#skill_2_left").hide();
    $("#skill_2_right").hide();
    $("#skill_3_left").hide();
    $("#skill_3_right").hide();
    $("#skill_4_left").hide();
    $("#skill_4_right").hide();
    $("#skill_4_heading").hide();
    $("#skill_4_hr").hide();
    document.documentElement.style.setProperty('--animate-duration', '2s');
window.addEventListener("scroll", myScrollFunc);

}


var myScrollFunc = function () {
        var y = window.scrollY;
        console.log(y)
        if (y >= 200) {
            $("#skill_1_left").show();
            $("#skill_1_right").show();
        }
        if (y >= 950) {
            $("#skill_2_left").show();
            $("#skill_2_right").show();
        }
        if (y >= 1250) {
            $("#skill_3_left").show();
            $("#skill_3_right").show();
        }
        if (y >= 2200) {
            $("#skill_4_hr").show();
            $("#skill_4_heading").show();
            $("#skill_4_left").show();
            $("#skill_4_right").show();
        }
        if (y <= 2200) {
            $("#skill_4_left").hide();
            $("#skill_4_right").hide();
            $("#skill_4_heading").hide();
            $("#skill_4_hr").hide();
        }
        if (y <= 1250) {
            $("#skill_3_left").hide();
            $("#skill_3_right").hide();
        }
        if (y <= 950) {
            $("#skill_2_left").hide();
            $("#skill_2_right").hide();
        }
        if (y <= 200) {
            $("#skill_1_left").hide();
            $("#skill_1_right").hide();
        }
}
main()
