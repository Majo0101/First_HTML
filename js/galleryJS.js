let store = 0;

function left(int) {

    const gallery = ["gallery/1.jpg", "gallery/2.jpg", "gallery/3.jpg", "gallery/4.jpg" ,"gallery/5.jpg"];

    if (int === 1) {
        store += 1;
        if (store > 4){
            store = 0;
        }
        document.getElementById('photo').src = gallery[store];
    }

    if (int === 0){
        store -= 1
        if (store < 0){
            store = 4;
        }
        document.getElementById('photo').src = gallery[store];
    }
}
