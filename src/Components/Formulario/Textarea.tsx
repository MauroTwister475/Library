import { Stack, Textarea } from "@chakra-ui/react";

interface TextareaFieldProps {
  id: string,
  placeholder: string,
}

export function TextareaField({id, placeholder }: TextareaFieldProps){
  return(
    <Stack direction='column'>
      <Textarea 
        id={id} 
        placeholder={placeholder}
        className="w-full h-40 p-6 rounded-md resize-none text-[1.5rem] md:text-[2rem]" 
      >
      </Textarea>
    </Stack>
  )
}