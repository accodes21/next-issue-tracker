'use client'
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const NewIssue = () => {
  const router = useRouter()

  type IssueForm = {
    title: string;
    description: string;
  }

  const {register, control, handleSubmit} = useForm<IssueForm>();
  

  return (
    <form className='max-w-xl space-y-3' 
    onSubmit={handleSubmit(async(data) => {
      await axios.post('/api/issue', data)
      router.push('/issues')
    }
    )}>
        <TextField.Root placeholder='Text' {...register("title")}/>
        <Controller
          name='description'
          control={control}
          render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}
        />
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssue