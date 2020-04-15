//Grid Game Stores

import { observable,action } from 'mobx';
import GridModel from '../GridModel';

const gridJsonObjectList = [];
for(let i=0;i<7;i++){
    let makingEachGrid = {
        "gridSize":i+3,
        "hiddenCellCount":i+3,
        "gridWidth":300
    };
    gridJsonObjectList.push(makingEachGrid);
}


class GridStores {
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    
    constructor(){
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
    }
    
    @action.bound
    onCellClick(hidden){
        if(hidden){
            this.incrementSelectedCellsCount();
            if(this.selectedCellsCount == gridJsonObjectList[this.level].hiddenCellCount){
                this.goToNextLevelAndUpdateCells();
            }
        }
        else {
            this.goToInitialLevelAndUpdateCells();
        }
    }
    
    
    @action.bound
    setGridCells(){
        const { gridSize } = gridJsonObjectList[this.level];
        let idsList = [...Array(gridSize*gridSize).keys()];
        let randomList = [].concat(idsList).sort(()=>Math.random()-0.5).slice(0,gridSize);
        this.currentLevelGridCells = idsList.map((value) => {
            const gridStoreObject = {
                id:value,
                isHidden:randomList.includes(value)
            };
            return new GridModel(gridStoreObject);
        });
    }
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        this.level++;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }
    
    @action.bound
    goToInitialLevelAndUpdateCells(){
        this.level = 0;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }
    
    @action.bound
    resetSelectedCellsCount(){
        this.selectedCellsCount=0; 
    }
    
    @action.bound
    incrementSelectedCellsCount(){
        this.selectedCellsCount++;
    }
    
    @action.bound
    onPlayAgainClick(){
        this.topLevel();
        this.resetGame();
    }
    
    @action.bound
    resetGame(){
        this.goToInitialLevelAndUpdateCells();
    }
    
    @action.bound
    setTopLevel(){
        const { level,topLevel } = this;
        if(level > topLevel){
            topLevel = level;
        }
        else{
            topLevel = topLevel;
        }
    }
}

let gridStores = new GridStores;
export default gridStores;
