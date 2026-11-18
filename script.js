const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const dicionario = "qwertyuiopasdfghjklzxcvbnm";

const campoTexto = document.getElementById("texto");
const campoResultado = document.getElementById("resultado");
const botao = document.getElementById("criptografar");

function criptografar(texto) {
  return [...texto].map((caractere) => {
    const letra = caractere.toLowerCase();
    const posicao = alfabeto.indexOf(letra);

    if (posicao === -1) {
      return caractere; // Preserva espaços, números e pontuação
    }

    const convertida = dicionario[posicao];

    // Mantém maiúsculas, se houver
    return caractere === caractere.toUpperCase()
      ? convertida.toUpperCase()
      : convertida;
  }).join("");
}

botao.addEventListener("click", () => {
  campoResultado.value = criptografar(campoTexto.value);
});
