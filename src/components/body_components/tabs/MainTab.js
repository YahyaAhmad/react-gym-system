import React, { Component } from 'react';
import QRReader from 'react-qr-scanner';
import '../../../css/webcam.css'
import successAudioMp3 from '../../../audio/success.mp3'
import errorAudioWav from '../../../audio/error.wav'
import ClientInfo from './main_tab_components/ClientInfo'
import '../../../css/main_tab.css'

import $ from 'jquery'
import globalStore from '../../../store';


class MainTab extends Component {

    constructor() {
        super();
        this.state = {
            success: false,
        }
        this.hideSuccess = this.hideSuccess.bind(this)
        this.successAudio = new Audio(successAudioMp3);
        this.errorAudio = new Audio(errorAudioWav);
    }

    scanData(qrcode) {
        if (qrcode) {
            let data = {
                qrcode: qrcode,
            }
            if (this.isScanning) return;
            this.isScanning = true;
            $.post('http://localhost/gym/clients/check.php', data).then((response) => {
                let data = JSON.parse(response)
                if (data.status == 'accepted') {
                    this.successAudio.play();
                    clearTimeout(this.successTimeout);
                    this.successTimeout = setTimeout(this.hideSuccess, 1000);
                } else{
                    this.errorAudio.play();
                }
                let action = {
                    type: "SET_GYM_CLIENT_INFO",
                    payload:{
                        client: data,
                    }
                }
                globalStore.dispatch(action);
                clearTimeout(this.scanned);
                this.scanned = setTimeout(() => { this.isScanning = false; }, 1000)
            })

        }
    }

    hideSuccess() {
        this.setState({ success: false })
    }

    success = {

        opacity: '1',

    }

    render() {
        return (
            <div className="main_tab gym_tab">
                <div className="webcam_container" style={{overflow:'hidden'}}>
                    <div style={{
                        border: "5px solid rgba(6, 243, 6, 0.68)",
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: '10',
                        opacity: '0',
                        transition: 'opacity 0.5s',
                        ...(this.state.success ? this.success : { opacity: '0' })
                    }}></div>
                    <QRReader
                        onError={err => {console.log(err)}}
                        style={{
                            width: '45vw',
                            maxWidth: '400px',
                            transform: 'scale(-1, 1)',
                            zIndex: 5,
                            position: 'relative',

                        }}
                        onScan={this.scanData.bind(this)}
                        delay={50}
                    >

                    </QRReader>
                
                </div>
                {/* QRCode bug className */}
                <ClientInfo/>
            </div>
        );
    }
}

export default MainTab;