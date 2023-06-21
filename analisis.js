/* analisis Juanita */

const buscarPersona = (name) => {
    const persona = salarios.find((persona) => {
        return persona.name == name;
    });

    return persona;
}

const medianaPorPersona = (name) => {
    const trabajos = buscarPersona(name).trabajos;
    var salariosPersona = [];
    
    for (let i = 0; i < trabajos.length; i++) {
        const element = trabajos[i].salario;
        salariosPersona.push(element);
    }
    
    return PlatziMath.calcularMediana(salariosPersona);
};