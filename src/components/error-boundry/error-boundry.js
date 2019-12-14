//react
import React, { Component } from 'react'
//redux
import { connect } from 'react-redux'

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        apiError: false
    }
    componentDidMount = () => {
        this.setState({
            apiError: this.props.apiError
        })
    }
    componentDidCatch = () => {
        this.setState({ hasError: true })
    }
    render() {
        const { hasError, apiError } = this.state;
        if (hasError) {
            return (
                <section className="error">
                    <p>Ошибка</p>
                </section>
            )
        }
        if (apiError) {
            return (
                <section className="error">
                    <p>{apiError}</p>
                </section>
            )
        }
        return this.props.children
    }
}
const mapStateToProps = ({ data }) => {
    return {
        apiError: data.error
    }
}

export default connect(mapStateToProps)(ErrorBoundry)