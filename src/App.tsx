import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<submitData>();

  interface submitData {
    name: string;
    surname: string;
    email: string;
    password: string;
  }

  const onSubmit: SubmitHandler<submitData> = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <section className="left-section">
        <div className="left-section-text">
          <h2>Learn to code by watching others</h2>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>
      </section>
      <section className="right-section">
        <button className="try-btn">
          Try it free 7 days then $20/mo. thereafter
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input-div">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="First Name"
              className={`form-inp ${errors.name && "error-input"}`}
            />
            {errors.name && (
              <div className="error-icon">
                <div className="error-icon-rectangle"></div>
                <div className="error-icon-cicle"></div>
              </div>
            )}
            {errors.name && (
              <span className="error-message">First Name cannot be empty</span>
            )}
          </div>
          <div className="input-div">
            <input
              {...register("surname", { required: true })}
              type="text"
              placeholder="Last Name"
              className={`form-inp ${errors.surname && "error-input"}`}
            />
            {errors.surname && (
              <div className="error-icon">
                <div className="error-icon-rectangle"></div>
                <div className="error-icon-cicle"></div>
              </div>
            )}
            {errors.surname && (
              <span className="error-message">Last Name cannot be empty</span>
            )}
          </div>
          <div className="input-div">
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="email"
              placeholder="Email Address"
              className={`form-inp ${errors.email && "error-input"}`}
            />
            {errors.email && (
              <div className="error-icon">
                <div className="error-icon-rectangle"></div>
                <div className="error-icon-cicle"></div>
              </div>
            )}
            {errors.email && (
              <span className="error-message">
                Looks like this is not an email
              </span>
            )}
          </div>
          <div className="input-div">
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className={`form-inp ${errors.password && "error-input"}`}
            />
            {errors.password && (
              <div className="error-icon">
                <div className="error-icon-rectangle"></div>
                <div className="error-icon-cicle"></div>
              </div>
            )}
            {errors.password && (
              <span className="error-message">Password cannot be empty</span>
            )}
          </div>
          <button type="submit" className="submit-btn">
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="footer-p">
            By clicking the button, you are agreeing to our{" "}
            <span style={{ color: "#FF7979", cursor: "pointer" }}>
              Terms and Services
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
