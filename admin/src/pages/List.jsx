import React, { useEffect, useState } from 'react'
import './css/List.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();

    if (response.data.success) {
      toast.success(response.data.success)
    } else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add d-flex flex-column'>
      <p>All Food List</p>
      <div className="list-table">
        <Row className='format-table title'>
          <Col><b>Image</b></Col>
          <Col><b>Name</b></Col>
          <Col><b>Category</b></Col>
          <Col><b>Price</b></Col>
          <Col><b>Rating</b></Col>
          <Col><b>Action</b></Col>
        </Row>
        {list.map((item, index) => {
          return (
            <Row key={index} className='format-table'>
              <Col><img src={`${url}/images/` + item.image} className='img-fluid' alt="" /></Col>
              <Col>{item.name}</Col>
              <Col>{item.category}</Col>
              <Col>${item.price}</Col>
              <Col>{item.aggregate_rating}</Col>
              <Col onClick={() => removeFood(item._id)} className='x-del'>X</Col>
            </Row>
          )
        })}
      </div>
    </div>
  )
}

export default List