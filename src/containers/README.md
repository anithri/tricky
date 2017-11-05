# src/containers

Smart components that read data from the store, and provide it to panes and components.  

1. MUST be redux connected (I think, can't come up with a reason for this except this).
2. MUST NOT have state 
3. MUST have propTypes
4. MUST NOT add to dom

## Examples:
  * User and user actions
  * record and record actions
