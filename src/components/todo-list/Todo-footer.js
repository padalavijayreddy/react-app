import React from 'react';



const ActiveTodosCount = props => {
    const { count } = props;
    return <div>{`${count} Left`}</div>;
};

const AllButton = () => {
    const selectedFilter = true
    return (
    <div className={selectedFilter?'selected-default-btn':'default-btn'}>
       All Button
    </div>
    );
};

const ClearCompletedButton = (props) => {
    const {show} = props;
    if(show) {
        return <div>Clear</div>;
    }
};

const todoFooterProps = {
    ActiveTodosCount: 5,
    showClearButton : true
};


class TodoFooter extends React.Component{
    state = {
        selectedFilterButton:'all'
    }
    onClickAllButton = () => {
        
    }
}

const TodoFooter = (props) => {
    const {ActiveTodosCount,showClearButton} = todoFooterProps;
    return (
        <div>
           <ActiveTodosCount count={ActiveTodosCount} />
           <AllButton selectedFilter={true} />
           <ActiveButton  />
           <CompletedButton />
           <ClearCompletedButton showClearButton = {true}  />
        </div>
        );
};


export default TodoFooter;