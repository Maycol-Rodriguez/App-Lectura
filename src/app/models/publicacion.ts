/* eslint-disable @typescript-eslint/naming-convention */
export interface Publicacion {
  id?: number;
  Procedencia?: string;
  FechaRegistro?: Date;
  LibroId?: number;
  EstudianteId?: number;
}

export interface PublicacionDetail {
  id?: number;
  Procedencia?: string;
  FechaRegistro?: Date;
  LibroId?: number;
  EstudianteId?: number;
  libro?: {
    id?: number;
    Titulo?: string;
    Imagen?: string;
    Autor?: string;
  };
  estudiante?: {
    id?: number;
    Nombre?: string;
    Apellido?: string;
    Genero?: string;
    Documento?: string;
  };
}
