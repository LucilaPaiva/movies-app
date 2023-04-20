import { useNavigate } from "react-router-dom";
import { Layout } from "../../components"
import { withAuth } from "../../hoc";
import { Button } from "react-bootstrap";
import { Login as LoginForm } from "../../components/forms/Login";



const LoginMoviesPage  = () => {
    const navigate = useNavigate();
    return(
        <Layout>
             <div className="login">
                    <Button
                        type="button"
                        variant="btn-tabla m-2"
                        handleClick={() => navigate('/registro')}
                    ></Button>
                </div>
                <LoginForm />
        </Layout>
    )
    
    }
    export const Login = withAuth(LoginMoviesPage);
