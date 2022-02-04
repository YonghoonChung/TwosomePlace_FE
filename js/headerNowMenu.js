const url = document.location.href;
const urlArray = url.split('/');
const menu = document.getElementsByClassName("menu")[0];
const items = menu.getElementsByClassName('item');
switch (urlArray[3]){
    case "introduction":
        items[0].style.color = "#d50037";
        break;
    case "coffeStory":
        items[1].style.color = "#d50037";
        break;
    case "brands":
        items[2].style.color="#d50037";
        break;
    case "membership":
        items[3].style.color = "#d50037";
        break;
    case "store":
        items[4].style.color = "#d50037";
        break;
    case "announcement":
        items[5].style.color = "#d50037";
        break;
    default:
        for(let i =0; i<items.length; i++){
            items[i].style.color = "white";
        }
        
    
}