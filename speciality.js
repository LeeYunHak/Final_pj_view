/*네비바*/
document.getElementById('nav3-2-Select').addEventListener('mouseover', function() {

    document.getElementsByClassName('opennavi')[0].style.display ='block'
});
document.getElementsByClassName('opennavi')[0].addEventListener('mouseover', function() {

    document.getElementsByClassName('opennavi')[0].style.display ='block'
});
document.getElementsByClassName('opennavi')[0].addEventListener('mouseout', function() {

    document.getElementsByClassName('opennavi')[0].style.display ='none'
});

document.getElementById('nav3-7-MyPage').addEventListener('click', function() {

    document.getElementsByClassName('arrow_box')[0].style.display ='block'
});
document.getElementsByClassName('arrow_box')[0].addEventListener('mouseover', function() {

    document.getElementsByClassName('arrow_box')[0].style.display ='block'
});
document.getElementsByClassName('arrow_box')[0].addEventListener('mouseout', function() {

    document.getElementsByClassName('arrow_box')[0].style.display ='none'
});

/*셀렉트박스 분류 */
function jobKindChange(e) {
    var detail_a = ["직군을 선택해 주세요"];
    var detail_b = ["감독", "조감독", "각본", "프로듀서", "연출팀"];
    var detail_c = ["조명팀", "발전차"];
	var detail_d = ["음향팀", "동시녹음팀"];
	var detail_e = ["촬영팀", "그립팀"];
	var detail_f = ["특수효과팀"];
	var detail_g = ["제작팀", "캐스팅 담당팀"];
	var detail_h = ["주연", "조연", "스턴트", "단역"];
	var detail_i = ["미술팀", "미술감독", "소품팀"];
	var detail_j = ["헤어팀", "의상팀", "분장팀"];
    var target = document.getElementById("jobKindD");

    if(e.value == "a") var d = detail_a;
    else if(e.value == "b") var d = detail_b;
	else if(e.value == "c") var d = detail_c;
	else if(e.value == "d") var d = detail_d;
	else if(e.value == "e") var d = detail_e;
	else if(e.value == "f") var d = detail_f;
	else if(e.value == "g") var d = detail_g;
	else if(e.value == "h") var d = detail_h;
	else if(e.value == "i") var d = detail_i;
	else if(e.value == "j") var d = detail_j;


    target.options.length = 0;

    for (x in d) {
        var opt = document.createElement("option");
        opt.value = d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }   
}

// var jobKindU = document.getElementById('jobKindU').value;
var jobKindU = document.getElementById('jobKindU');

if(jobKindU.value == 'b'){
    document.getElementById('test').value =num1;
}


var val = jobKindU.options[jobKindU.selectedIndex].value;

console.log(val);

document.getElementById('1').addEventListener('click',function(){
    document.getElementById('test').value =num1;
})

