import React, { useState } from 'react';
// import Modal from '../Modal/modal';
import { useForm } from 'react-hook-form';
import './form.scss';
import {
  Button,
  FormGroup,
  Form as FormComp,
  Label,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import InputFile from '../upload-input-file/upload-input-file';
import Field from '../field/field';
import TermsModal from '../../../modals/terms-modal';
import FeedbackModal from '../../../modals/feedback-modal';

const MODAL_TYPE = {
  FEEDBACK: 'feedback',
  TERMS: 'terms',
};

const Form = () => {
  const { handleSubmit, register, errors, watch, reset } = useForm({
    defaultValues: {
      agreement: false,
    },
  });

  const [modalType, setModalType] = useState('');
  const toggle = () => setModalType('');

  const onSubmit = () => {
    if (!Object.keys(errors).length) {
      handleFeedbackModalOpen();
    }
  };

  const handleFeedbackModalOpen = () => {
    setModalType(MODAL_TYPE.FEEDBACK);
  };

  const handleTermsModalOpen = () => {
    setModalType(MODAL_TYPE.TERMS);
  };

  const acceptTerms = watch('agreement');
  const surname = watch('surname');

  return (
    <Container>
      <FeedbackModal
        isOpen={modalType === MODAL_TYPE.FEEDBACK}
        toggle={toggle}
        surname={surname}
        reset={reset}
      />
      <TermsModal isOpen={modalType === MODAL_TYPE.TERMS} toggle={toggle} />

      <h1 className="mb-5 font-weight-bold">Анкета соискателя</h1>
      <h4 className="font-weight-bold">Личные данные</h4>
      <FormComp
        onSubmit={handleSubmit(onSubmit)}
        className="pad mb-2 mr-sm-2 mb-sm-0 pb-3"
      >
        <Row xs="2" className="mt-3">
          <Col xs="12" sm="4" className="mt-3">
            <Label for="surname">Имя *</Label>
            <Field
              name="surname"
              placeholder="Иван"
              register={register}
              rules={{ required: 'Обязательное поле' }}
              errors={errors}
            />
          </Col>
          <Col xs="12" sm="4" className="mt-3">
            <Label for="lastname">Фамилия *</Label>
            <Field
              name="lastname"
              placeholder="Фамилия"
              register={register}
              rules={{ required: 'Обязательное поле' }}
              errors={errors}
            />
          </Col>
        </Row>

        <Row xs="2" className="mt-3">
          <Col xs="12" sm="4" className="mt-3">
            <Label for="email">Электронная почта *</Label>
            <Field
              name="email"
              placeholder="Электронная почта"
              register={register}
              rules={{
                required: 'Обязательное поле',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Неверный формат email',
                },
              }}
              errors={errors}
            />
          </Col>

          <Col xs="12" sm="4" className="mt-3">
            <div className="form-group inputDnD">
              <Label for="inputFile">Загрузить резюме</Label>
              <InputFile />
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="12" sm="12" className="mb-2">
            <h4 className="font-weight-bold">
              Пол *
              {errors.gender && (
                <span className="text-danger required-label">
                  {errors.gender.message}
                </span>
              )}
            </h4>
          </Col>
          <Col xs="6" sm="3">
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  value="male"
                  innerRef={register({ required: 'Укажите пол' })}
                />
                Мужской
              </Label>
            </FormGroup>
          </Col>
          <Col xs="6" sm="3">
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  innerRef={register({ required: 'Укажите пол' })}
                />
                Женский
              </Label>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="12" sm="12" className="mb-2">
            <h4 className="font-weight-bold">Github</h4>
          </Col>
          <Col xs="12" sm="4">
            <Label for="github">Вставьте ссылку на Github</Label>
            <Field
              name="github"
              placeholder="Ссылка"
              register={register}
              errors={errors}
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="12" sm="12" className="mb-2">
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="agreement" innerRef={register} /> *
                Я согласен с{' '}
                <a href="#" onClick={handleTermsModalOpen}>
                  политикой конфиденциальности
                </a>
              </Label>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" sm="5">
            <Button
              type="submit"
              color="primary"
              block
              className="mt-3"
              disabled={!acceptTerms}
            >
              Отправить
            </Button>
          </Col>
        </Row>
      </FormComp>
    </Container>
  );
};

export default Form;
