import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

export interface UpFormGroupProps
{
    label? : React.ReactElement<any>;
    icon? : string;
    children? : React.ReactElement<any>;
}

export class UpFormGroup extends React.Component<UpFormGroupProps, {}> {
  public render(): React.ReactElement<UpFormGroupProps> {
      let icon ;
      if (typeof this.props.icon == 'string') {
        icon = <span className={this.props.icon}></span>
      }
      return <div className="form-group col-sm-12">
                <label className="col-sm-2 control-label">
                    {icon}
                    {this.props.label}
                </label>
                <div className="col-sm-10">
                    {this.props.children}
                </div>
            </div>;
  }
}