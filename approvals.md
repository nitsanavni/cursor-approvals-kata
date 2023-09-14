# Approvals

## high-level explanation

the verify function, takes a string, and it "remembers" what the string was - meaning the string that was approved
when you give it the same string again - it succeeds
*But* when it's changed - it fails (throws?)
it's like an `assertEquals` but the `expected` is what was previously sent to `verify`

*Q:* how do we approve?

We approve by creating/updating an `.approved` file: to have the result as its contents

```js
const approved = (testName: string) => string
// read(`{testName}.approved`)
```

## examples

```js
verify("foo") // fails
// create the approved file with contents "foo"
verify("foo") // now succeeds
```

## concrete implementation (using the fs as memory)

- a single `verify` function
- it takes two strings: `verify(testName)(result)`
- the result is compared to the contents of an `${testName}.approved` file
- if there's a diff
    1. throw an approvals error
    2. (bonus) trigger a diff tool `${testName}.received` vs. `${testName}.approved` (this means you first need to wrote the recieved file)
- no diff - does nothing
