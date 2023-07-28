import { useState } from "react";
import { FormControl,FormGroup, InputLabel,Input,Typography, Button,styled} from "@mui/material";
import { addStudent } from "../services/api";
import { useNavigate } from "react-router-dom";

const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;

    & > div{
        margin-top:20px;
    }


`;

const initialValue={
    name:'',
    branch:'',
    email:'',
    phone:''

}

const AddStudent=()=>{
    const[student,setStudent]=useState(initialValue);
    const navigate = useNavigate();
    const OnValueChange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});

    }

    const addStudentDetails=async()=>{
        await addStudent(student);
        navigate('/all');

    }
    return(
            <Container>
                <Typography variant="h4">Add Student</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>OnValueChange(e)} name="name"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Branch</InputLabel>
                    <Input onChange={(e)=>OnValueChange(e)} name="branch"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>OnValueChange(e)}  name="email"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>OnValueChange(e)} name="phone"/>
                </FormControl>
                <FormControl>
                <Button onClick={()=>addStudentDetails()} variant="contained">Add Student</Button>
                </FormControl>

            </Container>
    );
}

export default AddStudent;