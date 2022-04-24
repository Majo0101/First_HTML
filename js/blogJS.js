const date = new Date();


const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
})

function fakeDate () {
    document.getElementById("date").innerHTML = formattedDate;
    document.getElementById("date1").innerHTML = formattedDate;
    document.getElementById("date2").innerHTML = formattedDate;
}


function showhide() {
    var div = document.getElementById("hidenText");
    div.classList.toggle('hidden');
}