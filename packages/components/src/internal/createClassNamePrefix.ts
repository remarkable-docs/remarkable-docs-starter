import { withClassNamePrefix } from "with-classname-prefix";

export default function createClassNamePrefix(prefix: string) {
  return withClassNamePrefix(`example-ui-${prefix}`)
}
