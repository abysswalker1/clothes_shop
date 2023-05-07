import ScrollTrigger, {ScrollTriggerProps, ScrollTriggerEventArgs} from 'react-scroll-trigger';

export default function ScrollTriggerWrap(
  onEnterFunc: (args?: ScrollTriggerEventArgs) => void, 
  onExitFunc: (args?: ScrollTriggerEventArgs) => void
  ) {
  return function(Component: JSX.Element){
    let ScrollTriggerProps: ScrollTriggerProps = {
      component: Component,
      onEnter: onEnterFunc,
      onExit: onExitFunc
    }
    
  }
}