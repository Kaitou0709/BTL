$(document).ready(function () {
    $("#Form_Account").validate
        ({
            rules:
            {
                exampleUserName1:
                {
                    required: true,
                },
                exampleInputPassword:
                {
                    required: true,
                }
            },
            messages:
            {
                exampleUserName1:
                {
                    required: "Vui lòng nhập tên đăng nhập",
                },
                exampleInputPassword:
                {
                    required: "Vui lòng nhập mật khẩu",
                }
            }
        });
});
id = 1
function add_account()
{
    event.preventDefault()
    let name_account = FormAccount.exampleUserName1.value
    let pw_account = FormAccount.exampleInputPassword.value
    if(name_account.length==0 || pw_account.length==0)
    {
        return 0
    }
    else
    {
    Account_content = document.getElementById("Account_content")
    row = Account_content.insertRow(-1);
    row.insertCell(0).innerHTML=id
    row.insertCell(1).innerHTML=name_account
    row.insertCell(2).innerHTML=pw_account
    row.insertCell(3).innerHTML= `<span onclick="edit_account(this)"><i class="fa-solid fa-file-pen"></i><span>`
    row.insertCell(4).innerHTML= `<span onclick="delete_account(this)"><i class="fa-solid fa-trash-can"></i><span>`
    id++
    }
}
function delete_account(account)
{
    let row = account.parentElement.parentElement
    row.remove()
}
function edit_account(account)
{
    let row = account.parentElement.parentElement.children
    idChangeAccount = row[0].innerHTML
    FormAccount.exampleUserName1.value = row[1].innerHTML
    FormAccount.exampleInputPassword.value = row[2].innerHTML
}
function button_edit_account()
{
    let name_account = FormAccount.exampleUserName1.value
    let pw_account = FormAccount.exampleInputPassword.value
    Account_content = document.getElementById("Account_content")
    for(var i = 0;i<Account_content.children.length;i++)
    {
    if(Account_content.children[i].children[0].innerHTML==idChangeAccount)
    {
        Account_content.children[i].children[1].innerHTML = name_account
        Account_content.children[i].children[2].innerHTML = pw_account
        break
    }
    }
}