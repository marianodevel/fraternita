// Función para cambiar el tema
function toggleTheme() {
    const body = document.body;
    const header = document.getElementById("header");
    const navbar = document.querySelector(".navbar");

    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        header.classList.remove("light-theme");
        header.classList.add("dark-theme");
        navbar.classList.remove("light-theme");
        navbar.classList.add("dark-theme");
        setCookie("theme", "dark", 365); // Guardar el tema en una cookie
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        header.classList.remove("dark-theme");
        header.classList.add("light-theme");
        navbar.classList.remove("dark-theme");
        navbar.classList.add("light-theme");
        setCookie("theme", "light", 365); // Guardar el tema en una cookie
    }
    // Cambiar el tema del contenido
    const content = document.querySelector(".content");
    if (content) {
        content.classList.toggle("light-theme");
        content.classList.toggle("dark-theme");
    }
}

// Resto del código para setCookie, getCookie, y la lógica inicial de cambio de tema
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

// Función para obtener el valor del tema de la cookie
function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Verificar y aplicar el tema guardado al cargar la página
const theme = getCookie("theme");
if (theme === "dark") {
    // Aplicar el tema oscuro
    toggleTheme();
}
// ...

const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", toggleTheme);