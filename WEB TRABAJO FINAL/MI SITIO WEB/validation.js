document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario-presupuesto");
    const totalSpan = document.getElementById("presupuesto-total");

    if (!form || !totalSpan) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        
        if (!form.checkValidity()) {
            form.reportValidity(); 
            return;
        }

        const productoSelect = form.querySelector("#producto");
        const selectedOption = productoSelect.selectedOptions[0];

        
        if (!selectedOption || !selectedOption.dataset.precio) {
            alert("El producto seleccionado no es válido.");
            return;
        }

        const productoPrecio = parseFloat(selectedOption.dataset.precio);
        const plazo = parseInt(form.plazo.value, 10);

        if (isNaN(productoPrecio) || isNaN(plazo) || plazo <= 0) {
            alert("Por favor, introduce un valor válido para el producto y el plazo.");
            return;
        }

        let total = productoPrecio;

        const extras = form.querySelectorAll("input[name='extra']:checked");
        extras.forEach(extra => {
            const valorExtra = parseFloat(extra.value);
            if (!isNaN(valorExtra)) {
                total += valorExtra;
            }
        });

        const mensualidad = total / plazo;

        totalSpan.textContent = total.toFixed(2);

        alert(`El total es: ${total.toFixed(2)} € (${mensualidad.toFixed(2)} €/mes)`);
    });
});
