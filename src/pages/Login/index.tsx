import { Layout } from "../../components"
import { withAuth } from "../../hoc";

const LoginMoviesPage  = () => {

    return(
        <Layout>
            Login
        </Layout>
         
    )
    
    }
     
    export const Login = withAuth(LoginMoviesPage);