$(document).ready(function() {
    $("#skill_2_left").hide();
    $("#skill_2_right").hide();
    $("#skill_3_left").hide();
    $("#skill_3_right").hide();
    $("#skill_4_left").hide();
    $("#skill_4_right").hide();
    var topOfOthDiv1 = $("#skill_1_left").offset().top;
    var topOfOthDiv2 = $("#skill_2_left").offset().top;

    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv1) { //scrolled past the other div?
            $("#skill_2_left").show();
            $("#skill_2_right").show();        
        }
    });
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv2) { //scrolled past the other div?
            $("#skill_3_left").show();
            $("#skill_3_right").show();        
        }
    });
});
// let topOfOthDivProfile = $("#profile").offset().top;
// let topOfOthDivSkill_1 = $("#skill_1_left").offset().top;
// let topOfOthDivSkill_2 = $("#skill_2_left").offset().top;
// let topOfOthDivSkill_3 = $("#skill_3_left").offset().top;

// $(window).scroll(function() {
//     if($(window).scrollTop() > topOfOthDivProfile) { //scrolled past the other div?
//         $("#skill_1_left").show();
//         $("#skill_1_right").show();        
//     }
//     else if($(window).scrollTop() > topOfOthDivSkill_1) { //scrolled past the other div?
//         $("#skill_2_left").show();
//         $("#skill_2_right").show();        
//     }
//     else if($(window).scrollTop() > topOfOthDivSkill_2) { //scrolled past the other div?
//         $("#skill_3_left").show();
//         $("#skill_3_right").show();        
//     }
//     else if($(window).scrollTop() > topOfOthDivSkill_3) { //scrolled past the other div?
//         $("#skill_4_left").show();
//         $("#skill_4_right").show();        
//     }
// });