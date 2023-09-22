import { Stack, FormLabel, Input } from "@chakra-ui/react";

interface InputProps {
  id: string,
  label?: string,
  type: string,
  placeholder: string,
}

export function InputField({id, label, type, placeholder }: InputProps){
  return(
    <Stack direction='column'>
      <FormLabel>{label}</FormLabel>
      <Input 
        id={id} 
        type={type} 
        placeholder={placeholder}
        className="w-full p-6 rounded-md text-[1.5rem] md:text-[2rem]" 
      />
    </Stack>
  )
}