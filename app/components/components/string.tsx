/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../infrastructure/common.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import  {UpLabel } from  '../uplabel'
import  {UpFormGroup } from  '../UpFormGroup'

import  * as Common from  '../infrastructure/common'
import  {ObjectSchema } from  '../infrastructure/objectschema'


export class UpOVStringComponent extends React.Component<Common.UpObjectViewerProps,{}>
{

  public render(): React.ReactElement<{}> {
      return (
        <div>
          <UpFormGroup label={<span className="glyphicon glyphicon-align-left" aria-hidden="true">{this.props.objectSchema.title}</span>}>
          {this.props.object}
          </UpFormGroup>
        </div>
      );  
  }
} 