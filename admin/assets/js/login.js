var accounts = [
{
    name_account: "admin",
    pw_account: "123"
}
]
function check(name_account, pw_account)
{
    for (let i = 0;i<accounts.length;i++)
    {
        if(accounts[i].name_account==name_account && accounts[i].pw_account==pw_account)
            return true
    }
            return false 
    }
function checkLogin()
{
    event.preventDefault()
    var name_account = FormLogin.exampleUserName1.value
    var pw_account = FormLogin.exampleInputPassword.value
    if(check(name_account, pw_account))
    {
        location.href = "account.html"
    }
    else
    {
       alert("Sai mật khẩu và tài khoản. Vui lòng nhập lại") 
    }
}
