window.onload = function () {
    const botao = document.getElementById("calcular");

    botao.addEventListener("click", function () {
        const n1 = parseFloat(document.getElementById("nota1").value);
        const n2 = parseFloat(document.getElementById("nota2").value);
        const n3 = parseFloat(document.getElementById("nota3").value);
        const n4 = parseFloat(document.getElementById("nota4").value);
        const resultado = document.getElementById("resultado");

        if (
            document.getElementById("nota1").value === "" ||
            document.getElementById("nota2").value === "" ||
            document.getElementById("nota3").value === "" ||
            document.getElementById("nota4").value === ""
        ) {

            resultado.textContent = "por favor, preencha todas as notas.";
            return;
        }
        if (
            n1 < 0 || n1 > 10 ||
            n2 < 0 || n2 > 10 ||
            n3 < 0 || n3 > 10 ||
            n4 < 0 || n4 > 10
        ){resultado.textContent = "por favor, coloque um número de 0 a 10.";
            return;

        }

    });
};
