// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function asignarAmigoSecreto(nombres) {
    if (nombres.length < 2) {
        console.log("Debe haber al menos 2 participantes.");
        return;
    }

    let asignados = [...nombres]; // Copia la lista para asignaciones
    let resultado = {};

    for (let nombre of nombres) {
        let posibles = asignados.filter(n => n !== nombre); // Evita autoasignación

        if (posibles.length === 0) { 
            return asignarAmigoSecreto(nombres); // Reintentar si falla
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[nombre] = elegido;

        asignados = asignados.filter(n => n !== elegido); // Elimina asignado
    }

    return resultado;
}

// Ejemplo de uso:
let participantes = ["Ana", "Luis", "Carlos", "María", "Elena"];
let asignaciones = asignarAmigoSecreto(participantes);

console.log(asignaciones);
