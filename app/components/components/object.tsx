/// <reference path="../infrastructure/common.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import  * as Common from  '../infrastructure/common'
import  {ObjectSchema } from  '../infrastructure/objectschema'
import  { UpObjectViewer } from  '../UpObjectViewer'


export class UpOVObjectComponent extends React.Component<Common.UpObjectViewerProps,{}>
{

  public render(): React.ReactElement<{}> {

      var properties : any[] = [];

      for(var key in this.props.objectSchema.properties)
      {
          var obj = this.props.object[key];
          var schema = this.props.objectSchema.properties[key];
          properties.push(React.createElement(Common.ComponentManager.getComponentForType(schema.type), {object : obj, objectschema : schema } ));
      }

      return (<div><label>{this.props.objectSchema.title}</label><div>
      {properties}</div></div>);
  }
} 