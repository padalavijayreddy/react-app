//GRID GAME MODEL

import { observable } from 'mobx';

class GridModel {
    
    constructor(gridStoreObject){
        this.id = gridStoreObject.id;
        this.isHidden = gridStoreObject.isHidden;
    }
    
}

export default GridModel;
