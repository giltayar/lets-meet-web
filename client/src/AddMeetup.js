import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import "./AddMeetup.css";


class AddMeetup extends Component {
    state = {
        fullName: '', email: '', meetupSubject: '', where: '', when: '', description: '', howMuch: '',
        redirectToHome: false, isError: false,
        someText: '', file: '', newFileName: ''
    };

    addMeetup = () => {
        this.setState({ isError: false })
        axios.post('/users/addMeetup', {
            fullName: this.state.fullName,
            email: this.state.email,
            meetupSubject: this.state.meetupSubject,
            where: this.state.where,
            when: this.state.when,
            description: this.state.description,
            howMuch: this.state.howMuch


        }).then(res => {
            if (res.status === 201) {
                this.setState({ redirectToHome: true })
                this.props.setUser({
                    fullName: this.state.fullName,
                    email: this.state.email,
                    meetupSubject: this.state.meetupSubject,
                    where: this.state.where,
                    when: this.state.when,
                    description: this.state.description,
                    howMuch: this.state.howMuch

                })
            }
            else {
                this.setState({ isError: true })
                console.log(`error code: ${res.statuse}`);
            }

        }).catch(err => {
            this.setState({ isError: true })
            console.log(err);
        })
    }


    render() {
        const disables = !this.state.fullName || !this.state.email || !this.state.meetupSubject ||
            !this.state.where || !this.state.when || !this.state.description || !this.state.howMuch;

        if (this.state.redirectToHome) {
            return <Redirect to='/ShowAllMeetups' />
        }
        return (
            <div className="add_meetips_container">
                <h1>You can create you'r own Meetup!</h1>
                <h2>Fill up the form and Let's Meet!</h2>

                <div className="new_meetup_form">

                    <input placeholder="Full Name" onChange={evt => this.setState({ fullName: evt.target.value })} type='text' />
                    <br />

                    <input placeholder="Email" onChange={evt => this.setState({ email: evt.target.value })} type='email' />
                    <br />

                    <input placeholder="Meetup Subject" onChange={evt => this.setState({ meetupSubject: evt.target.value })} type='text' />
                    <br />

                    <input placeholder="Where" onChange={evt => this.setState({ where: evt.target.value })} type='text' />
                    <br />

                    <input onChange={evt => this.setState({ when: evt.target.value })} type='date' />
                    <br />

                    <textarea placeholder="Description" onChange={evt => this.setState({ description: evt.target.value })} type='text' />
                    <br />

                    <input placeholder="How much?" onChange={evt => this.setState({ howMuch: evt.target.value })} type='number' />
                    <br />
                </div>

                {this.state.isError ? <p style={{ color: 'red' }}>addMeetup error</p> : ''}
                <button disabled={disables} onClick={this.addMeetup}>add Meetup</button>


            </div>
        )
    }
}

export default AddMeetup;