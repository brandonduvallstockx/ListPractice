import NumberItem from './NumberItem';
import React from 'react';
import PropTypes from 'prop-types';

function conditionalList (numberslist) {
  let i = 0;
  if(numberslist){
    return numberslist.map(item => (<NumberItem value={item} key={i++}/>))
  }else{
    return (<NumberItem value="5" />)
  }
}

const NumberList = ({numberslist}) => {
  console.log("IN VIEW: ", numberslist);
    return (<ul>{conditionalList(numberslist)}</ul>)
};


NumberList.propTypes = {
  numberslist: PropTypes.arrayOf(NumberItem)
};

export default NumberList;
