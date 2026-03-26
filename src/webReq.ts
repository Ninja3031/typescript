import axios , {AxiosResponse} from "axios";

interface todo {
    id : number
    title : string
    completed : boolean
}

const fetchData = async () => {
    try {
        const response : AxiosResponse<todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data);
    } catch (error : any) {
        // console.log(error.message);
        if(axios.isAxiosError(error)){
            console.log("Axios Error" , error.message);
            if(error.response){
                console.log(error.response.status);
                
            }
            
        }
    }
}