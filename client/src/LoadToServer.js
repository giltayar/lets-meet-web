import React, { Component } from 'react';
import axios from 'axios';


class LoadToServer extends Component {
    state = { someText: '', file: '', newFileName: '' };

    loadToServer = () => {
        let formData = new FormData();
        formData.append('someFile', this.state.file);
        formData.append('someText', this.state.someText);
        const config = { headers: { 'content-type': 'multipart/form-data' } }
        axios.post('/api', formData, config)
            .then(res => {
                if (res.status === 201) {
                    console.log('success');
                    console.log(res.data.file.filename);
                    this.setState({ newFileName: res.data.file.filename })
                }
                else {
                    console.log(`error status code ${res.status}`);
                }
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <h2>Load image file and text</h2>
                some text <input type="text" onChange={evt => this.setState({ someText: evt.target.value })} /><br />
                <input type="file" onChange={evt => this.setState({ file: evt.target.files[0] })} /><br />
                <button onClick={this.loadToServer}>Load Image</button><br />
                <p>newFileName:{this.state.newFileName}</p>
            </div>
        )
    }
}
export default LoadToServer;