import * as React from "react";
import * as ReactDOM from "react-dom";
 
import { createStore, applyMiddleware, combineReducers } from "redux"; 

import { Provider } from "react-redux"; 

import { UpObjectViewer } from "./components/upobjectviewer";
import { UpLog } from "./components/UpLog";
import thunk from "redux-thunk";
import * as Actions from "./components/actions/actions";

const initialState = {} ;

// The Reducer Function
const userReducer = function(state:any, action: Actions.Action) {
  var finalState = state ;
	switch(action.type) {
		case Actions.UPDATE :
		  var update = {} ;
			update[action.keyName] =  action.value ;
			finalState = Object.assign({}, state, update);
			break ;
	}

  return finalState;
};

const appStore = createStore(userReducer, initialState);

export class App extends React.Component<{}, {}> {
	
	public constructor(props) {
		super(props);
		this.state = this.getInitialState() ;
	}

	public getInitialState(): any {
		return {firstName : "first", lastName : "last"} ;
	}

  public render(): React.ReactElement<{}> {
    return (<div>
				<UpObjectViewer 
			object={this.state}
			objectSchema={
      {
				title: "Example Schema",
				type: "object",
				properties: {
					firstName: {
						title : "Prénom",
						icon:"glyphicon glyphicon-user",
						type: "string"
					},
					lastName: {
						title : "Nom",
						icon:"glyphicon glyphicon-user",
						type: "string"
					}
			}}
		}
     />
		 	<div className="form-group">
				<h2><span>Etat :</span></h2>
				<pre>{JSON.stringify(this.state, null, 2)}</pre>
			</div>
		 </div>);
  }
};
ReactDOM.render(
	 	<Provider store={appStore}>
			<App>            
			</App>
		</Provider>, document.getElementById("app"));