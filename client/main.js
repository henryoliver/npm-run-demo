// Shared
import { addition } from './modules/shared/shared.controller';
console.log( addition(1, 1) );

// Modules
import { subtraction } from './modules/module_1/module_1.controller';
console.log( subtraction(4, 2) );

import { multiplication } from './modules/module_2/module_2.controller';
console.log( multiplication(2, 2) );

import { division } from './modules/module_3/module_3.controller';
console.log( division(10, 5) );
