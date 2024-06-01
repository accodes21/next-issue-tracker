'use client'
import { Button, Text, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import {z} from 'zod'

const NewIssue = () => {
  const router = useRouter()

  type IssueForm = z.infer<typeof createIssueSchema>

  const {register, control, handleSubmit, formState: {errors}} = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  

  return (
    <form className='max-w-xl space-y-3' 
    onSubmit={handleSubmit(async(data) => {
      try {
        await axios.post('/api/issue', data)
        router.push('/issues')

      } catch (error) {
        console.log(error);
        
      }
    }
    )}>
        <TextField.Root placeholder='Text' {...register("title")}/>
        {errors.title && <Text color='red' as='p'>{errors.title.message}</Text>}
        <Controller
          name='description'
          control={control}
          render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}
        />
        {errors.description && <Text color='red' as='p'>{errors.description.message}</Text>}
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssue