/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, ReactElement } from 'react';

export default class Comments extends Component<ReactElement> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidMount() {
    // eslint-disable-next-line prefer-const
    let script = document.createElement('script');
    // eslint-disable-next-line prefer-const
    let anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute('repo', 'ChristanDaniel / spacetraveling.git');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    anchor.appendChild(script);
  }

  render() {
    // eslint-disable-next-line prettier/prettier
    return <div id='inject-comments-for-uterances' />;
  }
}
