import React from "react";
import "../Signup.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"
// Testing URL
const API = "http://localhost:8080/modals/";
export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            errors: {}
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        let errors = {};
        fetch(API + "register.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email
                })
            })
            .then(res => res.json())
            .then(
                result => {
                    console.log(result);
                    console.log(result.status);
                    //document.location = "/CSE442-542/2022-Spring/cse-442h/login"
                    if (result.message.length === 0) {
                        // error with sign up
                        errors["register_failed"] = "fail";
                        this.setState({
                            errors: errors
                        })
                    } else {
                        errors["register_success"] = "success";
                        this.setState({
                            errors: errors
                        })
                    }
                },
            )
    };

    //NOTE IMPORTANT: In handling multiple inputs fields with one handler,
    //get the 'value' from target and the 'name' of target  
    pwdChangeHandler = event => {
        this.setState({
            password: event.target.value
        });
    };

    usernameChangeHandler = event => {
        this.setState({
            username: event.target.value,
            errors: {}
        });
    };

    emailChangeHandler = event => {
        this.setState({
            email: event.target.value
        });
    };

    render() {
        return(
            <div className="register1">
                <div className="container">
                    <div className="card">
                        <form onSubmit={this.handleSubmit}>
                            <h1>Let's play, Bug Busters!</h1>
                            <h2>Create your account by filling out the information below.</h2>
                            {this.state.errors.register_failed && <div className="alert alert-danger" role="alert">Sorry, that username exists!</div>}
                            {this.state.errors.register_success && <div className="alert alert-success" role="alert">
                                You have successfully registered! <a href="login" className="alert-link">Login Here!</a></div>}
                            <div className="register">
                            <div className="form-group">
                                <div className="username">
                                <label class="col-sm-2 col-form-label">
                                    <h3>Username</h3>
                                    <input
                                    type="text"
                                    className="col-sm-4 form-control"
                                    name="username"
                                    value={this.state.username}
                                    placeholder="Enter your username"
                                    onChange={this.usernameChangeHandler}
                                    required
                                    />
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="email">
                                    <label class="col-sm-4 col-form-label">
                                        <h4>Email</h4>
                                        <input
                                        type="text"
                                        className="col-sm-4 form-control"
                                        name="email"
                                        value={this.state.email}
                                        placeholder="Enter your email"
                                        onChange={this.emailChangeHandler}
                                        required
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="password">
                                <label class="col-sm-3 col-form-label">
                                    <h4>Password</h4>
                                    <input
                                    type="password"
                                    className="col-sm-4 form-control"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="Enter your password"
                                    onChange={this.pwdChangeHandler }
                                    required
                                    />
                                </label>
                                </div>
                            </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <br></br>
                            <span className="login text-muted mt-5 mb-0">
                            Already have an account? Login <a href="login">here</a>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}