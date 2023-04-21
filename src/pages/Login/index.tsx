
import { Layout } from "../../components"
import { withAuth } from "../../hoc";
import { Login as LoginForm } from "../../components/forms/Login";



const LoginMoviesPage  = () => {

    return(
        <Layout>
                <LoginForm />
        </Layout>
    )
    
    }
    export const Login = withAuth(LoginMoviesPage);
