let Note500El = document.getElementById("Note500");
let Note200El = document.getElementById("Note200");
let Note100El = document.getElementById("Note100");
let Note50El = document.getElementById("Note50");
let Note20El = document.getElementById("Note20");
let Note10El = document.getElementById("Note10");
let Note5El = document.getElementById("Note5");
let Note2El = document.getElementById("Note2");
let Note1El = document.getElementById("Note1");
let cal_btn = document.getElementById("cal-btn");
let paraEl = document.getElementById("paraId");
let labelEl = document.getElementById("labelText")


cal_btn.addEventListener("click", function() {
    let note1 = Note500El.value;
    let a = parseInt(note1);
    console.log(a);
    let note2 = Note200El.value;
    let b = parseInt(note2);
    console.log(b);
    let note3 = Note100El.value;
    let c = parseInt(note3);
    console.log(c);
    let note4 = Note50El.value;
    let d = parseInt(note4);
    console.log(d);
    let note5 = Note20El.value;
    let e = parseInt(note5);
    console.log(e);
    let note6 = Note10El.value;
    let f = parseInt(note6);
    console.log(f);
    let note7 = Note5El.value;
    let g = parseInt(note7);
    console.log(g);
    let note8 = Note2El.value;
    let h = parseInt(note8);
    console.log(h);
    let note9 = Note1El.value;
    let i = parseInt(note9);
    console.log(i);

    if (isNaN(a)) {
        a = 0;
    }
    if (isNaN(b)) {
        b = 0;
    }
    if (isNaN(c)) {
        c = 0;
    }
    if (isNaN(d)) {
        d = 0;
    }
    if (isNaN(e)) {
        e = 0;
    }
    if (isNaN(f)) {
        f = 0;
    }
    if (isNaN(g)) {
        g = 0;
    }
    if (isNaN(h)) {
        h = 0;
    }
    if (isNaN(i)) {
        i = 0;
    }
    console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g + " " + h + " " + i);
    let res = (500 * a) + (200 * b) + (100 * c) + (50 * d) + (20 * e) + (10 * f) + (5 * g) + (2 * h) + (1 * i);
    console.log(res);
    labelEl.textContent = res;
    labelEl.style.color = "#800517";
    labelEl.style.fontSize = "25px";

});