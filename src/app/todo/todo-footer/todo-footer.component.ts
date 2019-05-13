import { Component, OnInit } from '@angular/core';
import * as fromFiltros  from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as fromTodo  from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  
  filtrosValidos: fromFiltros.filtrosValidos [] = ['todos','completados','pendientes'];
  filtrosValido: fromFiltros.filtrosValidos;
  pendientes: number;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    console.log(this.filtrosValidos[0]);
    this.filtrosValido = this.filtrosValidos[0];
    this.store.subscribe(state => {
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
        
    });
  }

  selectFiltro(filtro :fromFiltros.filtrosValidos){
    console.log(filtro);
    this.filtrosValido= filtro;
    const accion = new fromFiltros.SetFiltroAction(filtro);   
    this.store.dispatch(accion);
  }

  clearTodo(){
    const accion = new fromTodo.RESETTodoAction();   
    this.store.dispatch(accion);
  }

}
