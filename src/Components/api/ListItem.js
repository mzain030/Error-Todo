import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DELETE_USER } from '../../generic/api';
const ListItem = (props) => {
  const { item, index, data, onDeleteSuccess } = props;
  const history = useNavigate();
  const [passwordvisibility, setPasswordVissiblity] = useState(false);
  function getPasswordState(length) {
    let str = '';
    for (let i = 0; i < length; i++) {
      str = str + '*';
    }
    return str;
  }
  function handleDeleteUser(id) {
    axios.delete(DELETE_USER + `/${id}`)
      .then((response) => {
        console.log("Delete user response", response);
        let tempData = data?.filter((item) => item?.id !== id);
        console.log("data after delete", tempData);
        onDeleteSuccess(tempData);
        history(-1);
      })
      .catch((error) => {
        console.log("Delete user Error", error)
      })
  }
  return (

    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item?.firstName}</td>
      <td>{item?.lastName}</td>
      <td>{item?.phone}</td>
      <td>{item?.email}</td>
      <td><div onClick={() => setPasswordVissiblity(!passwordvisibility)}>{passwordvisibility ? item?.password : getPasswordState(item?.password.length)}</div></td>
      <td>
        <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'space-evenly' }}>
          <img
            onClick={() => history('/adduser', { state: { item } })}
            style={{ height: 25, width: 25 }}
            src="https://e7.pngegg.com/pngimages/461/1024/png-clipart-computer-icons-editing-edit-icon-cdr-angle.png"
          ></img>
          <img
            onClick={() => handleDeleteUser(item?.id)}
            style={{ height: 25, width: 25 }}
            src="https://toppng.com/uploads/preview/edit-delete-icon-delete-icon-11553444925vxge0bju5o.png"
          ></img>
        </div>
      </td>
    </tr>
  )
}

export default ListItem;