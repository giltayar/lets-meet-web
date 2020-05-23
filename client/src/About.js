import React from 'react';
import './About.css';
// import ShareOnSocialMedia from './Share_sociel_media';


const About = () => {
    return (
        <div className="about_us_container">
            <h1>Who we are</h1>
            <div id="top_information_container">
                <div className="lily_info">
                    <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/10597829411548234990-512.png" alt="img"></img>
                    <h2>Lily Mulugeta</h2>
                    <p><strong>Age:</strong>29</p>
                    <p><strong>From:</strong>jerusalem</p>
                    <p><strong>Background</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error hic ipsa. Rerum at consectetur ipsam nisi quaerat molestias ducimus vel labore delectus blanditiis iure laudantium, beatae repellendus, deserunt quis </p>
                    <p><strong>Intrests</strong> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error hic ipsa. Rerum at consectetur ipsam nisi quaerat molestias ducimus vel labore delectus blanditiis iure laudantium, beatae repellendus, deserunt </p>
                </div>
                <div className="tal_info">
                    <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/10597829411548234990-512.png" alt="img"></img>
                    <h2>Tal Mulugeta</h2>
                    <p><strong>Age:</strong>26</p>
                    <p><strong>From:</strong>kebutz mezer</p>
                    <p><strong>Background</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error hic ipsa. Rerum at consectetur ipsam nisi quaerat molestias ducimus vel labore delectus blanditiis iure laudantium, beatae repellendus, deserunt quis </p>
                    <p><strong>Intrests</strong> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error hic ipsa. Rerum at consectetur ipsam nisi quaerat molestias ducimus vel labore delectus blanditiis iure laudantium, beatae repellendus, deserunt </p>
                </div>
            </div>
            <div className="bottom_general_info">
                <p><strong>General information:</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.  natus vel pariatur cum commodi facere possimus tempora quas voluptates necessitatibus, reiciendis inventore eius? Accusantium autem temporibus perferendis ipsa totam animi exercitationem  illum ex inventore dolorem, laborum sit sequi eveniet quibusdam.</p>

                <p><strong>How did we come up with this idia?</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error hic ipsa. Rerum at consectetur ipsam nisi quaerat molestias ducimus vel labore delectus blanditiis iure laudantium, beatae repellendus, deserunt quis</p>
                <p><strong>Our vition</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error hic ipsa. Rerum at consectetur ipsam nisi quaerat molestias ducimus vel labore delectus blanditiis iure laudantium, beatae repellendus, deserunt quis</p>
            </div>

        </div>
    )
}
export default About;