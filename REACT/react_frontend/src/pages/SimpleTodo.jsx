import React from "react";
import { useState,useEffect } from "react";

const SimpleTodo = () =>{
    const [todos,setTodos]  = useState([])
    const [input,setInput]  = useState("")
    const [editIndex,setEditIndex] = useState(null)

    //load from local storage on mount
    // MOUNTING 
//     💡 What Does "Mounting" Mean in React?
// In React, "mounting" means when a component is first added to the DOM and rendered on the screen.

// When your React component loads for the first time (like when the page opens or the component is first shown), it gets “mounted.”

// Think of it like:

// "Hey React, here's a new component — put it on the screen and get it ready to go!" ✅
// 🔁 So in Summary:
// Step	What Happens
// 🟢 Mounting	Component is added to the page
// ⚪ Initial Render	Renders with default state (e.g., empty list)
// 🔵 useEffect Runs	Loads data from localStorage
// 🔄 State Updates	setTodos() triggers re-render
// ✅ Final Render	Todos are shown from saved data

useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos"|| []));
    setTodos(savedTodos);
},[]);

useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
})

  // ✅ Add or Update Todo
const handleSubmit = (e) =>{
    e.preventDefault()

     if (!input.trim()) return;

     if (editIndex!==null) { 
        const updatedTodos = [...todos];
        updatedTodos[editIndex].text = input;
     }
}



}