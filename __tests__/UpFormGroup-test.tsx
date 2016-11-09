import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';


import { UpFormGroup } from '../app/components/UpFormGroup'


it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = TestUtils.renderIntoDocument(
    <UpFormGroup label={<i>lol</i>}>
        test
    </UpFormGroup>
  );

  alert(checkbox);
  // Verify that it's Off by default


});