/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MovimientosComponent } from './movimientos.component';
import { FormBuilder  } from '@angular/forms';

describe('Component: Movimientos', () => {
  it('should create an instance', () => {
    let formBuilder = new FormBuilder()
    let component = new MovimientosComponent(formBuilder);
    expect(component).toBeTruthy();
  });
});
