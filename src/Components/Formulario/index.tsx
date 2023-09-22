import { Flex, FormControl } from "@chakra-ui/react";
import { InputField } from "./Input";
// import ButtonLookMore from "../ButtonLookMore";
import { TextareaField } from "./Textarea";

import { api } from "../../Api/Lib/api";
import { FormEvent } from "react";

export default function Form(){

  async function sendData(event: FormEvent){
    event.preventDefault();

    await api.post("/feedbacks", {
      type: "Bug",
      comment: "Seu app esta ligado com o fornt-end",
      screenshot: "Screenshot sa tela"
    });

    alert("Dados enviados para o backend");
  }

  return (
    <Flex className="w-full md:w-[80%]">
      <form onSubmit={sendData}  className="w-full flex flex-col gap-8">
        <InputField type="text" id="name" placeholder="Seu nome" />
        <InputField type="email" id="email" placeholder="Endereço de email" />
        <InputField type="text" id="topic" placeholder="Assunto" />
        <TextareaField id="message" placeholder="Deixe sua mensagem" />
        {/* <ButtonLookMore text="Enviar" /> */}
        <button 
          type="submit" 
          className="w-full py-[1.8rem] bg-green-400 rounded-md cursor-pointer"
        >
          Enviar
        </button>

      </form>
    </Flex>
  );
}
