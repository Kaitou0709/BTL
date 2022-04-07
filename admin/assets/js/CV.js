$(document).ready(function () {
    $("#Form_Introduce_Group").validate
        ({
            rules:
            {
                exampleFormControlTextarea1:
                {
                    required: true,
                },
            },
            messages:
            {
                exampleFormControlTextarea1:
                {
                    required: "Vui lòng nhập nội dung",
                },
            }
        });
        $("#Form_Introduce_Personal").validate
        ({
            rules:
            {
                exampleFormControlTextarea2:
                {
                    required: true,
                },
                exampleUserName:
                {
                    required: true,
                }
            },
            messages:
            {
                exampleFormControlTextarea2:
                {
                    required: "Vui lòng nhập nội dung",
                },
                exampleUserName:
                {
                    required: "Vui lòng nhập tên",
                }
            }
        });
});
idIntroduceGroup = 1
function add_Introduce_Group()
{
    event.preventDefault()
    let content_Introduce_Group = FormIntroduceGroup.exampleFormControlTextarea1.value
    if (content_Introduce_Group.length==0)
    {
        return 0
    }
    else
    {
        Introduce_Group_content = document.getElementById("Introduce_Group_content")
        row = Introduce_Group_content.insertRow(-1);
        row.insertCell(0).innerHTML=idIntroduceGroup
        row.insertCell(1).innerHTML=content_Introduce_Group
        row.insertCell(2).innerHTML= `<span onclick="edit_Introduce_Group(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(3).innerHTML= `<span onclick="delete_Introduce_Group(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idIntroduceGroup++
    }
}
function delete_Introduce_Group(IntroduceGroup)
{
    let row = IntroduceGroup.parentElement.parentElement
    row.remove()
}
function edit_Introduce_Group(IntroduceGroup)
{
    let row = IntroduceGroup.parentElement.parentElement.children
    idChangeIntroduceGroup=row[0].innerHTML
    FormIntroduceGroup.exampleFormControlTextarea1.value = row[1].innerHTML
}
function button_edit_Introduce_Group()
{
    let content_Introduce_Group = FormIntroduceGroup.exampleFormControlTextarea1.value
    Introduce_Group_content = document.getElementById("Introduce_Group_content")
    for(var i = 0;i<Introduce_Group_content.children.length;i++)
    {
    if(Introduce_Group_content.children[i].children[0].innerHTML==idChangeIntroduceGroup)
    {
        Introduce_Group_content.children[i].children[1].innerHTML = content_Introduce_Group
        break
    }
    }
}
idIntroducePersonal = 1
function add_Introduce_Personal()
{
    event.preventDefault()
    let name_Introduce_Personal = FormIntroducePersonal.exampleUserName.value
    let file_Introduce_Personal = FormIntroducePersonal.formFileMultiple.value
    let content_Introduce_Personal = FormIntroducePersonal.exampleFormControlTextarea2.value
    if (content_Introduce_Personal.length==0 || name_Introduce_Personal.length==0)
    {
        return 0
    }
    else
    {
        Introduce_Group_content = document.getElementById("Introduce_Personal_content")
        row = Introduce_Group_content.insertRow(-1);
        row.insertCell(0).innerHTML=idIntroducePersonal
        row.insertCell(1).innerHTML=name_Introduce_Personal
        row.insertCell(2).innerHTML=file_Introduce_Personal
        row.insertCell(3).innerHTML=content_Introduce_Personal
        row.insertCell(4).innerHTML= `<span onclick="edit_Introduce_Personal(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(5).innerHTML= `<span onclick="delete_Introduce_Personal(this)"><i class="fa-solid fa-trash-can"></i><span>`
        row.insertCell(6).innerHTML=`<a class="btn btn-primary" href="CV_content.html" role="button">Link</a>`
        idIntroducePersonal++
    }
}
function delete_Introduce_Personal(IntroducePersonal)
{
    let row = IntroducePersonal.parentElement.parentElement
    row.remove()
}
function edit_Introduce_Personal(IntroducePersonal)
{
    let row = IntroducePersonal.parentElement.parentElement.children
    idChangeIntroducePersonal = row[0].innerHTML
    FormIntroducePersonal.exampleUserName.value = row[1].innerHTML
    FormIntroducePersonal.exampleFormControlTextarea2.value = row[3].innerHTML
}
function button_edit_Introduce_Personal()
{
    let name_Introduce_Personal = FormIntroducePersonal.exampleUserName.value
    let file_Introduce_Personal = FormIntroducePersonal.formFileMultiple.value
    let content_Introduce_Personal = FormIntroducePersonal.exampleFormControlTextarea2.value
    Introduce_Personal_content = document.getElementById("Introduce_Personal_content")
    for(var i = 0;i<Introduce_Personal_content.children.length;i++)
    {
    if(Introduce_Personal_content.children[i].children[0].innerHTML==idChangeIntroducePersonal)
    {
        Introduce_Personal_content.children[i].children[1].innerHTML = name_Introduce_Personal
        Introduce_Personal_content.children[i].children[2].innerHTML = file_Introduce_Personal
        Introduce_Personal_content.children[i].children[3].innerHTML = content_Introduce_Personal
        break
    }
    }
}