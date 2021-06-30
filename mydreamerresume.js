/*이력서를 선택하면 메세지가 바뀜*/
function changeByJS() {
    let x = document.getElementsByClassName("warn")[0];
    x.innerText="선택한 이력서의 내용으로 프로필이 교체됩니다."; 
    x.style.color="red";
 }
// function changeByJS() {
//     let x = document.getElementsByClassName("mo_name")[0];
//     x.innerText="선택한 이력서의 내용으로 프로필이 교체됩니다."; 
//     x.style.color="red";
//  }


document.getElementById('resumeselectbtn').addEventListener('click', function() {
    modal('my_modal');
});

function modal (id){
    var zIndex = 9999;
    var modal = document.getElementById(id);

    //모달 div 뒤에 레이어
    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.4)'
    });
    document.body.append(bg);
    //닫기 버튼 까만 레이어 모달div 지우기
    modal.querySelector('.Modal_close_btn').addEventListener('click', function(){
        bg.remove();
        modal.style.display = 'none';
    });
    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}
// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};
