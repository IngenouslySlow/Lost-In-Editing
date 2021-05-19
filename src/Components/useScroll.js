//Importing from intersection observer and framer motion
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.5 });
  const control = useAnimation();
  if (view) {
    control.start("show");
  } else {
    control.start("hidden");
  }
  return [element, control];
};
