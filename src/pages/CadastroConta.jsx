import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import { useStore } from "../store";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const style = {
  input:
    "block w-full rounded-lg border border-[#eee] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none",
  icon: "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]",
  error: "mt-1 block text-xs text-red-400",
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const [isLoading, setIsLoading] = useState(false);
  const setUser = useStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const auth = getAuth();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const toastId = toast.loading("Cadastrando sua conta...");
  
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      await sendEmailVerification(user, {
        url: 'http://www.ibfarol.com.br/login',
      })
  
      setIsLoading(false);
      setUser(data.email);
      reset();
      toast.success("Cadastro bem sucedido! Verifique seu e-mail.", { id: toastId });
      return navigate('/confirmacaoemail', { replace: true });
    } catch (error) {
      setIsLoading(false);
      console.error('Erro ao criar a conta:', error);
      toast.error('Erro ao criar a conta. Tente novamente.');
    }
  };
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  return (
    <AuthWrapper>
      <div>
        <Link className="inline-block" to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h1 className="mb-9 mt-14 text-2xl font-semibold text-[#1d1d1d]">
          Entre com seus dados para criar uma nova conta
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-[#1d1d1d] aria-disabled:pointer-events-none aria-disabled:opacity-60"
        >
          <div className="mb-3">
            <div className="relative">
              <input
                className={style.input}
                {...register("email", {
                  required: "Insira seu email",
                })}
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
            <p className="text-xs text-[#898989]">A senha deve conter no mínimo 6 caracteres e precisa coincidir</p>
            <div className="relative">
              <input
                className={style.input}
                {...register("password", {
                  required: "Insira sua senha",
                })}
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
          <div className="mb-2">
            <div className="relative">
              <input
                className={style.input}
                {...register("confirmPassword", {
                  required: "Confirme sua senha",
                  validate: (value) =>
                    value === password || "As senhas não coincidem",
                })}
                type="password"
                placeholder="Confirmar senha"
              />
              <span className={style.icon}>
                <MdOutlineLock />
              </span>
            </div>
            {errors.confirmPassword && (
              <span className={style.error}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!password || !confirmPassword || password !== confirmPassword}
            className={`mt-6 block w-full rounded-lg p-4 text-center font-semibold text-white duration-300 ${
              !password || !confirmPassword || password !== confirmPassword
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary'
            }`}
          >
            Cadastrar
          </button>
        </form>
        <p className="mt-8 text-center text-xs font-medium text-[#898989]">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Login;
