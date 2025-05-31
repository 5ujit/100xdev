import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const NoteDetailpage = () => {
  const [note,setNote]= useState(null)
  const [loading,setLoading]=useState(true)
  const [saving ,setSaving]=useState(false)

  const navigage= useNavigate()
  const {id} = useParams();

  console.log({id});
  
  return (
    <div>
      
    </div>
  )
}

export default NoteDetailpage
