const AnalisisSalarial = [];
const AnalisisEmpresarial = [];
const empresas = {};

const buscarPersona = (name) => {
    const persona = salarios.find((persona) => {
        return persona.name == name;
    });

    return persona;
}

AnalisisSalarial.mediana = (name) => {
    const trabajos = buscarPersona(name).trabajos;
    var salariosPersona = [];
    
    for (let i = 0; i < trabajos.length; i++) {
        const element = trabajos[i].salario;
        salariosPersona.push(element);
    }
    
    return PlatziMath.calcularMediana(salariosPersona);
};

AnalisisSalarial.proyeccion = (name) => {
    const trabajos = buscarPersona(name).trabajos;
    var salariosPersona = [];
    let porcentajesCrecimineto = [];

    for (let i = 0; i < trabajos.length; i++) {
        const element = trabajos[i].salario;
        salariosPersona.push(element);
    }

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimineto = (crecimiento / salarioAnterior)*100;
        porcentajesCrecimineto.push(porcentajeCrecimineto);
    }
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimineto);
    console.log("El porcentaje de crecimiento es del " + medianaPorcentajesCrecimiento + "%");

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumentoProyectado = ultimoSalario * (medianaPorcentajesCrecimiento/100);
    const proyeccion = aumentoProyectado + ultimoSalario;
    

    console.log("Proyección de salario: $" + proyeccion);
    return proyeccion
}

AnalisisEmpresarial.organizarEmpresas = () => {

    for (persona of salarios){
        for (trabajo of persona.trabajos){
            if (!empresas[trabajo.empresa]) {
                empresas[trabajo.empresa] = {};
            };
            if (!empresas[trabajo.empresa][trabajo.year]){
                empresas[trabajo.empresa][trabajo.year] = [];
            };

            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        };
    }
    return empresas
}
AnalisisEmpresarial.organizarEmpresas();