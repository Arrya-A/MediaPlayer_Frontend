import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <Row className='w-100 mt-5 d-flex justify-content-center align-items-center ps-4'>
        <Col md={1}></Col>
        <Col md={5} className='p-3'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>

          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, officiis sequi tempora reiciendis, nam et vitae odio illum, recusandae adipisci vero aliquam temporibus. Sunt labore suscipit consequatur debitis iusto quisquam?</p>
          <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
          <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-75' />
        </Col>
      </Row>

      <div className="container">
        <h3 className='text-center my-5'>Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif" height={'200px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='px-md-5'>
          <Card style={{ width: '100%' }}  className='p-3 mt-3'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif" height={'200px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          <Col md={3}>
          <Card style={{ width: '100%' }}  className='p-3 mt-3'>
              <Card.Img variant="top" src="https://i.gifer.com/embedded/download/PZtt.gif" height={'200px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          <Col md={1}></Col>

        </Row>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary p-3 my-5 border-2 rounded">
            <div className="row p-4">
              <div className="col-md-6">
                <h3 className='text-warning'> Simple fast and Powerful</h3>
                <p className='mt-5'><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorem. A sed dicta eum, quaerat vel fugiat tempora voluptas! Iste,</p>
                <p className='mt-5'><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorem. A sed dicta eum, quaerat vel fugiat tempora voluptas! Iste,</p>
                <p className='mt-5'><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorem. A sed dicta eum, quaerat vel fugiat tempora voluptas! Iste,</p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/UPQZ4vuvW2s" title="Munbe Vaa HD Video Song | Sillunu Oru Kadhal Tamil Movie | Suriya | Bhumika | Jyothika | AR Rahman" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      


    </>
  )
}

export default Landing