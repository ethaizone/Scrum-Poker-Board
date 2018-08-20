import React, { Component } from 'react'
import Card from "./../modules/app/components/card";
import CardSlot from "./../modules/app/components/cardSlot";

class IndexPage extends Component {
    componentDidMount() {
        document.body.className = 'login'
    }

    render() {
        return (
            <div>Index
                <CardSlot>
                    <Card>
                        <p>1</p>
                    </Card>
                </CardSlot>

                <CardSlot>
                </CardSlot>
                <CardSlot>
                    <Card text="7" />
                </CardSlot>
                <Card text="2" />
            </div>
        )
    }
}

export default IndexPage
