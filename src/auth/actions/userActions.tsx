import axios from "axios";
import { sessionService } from "redux-react-session";
import { ILogin, IHistory, ISignUp } from "../../interfaces";

export const loginUser = (
  credentials: ILogin,
  history: IHistory,
  setFieldError: (field: string, message: string) => void,
  setSubmitting: (isSubmitting: boolean) => void
) => {
  return () => {
    axios
      .post(
        "https://sleepy-garden-29076.herokuapp.com/user/signin",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
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
      .post(
        "https://sleepy-garden-29076.herokuapp.com/user/signup",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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

          //complete  submission
          setSubmitting(false);
        } else if (data.status === "SUCCESS") {
          //login user after success signup

          axios
            .post(
              "https://sleepy-garden-29076.herokuapp.com/user/signin",
              credentials,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
              const { data } = response;

              if (data.status === "FAILED") {
                const { message } = data;

                if (message.includes("credentials")) {
                  setFieldError("email", message);
                  setFieldError("password", message);
                } else if (message.includes("password")) {
                  setFieldError("password", message);
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
        }
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
