
export interface ObjectSchema {
  $ref?: string;
  /////////////////////////////////////////////////
  // Schema Metadata
  /////////////////////////////////////////////////
  /**
   * This is important because it tells refs where
   * the root of the document is located
   */
  id?: string;
  title?: string;
  description?: string;
  'default'?: any;

  /////////////////////////////////////////////////
  // Number Validation
  /////////////////////////////////////////////////
  /**
   * The value must be a multiple of the number
   * (e.g. 10 is a multiple of 5) 
   */
  multipleOf?: number;
  maximum?: number; 
  minimum?: number;

  /////////////////////////////////////////////////
  // String Validation
  /////////////////////////////////////////////////
  maxLength?: number;
  minLength?: number;
  /**
   * This is a regex string that the value must
   * conform to
   */
  pattern?: string;

  /////////////////////////////////////////////////
  // Array Validation
  /////////////////////////////////////////////////
  additionalItems?: boolean | ObjectSchema;
  items?: ObjectSchema | ObjectSchema[];
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;

  /////////////////////////////////////////////////
  // Object Validation
  /////////////////////////////////////////////////
  maxProperties?: number;
  minProperties?: number;
  required?: string[];

  /**
   * Holds simple JSON Schema definitions for
   * referencing from elsewhere.
   */
  definitions?: {[key: string]: ObjectSchema};
  /**
   * The keys that can exist on the object with the
   * json schema that should validate their value
   */
  properties?: {[property: string]: ObjectSchema};
  /**
   * The key of this object is a regex for which
   * properties the schema applies to
   */
  patternProperties?: {[pattern: string]: ObjectSchema};
  /**
   * If the key is present as a property then the
   * string of properties must also be present.
   * If the value is a JSON Schema then it must
   * also be valid for the object if the key is
   * present.
   */
  dependencies?: {[key: string]: ObjectSchema | string[]};

  /////////////////////////////////////////////////
  // Generic
  /////////////////////////////////////////////////
  /**
   * Enumerates the values that this schema can be
   * e.g.
   * {"type": "string",
     *  "enum": ["red", "green", "blue"]}
   */
  'enum'?: any[];
  /**
   * The basic type of this schema, can be one of
   * [string, number, object, array, boolean, null]
   * or an array of the acceptable types
   */
  type?: string;

}

