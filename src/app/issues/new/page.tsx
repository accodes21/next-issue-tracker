import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssue = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Text'/>
        <TextArea placeholder='Description'/>
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssue