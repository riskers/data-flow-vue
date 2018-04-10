[data flow](https://github.com/riskers/data-flow) in vue implement

## includes:

* vue
* vuex

## Start

```
cd vue
npm install && npm start
```

## vuex flow

```
                                                     yes
                                                  /------> dispatch action ---
 --------------------                           /                              \
| view trigger action | ----> action is async ?                                 \ ---- > Store
 --------------------                           \    no                         /
                                                  \------> commit mutation --- /
```