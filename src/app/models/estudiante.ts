/* eslint-disable @typescript-eslint/naming-convention */
export interface Estudiante {
  id?: number;
  Nombre?: string;
  Apellido?: string;
  Genero?: string;
  Documento?: string;
  GradoId?: number;
}

export interface EstudianteDetalle {
  id?: number;
  Nombre?: string;
  Apellido?: string;
  Genero?: string;
  Documento?: string;
  GradoId?: number;
  grado?: {
    id?: number;
    Nombre?: string;
  };
}
