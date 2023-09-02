
import { Form, Button } from 'react-bootstrap'
import { useForm} from 'react-hook-form'
import { servicesUser } from '../../../services/users'
import { SignUpForm } from '../../../types'
import "./styles.scss"
import { validationSchema } from './validationSchema'
import { defaultValues } from './defaultValue'
import { useNavigate } from 'react-router'

//import { api } from '../../../utils/axios'




      //aca me voy a comunicar con el servicio de la API


    const SignUp = () => {
      const { register, handleSubmit, formState } = useForm<SignUpForm>({
        defaultValues,
        resolver: validationSchema
      });
      const navigate = useNavigate();
    
      const onSubmit = (data: SignUpForm) => {
        servicesUser.add({
          ...data,
          birthdate: new Date(data.birthdate)
        })
        navigate('/');
      };

    return(
    <Form className='form-signup' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresar nombre" {...register('name')} />
        <Form.Text className="text-danger my-text-danger">{formState.errors.name?.message}
          Los datos ingresados son incorrectos.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresar apellido" {...register('lastname')}/>
        <Form.Text className="text-danger">{formState.errors.name?.message}
          Los datos ingresados son incorrectos.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" {...register('email')}/>
        <Form.Text className="text-danger">{formState.errors.name?.message}
          Los datos ingresados son incorrectos.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingresar password" {...register('password') }/>
        <Form.Text className="text-danger">{formState.errors.name?.message}
          Los datos ingresados son incorrectos.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBirthdate">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="date" placeholder="Ingresar fecha de nacimiento" {...register('birthdate') }/>
        <Form.Text className="text-danger">{formState.errors.name?.message}
          Los datos ingresados son incorrectos.
        </Form.Text>
      </Form.Group>


      
      <Button variant="secondary" type="submit">
        Crear cuenta
      </Button>
    </Form>
        
    )
}

export { SignUp }