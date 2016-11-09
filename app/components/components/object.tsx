/// <reference path="../infrastructure/common.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import  * as Common from  '../infrastructure/common';
import  {ObjectSchema } from  '../infrastructure/objectschema';
import  { UpObjectViewer } from  '../UpObjectViewer';
import  { UpLog } from  '../UpLog';
import  * as Actions from  '../actions/main';

export class UpOVObjectComponent extends React.Component<Common.UpObjectViewerProps,{}>
{
    public constructor(props) {
        super(props);
        this.state = props.object ;
    }

    public getInitialState() : any {
        return {} ;
    }

    public render(): React.ReactElement<{}> {

      var properties : any[] = [];
      for(var _key in this.props.objectSchema.properties)
      {
          var obj       = this.props.object[_key];
          var schema    = this.props.objectSchema.properties[_key];
          properties.push(React.createElement(Common.ComponentManager.getComponentForType(schema.type), 
            {   
                object : obj, 
                objectSchema : schema,
                keyName : _key
            } ));
      }
      
      return (<form>
            <fieldset><legend>{this.props.objectSchema.title}</legend>
                {properties}
            </fieldset>
        </form>);
  }
}

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => (state);

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions.update, dispatch)
});

/**
 * Connect the component to
 * the Redux store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpOVObjectComponent);  