import axios from "axios"
const GetAllcharacters = async (currentPage,state1,state2) =>{
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    const data = response.data.results
    const totalPages = response.data.info.pages;
    state1(data)
    state2(totalPages)
    
}



const GetUniquecharacter  = async(id,state) =>{
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    const data = response.data
    state(data)
}

export{
    GetAllcharacters,
    GetUniquecharacter
}