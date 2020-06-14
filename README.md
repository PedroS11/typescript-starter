# typescript-starter

This repository has everything you need to start a typescript project.

## Build

The transpiled files are created inside the _**dist**_ folder. This name is defined on _**tsconfig.json**_ file and 
to renamed it you need to change the ```compilerOptions.outDir``` property. 

#### Build code

> ```npm run build``` or ``yarn build``

## Linting

It has **_eslint_** installed and it's prepared to lint ``.js, .jsx, .ts, .tsx`` files. 
On each commit the lint will run and fix all the problems using the _**lint-staged**_ and _**husky**_ packages.

#### Format code
>``npm run lint`` or ``yarn lint``

## Tests

This project uses _**jest**_ package and run all the files tests that matches the regex ``/__tests__/.*|(\.|/)(test|spec))\.tsx?$``
defined on _**jest.config.json**_. Test files like ``.ts, .tsx`` are transpiled using _**ts-jest**_ package.

#### Run tests

> ``npm test`` or ``yarn test``


#### Run tests with coverage

> ``npm run test:coverage`` or ``yarn test:coverage``
