import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class Confirm extends Component
{
    constructor(props)
    {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
        this.handleOk = this.handleOk.bind(this)
    }

    handleCancel()
    {
        this.props.onCancel()
    }

    handleOk()
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
                    {this.props.title}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleCancel}>ยกเลิก</Button>
                    <Button onClick={this.handleOk} bsStyle="primary">ตกลง</Button>
                </Modal.Footer>

            </Modal>
        )
    }
}

export default Confirm