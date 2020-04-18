import { observable,action } from 'mobx';

let themeStyle = {
            light :{
                id:0,
                name:'Light Mode',
                style:'bg-white color-black',
            },
            dark  :{
                id:1,
                name:'Dark Mode',
                style:'bg-black color-white',
            }
        };
        


class ThemeStore{
    @observable theme
    
    constructor(){
        this.theme = themeStyle.light;
    }
    
    setCurrentTheme(themeSelected){
        if(themeSelected.id === themeStyle.light.id){
            this.theme = themeStyle.dark;
        }
        else{
            this.theme = themeStyle.light;
        }
    }
    
}

const themeStore = new ThemeStore;
export default themeStore;