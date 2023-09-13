const Form = document.getElementById('Form');

Form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const Nombre = Form.elements.Nombre.value;

    const Mensaje = `${Nombre} Gracias por unirte a "Proxipyme",\n disfruta de nuestra página"`;

    alert(Mensaje);

    Form.reset()
});