var text = document.getElementById("text");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var checkBox = document.getElementById("divby");
var checkBox2 = document.getElementById("Array");
var checkBox3 = document.getElementById("List");
var checkBox4 = document.getElementById("Order");

function RangeGen() {
    let value0 = document.getElementById("v0").value;
    let value1 = document.getElementById("v1").value;
    let Genednumber = document.getElementById("gennum");
    if (checkBox.checked == true && checkBox2.checked == false && checkBox3.checked == false) {
        if (checkBox4.checked == true) {
            order = ""
            for (value0; value0 <= value1; value0++) {
                let divby = parseInt(text.value)
                if (value0 % divby == 0) {
                    order += value0 + " "
                } else {
                    continue
                }
            }
            Genednumber.value = order

        } else {
            let divby = text.value
            let total = value1 / divby
            let gen = Math.floor(Math.random() * (total - value0 + 1)) + parseInt(value0);
            let result = gen * divby
            Genednumber.value = result
        }
    } else if (checkBox2.checked == true && checkBox.checked == false && checkBox3.checked == false) {
        if (checkBox4.checked == true) {
            let arraylength = parseInt(text2.value)
            var array = []
            for (value0; value0 <= value1; value0++) {
                if (arraylength > 0) {
                    if (array.length === 0) {
                        array += value0
                        arraylength -= 1
                    } else {
                        array += "," + value0
                        arraylength -= 1
                    }
                } else {
                    continue
                }
            }
            Genednumber.value = "[" + array + "]"

        } else {
            let arraylength = parseInt(text2.value)
            var array = []
            for (let i = 0; i < arraylength; i++) {
                let gen = Math.floor(Math.random() * (value1 - value0 + 1)) + parseInt(value0);
                if (array.length === 0) {
                    array += gen
                } else {
                    array += "," + gen
                }
            }
            Genednumber.value = "[" + array + "]"
        }
    } else if (checkBox2.checked == true && checkBox.checked == true && checkBox3.checked == false) {
        if (checkBox4.checked == true) {
            let arraylength = parseInt(text2.value)
            var array = []
            let divby = text.value
            for (value0; value0 <= value1; value0++) {
                if (value0 % divby == 0 && arraylength > 0) {
                    if (array.length === 0) {
                        array += value0
                        arraylength -= 1
                    } else {
                        array += "," + value0
                        arraylength -= 1
                    }
                } else {
                    continue
                }
            }
            Genednumber.value = "[" + array + "]"

        } else {
            let arraylength = parseInt(text2.value)
            let divby = text.value
            let total = value1 / divby
            var array = []
            for (let i = 0; i < arraylength; i++) {
                let gen = Math.floor(Math.random() * (total - value0 + 1)) + parseInt(value0);
                let result = gen * divby
                if (array.length === 0) {
                    array += result
                } else {
                    array += "," + result
                }
            }
            Genednumber.value = "[" + array + "]"
        }
    } else if (checkBox3.checked == true && checkBox2.checked == false && checkBox.checked == false) {
        if (checkBox4.checked == true) {
            let Listlength = parseInt(text3.value)
            order = ""
            for (value0; value0 <= value1; value0++) {
                if (Listlength > 0) {
                    order += value0 + "\n"
                    Listlength -= 1
                } else {
                    continue
                }
            }
            Genednumber.value = order

        } else {
            let Listlength = parseInt(text3.value)
            let list = ""
            for (let i = 0; i < Listlength; i++) {
                let gen = Math.floor(Math.random() * (value1 - value0 + 1)) + parseInt(value0);
                if (List.length === 0) {
                    list += gen + "\n"
                } else {
                    list += "\n" + gen
                }
            }
            Genednumber.value = list
        }
    } else if (checkBox3.checked == true && checkBox2.checked == false && checkBox.checked == true) {
        if (checkBox4.checked == true) {
            let Listlength = parseInt(text3.value)
            order = ""
            for (value0; value0 <= value1; value0++) {
                let divby = parseInt(text.value)
                if (value0 % divby == 0 && Listlength > 0) {
                    order += value0 + "\n"
                    Listlength -= 1
                } else {
                    continue
                }
            }
            Genednumber.value = order

        } else {
            let Listlength = parseInt(text3.value)
            let list = ""
            for (let i = 0; i < Listlength; i++) {
                let divby = text.value
                let total = value1 / divby
                let gen = Math.floor(Math.random() * (total - value0 + 1)) + parseInt(value0);
                let result = gen * divby
                if (List.length === 0) {
                    list += result + "\n"
                } else {
                    list += "\n" + result
                }
            }
            Genednumber.value = list
        }
    } else if (checkBox3.checked == true && checkBox2.checked == true && checkBox.checked == true) {
        Genednumber.value = "Error: Array cannot be used with List!"
    } else if (checkBox3.checked == true && checkBox2.checked == true && checkBox.checked == false) {
        Genednumber.value = "Error: Array cannot be used with List!"
    } else {
        if (checkBox4.checked == true) {
            order = ""
            for (value0; value0 <= value1; value0++) {
                order += value0 + " "
            }
            Genednumber.value = order

        } else {
            let gen = Math.floor(Math.random() * (value1 - value0 + 1)) + parseInt(value0);
            Genednumber.value = gen
        }
    }
}

function divisible() {
    if (checkBox.checked == true) {
        text.style = "width:5vh; border-radius: 25px; outline: none; border-width:1px;"
    } else {
        text.style.display = "none";
    }
}

function Array_func() {
    if (checkBox2.checked == true) {
        text2.style = "width:5vh; border-radius: 25px; outline: none; border-width:1px;"
    } else {
        text2.style.display = "none";
    }
}

function List_func() {
    if (checkBox3.checked == true) {
        text3.style = "width:5vh; border-radius: 25px; outline: none; border-width:1px;"
    } else {
        text3.style.display = "none";
    }
}


function myFunction() {
    var tt = document.getElementById("tooltipdemo");
    tt.classList.toggle("show");
}


function myFunction2() {
    var tt = document.getElementById("tooltipdemo2");
    tt.classList.toggle("show");
}


function myFunction3() {
    var tt = document.getElementById("tooltipdemo3");
    tt.classList.toggle("show");
}


function myFunction4() {
    var tt = document.getElementById("tooltipdemo4");
    tt.classList.toggle("show");
}


function copy() {
    var copyText = document.getElementById("gennum");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
}

function drop(event) {
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

function drag_over(event) {
    event.preventDefault();
    return false;
}