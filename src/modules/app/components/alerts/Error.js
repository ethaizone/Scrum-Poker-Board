import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class ErrorAlert extends Component
{
    constructor(props)
    {
        super(props)

        this.handleClicked = this.handleClicked.bind(this)
    }

    handleClicked()
    {
        this.props.onOk()
    }

    render()
    {
        const style = {
            top: '50%',
            transform: 'translateY(-50%)'
        }

        return (
            <Modal
                style={style}
                show={this.props.show}
            >
                <Modal.Body>
                    {this.props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.handleClicked}>ตกลง</Button>
                </Modal.Footer>

            </Modal>
        )
    }
}

export default ErrorAlert