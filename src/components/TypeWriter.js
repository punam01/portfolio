import React from "react";
function TypeWriter(props) {
  const [state, setState] = React.useState({
    text: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 150,
  });
  React.useEffect(() => {
    const timer = setTimeout(() => {
      typeWriterEffect();
    }, state.typingSpeed);
    return () => clearTimeout(timer);
  });
  function typeWriterEffect() {
    const current = state.loopNum % props.messages.length;
    const fullText = props.messages[current];
    if (state.isDeleting) {
      setState({
        ...state,
        text: fullText.substring(0, state.text.length - 1),
      });
    } else {
      setState({
        ...state,
        text: fullText.substring(0, state.text.length + 1),
      });
    }
    if (!state.isDeleting && state.text === fullText) {
      setTimeout(() => {
        setState({
          ...state,
          isDeleting: true,
        });
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState({
        ...state,
        isDeleting: false,

        loopNum: state.loopNum + 1,
      });
    }
  }
  return <span>{state.text}</span>;
}

export default TypeWriter;
