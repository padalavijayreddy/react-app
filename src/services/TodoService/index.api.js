import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';

class TodosService{
    api
    constructor(){
        this.api = create({
            baseURL:'https://jsonplaceholder.typicode.com/'
        });
    }
    
    getTodosApi = () => {
        return networkCallWithApisauce(this.api,'todos',{},apiMethods.get);
    }
}

export default TodosService;