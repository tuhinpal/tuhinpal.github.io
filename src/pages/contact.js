import * as React from "react";
import { useState } from "react";
import Main from "../compi/Main";
import { API_URL, RECAPTCHA_API_TOKEN } from "../config";
import ReCAPTCHA from "react-google-recaptcha";

export default () => {
  const [contact_name, setContact_name] = useState("");
  const [contact_reason, setContact_reason] = useState("no-reason");
  const [contact_email, setContact_email] = useState("");
  const [contact_msg, setContact_msg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [nameClass, setNameClass] = useState("text");
  const [emailClass, setEmailClass] = useState("text");
  const [msgClass, setMsgClass] = useState("message");

  const RecapH = React.createRef();

  return (
    <main>
      <title>Contact | Tuhin</title>
      {Main()}
      <div className="contact">
        <div className="_form_">
          <h1>Hello!</h1>
          <h2>I'm</h2>
          <input
            className={nameClass}
            name="name"
            type="text"
            value={contact_name}
            onChange={(event) => {
              setContact_name(event.target.value);
              setNameClass("text");
            }}
          />
          <h2>and contacting you because,</h2>
          <select
            name="reason"
            value={contact_reason}
            onBlur={() => { }}
            onChange={(event) => {
              setContact_reason(event.target.value);
            }}
          >
            <option value="no-reason">I wanted to say Hi</option>
            <option value="job">I wanted to give you a Job</option>
            <option value="product-query">Something Product Related</option>
            <option value="appreciation">To appreciate your work</option>
          </select>
          <h2>Here is my email address:</h2>
          <input
            className={emailClass}
            name="email"
            type="text"
            value={contact_email}
            onChange={(event) => {
              setContact_email(event.target.value);
              setEmailClass("text");
            }}
          />
          <h2>I wanted to tell you this:</h2>
          <textarea
            className={msgClass}
            value={contact_msg}
            onChange={(event) => {
              setContact_msg(event.target.value);
              setMsgClass("message");
            }}
          ></textarea>

          {!submitted ? (
            <button
              className="button"
              onClick={async () => {
                if (contact_name === "") {
                  setNameClass("text error");
                } else if (
                  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    contact_email.toLowerCase()
                  )
                ) {
                  setEmailClass("text error");
                } else if (contact_msg === "") {
                  setMsgClass("message error");
                } else {
                  setSubmitted(true);
                  var getEmailtime = localStorage.getItem("messageCount");
                  if (getEmailtime === null) {
                    localStorage.setItem("messageCount", 1);
                  } else {
                    localStorage.setItem(
                      "messageCount",
                      Number(getEmailtime) + 1
                    );
                  }
                  const RcTok = await RecapH.current.executeAsync();
                  fetch(`${API_URL}/contact`, {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      name: contact_name,
                      email: contact_email,
                      message: contact_msg,
                      reason: contact_reason,
                      recaptcha_token: RcTok,
                      totalmessage: localStorage.getItem('messageCount'),
                    }),
                  })
                    .then((response) => response.json())
                    .then((result) => {
                      if (result.status) {
                        setSubmitted("sent");
                      } else if (result.msg === "Recaptcha Error") {
                        setSubmitted("re_error");
                      }
                      console.log(result);
                    });
                }
              }}
            >
              Send to Tuhin
            </button>
          ) : submitted === "sent" ? (
            <button className="actionbutton">
              Sent{" "}
              <span role="img" aria-label="party popper">
                🎉
              </span>
            </button>
          ) : submitted === "re_error" ? (
            <button className="actionbutton">
              Failed to Sent (ReCaptcha Error)
            </button>
          ) : (
                  <button className="actionbutton">
                    Sending{" "}
                    <span role="img" aria-label="cloud">
                      ☁
              </span>
                  </button>
                )}
        </div>
      </div>

      <ReCAPTCHA ref={RecapH} size="invisible" sitekey={RECAPTCHA_API_TOKEN} />
    </main>
  );
};
