import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-video-stream',
  templateUrl: './video-stream.component.html',
  styleUrls: ['./video-stream.component.css']
})
export class VideoStreamComponent implements OnInit {
  
  private localStream!: MediaStream;
  private pc!: RTCPeerConnection;

  constructor() {}

  ngOnInit() {
    const localVideo = <HTMLVideoElement>document.getElementById('localVideo');
    const remoteVideo = <HTMLVideoElement>document.getElementById('remoteVideo');

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true
      })
      .then(stream => {
        this.localStream = stream;
        localVideo.srcObject = stream;

        this.pc = new RTCPeerConnection();
        stream.getTracks().forEach(track => {
          this.pc.addTrack(track, stream);
        });
        this.pc.onicecandidate = event => {
          if (event.candidate) {
            // send the candidate to the remote peer
          }
        };
        this.pc.ontrack = event => {
          remoteVideo.srcObject = event.streams[0];
        };
      })
      .catch(error => {
        console.error('Error accessing webcam:', error);
      });
  }
}
