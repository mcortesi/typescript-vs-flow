## Developer experience passing to Typescript

### 1. Add typescript

Changing webpack was straightforward.

### 2. First file conversion

Need to get typings

    npm i -s @types/react
    npm i -s @types/react-redux
    
Found that `import React from 'react'` doesn't work.

Babel does a custom thing when mixing commonjs modules with ES6 modules. And
typescript does not follow. Check this [issue comment](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5128#issuecomment-131638288)

It was easy to change files, just added the typings missing and changed a few imports:

    import * as React from 'react';
    import * as immutable from 'immutable';
