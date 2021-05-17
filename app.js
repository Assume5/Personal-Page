function main(){
    $("#skill_1_left").css('visibility', 'hidden');
    $("#skill_1_right").css('visibility', 'hidden');
    $("#skill_2_left").css('visibility', 'hidden');
    $("#skill_2_right").css('visibility', 'hidden');
    $("#skill_3_left").css('visibility', 'hidden');
    $("#skill_3_right").css('visibility', 'hidden');
    $("#skill_4_left").css('visibility', 'hidden');
    $("#skill_4_right").css('visibility', 'hidden');
    $("#skill_4_heading").css('visibility', 'hidden');
    $("#skill_4_hr").css('visibility', 'hidden');
    $("#project_content").css('visibility', 'hidden');
    
    document.documentElement.style.setProperty('--animate-duration', '2s');
window.addEventListener("scroll", myScrollFunc);

}
var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 400) {
            $('#skill_1_left').css('visibility', "visible");
            $("#skill_1_right").css('visibility', 'visible');
            document.getElementById("skill_1_left").className="col-md-6 animate__animated animate__fadeInLeft"
            document.getElementById("skill_1_right").className='col-md-6 animate__animated animate__fadeInRight'
        }
        if (y >= 850) {
            $("#skill_2_left").css('visibility', 'visible');
            $("#skill_2_right").css('visibility', 'visible');
            document.getElementById("skill_2_left").className="col-md-6 animate__animated animate__fadeInLeft"
            document.getElementById("skill_2_right").className='col-md-6 animate__animated animate__fadeInRight'
        }
        if (y >= 1250) {
            $("#skill_3_left").css('visibility', 'visible');
            $("#skill_3_right").css('visibility', 'visible');
            document.getElementById("skill_3_left").className="col-md-6 animate__animated animate__fadeInLeft"
            document.getElementById("skill_3_right").className='col-md-6 animate__animated animate__fadeInRight'
        }
        if (y >= 2200) {
            $("#skill_4_hr").css('visibility', 'visible');
            $("#skill_4_heading").css('visibility', 'visible');
            $("#skill_4_left").css('visibility', 'visible');
            $("#skill_4_right").css('visibility', 'visible');
            document.getElementById("skill_4_left").className="col-md-6 animate__animated animate__fadeInLeft"
            document.getElementById("skill_4_right").className='col-md-6 animate__animated animate__fadeInRight'
        }
        if (y >= 2500) {
            $("#project_content").css('visibility', 'visible');
            document.getElementById("project_content").className="content animate__animated animate__fadeInLeft"
        }
        if (y <= 2500) {
            $("#project_content").css('visibility', 'hidden');
            document.getElementById("project_content").className=""

        }
        if (y <= 2200) {
            $("#skill_4_left").css('visibility', 'hidden');
            $("#skill_4_right").css('visibility', 'hidden');
            $("#skill_4_heading").css('visibility', 'hidden');
            $("#skill_4_hr").css('visibility', 'hidden');
            document.getElementById("skill_4_left").className=""
            document.getElementById("skill_4_right").className=''
        }
        if (y <= 1250) {
            $("#skill_3_left").css('visibility', 'hidden');
            $("#skill_3_right").css('visibility', 'hidden');
            document.getElementById("skill_3_left").className=""
            document.getElementById("skill_3_right").className=''
        }
        if (y <= 950) {
            $("#skill_2_left").css('visibility', 'hidden');
            $("#skill_2_right").css('visibility', 'hidden');
            document.getElementById("skill_2_left").className=""
            document.getElementById("skill_2_right").className=''
        }
        if (y <= 200) {
            $("#skill_1_left").css('visibility', 'hidden');
            $("#skill_1_right").css('visibility', 'hidden');
            document.getElementById("skill_1_left").className=""
            document.getElementById("skill_1_right").className=''
        }
}
var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
if(!isMobile) main()
