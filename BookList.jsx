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
  fetch(`http://localhost:3000/books/${id}`,{
method :'PATCH',  
headers:{
  'Content-Type':'application/json',
},
body:JSON.stringify({
  title,
  author,
}),
}).then((res)=>{
  if(!res.ok)throw new Error("Failed to update book");
  if(res.status===404)throw new Error("Book not found");
  return res.json();
}).then((data)=>{
  console.log(data);
  navigate("/books");
}).catch((err)=>{
  setError(err.message);
});
}