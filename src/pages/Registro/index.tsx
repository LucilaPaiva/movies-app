import { Layout, SignUpForm } from "../../components"
import { withAuth } from "../../hoc";


const RegistroPage  = () => {

    return(
        <Layout>
            <SignUpForm />
        </Layout>
    )
    
    }
    
    export const Registro = withAuth(RegistroPage);