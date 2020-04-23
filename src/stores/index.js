import TodosService from '../services/TodoService/index.fixture';
import UserService from '../services/UserService/index.fixture';

import CounterStore from './CounterStore';
import UserStore from './UserStore';
import TodoStores from './TodoStores';

const counterStore = new CounterStore();
const userService = new UserService();
const todosService = new TodosService();

const userStore = new UserStore(userService);
const todoStore = new TodoStores(todosService);

export default {
    counterStore,
    userStore,
    todoStore
};