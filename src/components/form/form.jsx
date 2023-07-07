import axios from "axios";
import classNames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import Section from "../ui/section/section";
import Container from "../ui/container/container";
import SectionTitle from "../ui/section-title/section-title";
import "react-toastify/dist/ReactToastify.css";
import styles from "./form.module.scss";

export default function Form() {
  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const text = data.get("text");

    axios
      .post("https://getform.io/f/61c5e17b-12ca-4a16-9827-7f07f078b33c", {
        name,
        phone,
        email,
        text,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(
            "We have received your application and will contact you shortly",
            {
              position: toast.POSITION.BOTTOM_LEFT,
            }
          );

          e.target.reset();
        }
      })
      .catch((error) => {
        toast.error(`Oooops... Something went wrong. Error status: ${error}`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  return (
    <Section id="form">
      <Container>
        <div className={styles.content}>
          <SectionTitle
            className="js-fade-el-translate"
            subtitle="We are more then happy to meet you for 30 minutes via Google Meet to introduce all our services and find the best way to be useful in your life"
          >
            The best time for our meeting
          </SectionTitle>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formContent}>
              <div className={styles.column}>
                <label className={classNames(styles.label, "js-fade-el")}>
                  <span className={styles.labelTitle}>Your name</span>
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </label>
                <label className={classNames(styles.label, "js-fade-el")}>
                  <span className={styles.labelTitle}>Your phone</span>
                  <input
                    className={styles.input}
                    name="phone"
                    type="tel"
                    placeholder="07760 164 058"
                    required
                  />
                </label>
                <label className={classNames(styles.label, "js-fade-el")}>
                  <span className={styles.labelTitle}>Your email</span>
                  <input
                    className={styles.input}
                    name="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    required
                  />
                </label>
              </div>
              <div className={styles.column}>
                <label className={classNames(styles.label, "js-fade-el")}>
                  <span className={styles.labelTitle}>Type something</span>
                  <textarea
                    className={styles.textArea}
                    name="text"
                    placeholder="If you have something to write, write it here"
                  ></textarea>
                </label>
              </div>
            </div>
            <label className={classNames(styles.checkbox, "js-fade-el")}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                required
              />
              <p className={styles.checkboxText}>
                I agree to the processing of personal data.
                <a
                  className={styles.checkboxLink}
                  target="_blank"
                  href="https://www.docdroid.net/XuAybtL/privacy-policy-valentyna-bukovska-psychological-services-pdf"
                  rel="noreferrer"
                >
                  Read more
                </a>
              </p>
            </label>
            <button
              className={classNames(styles.button, "js-fade-el")}
              type="submit"
            >
              send an application
            </button>
          </form>
          <ToastContainer />
        </div>
      </Container>
    </Section>
  );
}
