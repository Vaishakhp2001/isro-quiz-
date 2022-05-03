import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import Main from "../Main";

function Edit(props) {
    
    
    const user = JSON.parse(props.data)
    const Id = user._id

    const [id, setId] = useState('')

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

   
    useEffect(() => {
        if(Id){
            
            setId(Id)
            
        }

        if(id){

            getUser()

        }

    },[id])


    const getUser = async () => {

        try {
            
            const url = "http://localhost:8080/api/profile/user/" + id;

            await axios.get(url).then((response) => {

                console.log(response.data)
                setData(response.data)
            })

            console.log(data)

        }

        catch (error) {
            console.log(error)
        }
    }

   

    const Navigate = useNavigate()

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = `http://localhost:8080/api/profile/user/edit/${data._id}`;
            axios.post(url, data).then((res) => {
                Navigate('/profile')
            })
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
       <Main/>
               <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <h1>User Profile</h1>
                    <input type="text" placeholder='First Name'
                        name='firstName' onChange={handleChange}
                        value={data.firstName} required className={styles.input} />

                    <input type="text" placeholder='Last Name'
                        name='lastName' onChange={handleChange}
                        value={data.lastName} required className={styles.input} />

                    <input type="text" placeholder='Email'
                        name='email' onChange={handleChange}
                        value={data.email} required className={styles.input} />



                    <button type='submit' className={styles.green_btn}>Edit</button>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}
export default Edit;

