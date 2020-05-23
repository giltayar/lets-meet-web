import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './ContactUs.css';


class CountactUs extends Component {
    state = {
        fullName: '', email: '', phoneNumber: '',
        subject: '', yourMessage: '', isError: false,
        redirectToHome: false,
    };

    contactUs = () => {
        this.setState({ isError: false });
        axios.post("/contact_us", {
            fullName: this.state.fullName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            subject: this.state.subject,
            yourMessage: this.state.yourMessage
        }).then(res => {

            if (res.status === 201) {
                this.setState({ redirectToHome: true });
                this.props.setUser({
                    fullName: this.state.fullName,
                    email: this.state.email,
                    phoneNumber: this.state.phoneNumber,
                    subject: this.state.subject,
                    yourMessage: this.state.yourMessage
                })
            }
            else {
                this.setState({ isError: true })
                console.log(`error code : ${res.status}`);

            }
        }).catch(err => {
            this.setState({ isError: true })
            console.log(err);

        })
    }


    render() {
        const disabled = !this.state.fullName || !this.state.email
            || !this.state.phoneNumber
            || !this.state.subject || !this.state.yourMessage;

        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }

        return (
            <div className="contactUs">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iste minus architecto ducimus temporibus doloremque et iure quam, sunt mollitia non soluta minima cum voluptates porro necessitatibus similique modi in ipsum quo! Dolor distinctio in recusandae vero, minus eligendi consequatur odio neque incidunt? Sunt in expedita quaerat similique deleniti natus, ab perferendis nesciunt provident earum autem et qui iure officia, fuga vel soluta quo ducimus aut quis, minus hic fugiat deserunt! Obcaecati, ipsam facilis. Quos laudantium eveniet tenetur ducimus, necessitatibus eos sit dolorem illum iste dolores deserunt ex doloremque aliquid libero. Ab quaerat ipsa laboriosam cum voluptatem illo voluptatum repellat!</p>
                <form>
                    <input placeholder="Full Name"
                        onChange={evt => this.setState({ fullName: evt.target.value })}
                        type="text"></input>
                    <br />
                    <input type="email" placeholder="Email Adress"
                        onChange={evt => this.setState({ email: evt.target.value })}></input><br />
                    <input type="number" placeholder="Phone Number"
                        onChange={evt => this.setState({ phoneNumber: evt.target.value })}></input><br />
                    <input type="text" placeholder="Subject"
                        onChange={evt => this.setState({ subject: evt.target.value })}></input><br />
                    <textarea placeholder="Your message.."
                        onChange={evt => this.setState({ yourMessage: evt.target.value })}></textarea>
                    <br />

                    {this.state.isError ? <p style={{ color: 'red' }}>Sorry! message didnt went thruo..</p> : ""}
                    <button disabled={disabled} onClick={this.contactUs}>Send</button>
                </form>
            </div>
        )
    }
}
export default CountactUs;