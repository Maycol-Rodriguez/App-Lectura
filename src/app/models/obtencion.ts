/* eslint-disable @typescript-eslint/naming-convention */
export interface Obtencion {
  id?: number;
  Cantidad?: string;
  EstudianteId?: number;
  TrofeoId?: number;
}

export interface ObtencionDetail {
  id?: number;
  Cantidad?: string;
  EstudianteId?: number;
  TrofeoId?: number;
  estudiante?: {
    id?: number;
    Nombre?: string;
    Apellido?: string;
    Genero?: string;
    Documento?: string;
  };
  trofeo?: {
    id?: number;
    Imagen?: string;
    Description?: string;
  };
}
