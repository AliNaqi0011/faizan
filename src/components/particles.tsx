"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x3B82F6, // Electric Blue
      size: 0.025,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
    }
    
    document.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = elapsedTime * 0.02;

      camera.position.x += (mouseX * 0.0001 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.0001 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    }
    window.addEventListener('resize', onWindowResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
}
