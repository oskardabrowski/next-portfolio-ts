import { createRef, MutableRefObject, RefObject } from "react"

interface StateProps {
    sections: any,
    pages: number,
    zoom: number,
    ref: RefObject<HTMLElement> | null;
    top: RefObject<number>;
}

const state:StateProps = {
  sections: 6,
  pages: 5,
  zoom: 75,
  ref: createRef(),
  top: createRef()
}

export default state
