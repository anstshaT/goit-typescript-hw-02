import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={s.errorText}>
        Oops, something didn’t work as expected. Please reload the page.
      </p>
    </div>
  );
};

export default ErrorMessage;
