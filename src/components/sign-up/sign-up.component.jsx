import React from 'react';

import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        
        if(password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        // console.log([name], value);
        
        this.setState({ [name]: value });
    }

    render() {
        // const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput handleChange={this.handleChange} id='name' type='text' name='displayName'
                    value={this.state.displayName} label='name' required />
                <FormInput handleChange={this.handleChange} id='email' type='email' name='email'
                    value={this.state.email} label='email' required />
                <FormInput handleChange={this.handleChange} id='password' type='password' name='password'
                    value={this.state.password} label='password' required />
                <FormInput handleChange={this.handleChange} id='confirmPassword' type='password' name='confirmPassword'
                    value={this.state.confirmPassword} label='confirmPassword' required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;