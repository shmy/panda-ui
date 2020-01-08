import React, {PureComponent} from 'react'
import {baseUrl, LOAD_STATUS} from "../utils/constant";

interface OwnProps {
}

type Props = OwnProps;

type State = Readonly<{
  resp: string;
  status: LOAD_STATUS;
}>;
const fetchWithTimeout = (inp: any, opt = {}, timeout = 10000) => Promise.race([
  fetch(inp, opt),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), timeout)
  })])

class index extends PureComponent<Props, State> {
  readonly state: State = {
    resp: '',
    status: LOAD_STATUS.ldle
  };

  componentWillMount(): void {
    this.handleFetch()
  }

  handleFetch = async () => {
    try {
      this.setState({status: LOAD_STATUS.loading})
      const resp = await fetchWithTimeout(baseUrl + '/').then((r: any) => r.text())
      this.setState({resp, status: LOAD_STATUS.loaded})

    } catch (e) {
      this.setState({status: LOAD_STATUS.error})
    }
  };

  render() {
    const {status, resp} = this.state
    return (
      <h3 style={{textAlign: 'center'}}>
        {status === LOAD_STATUS.loading ? (<span>加载中, 请稍后...</span>) : null}
        {status === LOAD_STATUS.error ? (<button onClick={this.handleFetch}>加载失败, 点击重试</button>) : null}
        {status === LOAD_STATUS.loaded ? (<span>{resp}</span>) : null}
      </h3>
    )
  }
}

export default index
