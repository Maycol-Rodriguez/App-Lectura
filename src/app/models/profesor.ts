/* eslint-disable @typescript-eslint/naming-convention */
export interface Profesor {
  id?: number;
  Nombre?: string;
  Apellido?: string;
  Genero?: string;
  Documento?: string;
  GradoId?: number;
}

export interface ProfesorDetail {
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
