/* eslint-disable @typescript-eslint/naming-convention */
export interface Progreso {
  id?: number;
  Progreso?: string;
  Reaccion?: string;
  Comentario?: string;
  FinalAlternativo?: string;
  FechaLectura?: Date;
  NotaCuestionario?: string;
  NumeroIntento?: string;
  LibroId?: number;
  EstudianteId?: number;
}

export interface ProgresoDetail {
  id?: number;
  Progreso?: string;
  Reaccion?: string;
  Comentario?: string;
  FinalAlternativo?: string;
  FechaLectura?: Date;
  NotaCuestionario?: string;
  NumeroIntento?: string;
  LibroId?: number;
  EstudianteId?: number;
  libro?: {
    id?: number;
    Titulo?: string;
    Audio?: string;
    Video?: string;
    Autor?: string;
  };
  estudiante?: {
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
  };
}
