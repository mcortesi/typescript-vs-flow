## Raw Analysis

Things to review:

 * Community Size & Project Liveness
 * Editor Support
 * Node Support
 * React Support
 * Typing redux/reducers/action creators
 * Typing immutable and immutable records
 * Typing promises & bluebird promises
 * Typing rxjs
 * Webpack support (assets/css imports, loaders)
 * Support Generators
 * Support Async/Await
 * Support ES7 features
 * Support ES6 features
 * Create npm modules and export declarations for it
 * Support for third party libraries (declarations files)
 
### Community Size & Project Liveness

|  | Typescript |  Flow |
| --- | --- | --- |
| Github :star: | 15k | 8k |
| Githuf :fork: | 2.000 | 600 |
| Compiler Lang | typescript | ocaml |
| Code Frequency | [very active](https://github.com/Microsoft/TypeScript/graphs/code-frequency) | [not so active](https://github.com/facebook/flow/graphs/code-frequency) |
| npm downloads| 2 million | 130k |

**typescript community is quite larger than flow.** This is an important aspect, since we expect more releases, better support, better tooling thanks to this.

### Editor Support 

**typescript wins here by far.**

 * It has native support in *vs code* from microsoft.
 * It has really great support in atom with https://atom.io/packages/atom-typescript
 * It has also great support in Webstorm
 
While for flow, you have a few plugins in atom and webstorm is adding support for release 2016.3 (unreleased yet)

### React support

  Parece ser que TS solia tener problemas con JSX pero ya no mas -> https://www.typescriptlang.org/docs/handbook/jsx.html

### Typing redux/reducers/action creators

  - FLOW

  Seal Objects
  https://github.com/facebook/flow/issues/2314 pueden ser utiles al definir los reducers

  - TS

  Esto? https://github.com/mhoyer/redux-typed-ducks/blob/master/spec/index.spec.ts

### Typing immutable and immutable records

### Typing promises & bluebird promises

### Typing rxjs

### Webpack support (assets/css imports, loaders)

  https://github.com/TypeStrong/ts-loader (vi una charla de un chabon que usaba react/webpack/ts)
  
### Support Generators

  - FLOW: yes
  - TS:   yes

### Support Async/Await

  - FLOW: no
  - TS:   yes

### Support ES7 features
### Support ES6 features
### Create npm modules and export declarations for it
### Support for third party libraries (declarations files)




