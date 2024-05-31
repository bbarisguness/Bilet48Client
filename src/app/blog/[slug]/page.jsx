import { getById } from '@/services/blogServices'
import React from 'react'

export default async function BlogDetail({ params }) {
  const data = await getById(params.slug)
  return (
    <div>{data.data.title}</div>
  )
}
