$(document).ready(function () {
    $("#Form_Home_Content").validate
        ({
            rules:
            {
                exampleUserName1:
                {
                    required: true
                },
                exampleFormControlTextarea1:
                {
                    required: true,
                },
            },
            messages:
            {
                exampleUserName1:
                {
                    required: "Vui lòng nhập tên"
                },
                exampleFormControlTextarea1:
                {
                    required: "Vui lòng nhập nội dung",
                },
            }
        });
        $("#Form_About_Content").validate
        ({
            rules:
            {
                exampleFormControlTextarea2:
                {
                    required: true,
                },
            },
            messages:
            {
                exampleFormControlTextarea2:
                {
                    required: "Vui lòng nhập nội dung",
                },
            }
        });
        $("#Form_Education_Content").validate
        ({
            rules:
            {
                exampleIn1:
                {
                    required: true,
                },
                exampleLevel1:
                {
                    required: true,
                },
                exampleTime1:
                {
                    required: true,
                },
                exampleFormControlTextarea3:
                {
                    required: true,
                },
            },
            messages:
            {
                exampleIn1:
                {
                    required: "Vui lòng nhập học tại đâu",
                },
                exampleLevel1:
                {
                    required: "Vui lòng nhập cấp học",
                },
                exampleTime1:
                {
                    required: "Vui lòng nhập thời gian học",
                },
                exampleFormControlTextarea3:
                {
                    required: "Vui lòng nhập nội dung",
                },
            }
        });
        $("#Form_Work_Resume_Content").validate
        ({
            rules:
            {
                exampleCompany1:
                {
                    required: true,
                },
                examplePosition1:
                {
                    required: true,
                },
                exampleTime2:
                {
                    required: true,
                },
                exampleFormControlTextarea4:
                {
                    required: true,
                },
            },
            messages:
            {
                exampleCompany1:
                {
                    required: "Vui lòng nhập tên công ty",
                },
                examplePosition1:
                {
                    required: "Vui lòng nhập vị trí làm việc",
                },
                exampleTime2:
                {
                    required: "Vui lòng nhập thời gian làm việc",
                },
                exampleFormControlTextarea4:
                {
                    required: "Vui lòng nhập nội dung",
                },
            }
        });
        $("#Form_Skill_Content").validate
        ({
            rules:
            {
                exampleFormControlTextarea5:
                {
                    required: true,
                },
            },
            messages:
            {
                exampleFormControlTextarea5:
                {
                    required: "Vui lòng nhập nội dung",
                },
            }
        });
        $("#Form_Skill_Bar_Content").validate
        ({
            rules:
            {
                exampleSkill1:
                {
                    required: true,
                },
                exampleCentSkill1:
                {
                    required: true,
                    number: true
                },
            },
            messages:
            {
                exampleSkill1:
                {
                    required: "Vui lòng nhập kỹ năng",
                },
                exampleCentSkill1:
                {
                    required: "Vui lòng nhập phần trăm thành thạo",
                    number : "Vui lòng nhập số"
                },
            }
        });
        $("#Form_Work_Content").validate
        ({
            rules:
            {
                exampleTitle1:
                {
                    required: true,
                },
                exampleFormControlTextarea6:
                {
                    required: true,
                },
            },
            messages:
            {
                exampleTitle1:
                {
                    required: "Vui lòng nhập tiêu đề hình ảnh",
                },
                exampleFormControlTextarea6:
                {
                    required: "Vui lòng nhập nội dung",
                },
            }
        });
        $("#Form_Testimonial_Content").validate
        ({
            rules:
            {
                exampleWho1:
                {
                    required: true,
                },
                exampleFormControlTextarea7:
                {
                    required: true,
                },
            },
            messages:
            {
                exampleWho1:
                {
                    required: "Vui lòng nhập câu nói của ai",
                },
                exampleFormControlTextarea7:
                {
                    required: "Vui lòng nhập nội dung",
                },
            }
        });
        $("#Form_Contact_Content").validate
        ({
            rules:
            {
                exampleUserName2:
                {
                    required: true,
                },
                exampleAddress1:
                {
                    required: true,
                },
                examplePhone1:
                {
                    required: true,
                    number: true
                },
            },
            messages:
            {
                exampleUserName2:
                {
                    required: "Vui lòng nhập tên",
                },
                exampleAddress1:
                {
                    required: "Vui lòng nhập địa chỉ",
                },
                examplePhone1:
                {
                    required: "Vui lòng nhập số điện thoại",
                    number: "Vui lòng nhập số"
                },
            }
        });
        $("#Form_Link").validate
        ({
            rules:
            {
                FormSelect:
                {
                    required: true,
                },
                exampleLink1:
                {
                    required: true,
                },
            },
            messages:
            {
                FormSelect:
                {
                    required: "Vui lòng lựa chọn phần mềm",
                },
                exampleLink1:
                {
                    required: "Vui lòng chèn link",
                },
            }
        });
});
//js Home
idHomeContent = 1
function add_Home_Content()
{
    event.preventDefault()
    let name_Home = FormHomeContent.exampleUserName1.value
    let content_Home = FormHomeContent.exampleFormControlTextarea1.value
    if (name_Home.length==0 || content_Home.length==0)
    {
        return 0
    }
    else
    {
        Home_Content_row = document.getElementById("Home_Content_row")
        row = Home_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idHomeContent
        row.insertCell(1).innerHTML= name_Home
        row.insertCell(2).innerHTML= content_Home
        row.insertCell(3).innerHTML= `<span onclick="edit_Home_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(4).innerHTML= `<span onclick="delete_Home_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idHomeContent++
    }
}
function delete_Home_Content(Home)
{
    let row = Home.parentElement.parentElement
    row.remove()
}
function edit_Home_Content(Home)
{
    let row = Home.parentElement.parentElement.children
    idChangeHome = row[0].innerHTML
    FormHomeContent.exampleUserName1.value=row[1].innerHTML
    FormHomeContent.exampleFormControlTextarea1.value = row[2].innerHTML
}
function button_edit_Home_Content()
{
    let name_Home = FormHomeContent.exampleUserName1.value
    let content_Home = FormHomeContent.exampleFormControlTextarea1.value
    Home_Content_row = document.getElementById("Home_Content_row")
    for(var i = 0;i<Home_Content_row.children.length;i++)
    {
    if(Home_Content_row.children[i].children[0].innerHTML==idChangeHome)
    {
        Home_Content_row.children[i].children[1].innerHTML = name_Home
        Home_Content_row.children[i].children[2].innerHTML = content_Home
        break
    }
    }
}
//js About
idAboutContent = 1
function add_About_Content()
{
    event.preventDefault()
    let Img_About = FormAboutContent.formFileMultiple1.value
    let content_About = FormAboutContent.exampleFormControlTextarea2.value
    if (content_About.length==0)
    {
        return 0
    }
    else
    {
        About_Content_row = document.getElementById("About_Content_row")
        row = About_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idAboutContent
        row.insertCell(1).innerHTML= Img_About
        row.insertCell(2).innerHTML= content_About
        row.insertCell(3).innerHTML= `<span onclick="edit_About_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(4).innerHTML= `<span onclick="delete_About_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idAboutContent++
    }
}
function delete_About_Content(About)
{
    let row = About.parentElement.parentElement
    row.remove()
}
function edit_About_Content(About)
{
    let row = About.parentElement.parentElement.children
    idChangeAbout = row[0].innerHTML
    FormAboutContent.exampleFormControlTextarea2.value =row[2].innerHTML
}
function button_edit_About_Content()
{
    let Img_About = FormAboutContent.formFileMultiple1.value
    let content_About = FormAboutContent.exampleFormControlTextarea2.value
    About_Content_row = document.getElementById("About_Content_row")
    for(var i = 0;i<About_Content_row.children.length;i++)
    {
    if(About_Content_row.children[i].children[0].innerHTML==idChangeAbout)
    {
        About_Content_row.children[i].children[1].innerHTML = Img_About
        About_Content_row.children[i].children[2].innerHTML = content_About
        break
    }
    }
}
//js Education
idEducationContent = 1
function add_Education_Content()
{
    event.preventDefault()
    let level_Education = FormEducationContent.exampleLevel1.value
    let in_Education = FormEducationContent.exampleIn1.value
    let time_Education = FormEducationContent.exampleTime1.value
    let content_Education = FormEducationContent.exampleFormControlTextarea3.value
    if (content_Education.length==0 || level_Education.length==0 || in_Education.length==0 || time_Education.length==0)
    {
        return 0
    }
    else
    {
        Education_Content_row = document.getElementById("Education_Content_row")
        row = Education_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idEducationContent
        row.insertCell(1).innerHTML= level_Education
        row.insertCell(2).innerHTML= in_Education
        row.insertCell(3).innerHTML= time_Education
        row.insertCell(4).innerHTML= content_Education
        row.insertCell(5).innerHTML= `<span onclick="edit_Education_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(6).innerHTML= `<span onclick="delete_Education_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idEducationContent++
    }
}
function delete_Education_Content(Education)
{
    let row = Education.parentElement.parentElement
    row.remove()
}
function edit_Education_Content(Education)
{
    let row = Education.parentElement.parentElement.children
    idChangeEducation = row[0].innerHTML
    FormEducationContent.exampleLevel1.value = row[1].innerHTML
    FormEducationContent.exampleIn1.value = row[2].innerHTML
    FormEducationContent.exampleTime1.value = row[3].innerHTML
    FormEducationContent.exampleFormControlTextarea3.value = row[4].innerHTML
}
function button_edit_Education_Content()
{
    let level_Education = FormEducationContent.exampleLevel1.value
    let in_Education = FormEducationContent.exampleIn1.value
    let time_Education = FormEducationContent.exampleTime1.value
    let content_Education = FormEducationContent.exampleFormControlTextarea3.value
    Education_Content_row = document.getElementById("Education_Content_row")
    for(var i = 0;i<Education_Content_row.children.length;i++)
    {
    if(Education_Content_row.children[i].children[0].innerHTML==idChangeEducation)
    {
        Education_Content_row.children[i].children[1].innerHTML = level_Education
        Education_Content_row.children[i].children[2].innerHTML = in_Education
        Education_Content_row.children[i].children[3].innerHTML = time_Education
        Education_Content_row.children[i].children[4].innerHTML = content_Education
        break
    }
    }
}
//js Work Resume
idWorkResumeContent = 1
function add_Work_Resume_Content()
{
    event.preventDefault()
    let company_Work_Resume = FormWorkResumeContent.exampleCompany1.value
    let position_Work_Resume = FormWorkResumeContent.examplePosition1.value
    let time_Work_Resume = FormWorkResumeContent.exampleTime2.value
    let content_Work_Resume = FormWorkResumeContent.exampleFormControlTextarea4.value
    if (company_Work_Resume.length==0 || position_Work_Resume.length==0 || time_Work_Resume.length==0 || content_Work_Resume.length==0)
    {
        return 0
    }
    else
    {
        Work_Resume_Content_row = document.getElementById("Work_Resume_Content_row")
        row = Work_Resume_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idWorkResumeContent
        row.insertCell(1).innerHTML= company_Work_Resume
        row.insertCell(2).innerHTML= position_Work_Resume
        row.insertCell(3).innerHTML= time_Work_Resume
        row.insertCell(4).innerHTML= content_Work_Resume
        row.insertCell(5).innerHTML= `<span onclick="edit_Work_Resume_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(6).innerHTML= `<span onclick="delete_Work_Resume_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idWorkResumeContent++
    }
}
function delete_Work_Resume_Content(WorkResume)
{
    let row = WorkResume.parentElement.parentElement
    row.remove()
}
function edit_Work_Resume_Content(WorkResume)
{
    let row = WorkResume.parentElement.parentElement.children
    idChangeWorkResume = row[0].innerHTML
    FormWorkResumeContent.exampleCompany1.value = row[1].innerHTML
    FormWorkResumeContent.examplePosition1.value = row[2].innerHTML
    FormWorkResumeContent.exampleTime2.value = row[3].innerHTML
    FormWorkResumeContent.exampleFormControlTextarea4.value = row[4].innerHTML
}
function button_edit_Work_Resume_Content()
{
    let company_Work_Resume = FormWorkResumeContent.exampleCompany1.value
    let position_Work_Resume = FormWorkResumeContent.examplePosition1.value
    let time_Work_Resume = FormWorkResumeContent.exampleTime2.value
    let content_Work_Resume = FormWorkResumeContent.exampleFormControlTextarea4.value
    Work_Resume_Content_row = document.getElementById("Work_Resume_Content_row")
    for(var i = 0;i<Work_Resume_Content_row.children.length;i++)
    {
    if(Work_Resume_Content_row.children[i].children[0].innerHTML==idChangeWorkResume)
    {
        Work_Resume_Content_row.children[i].children[1].innerHTML = company_Work_Resume
        Work_Resume_Content_row.children[i].children[2].innerHTML = position_Work_Resume
        Work_Resume_Content_row.children[i].children[3].innerHTML = time_Work_Resume
        Work_Resume_Content_row.children[i].children[4].innerHTML = content_Work_Resume
        break
    }
    }
}
//js Skill
idSkillContent = 1
function add_Skill_Content()
{
    event.preventDefault()
    let content_Skill = FormSkillContent.exampleFormControlTextarea5.value
    if (content_Skill.length==0)
    {
        return 0
    }
    else
    {
        Skill_Content_row = document.getElementById("Skill_Content_row")
        row = Skill_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idSkillContent
        row.insertCell(1).innerHTML= content_Skill
        row.insertCell(2).innerHTML= `<span onclick="edit_Skill_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(3).innerHTML= `<span onclick="delete_Skill_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idSkillContent++
    }
}
function delete_Skill_Content(Skill)
{
    let row = Skill.parentElement.parentElement
    row.remove()
}
function edit_Skill_Content(Skill)
{
    let row = Skill.parentElement.parentElement.children
    idChangeSkill = row[0].innerHTML
    FormSkillContent.exampleFormControlTextarea5.value = row[1].innerHTML
}
function button_edit_Skill_Content()
{
    let content_Skill = FormSkillContent.exampleFormControlTextarea5.value
    Skill_Content_row = document.getElementById("Skill_Content_row")
    for(var i = 0;i<Skill_Content_row.children.length;i++)
    {
    if(Skill_Content_row.children[i].children[0].innerHTML==idChangeSkill)
    {
        Skill_Content_row.children[i].children[1].innerHTML = content_Skill
        break
    }
    }
}
//js skill bar
idSkillBarContent = 1
function add_Skill_Bar_Content()
{
    event.preventDefault()
    let skill_Bar = FormSkillBarContent.exampleSkill1.value
    let skill_Bar_Cent = FormSkillBarContent.exampleCentSkill1.value
    if (skill_Bar.length == 0 || skill_Bar_Cent.length == 0)
    {
        return 0
    }
    else
    {
        Skill_Content_row = document.getElementById("Skill_Bar_Content_row")
        row = Skill_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idSkillBarContent
        row.insertCell(1).innerHTML= skill_Bar
        row.insertCell(2).innerHTML= skill_Bar_Cent
        row.insertCell(3).innerHTML= `<span onclick="edit_Skill_Bar_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(4).innerHTML= `<span onclick="delete_Skill_Bar_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idSkillBarContent++
    }
}
function delete_Skill_Bar_Content(SkillBar)
{
    let row = SkillBar.parentElement.parentElement
    row.remove()
}
function edit_Skill_Bar_Content(SkillBar)
{
    let row = SkillBar.parentElement.parentElement.children
    idChangeSkillBar = row[0].innerHTML
    FormSkillBarContent.exampleSkill1.value = row[1].innerHTML
    FormSkillBarContent.exampleCentSkill1.value = row[2].innerHTML
}
function button_edit_Skill_Bar_Content()
{
    let skill_Bar = FormSkillBarContent.exampleSkill1.value
    let skill_Bar_Cent = FormSkillBarContent.exampleCentSkill1.value
    Skill_Bar_Content_row = document.getElementById("Skill_Bar_Content_row")
    for(var i = 0;i<Skill_Bar_Content_row.children.length;i++)
    {
    if(Skill_Bar_Content_row.children[i].children[0].innerHTML==idChangeSkillBar)
    {
        Skill_Bar_Content_row.children[i].children[1].innerHTML = skill_Bar
        Skill_Bar_Content_row.children[i].children[2].innerHTML= skill_Bar_Cent
        break
    }
    }
}
//js Work
idWorkContent = 1
function add_Work_Content()
{
    event.preventDefault()
    let img_Work = FormWorkContent.formFileMultiple2.value
    let title_Img_Work = FormWorkContent.exampleTitle1.value
    let content_Work = FormWorkContent.exampleFormControlTextarea6.value
    if (content_Work.length==0 || title_Img_Work.length==0)
    {
        return 0
    }
    else
    {
        Work_Content_row = document.getElementById("Work_Content_row")
        row = Work_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idWorkContent
        row.insertCell(1).innerHTML= img_Work
        row.insertCell(2).innerHTML= title_Img_Work
        row.insertCell(3).innerHTML= content_Work
        row.insertCell(4).innerHTML= `<span onclick="edit_Work_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(5).innerHTML= `<span onclick="delete_Work_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idWorkContent++
    }
}
function delete_Work_Content(Work)
{
    let row = Work.parentElement.parentElement
    row.remove()
}
function edit_Work_Content(Work)
{
    let row = Work.parentElement.parentElement.children
    idChangeWork = row[0].innerHTML
    FormWorkContent.exampleTitle1.value =row[2].innerHTML
    FormWorkContent.exampleFormControlTextarea6.value =row[3].innerHTML
}
function button_edit_Work_Content()
{
    let img_Work = FormWorkContent.formFileMultiple2.value
    let title_Img_Work = FormWorkContent.exampleTitle1.value
    let content_Work = FormWorkContent.exampleFormControlTextarea6.value
    Work_Content_row = document.getElementById("Work_Content_row")
    for(var i = 0;i<Work_Content_row.children.length;i++)
    {
    if(Work_Content_row.children[i].children[0].innerHTML==idChangeWork)
    {
        Work_Content_row.children[i].children[1].innerHTML = img_Work
        Work_Content_row.children[i].children[2].innerHTML = title_Img_Work
        Work_Content_row.children[i].children[3].innerHTML = content_Work
        break
    }
    }
}
//js Testimonial
idTestimonialContent = 1
function add_Testimonial_Content()
{
    event.preventDefault()
    let content_Testimonial = FormTestimonialContent.exampleFormControlTextarea7.value
    let Testimonial_Who = FormTestimonialContent.exampleWho1.value
    if (content_Testimonial.length==0 || Testimonial_Who.length==0)
    {
        return 0
    }
    else
    {
        Testimonial_Content_row = document.getElementById("Testimonial_Content_row")
        row = Testimonial_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idTestimonialContent
        row.insertCell(1).innerHTML= content_Testimonial
        row.insertCell(2).innerHTML= Testimonial_Who
        row.insertCell(3).innerHTML= `<span onclick="edit_Testimonial_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(4).innerHTML= `<span onclick="delete_Testimonial_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idTestimonialContent++
    }
}
function delete_Testimonial_Content(Testimonial)
{
    let row = Testimonial.parentElement.parentElement
    row.remove()
}
function edit_Testimonial_Content(Testimonial)
{
    let row = Testimonial.parentElement.parentElement.children
    idChangeTestimonial = row[0].innerHTML
    FormTestimonialContent.exampleFormControlTextarea7.value =row[1].innerHTML
    FormTestimonialContent.exampleWho1.value =row[2].innerHTML
}
function button_edit_Testimonial_Content()
{
    let content_Testimonial = FormTestimonialContent.exampleFormControlTextarea7.value
    let Testimonial_Who = FormTestimonialContent.exampleWho1.value
    Testimonial_Content_row = document.getElementById("Testimonial_Content_row")
    for(var i = 0;i<Testimonial_Content_row.children.length;i++)
    {
    if(Testimonial_Content_row.children[i].children[0].innerHTML==idChangeTestimonial)
    {
        Testimonial_Content_row.children[i].children[1].innerHTML = content_Testimonial
        Testimonial_Content_row.children[i].children[2].innerHTML = Testimonial_Who
        break
    }
    }
}
//js Contact
idContactContent = 1
function add_Contact_Content()
{
    event.preventDefault()
    let name_Contact = FormContactContent.exampleUserName2.value
    let address_Contact = FormContactContent.exampleAddress1.value
    let phone_Contact = FormContactContent.examplePhone1.value
    if (name_Contact.length==0 || address_Contact.length==0 || phone_Contact.length==0)
    {
        return 0
    }
    else
    {
        Contact_Content_row = document.getElementById("Contact_Content_row")
        row = Contact_Content_row.insertRow(-1);
        row.insertCell(0).innerHTML= idContactContent
        row.insertCell(1).innerHTML= name_Contact
        row.insertCell(2).innerHTML= address_Contact
        row.insertCell(3).innerHTML= phone_Contact
        row.insertCell(4).innerHTML= `<span onclick="edit_Contact_Content(this)"><i class="fa-solid fa-file-pen"></i><span>`
        row.insertCell(5).innerHTML= `<span onclick="delete_Contact_Content(this)"><i class="fa-solid fa-trash-can"></i><span>`
        idContactContent++
    }
}
function delete_Contact_Content(Contact)
{
    let row = Contact.parentElement.parentElement
    row.remove()
}
function edit_Contact_Content(Contact)
{
    let row = Contact.parentElement.parentElement.children
    idChangeContact = row[0].innerHTML
    FormContactContent.exampleUserName2.value =row[1].innerHTML
    FormContactContent.exampleAddress1.value =row[2].innerHTML
    FormContactContent.examplePhone1.value = row[3].innerHTML
}
function button_edit_Contact_Content()
{
    let name_Contact = FormContactContent.exampleUserName2.value
    let address_Contact = FormContactContent.exampleAddress1.value
    let phone_Contact = FormContactContent.examplePhone1.value
    Contact_Content_row = document.getElementById("Contact_Content_row")
    for(var i = 0;i<Contact_Content_row.children.length;i++)
    {
    if(Contact_Content_row.children[i].children[0].innerHTML==idChangeContact)
    {
        Contact_Content_row.children[i].children[1].innerHTML = name_Contact
        Contact_Content_row.children[i].children[2].innerHTML = address_Contact
        Contact_Content_row.children[i].children[3].innerHTML = phone_Contact
        break
    }
    }
}
//js Link
idLink = 1
function add_Link()
{
    event.preventDefault()
    let software = FormLink.FormSelect.value
    let link = FormLink.exampleLink1.value
    if (software.length == 0 || link.length == 0)
    {
        return 0
    }
    Link_row = document.getElementById("Link_row")
    row = Link_row.insertRow(-1)
    row.insertCell(0).innerHTML = idLink
    row.insertCell(1).innerHTML = software
    row.insertCell(2).innerHTML = link
    row.insertCell(3).innerHTML= `<span onclick="edit_Link(this)"><i class="fa-solid fa-file-pen"></i><span>`
    row.insertCell(4).innerHTML= `<span onclick="delete_Link(this)"><i class="fa-solid fa-trash-can"></i><span>`
    idLink++
}
function delete_Link(Link)
{
    let row = Link.parentElement.parentElement
    row.remove()
}
function edit_Link(Link)
{
    let row = Link.parentElement.parentElement.children
    idChangeLink = row[0].innerHTML
    FormLink.FormSelect.value =row[1].innerHTML
    FormLink.exampleLink1.value =row[2].innerHTML
}
function button_edit_Link()
{
    let software = FormLink.FormSelect.value
    let link = FormLink.exampleLink1.value
    Link_row = document.getElementById("Link_row")
    for(var i = 0;i<Link_row.children.length;i++)
    {
    if(Link_row.children[i].children[0].innerHTML==idChangeLink)
    {
        Link_row.children[i].children[1].innerHTML = software
        Link_row.children[i].children[2].innerHTML = link
        break
    }
    }
}