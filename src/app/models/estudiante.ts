/* eslint-disable @typescript-eslint/naming-convention */
export interface Estudiante {
  id?: number;
  Nombre?: string;
  Apellido?: string;
  Genero?: string;
  Documento?: string;
  Seccion?: string;
  GradoId?: number;
}

export interface EstudianteDetail {
  id?: number;
  Nombre?: string;
  Apellido?: string;
  Genero?: string;
  Documento?: string;
  Seccion?: string;
  GradoId?: number;
  grado?: {
    id?: number;
    Nombre?: string;
  };
}
