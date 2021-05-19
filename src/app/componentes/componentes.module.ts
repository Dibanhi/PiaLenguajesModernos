import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MapaComponent } from "./mapa/mapa.component";
import { SeleccionaUbicacionComponent } from "./seleccionar-ubicacion/seleccionar-ubicacion.component";

@NgModule({
    declarations: [SeleccionaUbicacionComponent, MapaComponent],
    imports: [CommonModule, IonicModule],
    exports: [SeleccionaUbicacionComponent, MapaComponent],
    entryComponents: [MapaComponent]
})
export class ComponentesModule{}