/*북마크 모달창 띄우기*/
// function openModal(my_modal1){
//     document.get
//     $("#full").fadeIn(300);
//     $("."+my_modal1).fadeIn(300);
//   }  
//   $("#full, .Modal_close_btn1").on('click',function(){
//     $("#modal").fadeOut(300);
//     $(".my_modal1").fadeOut(300);
//   });

// $(function(){ 
//     $("#bookmarkbtn").click(function(){ 
//         $(".doc").fadeIn();
//     }); 
//     $(".my_modal1").click(function(){
//         $(".full").fadeOut(); 
//     }); 
// });

// $().ready(function() {
//     $("#modal_show").click(function() {
//         $("#my_modal1").modal("show");
//     });

//     $("#close_modal").click(function() {
//         $("#emy_modal1").modal("hide");
//     });
// });


/*북마크클릭시 색변경 */
$('#bm').on({
    'click': function(){ 
        $('#bookmarkimg').attr('src','images/bookmark2.png'); 
    } 
});

// $(document).ready(function(){
    //     /*img1을 클릭했을 때 img2를 보여줌*/
    // $("#bm").click(function(){
    //     $("#bookmarkimg2").hide();
    //     $("#bookmarkimg1").show();
    // });
    
    //     /*img2를 클릭했을 때 img1을 보여줌*/
//     $("#img2").click(function(){
//         $("#img1").show();
//         $("#img2").hide();
//     });
// });