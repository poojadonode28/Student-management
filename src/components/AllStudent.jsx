import { useEffect,useState } from 'react';
import {Button, Table,TableBody,TableCell,TableHead, TableRow,styled} from '@mui/material';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../services/api';
import { getStudent } from '../services/api';


const StyledTable=styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
`;

const Thead=styled(TableRow)`
    background:#000;
    & > th{
        color:#fff;
        font-size:20px;
    }
`

const TRow=styled(TableRow)`
    & > td{
        font-size:18px;
    }
`




const AllStudent=()=>{
    const[student,setStudent]=useState([]);

    useEffect(()=>{
        getAllStudents();
    },[]);

    const deleteStudentData=async(id)=>{
        await deleteStudent(id);
        getAllStudents();

    }

    const getAllStudents=async()=>{
        let response=await getStudent();
        setStudent(response.data);
    }
    
    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Branch</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    student.map((s)=>(
                        <TRow key={s.id}>
                            <TableCell>{s.id}</TableCell>
                            <TableCell>{s.name}</TableCell>
                            <TableCell>{s.branch}</TableCell>
                            <TableCell>{s.email}</TableCell>
                            <TableCell>{s.phone}</TableCell>
                            <TableCell>
                            <Button variant='contained' color='secondary' style={{marginRight:10}} component={Link} to={`/edit/${s.id}`}>Edit</Button>
                            <Button variant='contained' onClick={()=>deleteStudentData(s.id)}>Delete</Button>
                            </TableCell>
                        </TRow>
                        

                    ))
                }

            </TableBody>
        </StyledTable>
        
    );
}

export default AllStudent;