import React from 'react';
/*make type writter effect to show 3 messages in loop*/
function TypeWriter(props) {    
    const [state, setState] = React.useState({
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 150
    });
    /*useEffect to call typeWriterEffect function*/
    React.useEffect(() => {
        const timer = setTimeout(() => {
            typeWriterEffect();
        }, state.typingSpeed);
        return () => clearTimeout(timer);
    });
    /*typeWriterEffect function to show 3 messages in loop*/
    function typeWriterEffect() {
        // Get current text

        const current = state.loopNum % props.messages.length;
        const fullText = props.messages[current];
        // Check if deleting
        if (state.isDeleting) {
            // Remove char
            setState({
                ...state,
                text: fullText.substring(0, state.text.length - 1)
            });
        } else {
            // Add char
            setState({
                ...state,
                text: fullText.substring(0, state.text.length + 1)
            });
        }
        // If word is complete
        if (!state.isDeleting && state.text === fullText) {
            // Make pause at end
            setTimeout(() => {
                setState({
                    ...state,
                    isDeleting: true
                });
            }, 500);
        } else if (state.isDeleting && state.text === '') {
            setState({
                ...state,
                isDeleting: false,


                loopNum: state.loopNum + 1
            });
        }

    }
    return (
        <span>{state.text}</span>
    );
}


export default TypeWriter;
