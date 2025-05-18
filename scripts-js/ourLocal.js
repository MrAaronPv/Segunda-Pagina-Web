class Local {
    // Creamos sus propiedades
    constructor(nombre, lugar, ubicacion) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.ubicacion = ubicacion;
    }
    // Creamos sus metodos
    getLugarInfo() {
        return this.nombre + ' - ' + this.lugar;
    }
    getUbicacionInfo() {
        return this.ubicacion;
    }
}

// Creamos los objetos para que se usen en la "Class Anime"
let locales = {
    'molina' : new Local('Local', 'Molina', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.120817718898!2d-77.03214249999999!3d-12.103880600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c95e7ca48003%3A0xc64478af9c8c969c!2sTaqhuba%20Caf%C3%A9!5e0!3m2!1ses-419!2spe!4v1747089852555!5m2!1ses-419!2spe'),
    'sanIsidro' : new Local('Local', 'San Isidro', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8998063619306!2d-77.0452845!3d-12.1190075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83008cee4db%3A0x14845fbc7bb00579!2sBuenavista%20Caf%C3%A9.!5e0!3m2!1ses-419!2spe!4v1747598497620!5m2!1ses-419!2spe'),
    'SanBorja' : new Local('Local', 'San Borja', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7801.872628046919!2d-77.04367650938885!3d-12.116510052502917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c961b79ff525%3A0x3a57c15dad0c39b3!2sGrano%20Dorado%20%2F%20Evol%C3%A8t%20-%20Caf%C3%A9%20Boutique!5e0!3m2!1ses-419!2spe!4v1747598581635!5m2!1ses-419!2spe'),
    'surco' : new Local('Local', 'Surco', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7801.872628046919!2d-77.04367650938885!3d-12.116510052502917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9c530cc1409%3A0xa8f3a757da931446!2sPiola%20Caf%C3%A9!5e0!3m2!1ses-419!2spe!4v1747598597904!5m2!1ses-419!2spe'),
}

function showLocals() {
    let select = document.getElementById('localesOption').value;
    let selectLocal = locales[select];

    if(selectLocal) {
        document.getElementById('localInfo').innerHTML = selectLocal.getLugarInfo();
    } else {
        document.getElementById('localInfo').innerHTML = 'No se a seleccionado nada';
    }
}

function showLocalsMap() {
    let select = document.getElementById('localesOption').value;
    let selectLocal = locales[select];

    if(selectLocal) {
        document.getElementById('localMap').src = selectLocal.getUbicacionInfo();
    } else {
        document.getElementById('localMap').src = '';
    }
}
