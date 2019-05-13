import { Pipe, PipeTransform } from '@angular/core';
import * as  fromFiltros  from '../../filter/filter.actions';
import { Todo } from '../model/todo.model';



@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(todos: Todo[], filter: fromFiltros.filtrosValidos): Todo[] {
       
       

        if (!todos || !filter) {
            return todos;
        }
         console.log('valor dentro del pipe'+filter);
        switch(filter){
            case 'completados':
                return todos.filter(todo => todo.completado  );
            case 'pendientes':
                return todos.filter(todo => !todo.completado );
            default:
                return todos;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        
    }
}