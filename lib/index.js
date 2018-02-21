import React from 'react'

class BackgroundVideo extends React.Component {
  render() {
    const { children } = this.props
    const childrensChildren = children.props.children

    const NewComponent = React.cloneElement(children, [{ ...children.props }])

    return <NewComponent>new children</NewComponent>
  }
}

export default BackgroundVideo
