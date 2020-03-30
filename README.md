# static-template

My attempt to set up a project template for a front-end only (static) template.

## Usage

For now, here are the steps to start a new project with this:

```
git clone git@github.com:ericbaukhages/static-template --depth 1 <NEW PROJECT>
cd <NEW PROJECT>
rm -rf .git
git init
```
Then, update the README to just include the below Tool commands.

## Tools

The commands for the tooling are marked out in `package.json`. Here are a few:

- `yarn build`: Build for production
- `yarn develop`: Build for development
- `yarn watch`: Watch for changes, and run the development build
- `yarn serve`: Serve locally on http://localhost:8888, with hot reload of development build

## Thanks

Thanks to Daniel W. Robert for an [example on how to set up `mini-css-extract-plugin`](https://gist.github.com/danielwrobert/cac4a4a44f1430339861):
