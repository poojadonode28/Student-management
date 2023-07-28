import axios from "axios";

const API_URL="http://localhost:8080/students";
export const addStudent=async(data)=>{
    try{
        return await axios.post(`${API_URL}`,data);

    }
    catch(error){
        console.log("Error while calling AddStudent api",error.message);
    }
}

export const getStudent=async(id)=>{
    id=id ||'';
    try{
        return await axios.get(`${API_URL}`);

    }
    catch(error){
        console.log("Error while calling AllStudent api",error.message);
    }
}

export const getSingleStudent=async(id)=>{
    try{
        return await axios.get(`${API_URL}/${id}`,id);

    }
    catch(error){
        console.log("Error while calling SingleStudent api",error.message);
    }
}
export const deleteStudent=async(id)=>{
    try{
        return await axios.delete(`${API_URL}/${id}`,id);
    }
    catch(error){
        console.log("Error while calling delete api",error.message);
    }
}

export const editStudent=async(data,id)=>{
    try{
        return await axios.put(`${API_URL}`,data);

    }
    catch(error){
        console.log("Error while calling editStudent api",error.message);

    }

}

