import { Component } from '@angular/core';

import { Tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tareaArray: Tarea[] = [
    {id:1, name:"Tarea 1", description:"Lavar los platos"},
    {id:2, name:"Tarea 2", description:"Barrer el suelo"},
    {id:3, name:"Tarea 3", description:"Hacer la cama"},
  ];

  selectedTarea: Tarea= new Tarea();

  addOrEdit(){
    if(this.selectedTarea.id === 0){ 
      this.selectedTarea.id = this.tareaArray.length + 1;
      this.tareaArray.push(this.selectedTarea);
    }   

    this.selectedTarea = new Tarea();
  }

  openForEdit(tarea: Tarea){
    this.selectedTarea = tarea;
  }

  delete(){
    if(confirm('¿Estás seguro de que quieres eliminar esta tarea?'))


    this.tareaArray = this.tareaArray.filter(x => x != this.selectedTarea);
    this.selectedTarea = new Tarea();
  }





}
