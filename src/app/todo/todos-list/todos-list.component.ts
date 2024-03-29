import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';
import { MyFilterPipe } from './myFilterPipe';
import { filtrosValidos } from '../../filter/filter.actions';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {
  public todos: Todo[] = [];
  public  filtro: filtrosValidos;
  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
  });
  }  

}
