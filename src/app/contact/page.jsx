import { create, put } from '@/services/blogServices'
import { objectToFormData } from '@/utils/objecToFormData'
import React from 'react'

export default async function Contact() {

  const res = await put(objectToFormData({ title: 'test123', body: 'message', userId: 3 }), 2)
  return (
    <div>
      {res.data.id}
      
    </div>
  )
}
