import React, { Component } from 'react';
import { render } from 'react-dom';
import { Form, FormControl, FormGroup, Col, Checkbox, Button, ControlLabel, Modal } from 'react-bootstrap';

import '../css/bootstrap-material-design.min.css';


class AppHeader extends Component {


  render() {

      return(
      <div>

        <div className="container">

     <div className="panel">
        <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Şirket Ünvanı
          </Col>
          <Col sm={10}>
            <FormControl type="Şirket Ünvanı" placeholder="Şirket Ünvanı" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Şirket Adresi
          </Col>
          <Col sm={10}>
            <FormControl type="Şirket Adresi" placeholder="Şirket Adresi" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Telefon
          </Col>
          <Col sm={10}>
            <FormControl type="Telefon" placeholder="Telefon" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Ülke
          </Col>
          <Col sm={10}>
            <FormControl type="Ülke" placeholder="Ülke" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Posta Kodu
          </Col>
          <Col sm={10}>
            <FormControl type="Posta Kodu" placeholder="Posta Kodu" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Vergi Kimlik No
          </Col>
          <Col sm={10}>
            <FormControl type="Vergi Kimlik No" placeholder="Vergi Kimlik No" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Web Adresi
          </Col>
          <Col sm={10}>
            <FormControl type="Web Adresi" placeholder="Web Adresi" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Acenta Adı
          </Col>
          <Col sm={10}>
            <FormControl type="Acenta Adı" placeholder="Acenta Adı" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Yetkili Ünvanı
          </Col>
          <Col sm={10}>
            <FormControl type="Yetkili Ünvanı" placeholder="Yetkili Ünvanı" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Yetkili Adı Soyadı
          </Col>
          <Col sm={10}>
            <FormControl type="Yetkili Adı Soyadı" placeholder="Yetkili Adı Soyadı" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Yetkili Mail Adresi
          </Col>
          <Col sm={10}>
            <FormControl type="Yetkili Mail Adresi" placeholder="Yetkili Mail Adresi" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Yetkili Telefonu
          </Col>
          <Col sm={10}>
            <FormControl type="Yetkili Telefonu" placeholder="Yetkili Telefonu" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Şirket Yıllık Ciro
          </Col>
          <Col sm={10}>
            <FormControl type="Şirket Yıllık Ciro" placeholder="Şirket Yıllık Ciro" />
          </Col>
        </FormGroup>


        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Kaydet & Gönder
            </Button>
          </Col>
        </FormGroup>
      </Form>

         </div>

        </div>



       </div>
  );
  }
  }

export default AppHeader;

