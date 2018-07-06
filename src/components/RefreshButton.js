import React from 'react';
import { connect } from 'react-redux';
import { newList } from '../actions';

const mapStateToProps = (state)=>{
  return {
    numberslist: state.numberslist
  };
};

const RefreshButton = ({dispatch, numberslist}) => {
  return (<div><button onClick={(e)=>{dispatch(newList())}}>New List</button></div>)
};

export default connect(mapStateToProps)(RefreshButton);
