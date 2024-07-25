let textoAtual = "Digite seu texto";

function transformarParaTextarea() {
    const divTexto = document.getElementById("texto");
    const textarea = document.createElement("textarea");
    textarea.className = "textarea-transformado";
    textarea.value = textoAtual === "Digite seu texto" ? "" : textoAtual;

    textarea.onfocus = function() {
        if (this.value === "Digite seu texto") {
            this.value = ''; // Limpa o campo de texto
        }
    };

    textarea.onblur = function() {
        textoAtual = this.value.trim() === '' ? 'Digite seu texto' : this.value;
        divTexto.innerText = textoAtual;
        divTexto.style.display = "flex";
        divTexto.style.alignItems = "center";
        this.parentNode.replaceChild(divTexto, this);
    };

    divTexto.parentNode.replaceChild(textarea, divTexto);
    textarea.focus();
}


function botao() {
    // Verifica se o texto já foi criptografado
    if (textoAtual.includes("enter") || textoAtual.includes("imes") || textoAtual.includes("ai") || textoAtual.includes("ober") || textoAtual.includes("ufat")) {
        // alert("O texto já está criptografado.");
        return;
    }
    const textoValido = textoAtual.toLowerCase().replace(/[^a-z]/g, " ");
    const regrasCriptografia = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat",
    };

    let textoCriptografado = "";
    for (let letra of textoValido) {
        if (regrasCriptografia[letra]) {
            textoCriptografado += regrasCriptografia[letra];
        } else {
            textoCriptografado += letra;
        }
    }

    textoAtual = textoCriptografado;
    document.getElementById("mensagemEncontrada").innerText = textoCriptografado;
    document.getElementById("mensagemInstrucao1").innerText = "";
    document.getElementById("mensagemInstrucao2").innerText = "";
    document.getElementById("mensagemInstrucao3").innerText = "";
}

    // Regras para criptografar o texto
function descriptografar() {
    const regrasDescriptografia = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    };
    // Código para descriptografar o texto
    let textoDescriptografado = textoAtual;
    for (let [key, value] of Object.entries(regrasDescriptografia)) {
        const regex = new RegExp(key, "g");
        textoDescriptografado = textoDescriptografado.replace(regex, value);
    }

    textoAtual = textoDescriptografado;
    document.getElementById("mensagemEncontrada").innerText = textoDescriptografado;
    document.getElementById("mensagemInstrucao1").innerText = "";
    document.getElementById("mensagemInstrucao2").innerText = "";
    document.getElementById("mensagemInstrucao3").innerText = "";
}

document.getElementById("copiarTexto").addEventListener("click", function() {
    // Ação para copiar o texto descriptografado
    const textoParaCopiar = document.createElement("textarea");
    textoParaCopiar.value = textoAtual;
    document.body.appendChild(textoParaCopiar);
    textoParaCopiar.select();
    document.execCommand("copy");
    document.body.removeChild(textoParaCopiar);
    alert("Texto copiado!");

    // Alerta ao usuário que o texto foi copiado
    // alert("Texto copiado para a área de transferência!");
});