import { useState,useEffect } from "react";
import { FormControl,FormGroup, InputLabel,Input,Typography, Button,styled} from "@mui/material";
import { getSingleStudent,editStudent } from "../services/api";
import { useNavigate,useParams } from "react-router-dom";

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

const EditStudent=()=>{
    const[student,setStudent]=useState(initialValue);
    const navigate = useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        getStudentData();

    },[]);
    const getStudentData=async()=>{
        let response=await getSingleStudent(id);
        setStudent(response.data);
    }
    const OnValueChange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});

    }

    const addStudentDetails=async()=>{
         await editStudent(student,id);
        navigate('/all');

    }
    return(
            <Container>
                <Typography variant="h4">Edit Student</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>OnValueChange(e)} name="name" value={student.name}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Branch</InputLabel>
                    <Input onChange={(e)=>OnValueChange(e)} name="branch" value={student.branch}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>OnValueChange(e)}  name="email" value={student.email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>OnValueChange(e)} name="phone" value={student.phone}/>
                </FormControl>
                <FormControl>
                <Button onClick={()=>addStudentDetails()} variant="contained">Edit Student</Button>
                </FormControl>

            </Container>
    );
}

export default EditStudent;