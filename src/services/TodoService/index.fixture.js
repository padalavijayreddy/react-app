import todosResponse from '../../fixtures/getTodosResponse.json';


class todoFixtureService{
    getTodosApi(){
        console.log(todosResponse);
        return new Promise((resolve,reject)=>{
            resolve(todosResponse);
        });
    }
}

export default todoFixtureService;