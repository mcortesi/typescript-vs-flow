## Developer experience adding FLOW

### 1. Add typescript

Just install flow globally `npm install -g flow-bin`


### 2. IDE

I'm using atom, adding the flow plugin was easy, just `apm install ide-flow`, works well but at the moment the autocomplete feature is not working

### 2. First file conversion

I needed to add this lines in the .flowconfig file

```
[ignore]
.*node_modules/fbjs.*
```

### 3. Solving errors detected by Flow

`import * as Immutable from 'immutable'` was needed, `const Immutable = require('immutable');` also works


#### Things to understand

- Who is removing type annotations???
