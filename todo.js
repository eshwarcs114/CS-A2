const container=document.getElementById("container");
document.addEventListener("DOMContentLoaded",initial);

// Opener
function initial(){
    const div=document.createElement("div");
    const signUp=document.createElement("button");
    signUp.innerText="SignUp"
    signUp.classList.add("button")
    const logIn=document.createElement("button");
    logIn.innerText="Login"
    logIn.classList.add("button");
    div.appendChild(logIn);
    div.appendChild(signUp);
    div.classList.add("div");
    container.classList.add("container");
    container.appendChild(div);
    logIn.addEventListener("click",login);
    signUp.addEventListener("click",signup);
}

// SignUP
function signup(){
    const child=container.children;
    container.removeChild(child[0]);
    const div =document.createElement("div");
    const form=document.createElement("form");
    form.setAttribute("onsubmit","registerForm()");
    
    const firstName=document.createElement("input");
    firstName.setAttribute("name","firstName");
    firstName.setAttribute("placeholder","First name");
    firstName.setAttribute("type","text");
    firstName.classList.add("form");
    firstName.id="firstName"
    firstName.setAttribute("required","true");
    form.appendChild(firstName);

    const lastName=document.createElement("input");
    lastName.setAttribute("name","lastName");
    lastName.setAttribute("placeholder","Last name");
    lastName.setAttribute("type","text");
    lastName.classList.add("form");
    lastName.id="lastName"
    lastName.setAttribute("required","true");
    form.appendChild(lastName);
    
    const mail=document.createElement("input");
    mail.setAttribute("name","Mail");
    mail.setAttribute("placeholder","Mail");
    mail.setAttribute("type","email");
    mail.classList.add("form");
    mail.id="mail"
    mail.setAttribute("required","true");
    form.appendChild(mail);
    
    const password=document.createElement("input");
    password.setAttribute("name","password");
    password.setAttribute("placeholder","Password");
    password.setAttribute("type","password");
    password.id="password";
    password.classList.add("form");
    password.setAttribute("required","true");
    form.appendChild(password);

    const checkbox=document.createElement("input");
    checkbox.setAttribute("name","checkbox");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("required","true");
    form.appendChild(checkbox);

    const lable=document.createElement("label");
    lable.innerText="I agree to the terms of use";
    form.appendChild(lable);

    const submit=document.createElement("input");
    submit.setAttribute("name","submit");
    submit.setAttribute("type","submit");
    submit.id="submit";
    submit.classList.add("form");
    submit.style.backgroundColor="rgb(233, 140, 186)";
    submit.style.borderRadius="20px";
    form.appendChild(submit);

    form.classList.add("formm");
    div.appendChild(form);
    div.classList.add("div");
    container.appendChild(div);
}
function registerForm(){
    const user=document.getElementById("mail").value;
    const checkUser=localStorage.getItem(user)
    if(checkUser==null){
        let obj=JSON.stringify({firstName:document.getElementById("firstName").value,lastName:document.getElementById("lastName").value,mail:document.getElementById("mail").value,password:document.getElementById("password").value})
        localStorage.setItem(user,obj);
        alert("Registered seccessefuly!\nTo continue login with the registered credentials");
    }
    else{
        alert("The given mail id is alredy present")
        signup();
    }
}

//login
function login(){
    const child=container.children;
    container.removeChild(child[0]);
    const div =document.createElement("div");
    const form=document.createElement("form");
    form.setAttribute("onsubmit","authenticate()");

    const mail=document.createElement("input");
    mail.setAttribute("name","Mail");
    mail.setAttribute("placeholder","Mail");
    mail.setAttribute("type","email");
    mail.classList.add("form");
    mail.id="mail"
    mail.setAttribute("required","true");
    form.appendChild(mail);
    
    const password=document.createElement("input");
    password.setAttribute("name","password");
    password.setAttribute("placeholder","Password");
    password.setAttribute("type","password");
    password.id="password";
    password.classList.add("form");
    password.setAttribute("required","true");
    form.appendChild(password);

    const submit=document.createElement("input");
    submit.setAttribute("name","submit");
    submit.setAttribute("type","submit");
    submit.id="submit";
    submit.classList.add("form");
    submit.style.backgroundColor="rgb(233, 140, 186)";
    submit.style.borderRadius="20px";
    form.appendChild(submit);

    form.classList.add("formm");
    div.appendChild(form);
    div.classList.add("div");
    container.appendChild(div);     
}
function authenticate(){
    const mail=document.getElementById('mail').value;
    const password=document.getElementById('password').value;
    const parseObj=localStorage.getItem(mail);
    if(parseObj!=null){
        const user=JSON.parse(parseObj);
        if(mail==user.mail&& password==user.password){
            alert("Login successeful");
            gotoDashBoard(user);
        }
        else{
            alert("invalid password");
            login();
        }
    }
    else{
        alert("User not found");
            login();
    }
}

