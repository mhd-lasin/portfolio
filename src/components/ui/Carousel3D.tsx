import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
import { ReactNode, useState, useEffect, useRef } from 'react';

interface Carousel3DProps {
  items: ReactNode[];
}

export default function Carousel3D({ items }: Carousel3DProps) {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const [radius, setRadius] = useState(400);
  const isDragging = useRef(false);
  
  // Auto-rotation
  useAnimationFrame((time, delta) => {
    if (!isDragging.current) {
      // smoothly rotate based on frame delta
      // move it slightly every frame (slower speed, clockwise)
      x.set(x.get() + delta * 0.025);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(240); // Smaller radius for mobile
      } else if (window.innerWidth < 1024) {
        setRadius(320); // Tablet
      } else {
        setRadius(400); // Desktop
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Map drag x-axis to Y-axis rotation
  const rotateY = useTransform(springX, (latest) => latest * -0.5);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible" style={{ perspective: 1500 }}>
      {/* Invisible Drag Proxy */}
      <motion.div
        drag="x"
        dragElastic={0.1}
        style={{ x }}
        onDragStart={() => isDragging.current = true}
        onDragEnd={() => isDragging.current = false}
        className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
      />
      
      {/* 3D Rotating Container */}
      <motion.div
        className="relative flex items-center justify-center pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {items.map((item, index) => {
          // Calculate the angle for each card based on total items
          const angle = (360 / items.length) * index;
          return (
            <div
              key={index}
              className="absolute flex items-center justify-center"
              style={{
                // Rotate to face outward, push outward by 'radius', then apply the requested tilt angle
                transform: `rotateY(${angle}deg) translateZ(${radius}px) rotateX(-16deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {item}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
