import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UpObjectViewer } from './components/upobjectviewer';


class Main extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (<UpObjectViewer object={{ firstName : 'first', lastName : 'last'}} objectSchema={
      {
	title: "Example Schema",
	type: "object",
	properties: {
		firstName: {
      title : "Prénom",
			type: "string"
		},
		lastName: {
      title : "Nom",
			type: "string"
		}
	
	}}
}
     />);
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
