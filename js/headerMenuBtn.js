// 메인메뉴에 마우스 올릴 때, 서브메뉴가 바뀌는 기능
const items = document.getElementsByClassName("menu")[0].getElementsByClassName("item");

for(let i=0; i<6; i++){
    const submenuStr = "submenuRow" + (i+1);
    const submenu = document.getElementsByClassName(submenuStr);

    items[i].addEventListener("mouseover",function(){
        document.getElementsByClassName("submenuRow1")[0].style.display = "none";
        document.getElementsByClassName("submenuRow2")[0].style.display = "none";
        document.getElementsByClassName("submenuRow3")[0].style.display = "none";
        document.getElementsByClassName("submenuRow4")[0].style.display = "none";
        document.getElementsByClassName("submenuRow5")[0].style.display = "none";
        document.getElementsByClassName("submenuRow6")[0].style.display = "none";
    
        submenu[0].style.display="inline-block";
    });
}

//서브메뉴가 안떠있을때 서브메뉴쪽으로 마우스를 올리면 메인메뉴의 글자색이 바뀌는 기능
const flagging = function(){
    let flag = true;
    for(let i=0; i<6; i++){
        let submenuRow = "submenuRow"+(i+1);
        let submenu = document.getElementsByClassName(submenuRow)[0];
       
        if(window.getComputedStyle(submenu).display != "none"){
           flag = false;
        }
    }
    return flag;
}

const submenuBox = document.getElementsByClassName("submenuBox")[0];
const menu =document.getElementsByClassName("menu")[0];

submenuBox.addEventListener("mousemove", function(){
    if(flagging()){
        for(let i =0 ; i<6; i++){
            menu.getElementsByClassName("item")[i].style.color="#707070";
            menu.getElementsByClassName("item")[i].style.transition="0.2s";
        }
    }
});
submenuBox.addEventListener("mouseout",function(){
    if(flagging()){
        for(let i=0; i<6; i++){
            menu.getElementsByClassName("item")[i].style.color="white";
        }
    }
});

//메인메뉴에 마우스를 올렸을때의 기능 구현
for(let i = 0; i < 6; i++){
    items[i].addEventListener("mouseover", function(){
        //빨간박스 나오는 속성
        menu.getElementsByClassName("square")[i].style.color = "red";
        menu.getElementsByClassName("square")[i].style.margin="0px 0px -10px 0px";
        menu.getElementsByClassName("square")[i].style.transition = "0.25s";
    

        //메인메뉴 나오는 속성
        for(let j=0; j<6; j++){
            items[j].style.color = "#707070";
        }
        this.style.color="white";
        menu.getElementsByClassName("fadeAni")[i].style.margin = "0px 0px 37px 30px";
        menu.getElementsByClassName("fadeAni")[i].style.transition = "0.25s";
    });

    items[i].addEventListener("mouseout", function(){
        //빨간박스 들어가는 속성
        menu.getElementsByClassName("square")[i].style.color = "#222222";
        menu.getElementsByClassName("square")[i].style.margin="0px 0px -10px 45px";
        menu.getElementsByClassName("square")[i].style.transition = "0.25s";

        //메인메뉴 나오는 속성
        for(let j=0; j<6; j++){
            items[j].style.color = "#707070";
        }
        this.style.color="white";
        menu.getElementsByClassName("fadeAni")[i].style.margin = "0px 0px 37px 0px";
        menu.getElementsByClassName("fadeAni")[i].style.transition = "0.25s";
    });
}

//마우스가 메인메뉴박스 밖으로 나가면 모든 속성 사라지고 흰글씨들로 바뀌는 속성
menu.addEventListener("mouseout", function(){
    for(let i = 0; i < 6; i++){
        items[i].style.color="white";
    }
});


// 모바일 반응형일때만 작동하는 함수
window.onresize = function(){
    
    const closesubmenu = function(){
        let submenuBox = document.getElementsByClassName("submenuBox");
        submenuBox[0].style.display="none";
    }
    const opensubmenu = function(param){
        document.getElementsByClassName("submenuBox")[0].style.display="inline-block";
        for(let i = 0; i<6; i++){
            let submenuStr = "submenuRow" + (i+1);
            let submenu = document.getElementsByClassName(submenuStr);
            if(i==param){
                submenu[i].style.display="block";
            }
            else{
                submenu[i].style.display="none";
            }
        }
        console.log("opensubmenu 함수 실행");
    }
    if(window.innerWidth <= 897){
        // 메뉴가 클릭되었을때, 서브메뉴가 열리는 기능
        for(let i =0; i<6; i++){
            items[i].addEventListener("click", function(){
                const submenu = opensubmenu(i);
                switch(i){
                    case 0 :
                        items[0].style.margin="0 0 24px 45px";
                        submenu[0].style.top="0";
                        submenu[0].style.left="0";
                        break;
                    case 1 :
                        
                        break;
                    case 2 :

                        break;
                    case 3 :

                        break;
                    case 4 :  

                        break;
                    case 5 :

                        break;
                    default :
                        closesubmenu();
                }
            });
        }
    }
};



