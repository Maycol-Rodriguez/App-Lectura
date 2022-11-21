/* eslint-disable @typescript-eslint/naming-convention */
export interface Parrafo {
  id?: number;
  Parrafo?: string;
  Imagen?: string;
  Tipoid?: number;
  LibroId?: number;
}

export interface ParrafoDetail {
  id?: number;
  Parrafo?: string;
  Imagen?: string;
  Tipoid?: number;
  LibroId?: number;
  tipo?: {
    id?: number;
    Nombre?: string;
  };
  libro?: {
    id?: number;
    Titulo?: string;
    Audio?: string;
    Video?: string;
    Imagen?: string;
    Autor?: string;
  };
}
