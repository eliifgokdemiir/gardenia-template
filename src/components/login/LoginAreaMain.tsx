import LoginForm from '@/forms/LoginForm';
import React from 'react';

const LoginAreaMain = () => {
    return (
        <>
        <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginAreaMain;