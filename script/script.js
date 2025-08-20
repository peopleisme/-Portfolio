el_name = document.getElementById("name");
el_surName = document.getElementById("surName");


window.addEventListener("scroll", () => {
    WscrollY = window.scrollY;
    //console.log("Scroll Y:", window.scrollY);

    if (WscrollY > window.innerHeight * 0 && WscrollY < window.innerHeight * 0.3) {
        el_name.style.left = "calc(10% - " + 10 * WscrollY / (window.innerHeight * 0.3) + "%)";
        el_name.style.fontSize = "calc(15vh - " + 12 * WscrollY / (window.innerHeight * 0.3) + "vh)";
        el_surName.style.top = "calc(45% - " + 60 * WscrollY / (window.innerHeight * 0.3) + "%)";
        console.log(WscrollY / (window.innerHeight * 0.3));

    }
    if (WscrollY / (window.innerHeight * 0.3) > 1) {
        console.log(WscrollY / (window.innerHeight * 0.3));
        el_name.style.position = "fixed";
        el_name.style.top = "0";
        el_name.style.left = "0";
        el_name.style.fontSize = "3vh";

    } else {
        el_name.style.position = "absolute";
        el_name.style.top = "30%";
    }
});