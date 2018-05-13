import React, { Component } from "react";
import styled from 'styled-components';
import * as THREE from "three";
import video1 from'../assets/video1.mp4';
import video2 from'../assets/video2.mp4';
import video3 from'../assets/video3.mp4';
import video4 from'../assets/video4.mp4';
import video5 from'../assets/video5.mp4';
import video6 from'../assets/video6.mp4';

let camera, scene, renderer;
let geometry, material, mesh;

const Scene = styled.div`
  text-align: center;
  margin: 1em;
`;

class Animation extends Component {
  componentDidMount() {
    this.init();
    this.animate();
  }

  init = () => {
    camera = new THREE.PerspectiveCamera(
      70,
      600 / 400,
      0.01,
      10
    );
    camera.position.z = this.props.cameraPositionZ;
    scene = new THREE.Scene();

    const video1 = document.getElementsByClassName('video')[0];
    const texture1 = new THREE.VideoTexture( video1 );
    texture1.minFilter = THREE.LinearFilter;
    texture1.magFilter = THREE.LinearFilter;
    texture1.format = THREE.RGBFormat;

    const video2 = document.getElementsByClassName('video')[1];
    const texture2 = new THREE.VideoTexture( video2 );
    texture2.minFilter = THREE.LinearFilter;
    texture2.magFilter = THREE.LinearFilter;
    texture2.format = THREE.RGBFormat;

    const video3= document.getElementsByClassName('video')[2];
    const texture3 = new THREE.VideoTexture( video3 );
    texture3.minFilter = THREE.LinearFilter;
    texture3.magFilter = THREE.LinearFilter;
    texture3.format = THREE.RGBFormat;

    const video4 = document.getElementsByClassName('video')[3];
    const texture4 = new THREE.VideoTexture( video4 );
    texture4.minFilter = THREE.LinearFilter;
    texture4.magFilter = THREE.LinearFilter;
    texture4.format = THREE.RGBFormat;

    const video5 = document.getElementsByClassName('video')[4];
    const texture5 = new THREE.VideoTexture( video5 );
    texture5.minFilter = THREE.LinearFilter;
    texture5.magFilter = THREE.LinearFilter;
    texture5.format = THREE.RGBFormat;

    const video6 = document.getElementsByClassName('video')[5];
    const texture6 = new THREE.VideoTexture( video6 );
    texture6.minFilter = THREE.LinearFilter;
    texture6.magFilter = THREE.LinearFilter;
    texture6.format = THREE.RGBFormat;

    geometry = new THREE.BoxGeometry(
      this.props.boxGeometryX,
      this.props.boxGeometryY,
      this.props.boxGeometryZ
    );

    const material1 = new THREE.MeshBasicMaterial( { map: texture1 } );
    const material2 = new THREE.MeshBasicMaterial( { map: texture2 } );
    const material3 = new THREE.MeshBasicMaterial( { map: texture3 } );
    const material4 = new THREE.MeshBasicMaterial( { map: texture4 } );
    const material5 = new THREE.MeshBasicMaterial( { map: texture5 } );
    const material6 = new THREE.MeshBasicMaterial( { map: texture6 } );

    const materials = [
      material1,
      material2,
      material3,
      material4,
      material5,
      material6
    ];

    mesh = new THREE.Mesh(geometry, materials);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(600, 400);
    document.getElementsByClassName('scene')[0].appendChild(renderer.domElement);
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    mesh.rotation.x += this.props.meshRotationX;
    mesh.rotation.y += this.props.meshRotationY;
    camera.position.z = this.props.cameraPositionZ;
    mesh.scale.x = this.props.boxGeometryX;
    mesh.scale.y = this.props.boxGeometryY;
    mesh.scale.z = this.props.boxGeometryZ;
    renderer.render(scene, camera);
  };

  render() {
    return (
      <div>
        <video
          style={{display: 'none'}}
          className="video"
          width="320"
          height="240"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src={video1}
            type="video/mp4"
          />
        </video>
        <video
          style={{display: 'none'}}
          className="video"
          width="320"
          height="240"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src={video2}
            type="video/mp4"
          />
        </video>
        <video
          style={{display: 'none'}}
          className="video"
          width="320"
          height="240"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src={video3}
            type="video/mp4"
          />
        </video>
        <video
          style={{display: 'none'}}
          className="video"
          width="320"
          height="240"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src={video4}
            type="video/mp4"
          />
        </video>
        <video
          style={{display: 'none'}}
          className="video"
          width="320"
          height="240"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src={video5}
            type="video/mp4"
          />
        </video>
        <video
          style={{display: 'none'}}
          className="video"
          width="320"
          height="240"
          autoPlay={true}
          loop={true}
          muted={true}          
        >
          <source
            src={video6}
            type="video/mp4"
          />
        </video>
        <Scene
          className="scene"
        />
      </div>
    );
  }
}

export default Animation;
