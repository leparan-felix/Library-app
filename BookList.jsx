import React from "react";
import { useState, useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom";
const EditBook = () => {
  const {id} = useParams();
  const {navigate}=useNavigate();
  const [title,setTitle]=useState("");
  const [author,setAuthor]=useState("");
  const [loading,setLoading ]=useState("");
  const [error,setError]=useState("null");

fetch(`http://localhost:3000/books/${id}`)
.then((res)=> {if(res.ok)throw new Error("Error fetching data");
  return res.json();
}
).then((data)=>{
  setTitle(data.title);
  setAuthor(data.author);
setLoading(false);
} ).catch((err)=>{
  setError(err.message);
  setLoading(false);
});
},[id]);
const handleSubmit=(e)=>{
  e.preventDefault(); 