
import { Action} from '@ngrx/store';
import { ToggleAction } from '@ngrx/store-devtools/src/actions';
import { filtrosValidos } from '../filter/filter.actions';

export enum ActionTypes {
     Agregar_Todo = '[Todo Component] Agregar',
     TOGGLE_Todo = '[Todo Component] TOGGLE',
     EDITAR_Todo = '[Todo Component] EDITAR',
     DELETE_Todo = '[Todo Component] DELETE',
     TOGGLE_ALL_Todo = '[Todo Component] TOGGLE_ALL',
     RESET_Todo = '[Todo Component] RESET'   
  }

  export class AgregarTodoAction implements Action{
      readonly type = ActionTypes.Agregar_Todo;
      constructor( public texto: string){}
  }

  export class ToggleTodoAction implements Action{
    readonly type = ActionTypes.TOGGLE_Todo;
    constructor( public id: number){}
  }

  export class EditarTodoAction implements Action{
    readonly type = ActionTypes.EDITAR_Todo;
      constructor( public id: number,public texto: string){}
  }

  export class EliminarTodoAction implements Action{
    readonly type = ActionTypes.DELETE_Todo;
      constructor( public id: number){}
  }
  export class TOGGLEALLTodoAction implements Action{
    readonly type = ActionTypes.TOGGLE_ALL_Todo;    
      constructor(public state: boolean){}
  }
  export class RESETTodoAction implements Action{
    readonly type = ActionTypes.RESET_Todo;
      constructor(){}
  }

  export type Acciones = AgregarTodoAction |
                         ToggleTodoAction  |
                         EditarTodoAction  |
                         EliminarTodoAction |
                         TOGGLEALLTodoAction  |
                         RESETTodoAction;