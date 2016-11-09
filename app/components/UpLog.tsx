import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class UpLog extends React.Component<{data : {}},{}>
{
    public constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<{}> {

      return (<pre>
            {JSON.stringify(this.props.data, null, 2)}
        </pre>);
  }
} 