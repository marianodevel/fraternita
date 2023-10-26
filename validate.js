document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        event.preventDefault();
        return;
    }

    // Muestra el modal de éxito si el formulario se envía correctamente
    const successModal = new bootstrap.Modal(document.getElementById("successModal"));
    successModal.show();

    // Limpia el formulario después de mostrar el modal
    document.getElementById("contact-form").reset();

    event.preventDefault();
});