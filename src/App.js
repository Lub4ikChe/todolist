import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Tasks from './components/Tasks/Tasks';
import { connect } from 'react-redux';
import { addListItem, removListItem, addTaskItem, removTaskItem, toggleTaskItemCompleted, changeListItemName, setActiveListItem } from './redux/actions';
import { useHistory, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App({ setActiveListItem, activeListItem, lists, colors, tasks, addListItem, removListItem, addTaskItem, removTaskItem, toggleTaskItemCompleted, changeListItemName }) {

  let history = useHistory();

  useEffect(() => {
    let splitedId = +history.location.pathname.split('lists/')[1];
    history.listen(() => {
      let splitedId = +history.location.pathname.split('lists/')[1];
      setActiveListItem(splitedId);
    })
    setActiveListItem(splitedId);
  }, [setActiveListItem, history])


  const addTaskMenuFunctions = {
    addListItem,
  };

  const cardTaskMenu = {
    addTaskItem,
  };


  return (
    <div className="todo">
      <div className="todo__sidebar">
        <Sidebar tasks={tasks} setActiveListItem={setActiveListItem} activeListItem={activeListItem} history={history} lists={lists} colors={colors} removListItem={removListItem} addTaskMenuFunctions={addTaskMenuFunctions} />
      </div>
      <div className="todo__tasks">
        <Route exact path='/' >
          <Tasks renderAll={true} tasks={tasks} lists={lists} changeListItemName={changeListItemName} toggleTaskItemCompleted={toggleTaskItemCompleted} removTaskItem={removTaskItem} colors={colors} cardTaskMenu={cardTaskMenu} />
        </Route>
        <Route exact path={`/lists/${activeListItem}`}>
          <Tasks renderAll={false} activeListItem={activeListItem} tasks={tasks} lists={lists} changeListItemName={changeListItemName} toggleTaskItemCompleted={toggleTaskItemCompleted} removTaskItem={removTaskItem} colors={colors} cardTaskMenu={cardTaskMenu} />
        </Route>
        <Route>
        </Route>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    lists: state.lists.lists,
    colors: state.colors.colors,
    tasks: state.tasks.tasks,
    activeListItem: state.lists.activeList,
  };
}

const mapDispatchToProps = {
  addListItem,
  removListItem,
  addTaskItem,
  removTaskItem,
  toggleTaskItemCompleted,
  changeListItemName,
  setActiveListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
