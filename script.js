// DOM elements
const mainPageBtn = document.querySelectorAll(".main-page-btn");
const logInPage = document.querySelector(".login-page");
const mainPage = document.querySelector(".main-page");
const feedsPage = document.querySelector(".feeds-page");
const btnTop = document.querySelector(".btn-top");
const userInfo = document.querySelector(".user-info");
const password = document.querySelector(".password");
const loginModal = document.querySelector(".login-modal");
const loginModalBtn = document.querySelector(".login-modal i");
const loginFormBtn = document.querySelector(".login-form-btn");
const postBtn = document.querySelector(".post-btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const modalExit = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const modalPlus = document.querySelector('.modal-icons span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');

// side bar DOM
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar');
const sidebarX = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');




const displayLogIn = () => {
    logInPage.style.display="grid";
    mainPage.style.display="none";
    }

const goToFeeds =() => {
    feedsPage.style.display = "block";
    mainPage.style.display = "none";
    logInPage.style.display="none";
}

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalPlus.style.opacity = x;
}

    for(i=0;i<mainPageBtn.length;i++){
    mainPageBtn[i].addEventListener("click",displayLogIn);

    }
    btnTop.addEventListener("click",()=>{
        if(userInfo.value!=="" && password.value!==""){
            goToFeeds();
        }
        else{
            displayLogIn();
            loginModal.style.display = "block";
        }
    })



// modal box
loginModalBtn.addEventListener("click",()=>{
        loginModal.style.display = "none";
})
// end of modal box

loginFormBtn.addEventListener("click", ()=>{
    const loginUserInfo = document.querySelector(".login-User-Info");

    const loginPassword = document.querySelector(".login-password");

    if(loginUserInfo.value!=="" && loginPassword.value!==""){
        goToFeeds();
    }
    else{
        loginModal.style.display = "block";
    }
})


// News feed page
// Post modal
postBtn.addEventListener("click", () => {
    modalWrapper.classList.add('modal-wrapper-display');
    modal.style.display ="block";
})
modalExit.addEventListener("click",()=> {
    modalWrapper.classList.remove('modal-wrapper-display');
    modal.style.display ="none";
    if(modalInput.value !==""){
        modalInput.value = "";
    }
})

modalInput.addEventListener("keypress",(e) => {
    if(e.target.value !==""){
        changeOpacity(1);
    }
})
modalInput.addEventListener("blur",(e)=> {
    if(e.target.value ===""){
        changeOpacity(0.5);
    }
})

user.addEventListener('click',()=> {
    sidebarWrapper.classList.add('sidebar-wrapper-display');
    sidebar.style.right = 0;
})

sidebarX.addEventListener('click', ()=>{
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
    sidebar.style.right = '-30rem';
})

// dark mode
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightText = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click',()=>{
    circle.classList.toggle('move');

    Array.from(darkElements1).map((darkEl1) =>
        darkEl1.classList.toggle('dark-1')
    );

    Array.from(darkElements2).map((darkEl2) =>
        darkEl2.classList.toggle('dark-2')
    );

    Array.from(lightText).map((lightEl)=>
    lightEl.classList.toggle("light")
    );

    Array.from(borders).map((border)=>
    border.classList.toggle("border-color")
    );
    
})