//Account setting       
function accountSetting(user){
    const div =document.createElement("div");
    div.id="account"
    const header=document.createElement("h3")
    const logout=document.createElement("button");
    logout.classList.add("button");
    logout.classList.add("buttonfloat");
    logout.innerText="logout";
    logout.addEventListener("click",()=>{
        var item=document.getElementById("account");
        item.parentNode.removeChild(item);
        initial();
    });
    div.appendChild(logout);
    header.innerText="Edit the required fields below"
    div.appendChild(header);

    const form=document.createElement("form");
    const firstname=document.createElement("h4");

    firstname.innerText="First name";
    form.append(firstname);
    const firstName=document.createElement("input");
    firstName.setAttribute("name","firstName");
    firstName.setAttribute("placeholder",user["firstName"]);
    firstName.setAttribute("type","text");
    firstName.classList.add("form2");
    firstName.id="firstName"
    form.appendChild(firstName);

    const lastname=document.createElement("h4")
    lastname.innerText="Last name";
    form.append(lastname);
    const lastName=document.createElement("input");
    lastName.setAttribute("name","lastName");
    lastName.setAttribute("placeholder",user["lastName"]);
    lastName.setAttribute("type","text");
    lastName.classList.add("form2");
    lastName.id="lastName"
   
    form.appendChild(lastName);
    
    const mailID=document.createElement("h4")
    mailID.innerText="Mail";
    form.append(mailID);
    const mail=document.createElement("input");
    mail.setAttribute("name","Mail");
    mail.setAttribute("placeholder",user["mail"]);
    mail.setAttribute("type","email");
    mail.classList.add("form2");
    mail.id="mail"
    form.appendChild(mail);
    
    const passWord=document.createElement("h4")
    passWord.innerText="Password";
    form.append(passWord);
    const password=document.createElement("input");
    password.setAttribute("name","password");
    password.setAttribute("placeholder","reset password?");
    password.setAttribute("type","password");
    password.id="password";
    password.classList.add("form2");
    form.appendChild(password);
    br=document.createElement("br");
    form.appendChild(br);

    const submit=document.createElement("button");
    submit.innerText="Save";
    submit.addEventListener("click",()=>{
        updateUserDetails(user);
    })
    submit.id="submit";
    submit.classList.add("form2");
    submit.style.backgroundColor="rgb(233, 140, 186)";
    submit.style.borderRadius="20px";
    submit.style.marginTop="50px";
    form.appendChild(submit);

    const goback=document.createElement("button");
    goback.innerText="Back";
    goback.addEventListener("click",()=>{
        gotoDashBoard(user);
    })
    goback.id="goback";
    goback.classList.add("form2");
    goback.style.backgroundColor="rgb(233, 140, 186)";
    goback.style.borderRadius="20px";
    goback.style.marginleft="50px";
    form.appendChild(goback);

    form.classList.add("formm");
    div.appendChild(form);
    div.classList.add("divdesign2");
    container.appendChild(div);
}
function updateUserDetails(user){
    let password1=document.getElementById("password").value;
    let firstname=document.getElementById("firstName").value;
    let lastname=document.getElementById("lastName").value;
    let email=document.getElementById("mail").value;
    if(password1.length==0){
        password1=user["password"];
    }
    if(firstname.length==0){
        firstname=user["firstName"];
    }
    if(lastname.length==0){
        lastname=user["lastName"];
    }
    if(email.length==0){
        email=user["mail"];
    }
    let obj=JSON.stringify({firstName:firstname,lastName:lastname,mail:email,password:password1})
    localStorage.setItem(email,obj);
    user=JSON.parse(obj);
    alert("Changes applied successfully!")
    gotoDashBoard(user);
}
//Create new todo
function createNewTodo(user){
    const todoDiv1=document.createElement("div");
    todoDiv1.id="todoDiv1";
    todoDiv1.classList.add("divdesign2");
    container.append(todoDiv1);

    const div2=document.createElement("div");
    const logout=document.createElement("button");
    const edit=document.createElement("button");
    logout.classList.add("button");
    logout.innerText="Logout";
    logout.addEventListener("click",()=>{
        var item=document.getElementById("todoDiv1");
        item.parentNode.removeChild(item);
        initial();
    });
    edit.classList.add("button");
    edit.innerText="account settings";
    edit.addEventListener("click",()=>{
        var item=document.getElementById("todoDiv1");
        item.parentNode.removeChild(item);
        accountSetting(user);
    });
    div2.appendChild(edit);
    div2.appendChild(logout);
    todoDiv1.appendChild(div2);
    const div3=document.createElement("div");
    const form=document.createElement("div");

    let todoName= document.createElement("input");
    todoName.setAttribute("placeholder","Give name to this TODO list");
    todoName.setAttribute("required","true");
    todoName.id="todoName";
    todoName.style.width="300px";
    todoName.style.height="40px";
    form.appendChild(todoName);
    
    let ol=document.createElement("ol");
    ol.id="ol";
    form.appendChild(ol);
    
    const button=document.createElement("button");
    button.innerText="add task to list";
    button.style.margin="20px";
    form.appendChild(button);
    button.addEventListener("click",()=>{
        let task=prompt("Enter the task here.");
        console.log(task.length);
        if(task!=null && 
        task.length!=0){
            const div4=document.createElement("div");
            const taskName=document.createElement("h3");
            taskName.innerText=task;
            div4.appendChild(taskName);
            const li= document.createElement("li");
            li.id=task;
            const button2=document.createElement("button");
            button2.innerText="Remove";
            button2.style.backgroundColor="red";
            button2.addEventListener("click",()=>{
                item=document.getElementById(task);
                item.parentNode.removeChild(item);
            });
            div4.appendChild(button2);
            li.appendChild(div4);
            ol.appendChild(li);
        }
    });
    div3.appendChild(form);
    div3.classList.add("divdesign3");
    todoDiv1.appendChild(div3);
    

    const submit=document.createElement("button");
    submit.innerText="Save";
    submit.addEventListener("click",()=>{
        const todoListName=document.getElementById("todoName").value;
        if(todoListName.length==0){
            alert("Please give name to this list");
        }
        else{
            array=[];
            const list=document.getElementsByTagName("li");
            for(var i=0;i<list.length;i++){
                array[i]=list[i].firstElementChild.firstElementChild.innerText;
            }
            array.sort();
            storageArray=[]
            array.forEach(element => {
                obj={item:element,checked:false};
                storageArray.push(obj);
            });
            let totalLists=JSON.parse(localStorage.getItem(user["mail"]+user["name"]));
            if(totalLists==null){
                totalListss=[]
                totalListss[0]=todoListName;
                localStorage.setItem(user["mail"]+user["name"],JSON.stringify(totalListss));
            }
            else{
                totalLists.push(todoListName);
                localStorage.setItem(user["mail"]+user["name"],JSON.stringify(totalLists));
            }
            localStorage.setItem(user["mail"]+todoListName,JSON.stringify(storageArray));
            gotoDashBoard(user);
            alert("Saved successfully!")

        }
    })
    
    submit.id="save";
    submit.classList.add("form2");
    submit.style.backgroundColor="rgb(233, 140, 186)";
    submit.style.borderRadius="20px";
    submit.style.marginleft="50px";
    

    div3.appendChild(form);
    div3.classList.add("divdesign3");
    todoDiv1.appendChild(div3);
    

    const goback=document.createElement("button");
    goback.innerText="Back";
    goback.addEventListener("click",()=>{
        gotoDashBoard(user);
    })
    goback.id="goback";
    goback.classList.add("form2");
    goback.style.backgroundColor="rgb(233, 140, 186)";
    goback.style.borderRadius="20px";
    goback.style.marginleft="50px";
    todoDiv1.appendChild(submit);
    todoDiv1.appendChild(goback);
}        
//display items in todolist
function viewTodo(user,mainElement){
    var item=document.getElementById("dashboard");
    item.parentNode.removeChild(item);
    const div=document.createElement("div");
    const heading=document.createElement("h2");
    heading.id="header";
    heading.innerText="Todo: "+mainElement;
    heading.classList.add="heading2";
    div.appendChild(heading);
    div.id="viewList";
    let list=JSON.parse(localStorage.getItem(user["mail"]+mainElement));
    if(list==null || list.length==0){
        div.innerHTML="<h2>Null</h2>"
    }
    list.forEach(element => {
        const listItem=document.createElement("div");
        listItem.id=element["item"];
        listItem.classList.add("align");
        const checkbox=document.createElement("input");
        checkbox.type="checkbox"
        checkbox.checked=false;
        if(element["checked"]==true){
            checkbox.checked=true;
        }
        const name=document.createElement("h3");
        name.innerText=element["item"];
        const button=document.createElement("button");
        button.innerText="Delete";
        button.style.backgroundColor="red";
        button.addEventListener("click",()=>{
            const removeItem=document.getElementById(element["item"]);
            removeItem.parentNode.removeChild(removeItem);
        });
        listItem.appendChild(checkbox);
        listItem.appendChild(name);
        listItem.appendChild(button);
        div.appendChild(listItem);
    });
    container.appendChild(div);
    const goback=document.createElement("button");
    goback.innerText="Back";
    goback.id="goback";
    goback.addEventListener("click",()=>{
        const changed=document.getElementById("viewList");
        storageArray=[]
        for (const element of changed.childNodes) {
            if(element.id=="goback"|| element.id=="header"){
                break;
            }
            obj={item:element.childNodes[1].innerText,checked:element.childNodes[0].checked};
            storageArray.push(obj);
            localStorage.setItem(user["mail"]+mainElement,JSON.stringify(storageArray));
            console.log(element.childNodes[1] +"1");
        }
        gotoDashBoard(user);
    });
    goback.style.width="50px";
    goback.style.margin="auto";
    goback.style.backgroundColor="rgb(233, 140, 186)";
    goback.style.borderRadius="20px";
    div.appendChild(goback);
}

