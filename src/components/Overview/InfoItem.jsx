import React from 'react';

const InfoItem = (props) => {
  console.log(props.item);
  /*if(props.item) {
    let lineItem = props.item.name;
  }*/
  return (

    <option value = {props.item.id}>{props.item.name} </option>
  )
}

export default InfoItem;