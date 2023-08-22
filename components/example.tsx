import { useRef } from "react";
import { ScrollScene } from "@14islands/r3f-scroll-rig";
import { UseCanvasFront, UseCanvasBack } from "@helpers/components/Three";

export function ExampleComponentFront() {
  const el = useRef(null);

  return (
    <>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvasFront>
        <ScrollScene
          // @ts-ignore
          track={el}
        >
          {(props) => (
            <mesh {...props}>
            <planeGeometry args={[1, 1, 16, 16]} />
            <meshNormalMaterial />
          </mesh>
          )}
        </ScrollScene>
      </UseCanvasFront>
    </>
  );
}

export function ExampleComponentBack() {
  const el = useRef(null);

  return (
    <>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvasBack>
        <ScrollScene
          // @ts-ignore
          track={el}
        >
          {(props) => (
            <mesh {...props}>
            <planeGeometry args={[1, 1, 16, 16]} />
            <meshNormalMaterial />
          </mesh>
          )}
        </ScrollScene>
      </UseCanvasBack>
    </>
  );
}
