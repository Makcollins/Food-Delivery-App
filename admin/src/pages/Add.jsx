import React, { useState } from 'react'
import axios from 'axios'
import './css/Add.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  })

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const submitHandler = async (event) => {
    event.preventDefault(); //prevent reload
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: ""
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }


  return (
    <div className='add' onSubmit={submitHandler}>
      <Form>
        <Form.Group className="mb-3">
          <p>Upload Image</p>
          <Form.Label htmlFor="image" className='d-flex flex-column align-items-center border border-secondary border-2 rounded mt-3 p-3 upload'>
            {image ? <img src={URL.createObjectURL(image)} className='img-fluid  border border-secondary border-2 rounded-top' alt="" />
              : <div className='img-upload'>
                <FaCloudUploadAlt className='fs-1' />
                <p>Upload</p>
              </div>}
          </Form.Label>
          <Form.Control onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Product name</Form.Label>
          <Form.Control onChange={changeHandler} value={data.name} type="text" name='name' placeholder="Type here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control onChange={changeHandler} value={data.description} as="textarea" rows={6} name='description' placeholder='Write content here' />
        </Form.Group>
        <Form.Select onChange={changeHandler} name='category' className="mb-3" aria-label="Default select example">
          <option value="">--Select category--</option>
          <option value="Dinner/Lunch">Dinner/Lunch</option>
          <option value="Cakes">Cakes</option>
          <option value="Breakfast">Breakfast</option>
          <option value="drinks">drinks</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Product price</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control onChange={changeHandler} value={data.price} type='Number' name='price' aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Button variant="success" type="submit">
          ADD
        </Button>
      </Form>
    </div>
  )
}

export default Add