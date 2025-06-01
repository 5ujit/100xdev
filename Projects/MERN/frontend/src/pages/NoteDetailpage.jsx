import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios.js";

const NoteDetailpage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigage = useNavigate();

  const { id } = useParams();
  // console.log({  id});
  // console.log( "id is here ", id);
  
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fethching note ", error);
        toast.error("Faild to fetch the note ");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);
  console.log({ note });

  return <div>Note Details</div>;
};

export default NoteDetailpage;
