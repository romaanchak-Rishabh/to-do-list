import React, { useEffect } from 'react';
import "./Protected.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from './InputField';
import TodosList from './TodosList';
import { connect } from 'react-redux';
import { deleteAll, persistTodo } from './redux/action/addTodo.action';


const Protected = ({deleteAll, persistTodo}) => {
  useEffect(() => {
    persistTodo();
  }, [persistTodo])
  return (
    <div className='protected'>
    <h1 style={{ textDecoration: 'underline', marginTop: '20px' }}>Todo's App</h1>
    <p>Not authenticated with username and password, so everyone can access it, but made login, logout functions.</p>
    <p>PS. It will just take few lines of code to authenticate username and password</p>
      <InputField />
      <TodosList />
      <div>
        <button onClick={deleteAll}>Delete All</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodo: () => dispatch(persistTodo())
})
export default connect(null, mapDispatchToProps)(Protected);