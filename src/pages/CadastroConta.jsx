import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import FullpageSpinner from "../components/FullpageSpinner";
import useAuth from "../hooks/useAuth";
import { useStore } from "../store";
import { login } from "../utils/apiRequest";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const style = {
  input:
    "block w-full rounded-lg border border-[#eee] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none",
  icon: "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]",
  error: "mt-1 block text-xs text-red-400",
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/dashboard";
  const from = location.state?.from?.pathname;
  const { user, loading } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const setUser = useStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const auth = getAuth();
  
  const cadastroFirebase = async (data) => {
    try {
      setIsLoading(true);
      const toastId = toast.loading("Cadastrando sua conta...");
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const result = userCredential.user;
      setIsLoading(false);
      
      console.log(result)
  
      setUser(data.email);
      reset();
  
      toast.success("Cadastro bem sucedido!", { id: toastId });
      return navigate(from, { replace: true });
      
    } catch (error) {
        toast.error(error.message, { id: toastId });
  
      }
      toast.error(result?.message || "Algo deu errado. Contate a administração!", {
        id: toastId,
      });
    };

  if (loading) return <FullpageSpinner />;
  if (user) return <Navigate to={from} replace />;

  return (
    <AuthWrapper>
      <div>
        <Link className="inline-block" to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h1 className="mb-9 mt-14 text-2xl font-semibold text-[#1d1d1d]">
          Log in to your account
        </h1>

        <form
          aria-disabled={isLoading}
          className="text-[#1d1d1d] aria-disabled:pointer-events-none aria-disabled:opacity-60"
          onSubmit={handleSubmit(cadastroFirebase)}
        >
          <div className="mb-3">
            <div className="relative">
              <input
                className={style.input}
                {...register("email", {
                  required: "Insira seu email",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                placeholder="Email"
              />
              <span className={style.icon}>
                <MdOutlineMailOutline />
              </span>
            </div>
            {errors.email && (
              <span className={style.error}>{errors.email.message}</span>
            )}
          </div>
          <div className="mb-2">
            <div className="relative">
              <input
                className={style.input}
                {...register("password", {
                  required: "Insira sua senha",
                })}
                aria-invalid={errors.password ? "true" : "false"}
                type="password"
                placeholder="Senha"
              />
              <span className={style.icon}>
                <MdOutlineLock />
              </span>
            </div>
            {errors.password && (
              <span className={style.error}>{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="mt-6 block w-full rounded-lg bg-primary p-4 text-center font-semibold text-white duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Login;
