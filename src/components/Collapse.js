import React from 'react';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isParagrapheVisible: false,
            isIconeRotated: false
        };
    }

    toggleContent = () => {
        this.setState(prevState => ({isParagrapheVisible: !prevState.isParagrapheVisible, isIconeRotated: !prevState.isParagrapheVisible               
        }));
    }

    render () {
        const {collapseTitle, content} = this.props;
        const {isParagrapheVisible, isIconeRotated} = this.state;
        
        return (
            <div className='collapse'>
                <h2 onClick={this.toggleContent}>{collapseTitle}<i className={`fa-solid fa-chevron-up ${this.state.isIconeRotated ? 'rotate-icon' : ''}`} />
                </h2>
                {isParagrapheVisible && <p>{content}</p>}
            </div>
        );
    }
}

export default Collapse; 