import axios from "axios";
import { sessionService } from "redux-react-session";
import { ILogin, IHistory, ISignUp } from "../../interfaces";

//the remote endpoint and local
const remoteUrl = "https://obscure-garden-97051.herokuapp.com/";

// const localUrl = "http://localhost:8000/";
const currentUrl = remoteUrl;

export const loginUser = (
  credentials: ILogin,
  history: IHistory,
  setFieldError: (field: string, message: string) => void,
  setSubmitting: (isSubmitting: boolean) => void
) => {
  return () => {
    axios
      .post(`${currentUrl}user/signin`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          } else if (message.toLowerCase().includes("email")) {
            setFieldError("email", message);
          }
        } else if (data.status === "SUCCESS") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  history.push("/products");
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        }
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

export const signupUser = (
  credentials: ISignUp,
  history: IHistory,
  setFieldError: (field: string, message: string | undefined) => void,
  setSubmitting: (field: boolean) => void
) => {
  return () => {
    axios
      .post(`${currentUrl}user/signup`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          if (message.includes("name")) {
            setFieldError("name", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          }
        } else if (data.status === "PENDING") {
          //display message for email verification
          const { email } = credentials;

          history.push(`/emailsent/${email}`);
        }

      //complete  submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

export const logoutUser = (history: IHistory) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history.push("/");
  };
};
