$(document).ready(function(){
    $("#Login-Form").validate
({
    rules:
    {
        exampleUserName1:
        {
            required:true,
        },
        exampleInputPassword:
        {
            required:true,
        },
    },
    messages:
    {
        exampleUserName1:
        {
            required: "Vui lòng nhập tên đăng nhập",
        },
        exampleInputPassword:
        {
            required:"Vui lòng nhập password",
        },
    }
});
});