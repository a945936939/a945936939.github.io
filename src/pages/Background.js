import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import Script from "next/script";
export default function Background() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
      <div ref={myRef}>
        <div className="h-screen">yo</div>
      </div>
    </>
  );
}
