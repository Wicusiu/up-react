import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
import { createStore, applyMiddleware, combineReducers } from 'redux'; 

import { Provider } from 'react-redux'; 

import { UpObjectViewer } from './components/upobjectviewer';
import { UpLog } from './components/UpLog';
import thunk from 'redux-thunk';
import * as Actions from './components/actions/Main';

const initialState = {} ;

// The Reducer Function
var userReducer = function(state = {}, action: Actions.Action) {
  var _state = state ;
	switch(action.type) {
 		case Actions.UPDATE :
		  var _update = {} ;
			_update[action.keyName] =  action.value ;
			_state = Object.assign({}, state, _update);
			break ;
	}

  return _state;
}

var appStore = createStore(userReducer, initialState);

class Main extends React.Component<{}, {}> {
	public constructor(props) {
		super(props);
		this.state = this.getInitialState() ;
	}

	public getInitialState(): any {
		return {firstName : 'first', lastName : 'last'} ;
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
}
ReactDOM.render(<div>
	 	<Provider store={appStore}>
			<Main>            
			</Main>
		</Provider>
</div>, document.getElementById('app'));