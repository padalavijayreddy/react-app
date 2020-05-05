import TodosService from '../services/TodoService/index.fixture';
import UserService from '../services/UserService/index.fixture';

import CounterStore from './CounterStore';
import UserStore from './UserStore';
import TodoStores from './TodoStores';
import AuthStores from '../SignInPage/stores';
import ProductStores from '../ProductPage/stores';


const counterStore = new CounterStore();
const userService = new UserService();
const todosService = new TodosService();

const userStore = new UserStore(userService);
const todoStore = new TodoStores(todosService);

export default {
    ...AuthStores,
    ...ProductStores,
    counterStore,
    userStore,
    todoStore
};
