// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ChangeDetectorRef, Component, ComponentFactoryResolver, Input, SimpleChange, ViewChild, ViewContainerRef } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import ng from 'angular';

/**
 * @fileoverview Directives for the parameter generator editors.
 */

// Individual value generator directives can be found in
// extensions/value_generators/templates.

@Component({
  selector: 'randomSelector',
  template: '<h2>Random Selector</h2>'
})
export class RandomSelectorComponent {
  @Input() customizationArgs;
  @Input() generatorId;
  @Input() initArgs;
  @Input() objType;
}

@Component({
  selector: 'copier',
  template: '<h2>Copier</h2>'
})
export class CopierComponent {
  @Input() customizationArgs;
  @Input() generatorId;
  @Input() initArgs;
  @Input() objType;
}

@Component({
  selector: 'oppia-value-generator-editor',
  template: '<ng-template #interactionContainer></ng-template>'
})
export class OppiaValueGenerator {
  @Input() customizationArgs;
  @Input() generatorId;
  @Input() initArgs;
  @Input() objType;

  @ViewChild('interactionContainer', {
    read: ViewContainerRef}) viewContainerRef!: ViewContainerRef;

  TAG_TO_INTERACTION_MAPPING = {
    copier: CopierComponent,
    'random-selector': RandomSelectorComponent
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    let componentName = this.generatorId.replace(
      /([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory<CopierComponent>(
        this.TAG_TO_INTERACTION_MAPPING[componentName]);

    const componentRef = this.viewContainerRef.createComponent<CopierComponent>(
      componentFactory);

    componentRef.instance.customizationArgs = this.customizationArgs;
    componentRef.instance.generatorId = this.generatorId;
    componentRef.instance.initArgs = this.initArgs;
    componentRef.instance.objType = this.objType;

    componentRef.changeDetectorRef.detectChanges();
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(changes: { generatorId: SimpleChange }): void {
    if (changes.generatorId.currentValue !== changes.generatorId.currentValue &&
      this.viewContainerRef) {
      this.viewContainerRef.clear();
      this.ngAfterViewInit();
    }
  }
}

angular.module('oppia').directive(
  'oppiaValueGeneratorEditor', downgradeComponent({
    component: OppiaValueGenerator}));
