// NodeAnimation.js
import React, { useRef, useEffect, useState } from 'react';

const NodeAnimation = () => {
  const canvasRef = useRef(null);
  const [nodes, setNodes] = useState([
    { x: 50, y: 50, size: 10, vx: 0.5, vy: 0.25 },
    { x: 150, y: 150, size: 10, vx: -0.25, vy: 0.5 },
    { x: 250, y: 50, size: 10, vx: 0.25, vy: 0.25 },
    { x: 100, y: 100, size: 10, vx: -0.5, vy: -0.25 },
    { x: 200, y: 200, size: 10, vx: 0.25, vy: -0.5 },
    { x: 300, y: 100, size: 10, vx: -0.25, vy: 0.25 },
    // Additional cubes
    { x: 400, y: 200, size: 10, vx: 0.3, vy: 0.1 },
    { x: 100, y: 250, size: 10, vx: -0.2, vy: -0.4 },
    { x: 250, y: 300, size: 10, vx: 0.15, vy: -0.3 },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawNodes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, index) => {
        // Update node position
        nodes[index].x += node.vx;
        nodes[index].y += node.vy;

        // Bounce off the walls
        if (node.x < 0 || node.x > canvas.width) nodes[index].vx *= -1;
        if (node.y < 0 || node.y > canvas.height) nodes[index].vy *= -1;

        // Draw cubes
        ctx.beginPath();
        ctx.rect(node.x - node.size / 2, node.y - node.size / 2, node.size, node.size);
        ctx.fillStyle = '#3498db';
        ctx.fill();
        ctx.closePath();
      });

      // Draw lines between nodes
      ctx.beginPath();
      nodes.forEach((node, index) => {
        nodes.slice(index + 1).forEach((otherNode) => {
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
        });
      });
      ctx.strokeStyle = '#3498db';
      ctx.lineWidth = 0.5; // Adjust the line width here
      ctx.stroke();
      ctx.closePath();

      requestAnimationFrame(drawNodes);
    };

    drawNodes();
  }, [canvasRef, nodes]);

  return (
    <div className="flex justify-center items-center h-screen">
      <canvas ref={canvasRef} width={500} height={400} />
    </div>
  );
};

export default NodeAnimation;
