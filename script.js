window.onload = function () {
    const buttons = document.querySelectorAll('button');
    const mensagemDIv = document.getElementById('mensagem');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const dia = this.getAttribute('data-dia');
            let mensagem = '';
            switch (dia) {
                case "segunda":
                    mensagem = ("Dia de começar a semana!");
                    break;
                case "terça":
                    mensagem = ("hora de aprender coisas novas!");
                    break;
                case "quarta":
                    mensagem = ("metade da semana, continue firme!!");
                    break;
                case "quinta":
                    mensagem = ("começo do final de semana, continue focado!!");
                    break;
                case "sexta":
                    mensagem = ("ultimo dia da semana!!")
                    break;
                default:
                    alert("Fim de semana!!!!");





            };
        });
    });
};