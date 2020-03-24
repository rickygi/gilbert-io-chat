## firebase functions config

```
firebase functions:set private.key=secret

firebase functions:config:get > functions/.runtimeconfig.json
```

```
const functions = require('firebase-functions');
const config = functions.config();

console.log(config.private.key);
```
