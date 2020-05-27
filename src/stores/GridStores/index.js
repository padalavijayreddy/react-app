//Grid Game Stores

import { observable, action } from 'mobx';
import GridModel from '../GridModel';
import gridJsonObjectList from './data.json';


class GridStores {
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    @observable isLevelChanged
    @observable extraLife

    constructor() {
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.isLevelChanged = false;
        this.extraLife = 1;
        this.setGridCells();
    }


    @action.bound
    onCellClick(id) {
        let hidden;
        this.currentLevelGridCells.findIndex((cell) => {
            if (cell.id === id) {
                hidden = cell.isHidden;
            }
        });
        if (hidden) {
            this.incrementSelectedCellsCount();
            if (this.selectedCellsCount == gridJsonObjectList[this.level].hiddenCellCount) {
                this.isLevelChanged = true;
                setTimeout(() => {
                    this.increaseTheLifeAfterThirdLevel();
                    this.goToNextLevelAndUpdateCells();
                }, 500);
            }
        }
        else {
            this.isLevelChanged = true;
            setTimeout(() => {
                this.goToInitialLevelAndUpdateCells();
            }, 500);
        }
    }


    @action.bound
    setGridCells() {
        this.isLevelChanged = false;
        const { gridSize } = gridJsonObjectList[this.level];
        let idsList = [...Array(gridSize * gridSize).keys()];
        let randomList = [].concat(idsList).sort(() => Math.random() - 0.5).slice(0, gridSize);
        this.currentLevelGridCells = idsList.map((value) => {
            const gridStoreObject = {
                id: Math.random().toString(),
                isHidden: randomList.includes(value)
            };
            return new GridModel(gridStoreObject);
        });
    }


    @action.bound
    goToNextLevelAndUpdateCells() {
        if (this.level < 7) {
            this.level++;
            this.resetSelectedCellsCount();
            this.setGridCells();
        }
        else {
            this.isGameCompleted = true;
        }
    }


    @action.bound
    goToInitialLevelAndUpdateCells() {
        if (this.extraLife == 0 || this.level == 7) {
            this.extraLife = 1;
            this.setTopLevel();
            this.level = 0;
            this.resetSelectedCellsCount();
            this.setGridCells();
        }
        else {
            this.extraLife--;
            this.resetSelectedCellsCount();
            this.setGridCells();
        }
    }


    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellsCount = 0;
    }


    @action.bound
    incrementSelectedCellsCount() {
        this.selectedCellsCount++;
    }


    @action.bound
    onPlayAgainClick() {
        this.extraLife = 1;
        this.isGameCompleted = false;
        this.setTopLevel();
        this.resetGame();
    }


    @action.bound
    resetGame() {
        this.goToInitialLevelAndUpdateCells();
    }


    @action.bound
    increaseTheLifeAfterThirdLevel() {
        if (this.level >= 3) {
            this.extraLife++;
        }
    }


    @action.bound
    setTopLevel() {
        if (this.level > this.topLevel) {
            this.topLevel = this.level;
        }
        else {
            this.topLevel = this.topLevel;
        }
    }
}

let gridStores = new GridStores;
export { gridStores as default, gridJsonObjectList };
