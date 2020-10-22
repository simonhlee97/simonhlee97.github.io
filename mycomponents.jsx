'use strict'

const e = React.createElement

class MyComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Hello. To create an html page with React & JSX.</h1>
            </div>
        )
    }
}

const domContainer = document.querySelector('#ReactStuff')
ReactDOM.render(e(MyComponent), domContainer)
