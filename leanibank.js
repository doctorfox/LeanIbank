(function() {
    function gtbLogin(){
        //document.body.style.border = "5px solid red";
        const input_password = document.getElementById("Keypad1_txtPasswordResult");
        if(input_password ){
            input_password.removeAttribute("readonly");
        }
    }

    //GTB Sidebar
    function gtbSidebar(){
        const div_main = document.getElementById("pageContent").querySelector(".mainContent");
        if(div_main ){
            div_main.style.width = "980px";
        }

        const div_sidebar = document.getElementById("sidebarRight");
        if(div_sidebar ){
            div_sidebar.style.display = "none";
        }
    }
    
    gtbLogin();
    gtbSidebar();
})();