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

    geometry = new THREE.BoxGeometry(
      this.props.boxGeometryX,
      this.props.boxGeometryY,
      this.props.boxGeometryZ
    );

    material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh(geometry, material);
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
