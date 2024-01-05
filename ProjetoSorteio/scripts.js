function generateNumber(){

    const min = Math.ceil(document.querySelector(".inputMin").value)//teto ceil(maior) ele arredonda
    const max = Math.floor(document.querySelector(".inputMax").value)//chão flor(menor) ele arredonda

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert("O resultado foi: " + result)
}