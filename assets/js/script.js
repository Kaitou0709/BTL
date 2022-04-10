$(document).ready(function(){
    $("#form-contact").validate
({
    rules:
    {
        exampleInputName1:
        {
            required:true,
        },
        exampleInputEmail1:
        {
            required:true,
            email: true
        },
        exampleFormControlTextarea1:
        {
            required:true,
        }
    },
    messages:
    {
        exampleInputName1:
        {
            required: "Vui lòng nhập tên của bạn",
        },
        exampleInputEmail1:
        {
            required:"Vui lòng nhập Email",
            email:"Vui lòng nhập đúng dạng email"
        },
        exampleFormControlTextarea1:
        {
            required:"Vui lòng nhập lời nhắn",
        }
    }
});
});