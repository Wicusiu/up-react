/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../infrastructure/common.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import  {UpLabel } from  '../uplabel';
import  {UpFormGroup } from  '../UpFormGroup';

import  * as Common from  '../infrastructure/common';
import  * as Actions from  '../actions/actions';
import  {ObjectSchema } from  '../infrastructure/objectschema';

export class UpOVStringComponent extends React.Component<Common.UpObjectViewerProps,{}>
{
  public constructor(props) {
    super(props) ;
  }
  public update(e) {
    this.setState({value : e.target.value}) ;
  }
  public render(): React.ReactElement<{}> {
      let label = <span aria-hidden="true">{(this.props.objectSchema)?this.props.objectSchema.title:""}</span> ;
      let icon  = this.props.objectSchema.icon ;
      return (
        <div>
          <UpFormGroup icon={icon} label={label}>
            <input onChange={this.update.bind(this)}
                   defaultValue={this.props.object}
                   type="text" className="form-control" />
          </UpFormGroup>
        </div>
      );  
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
)(UpOVStringComponent); 