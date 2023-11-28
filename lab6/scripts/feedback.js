function scrollToFeedback() {
    var f = document.getElementById("feedback-subtitle");
    f.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function clearField(field) {
    field.value = "";
}

function sendFeedback() {
    var n, p;
    n = document.getElementById("name-field");
    p = document.getElementById("phone-field");
    if (n.value != "" && n.value != "Как к Вам обращаться" && p.value != "" && p.value != "Контактный номер") {
        alert("Мы приняли Ваш запрос и в скором времени его обработаем");
    } else {
        alert("Проверьте корректность введённых данных");
    }
}