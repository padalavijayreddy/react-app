import { observable,action } from 'mobx';

let themeStyle = {
            light :{
                id:0,
                name:'Light Mode',
                style:'bg-white color-black',
                eachCell:'bg-black'
            },
            dark  :{
                id:1,
                name:'Dark Mode',
                style:'bg-black color-white',
                eachCell:'bg-blue-700'
            }
        };
        


class ThemeStore{
    @observable theme
    
    constructor(){
        this.theme = themeStyle.light;
    }
    
    //@action
    setCurrentTheme(themeSelected){
      //  console.log("observer", themeSelected);
        if(themeSelected.id === themeStyle.light.id){
            this.theme = themeStyle.dark;
        }
        else{
            this.theme = themeStyle.light;
        }
        console.log(this.theme)
    }
    
    
    
}

const themeStore = new ThemeStore;
export default themeStore;