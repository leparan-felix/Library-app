import React, { useState, useEffect, use } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
const [title,setTitle] = useState('');
const [author,setAuthor] = useState('');
const [loading,setloading] = useState(true);
const [error,setError] = useState('null');
const [book,setBook] = useState({});
useEffect(() => {
  fetch(`https://api.example.com/books/${id}`).then((res) => {
    if (!res.ok) {
      throw new Error('Book not found');
      return res.json();      
    }
    .catch