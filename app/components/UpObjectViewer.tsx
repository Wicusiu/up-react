/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import  * as Common from  './infrastructure/common'
import  {ObjectSchema } from  './infrastructure/objectschema'
import 'bootstrap/dist/css/bootstrap.css';





export class UpObjectViewer extends React.Component<Common.UpObjectViewerProps, {}> {

  public render(): React.ReactElement<{}> {
      
      return React.createElement(Common.ComponentManager.getComponentForType(this.props.objectSchema.type), this.props);
  }

}
