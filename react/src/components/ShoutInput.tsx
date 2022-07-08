import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

type formData = {
  message: string;
}

export const ShoutInput = () => {

  const { register, handleSubmit, reset } = useForm<formData>();

  const send = handleSubmit(async ({ message }) => {
    reset();

    console.log(message)

    // const url = "http://localhost:4000"
    const url = "https://api.void.nick.wylynko.com"

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ message })
    })

    const data = await response.json();

    console.log(data);
  })

  return (
    <Background>
      <Container onSubmit={send}>
        <h2>Shout -{'>'} void</h2>
        <Input type="text" placeholder="click enter to shout" autoFocus {...register("message")} />
      </Container>
    </Background>
  )
}

const Background = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.form`

  padding: 32px;

  background-color: var(--background);
  border: 3px solid var(--foreground);
  border-radius: 16px;

`;

const Input = styled.input`

  border: none;
  background-color: var(--background);
  color: var(--foreground);

  padding: 8px;

  text-align: center;

  &::placeholder {

    color: #c6dbeb;

  }

`;