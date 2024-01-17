import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import {toast} from "react-toastify";
import getCookie from "../functions/getCookie";
import HorizontalIcons from "../components/HorizontalIcons";
import {useTranslation} from "react-i18next";

function Send_message() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function send_data(e) {
    e.preventDefault();
    fetch("/api/save_message", {
        method: "POST",
        credentials: 'include',
        mode: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({
          name:name,
          email:email,
          subject:subject,
          message:message
        }),
      }).then((response) => {
        if (response.status === 200) {
          showSuccessMessage();
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          showErrorMessage();
        }
      })
          .catch((error) => {
            showErrorMessage();
          });
  }

      const showErrorMessage = () => {
        toast.error('Chyba!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showSuccessMessage = () => {
        toast.success('Zpráva odeslána!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
            <HorizontalIcons />
        </div>
        <div className="col-sm-6">
            <h2>{t("Send me message")}</h2>
            <Form onSubmit={send_data}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>{t("Name")}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Name")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>{t("Subject")}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("Subject")}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  maxLength={10}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>{t("Message")}</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder={t("Message")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Control variant="primary" type="submit" style={{marginBottom:"30px"}}/>
            </Form>
           </div>
      </div>
    </div>
  );
}

export default Send_message;
