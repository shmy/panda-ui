import React, { PureComponent } from 'react'

interface OwnProps {}

type Props = OwnProps;

type State = Readonly<{

}>;

class index extends PureComponent<Props, State> {
  readonly state: State = {

  };

  render () {
    return (
      <h3 style={{ textAlign: 'center' }}>hello world!</h3>
    )
  }
}

export default index
