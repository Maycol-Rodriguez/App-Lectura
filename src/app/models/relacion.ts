/* eslint-disable @typescript-eslint/naming-convention */
export interface Relacion {
  id?: number;
  Parentesco?: string;
  ResponsableId?: number;
  EstudianteId?: number;
}

export interface ResponsableDetail {
  id?: number;
  Parentesco?: string;
  ResponsableId?: number;
  EstudianteId?: number;
  responsable?: {
    id?: number;
    Nombre?: string;
    Apellido?: string;
    Genero?: string;
    Documento?: string;
  };
  estudiante?: {
    id?: number;
    Nombre?: string;
    Apellido?: string;
    Genero?: string;
    Documento?: string;
  };
}
