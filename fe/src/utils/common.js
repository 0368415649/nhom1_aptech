import { cloneElement, isValidElement } from 'react';

export function checkValidAndCloneElement(element, props = {}) {
  return element && isValidElement(element) && cloneElement(element, props);
}
