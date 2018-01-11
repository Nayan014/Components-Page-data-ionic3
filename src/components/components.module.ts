import { NgModule } from '@angular/core';
import { Component1Component } from './component1/component1';
import { Component2Component } from './component2/component2';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [Component1Component,
    Component2Component],
	imports: [
		IonicModule
	],
	exports: [Component1Component,
    Component2Component]
})
export class ComponentsModule {}
