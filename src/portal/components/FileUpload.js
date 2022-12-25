import axios from 'axios';
import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import OutPutData from './OutPutData';

const FileUpload = () => {

  const [imageFile,setImageFile] = useState();
  const [outPutData,setOutPutData] = useState();
  const [output,setOutput] = useState(false);

  const submitFile = () => {
    const userToken = localStorage.getItem('user-token');
    axios.post('http://ocr_backend.local/api/convert-file',
    {
      file : imageFile
    },{
      headers : {
        "Content-Type": "multipart/form-data",
        'Authorization' : `Bearer ${userToken}`
      }
    }).then(response => {
      const data = response.data
      if (data.success) {
        setOutput(true);
        setOutPutData(data.data);
      }
    });
  }

  return (
    <>
      <Form.Group controlId="formFileLg" className="my-3">
          <Form.Label>Select Yout Image</Form.Label>
          <Form.Control type="file" onChange={(e) => {setImageFile(e.target.files[0])}} accept='image/*'/>
          <Button variant='primary' className='my-3' onClick={submitFile} >Get Text</Button>
      </Form.Group>
      {
        output && <OutPutData data = {outPutData} />
      }
    </>
  )
}

export default FileUpload;