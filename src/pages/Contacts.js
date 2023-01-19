import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "materialize-css";
import { Button, TextInput, Textarea, Icon } from "react-materialize";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hcnzaua",
        "template_gvi31up",
        form.current,
        "eQc2y8iQUCa5cAq0h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className="container">
        <h2 className="--text-center"> Contact Us</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center  --dir-column"
        >
          <TextInput
            icon="assignment_ind"
            id="TextInput-81"
            name="user_name"
            label="Your Name"
            required
          />
          <TextInput
            email
            icon="contact_mail"
            id="TextInput-39"
            name="user_email"
            label="Your Email"
            validate
            required
          />
          <TextInput
            data-length={9}
            icon="contact_phone"
            id="TextInput-27"
            name="subject"
            label="Input text"

                      />
          <Textarea
            data-length={120}
            id="Textarea-29"
            name="message"
            label="Your Message"
          />
          <Button node="button" type="submit" waves="light">
            Submit
            <Icon right>send</Icon>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
