import { LugarUbicacion } from 'src/app/ubicacion/ubicacion.model';

export class Registrar {
    constructor(
        public imageUrl: string,
        public username: string,
        public email: string,
        public contraseña: string,
        public tipo: string,
        public ubicacion: LugarUbicacion,
        public firebaseId: string
    ) {}
}