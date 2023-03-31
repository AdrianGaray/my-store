import { Component } from '@angular/core';

// importamos desde product.model, la interfaz llamada 'Product'
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  widthImg = 10;
  name = 'Adri';
  age = 18;
  img =
    'https://images.unsplash.com/photo-1602572878641-973c1b8679e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTI2NjcyMg&ixlib=rb-4.0.3&q=80&w=1080';
  btnDisabled = true;
  // Se declara un objeto Persona
  person = {
    name: 'Adri',
    age: 18,
    avatar:
      'https://images.unsplash.com/photo-1602572878641-973c1b8679e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTI2NjcyMg&ixlib=rb-4.0.3&q=80&w=1080',
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    //le indicas a Angular que lo trate como un HTMLElement.
    //Así te dará propiedades y funciones con las cuales poder trabajar al colocar un . después de la variable que tiene la referencia del event.target
    const element = event.target as HTMLElement;
    // imprime en q posicion esta el scroll
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  // creacion de un array
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all', // category, puede ir en algunos productos o no.
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  register = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    console.log(this.register);
  }
}
