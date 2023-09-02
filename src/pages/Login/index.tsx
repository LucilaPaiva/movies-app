
import { Layout } from "../../components"
import { LoginForm } from "../../components/forms";
import { withAuth } from "../../hoc";




const LoginMoviesPage  = () => {

    return(
        <Layout>
            <LoginForm />
        </Layout>
    )
    
    }
    export const Login = withAuth(LoginMoviesPage);
