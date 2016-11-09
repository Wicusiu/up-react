/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface UpLabelProps
{
     value? : string;
     children? : string;
}

export class UpLabel extends React.Component<UpLabelProps, {}> {
  public render(): React.ReactElement<UpLabelProps> {
      const value = this.props.children == null ? this.props.value : this.props.children;
      return <label>{value}</label>;
  }
}