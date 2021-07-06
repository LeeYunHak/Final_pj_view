var addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click',function(){

    var pr = document.getElementsByClassName('resume-list-content')[0];
    
    var div = document.createElement('div');
    div.className = 'resume-item';

    var div2 = document.createElement('div');
    div2.className = 'resume-box';
    div.append(div2);

    var div3 = document.createElement('div');
    div3.className = 'resume-preview';
    div2.append(div3);

    var h3 = document.createElement('h3');
    h3.className = 'writing';
    h3.innerText = '이윤학'; //여기에 이력서 제목 이엘로 넣기
    div3.append(h3);

    var p = document.createElement('p');
    p.className = 'date';
    p.innerText = '2021.07.01' //여기에 작성일 이엘로 
    div3.append(p);

    var div4 = document.createElement('div');
    div4.className = 'resume-info';
    div2.append(div4);

    var div5 = document.createElement('div');
    div5.className = 'resume-status';
    div4.append(div5);

    var span = document.createElement('span');
    span.className = 'writing-span';
    span.innerText = '작성중';
    div5.append(span);

    var div6 = document.createElement('div');
    div6.className = 'dropdown-btn-group';
    div6.id = 'dropdown-btn-group'
    div4.append(div6);
    
    var btn = document.createElement('button');
    btn.id = 'dropdown-btn';
    btn.className = 'dropdown-btn';
    div6.append(btn);

    var i = document.createElement('i');
    i.className = 'dr-icon';
    btn.append(i);

    var ul = document.createElement('ul');
    ul.className = 'dropdown-menu';
    ul.id= 'dropdown-menu';

    var li1 = document.createElement('li');
    var a1 = document.createElement('a');
    a1.className = 'gr-a';
    a1.innerText = '이름 변경';
    a1.href = '#'; //이엘로 요청주소?
    li1.append(a1);
    ul.append(li1);

    var li2 = document.createElement('li');
    var a2 = document.createElement('a');
    a2.className = 'gr-a';
    a2.innerText = '다운로드';
    a2.href = '#'; // 요청주소?

    li2.append(a2);
    ul.append(li2)

    var li3 = document.createElement('li');
    var a3 = document.createElement('a');
    a3.className = 'gr-a';
    a3.innerText = '삭제';
    a3.href = '#'; //요청주소 ?

    li3.append(a3);
    ul.append(li3)

    div6.append(ul);

    pr.append(div);
    
    drbtn = document.getElementById('dropdown-btn');
    dr = document.getElementsByClassName('.dropdown-btn-group')

    // drbtn.addEventListener('click', function(){
    //     dr.style.display = 'block'
    // });
    document.getElementById('dropdown-btn').addEventListener('click', function(){
        cli('dropdown-menu')
    })
    drbtn.addEventListener('click',function(){
        if(ul.style.display='block'){
            ul.style.display='none';
        }
    })
    // location.href='CV-write.html'
});

function cli(id){
    var btn3 = document.getElementById(id);

    btn3.setStyle({
        zindex: 1,
        display: 'block'
    });
};

Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};


addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(){
    location.href='CV-write.html'
},100000)

