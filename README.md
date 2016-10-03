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
| Githuf forks | 2.000 | 600 |
| Compiler Lang | typescript | ocaml |
| Code Frequency | [very active](https://github.com/Microsoft/TypeScript/graphs/code-frequency) | [not so active](https://github.com/facebook/flow/graphs/code-frequency) |
| npm downloads| 2 million | 130k |
| releases ratio | 1/month | 2/month |

**typescript community is quite larger than flow.** This is an important aspect, since we expect more releases, better support, better tooling thanks to this.

### Editor Support 

###### Typescript

 * It has native support in *vs code* from microsoft.
 * It has really great support in atom with https://atom.io/packages/atom-typescript
 * It has also great support in Webstorm
 
###### Flow 

With **Atom** adding the flow plugin was easy, just `apm install ide-flow`, works well but..

- at the moment the autocomplete feature is not working
- it freezes and stop showing error descriptions 

With **Visual Studio Code** you have autocomplete and nice error messages :)

### React support

**Flow** has native support for React within the project. and React is coded using flow. So a really good experience is to be expected when working with React. *React PropTypes* are coded **into the typesystem**.

**SetState** and **SetProps** work out of the box using dynamic typing (see here -> http://sitr.us/2015/05/31/advanced-features-in-flow.html)

**Typescript** now support `.tsx` files (typescript jsx). When using typescript, you don't specify proptypes, instead you use typescript types to define your properties. For example:

```typescript
import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
```

A tutorial for react in typescript: https://www.typescriptlang.org/docs/handbook/jsx.html

For context types, read this [issue in facebook/react](https://github.com/facebook/react/issues/6525). It's interesting to note the *facebook is phasing out propTypes in favor of static analysis*.. Also, [How to use React contextTypes in Typescript 1.6?](https://github.com/Microsoft/TypeScript/issues/4785)


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




