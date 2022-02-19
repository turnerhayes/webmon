import * as React from 'react';

import botamon from '../images/mons/bota.svg';

const loadImage = async () => {
  const response = await fetch(botamon);
  const svg = await response.text();
  const xml = new window.DOMParser().parseFromString(svg, 'image/svg+xml').querySelector('svg') as SVGElement;
  return xml;
}

const draw = (
  context: CanvasRenderingContext2D,
  image: SVGElement,
  imageDrawn: boolean,
  setImageDrawn: (value: boolean) => void
) => {
  if (image) {
    if (!imageDrawn) {
      const path2d = new Path2D();
      const paths = image.querySelectorAll('path');
      context.strokeStyle = 'white';
      context.fillStyle = 'black';
      // for (const path of Array.from(paths)) {
      //     const def = path.getAttribute('d');
      //     // const fill = path.getAttribute('fill');
      //     // if (fill) {
      //     //     context.fillStyle = fill;
      //     // }
      //     path2d.addPath(new Path2D(def));
      // }
      path2d.addPath(new Path2D('M25,10l2,1.2 0,2.3 -2,1.2 -2, -1.2 0,-2.3z'));
      context.stroke(path2d);
      setImageDrawn(true);
    }
  }
};

const PetHouseCanvas = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const [monImage, setMonImage] = React.useState<SVGElement | null>(null);
  const [imageDrawn, setImageDrawn] = React.useState(false);

  React.useEffect(() => {
    loadImage().then((image) => {
      setMonImage(image);
    });
  });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (monImage) {
      draw(context, monImage, imageDrawn, setImageDrawn);
    }
  }, [monImage, canvasRef, imageDrawn, setImageDrawn]);

  return (
    <canvas ref={canvasRef}></canvas>
  );
}

export { PetHouseCanvas };
