import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
    render() {
        console.log("Pure")
        return (
            <div>
                Pure Component
            </div>
        )
    }
}
