import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => {
  return SetMetadata('role', role);
};

// alterar el comportamiento de una variable, función, metodo o clase
// trabajar con metadatos
