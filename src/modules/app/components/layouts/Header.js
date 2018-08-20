import React, { Component } from 'react'

class Header extends Component
{

    render()
    {
        const LeftSection = this.props.leftSection
                            ? this.props.leftSection
                            : () => (<a className="label-left">&nbsp;</a>)
        const Rightection = this.props.rightSection
                            ? this.props.rightSection
                            : () => (<a className="label-right">&nbsp;</a>)

        return (
            <nav className="app-navbar">
                <LeftSection />
                <h1 className="title">{this.props.title}</h1>
                <Rightection />
            </nav>
        )
    }
}

Header.defaultProps = {
    title: ''
}

export default Header
