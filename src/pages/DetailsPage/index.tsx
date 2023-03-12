import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { Details } from "../../components/commons";
import { getById } from "../../services/movies";



const DetailsPage  = () => {

    const [detail, setDetail] = useState ([])
    const { id } = useParams()

    
        useEffect(() => {
        
            getById(id || "").then(response => {
            setDetail(response)})
            
        }, [])
             
        
        return(
            <Layout>
                <Details items={detail} />
            </Layout>
        )
    

}

export { DetailsPage }