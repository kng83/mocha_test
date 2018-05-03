// Nested interface
interface NestedCSS {
    color?: string;
    [selector: string]: string | NestedCSS;
}
const example: NestedCSS = {
    color: 'red',
    '.subclass': {
        color: 'blue'
    }
}