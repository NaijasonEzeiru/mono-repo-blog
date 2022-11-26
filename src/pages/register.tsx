import { FC, useContext, useState } from "react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Register.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "../schema";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });
  //   const { signup, user, error } = useContext(AuthContext);
  const [user, setuser] = useState(null)

  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["users.register-user"], {
    onSuccess: () => {
      setuser(user)
      console.log(user)
      router.push("./login");
    },
  });

  function onSubmit(values: RegisterSchemaType) {
    mutate(values);
  }

  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <p>{error && error.message}</p>
      {!user ? (
        <span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.signUp}>Sign Up</h2>
            <div>
              <label htmlFor="username">Username:</label>
              <input {...register("username")} type="text" name="username" />
              <span className={styles.error}> {errors.username?.message}</span>
            </div>

            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" {...register("email")} />
              <span className={styles.error}> {errors.email?.message}</span>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" {...register("password")} />
              <span className={styles.error}> {errors.password?.message}</span>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm password:</label>
              <input
                {...register("confirmPassword")}
                type="password"
                name="confirmPassword"
              />
              <span className={styles.error}>
                {" "}
                {errors.confirmPassword?.message}
              </span>
            </div>
            <div>
              {isSubmitting ? (
                <p> submitting... </p>
              ) : (
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              )}
            </div>
          </form>
          <h5>
            If you already have an account,{" "}
            <button>
              <Link href="/login">
                <a className={styles.btn}>Log in here</a>
              </Link>
            </button>
          </h5>{" "}
        </span>
      ) : (
        <h2> You are already have an account</h2>
      )}
    </div>
  );
};

export default Register;
