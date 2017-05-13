import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                내용입력 : <input name="" onChange={this.props.changeValue} type="text" />
            </div>
        );
    }
}
export default Header;