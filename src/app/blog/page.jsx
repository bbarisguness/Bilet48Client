import React from 'react'
import { getAll } from '@/services/blogServices'
import styles from './page.module.css'
export default async function Blogs() {
  const datas = await getAll()
  return (
    <div>
      {datas.data.map((item) => {
        return (
          <div className={styles.container}>
            {item.title}
          </div>
        )
      })}
    </div>
  )
}
