import { LugarUbicacion } from 'src/app/ubicacion/ubicacion.model';

export class Mascota {
    constructor(
    public mascotaUrl: string,
    public nombreMascota: string,
    public descripcion: string,
    public tipoMascota: string,
    public motivo: string,
    public nombre: string,
    public email: string,
    public telefono: string,
    public celular: string,
    public web: string,
    public ubicacion: LugarUbicacion,
    public firebaseId: string,
    public publicador: string,
    ) {}
}