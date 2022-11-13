/* eslint-disable @typescript-eslint/naming-convention */
export interface Cuestionario {
  id?: number;
  Pregunta?: string;
  RespuestaCorrecta?: string;
  RespuestaIncorrecta1?: string;
  RespuestaIncorrecta2?: string;
  RespuestaIncorrecta3?: string;
  RespuestaIncorrecta4?: string;
  LibroId?: number;
}

export interface CuestionarioDetalle {
  iid?: number;
  Pregunta?: string;
  RespuestaCorrecta?: string;
  RespuestaIncorrecta1?: string;
  RespuestaIncorrecta2?: string;
  RespuestaIncorrecta3?: string;
  RespuestaIncorrecta4?: string;
  LibroId?: number;
  libro?: {
    id?: number;
    Titulo?: string;
    Autor?: string;
  };
}
