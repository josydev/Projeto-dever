import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import img from "../assets/card-forms-img.png";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
`;

//ESTILOS DO FORM
const FormSection = styled.section`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 450px;
  height: 495px;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0.5rem 2rem;
  z-index: 999;
  left: 40px;

  @media (max-width: 800px) {
    background: #000;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 70%;
  height: 100%;
  margin: 0px auto 100px;
  justify-content: center;
`;

const TitleForm = styled.h1`
  font-weight: bold;
  color: #2e0094;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Oswald", sans-serif;
  font-size: 2.2em;
  text-transform: uppercase;
`;

const InputBox = styled.section`
  position: relative;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: #f0f0f0;
  padding: 13px;
  margin: 5px 0;
  width: 80%;
  outline: none;
  padding-left: 45px;

  &:focus {
    border: 1px solid #bbbbbb;
  }
`;

const Button = styled.button`
  width: 50%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  /* linear-gradient(
    90deg,
    #7d78ad 0%,
    rgb(155 119 201 / 98%) 35%,
    rgb(221, 136, 165) 100%
  );*/
  background: linear-gradient(90deg, #00ffed 0%, #3d00c6 100%);
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  margin: 20px auto;
  opacity: 0.8;
`;

const Error = styled.p`
  color: red;
`;

//ESTILOS DO CARD-FORM
const CardSection = styled.section`
  overflow: hidden;
  position: relative;
  width: 481px;
  height: 610px;
  border-radius: 0.5rem;
  background: url("${img}") no-repeat;
  left: -60px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0.2rem 0.2rem;
  background-position-y: 160px;
  background: linear-gradient(#00ffed, #3d00c6);
  background-size: auto;
  background-position-x: 100px;
`;

//ANIMATION
const bounceAnimation = keyframes`${bounce}`;
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;

export {
  Container,
  FormSection,
  Form,
  TitleForm,
  InputBox,
  FormInput,
  Button,
  Error,
  CardSection,
  BouncyDiv,
};
