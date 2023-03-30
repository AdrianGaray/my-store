// Para utilizar esta interfaz en algun otro componente.
// En este caso lo queremos utilizar rn app.component.ts.
// Hay que poner la palabra clave 'export'. Para que sea visible para otros archivos
export interface Product{
  name: string;
  price: number;
  image: string;
  // la propiedad category es opcional con el signo '?'. Es decir puede venir o no.
  // de esta forma esta protegido el prototipado
  category?: string;
}
