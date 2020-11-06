import React, { Component, useState, useContext, FormEvent, ChangeEvent, ButtonHTMLAttributes } from "react";
import {
  Form,
  FormInput,
  Button,
  BouncyDiv,
  FormSection,
} from "../../styles/loginStyles";

//Importação da rota
import { Link } from "react-router-dom";
import { valueScaleCorrection } from "framer-motion/types/render/dom/layout/scale-correction";
import StoreContext from "../../components/Store/Context";
import { useHistory } from "react-router-dom";


function initialState() {
  return { matric: "", password: "" };
}


function login(matric: string, password: string ) {
  if (matric === "admin" && password === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const { token, error } = login(values.matric, values.password);

    if (token) {
      setToken();
      return history.push("/");
    }

    // setError(error);
    setValues(initialState);
  }

  return (
    <div className="page-login">
      <BouncyDiv>
        <FormSection>
          <Form onSubmit={onSubmit}>
            <label htmlFor="matric">Matricula</label>
            <FormInput
              id="matric"
              type="text"
              name="matric"
              onChange={onChange}
              value={values.matric}
            />

            <label htmlFor="password">Senha</label>
            <FormInput
              id="password"
              type="password"
              onChange={onChange}
              name="password"
              value={values.password}
            />

            <Button type="submit">Entrar</Button>

            {/* {error && (
          <div className="user-login__error">{error}</div>
        )} */}
          </Form>
        </FormSection>
      </BouncyDiv>

      <Link to="/Home">Ir para Home</Link>
    </div>
  );
};

export default Login;