//DashBoard
function gotoDashBoard(user){
    const child=container.children;
    container.removeChild(child[0]);
    container.classList.remove("container");
    const dashboard=document.createElement("div");
    const dashboarddiv=document.createElement("div");
    dashboarddiv.id="dashboarddiv";
    dashboard.id="dashboard";
    const createTodo=document.createElement("button");
    createTodo.classList.add("button");
    createTodo.innerText="Create new Todo";
    createTodo.addEventListener("click",()=>{
        var item=document.getElementById("dashboard");
        item.parentNode.removeChild(item);
        createNewTodo(user);
    });
    const logout=document.createElement("button");
    const edit=document.createElement("button");
    logout.classList.add("button");
    logout.classList.add("buttonfloat");
    logout.innerText="logout";
    logout.addEventListener("click",()=>{
        var item=document.getElementById("dashboard");
        item.parentNode.removeChild(item);
        initial();
    });
    edit.classList.add("button");
    edit.classList.add("buttonfloat");
    edit.innerText="account settings";
    edit.addEventListener("click",()=>{
        var item=document.getElementById("dashboard");
        item.parentNode.removeChild(item);
        accountSetting(user);
    });
    dashboarddiv.appendChild(createTodo);
    dashboarddiv.appendChild(logout);
    dashboarddiv.appendChild(edit);
    dashboard.appendChild(dashboarddiv);
    dashboard.classList.add("dashBoard");
    container.appendChild(dashboard);

//list div
    const todolistDiv=document.createElement("div");
    todolistDiv.classList.add("todoDiv");
    const getTodos=JSON.parse(localStorage.getItem(user["mail"]+user["name"]));
    if(getTodos==null || getTodos.length==0){
        todolistDiv.innerHTML = "<center><h2>None</h2></center>"
    }
    else{
        getTodos.sort();
        getTodos.forEach(element => {
            const div=document.createElement("div");
            div.id=element;
            const todoName=document.createElement("h2");
            todoName.style.width="200px";
            todoName.innerText=element;
            const button1=document.createElement("button");
            button1.innerText="View";
            button1.style.backgroundColor="rgb(149, 237, 248)";
            button1.addEventListener("click",()=>{
                viewTodo(user,element);
            });
            const button2=document.createElement("button");
            button2.innerText="Remove";
            button2.style.backgroundColor="red";
            button2.addEventListener("click",()=>{
                item=document.getElementById(element);
                item.parentNode.removeChild(item);
                var array=getTodos;
                var index=array.indexOf(element);
                array.splice(index,1);
                if(array.length==0){
                    todolistDiv.innerHTML = "<center><h2>None</h2></center>"
                }
                localStorage.removeItem(user["mail"]+element);
                localStorage.setItem(user["mail"]+user["name"],JSON.stringify(array));
            });
            div.appendChild(todoName);
            div.appendChild(button1);
            div.appendChild(button2);
            div.classList.add("align");
            div.style.clear="both";
            todolistDiv.appendChild(div)
        });
    }
    dashboard.appendChild(todolistDiv);
}