### TypeScript Interfaces vs. Types: What's the Difference?

Interface and type are two strong tools that TypeScript provides for specifying the form of data. Despite their apparent similarity, each has special advantages. 

# Interface: The Object Shapes Blueprint
An interface is a means of defining an object's form, including the necessary properties and methods.
Example:

interface User {
  name: string;
  email: string;
}


# Type: Adaptable Alias
A type is more adaptable. It is not limited to describing objects; it may also describe primitives, unions, intersections, tuples, and even function signatures.
Example:
type Status = "success" | "error" | "loading";

type User = {
  name: string;
  email: string;
  login: () => void;
};




### TypeScript Type Inference: Delegate the Task to the Compiler
Type inference, which allows the compiler to automatically identify a variable or expression's type without the need for explicit annotations, is one of TypeScript's most potent features.


# Type Inference: What Is It?
Type inference means that TypeScript can figure out types for you based on how values are declared and used — even if you don’t explicitly specify them.

# Why Is Type Inference Helpful?

 1. Cleaner Code: Code can be made shorter and easier to read by avoiding the need to annotate every variable.
 2. Continue to Type Clearly :Explicit types are not necessary for the compiler to detect problems.

 3. Excellent for Modeling: Without complete type definitions, you can begin coding right away. As your code gets more complex, the compiler assists you in maintaining type safety.