var userArray=[{
    userImage:"assets/profile.png",
    userName:"Abc xyz",
    userPhone:9999999999,
    userEmail:"abc.xyz@gmail.com",
    status:"online"
},{
    userImage:"assets/profile.png",
    userName:"Abc xyz",
    userPhone:9999999999,
    userEmail:"abc.xyz@gmail.com",
    status:"online"
},{
    userImage:"assets/profile.png",
    userName:"Abc xyz",
    userPhone:9999999999,
    userEmail:"abc.xyz@gmail.com",
    status:"online"
},{
    userImage:"assets/profile.png",
    userName:"Abc xyz",
    userPhone:9999999999,
    userEmail:"abc.xyz@gmail.com",
    status:"online"
},{
    userImage:"assets/profile.png",
    userName:"Abc xyz",
    userPhone:9999999999,
    userEmail:"abc.xyz@gmail.com",
    status:"online"
},{
    userImage:"assets/profile.png",
    userName:"Abc xyz",
    userPhone:9999999999,
    userEmail:"abc.xyz@gmail.com",
    status:"online"
},{
    userImage:"assets/profile.png",
    userName:"Abc xyz",
    userPhone:9999999999,
    userEmail:"abc.xyz@gmail.com",
    status:"online"
},{
    userImage:"assets/profile.png",
    userName:"Abc xyz",
    userPhone:9999999999,
    userEmail:"abc.xyz@gmail.com",
}]
$(document).ready(function(){
    renderUserList();
    eventBinding();
})
function eventBinding(){
    $(document).on("click",".showUserDetails",function(){
        var thisObj=$(this);
        const index=thisObj.attr("data-index");
        renderUserDetail(userArray[index]);
    }) 
    $(document).on("keydown",".userChatsection input",function(e){
        var thisObj=$(this);
        const value=thisObj.val();
        if(e.keyCode==13 && value){
            createChatList(value.trim())
        }
    })
}
function createChatList(value){
    if(value){
        $(".userChat").append(`<div class="alert alert-primary" role="chat">
    ${value}
  </div>`); 
    }
}
function renderUserList(){
    let userHtml=""
    userArray.forEach((element,index) => {
        userHtml=userHtml+'<div class="row m-0 mt-3 showUserDetails" data-index="'+index+'"><div class="col-sm-4 py-3 list-img-container"><img src="assets/profile.png" alt="'+element.userName+'"></div><div class="col-sm-8 py-3 offline"><div class="section"><h4 class="userName mb-3">'+element.userName+'</h4><p class="message">How are you?</p></div></div></div>'
    });
    $("#userList").empty().append(userHtml)
}
function renderUserDetail(userObj){
    let userDetailHtml=`   <div class="detail-img-container my-4 p-3">
    <img src="${userObj.userImage}" alt="application logo">
</div>
<section class="text-center">
    <h5 class="my-3">${userObj.userName}</h5>
    <div class="section-body">
        <div class="d-flex m2">
            <span class="text-capitalize mr-4">Phone</span>
            <span>${userObj.userPhone}</span>
        </div>
        <div class="d-flex m2">
            <span class="text-capitalize mr-4">Email</span>
            <span>${userObj.userEmail}</span>
        </div>
    </div>
</section>`
$("#userDetails").find(".userDetailSection").empty().append(userDetailHtml).show();
}