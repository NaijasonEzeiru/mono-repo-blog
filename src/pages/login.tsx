import Link from "next/link";
import styles from "../styles/Login.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType, RegisterSchemaType } from "../schema";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AuthContext from "../components/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const router = useRouter();
  const user = false;

  const { mutate, data } = useContext(AuthContext);

  // console.log("mutate:", mutate)
  // const { mutate, error } = trpc.useMutation(["users.login"], {
  //   onSuccess: () => {
  //     console.log(user);
  //     loginUser(user)
  //     router.push("./");
  //   },
  // });

   function onSubmit(values: LoginSchemaType) {
   mutate(values);
    console.log(data)
  }

  return (
    <div className={styles.login}>
      {!user ? (
        <span>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="username"> Username / Email:</label>
              <input type="text" {...register("username")}></input>
              <span className={styles.error}>{errors.username?.message}</span>
            </div>
            <div>
              <label htmlFor="email"> Password:</label>
              <input type="password" {...register("password")}></input>
              <span className={styles.error}>{errors.password?.message}</span>
            </div>
            {isSubmitting ? (
              <p> Submitting </p>
            ) : (
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            )}
          </form>
          <h5>
            Do not have an account? please{" "}
            <button>
              <Link href="/register">
                <a className={styles.btn}>Sign up</a>
              </Link>
            </button>
          </h5>{" "}
        </span>
      ) : (
        <h2> You are already logged in</h2>
      )}
    </div>
  );
};

export default Login;
