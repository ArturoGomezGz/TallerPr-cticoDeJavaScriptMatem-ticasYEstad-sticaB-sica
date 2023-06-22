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
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumentoProyectado = ultimoSalario * (medianaPorcentajesCrecimiento/100);
    const proyeccion = aumentoProyectado + ultimoSalario;
    
    const resultado = {
        porcentajeCrecimiento: medianaPorcentajesCrecimiento,
        proyeccion: proyeccion,
    }
    return resultado;
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

AnalisisEmpresarial.medianaByYear = (nombre, year) => {
    if (!empresas[nombre]){
        console.warn("esta empresa no existe");
    } else if (!empresas[nombre][year]) {
        console.warn("la empresa no existia en ese año");
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}
AnalisisEmpresarial.proyeccionEmpresa = (nombre) => {
    const proyeccion = (array) => {
        const salarios = array;
        let porcentajesCrecimineto = [];
    
        for (let i = 1; i < salarios.length; i++) {
            const salarioActual = salarios[i];
            const salarioAnterior = salarios[i - 1];
            const crecimiento = salarioActual - salarioAnterior;
            const porcentajeCrecimineto = (crecimiento / salarioAnterior)*100;
            porcentajesCrecimineto.push(porcentajeCrecimineto);
        }
        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimineto);
        const ultimoSalario = salarios[salarios.length - 1];
        const aumentoProyectado = ultimoSalario * (medianaPorcentajesCrecimiento/100);
        const proyeccion = aumentoProyectado + ultimoSalario;

        const resultado = {
            porcentajeCrecimiento: medianaPorcentajesCrecimiento,
            proyeccion: proyeccion,
        }
        return resultado;
    }
    if(!empresas[nombre]){
        console.warn("esta empresa no existe");
    } else {
        const years = Object.keys(empresas[nombre]);
        const medianaYears = years.map((year) => {
            return AnalisisEmpresarial.medianaByYear(nombre, year);
        })

        return proyeccion(medianaYears);

    }
}