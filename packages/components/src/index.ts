// add another package with `yo lerna-typescript:package @myscope/my-new-package` instead of `lerna create`

export function greet(name: string): string {
  return `@yunxin-sdk-component/components says: hello to ${name}`;
}

export function add(a: number, b: number): number {
  return a + b;
}
