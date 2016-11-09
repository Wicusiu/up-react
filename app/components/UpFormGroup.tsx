import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

export interface UpFormGroupProps
{
    label : React.ReactElement<any>;
    children? : React.ReactElement<any>;
}

export class UpFormGroup extends React.Component<UpFormGroupProps, {}> {
  public render(): React.ReactElement<UpFormGroupProps> {
      return <div className="form-group">
                <label className="col-sm-2 control-label">{this.props.label}</label>
                <div className="col-sm-10">
                    {this.props.children}
                </div>
            </div>;
  }
}