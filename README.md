# express-video-stream

Bare bones implementation of video streaming into Express with compatibility for Safari and Chrome. Satisfies requirements for Safari range header demands.

## Instructions

### Using the example server

1. Edit `index.html` on line 29 replace `localhost:3001` with your domain or IP.
2. Rename `env.template` to `.env` (update ip/port if needed)
3. `npm run dev`
4. Navigate to your server address in the browser to try out the player

## Todo

- [ ] Make this project into a stand-alone node_module on NPM.
- Move Express to devDependencies
- Move example server file to test folder
- Add 'build' and 'publish' scripts to package.json
