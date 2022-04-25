const date = new Date();
let number = 1;


const formattedDate = date.toLocaleDateString('sk-SK', {
    day: 'numeric', month: 'short', year: 'numeric'
})

function fakeDate (iD) {
    document.getElementById("date1").innerHTML = formattedDate;
    document.getElementById("date2").innerHTML = formattedDate;
    document.getElementById("date3").innerHTML = formattedDate;
    document.getElementById("date4").innerHTML = formattedDate;
    document.getElementById("date5").innerHTML = formattedDate;
}

function showHide(iD) {
    let div = document.getElementById(iD);
    div.classList.toggle('hidden');
}

function expandPhoto(input,div){

    number = number + input;

    if ((number % 2) === 0){
        if (document.getElementById(div).style.height === '400px'){
            document.getElementById(div).style.height = '150px';
        }else{
            document.getElementById(div).style.height = '400px';
        }
    }else{
        if (document.getElementById(div).style.height === '150px'){
            document.getElementById(div).style.height = '400px';
        }else{
            document.getElementById(div).style.height = '150px';
        }
    }
}


window.smoothScroll = function(target) {
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    var targetY = 0;
    do {
        if (target === scrollContainer) break;
        targetY += target.offsetTop;
    } while (target === target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }

    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}