import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as Redux from 'redux'; 

import  {ObjectSchema} from  './objectschema'

import {UpOVStringComponent} from '../components/string'
import {UpOVObjectComponent} from '../components/object'

export interface UpObjectViewerProps
{
  keyName?:string;
  object : any;
  objectSchema : ObjectSchema;
  listener? : EventListener
}

const TypeToComponent : {[key : string] : React.ComponentClass<any>} = {
  'string' : UpOVStringComponent,
  'object' : UpOVObjectComponent
}

export class ComponentManager
{
  static getComponentForType : (string) => React.ComponentClass<any> = (objType : string) =>
  {
      var type :  React.ComponentClass<any> = TypeToComponent[objType];

      if(type == null)
        return TypeToComponent['string'];

      return type;
  }
}