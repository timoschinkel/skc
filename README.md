# SKC
The [Steven Kruijswijk Coefficient](https://www.bicycling.com/nl/stijl/a26851320/de-steven-kruijswijk-coefficient/) is a number that represents the ratio of ridden time compared to the elapsed time. It was first mentioned by Lauren ten Dam during his podcast series [Live Slow, Ride Fast](https://www.liveslowridefast.com/).

## Installation
The extension is available in the add-on store for Firefox: https://addons.mozilla.org/en-US/firefox/addon/skc/

For Chrome the extension is not yet available in the Chrome Store.

### Manual installation
With every release a zip file with the necessary files is added to the release. The releases are listed in the [Releases](https://github.com/timoschinkel/skc/releases) section of Github. The file should be called `skc-[version].zip`

Using this zip you can install the extension as a temporary extension in both Firefox and Chrome.

For Firefox:
- Download and unpack the zip file
- Navigate to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)
- Chose "Load temporary add-on" and select the `manifest.json` file

For Chrome:
- Download and unpack the zip file
- Navigate to [chrome://extensions/](chrome://extensions/)
- Enable "Developer mode" on the top right
- Select "Load unpacked" and select the folder where the extension is located

## What is this?
A browser extension that adds the Steven Kruijswijk Coefficient to your Strava rides. For now this extension only works with Strava. With enough demand I might look into making this extension work with other services similar to Strava as well.

## Why did I build this?
Basically; Why not? As a listener of the Live Slow, Ride Fast podcast I learned of the Steven Kruijswijk Coefficient. A number of tools like [Bicycling's calculator](https://tools.bicycling.nl/steven-kruijswijk-coefficient) (Dutch) and [What Is My SKC](https://whatismyskc.com/) have been made available. But these tools either require me to copy and paste times or to associate my Strava account with a separate website. I am a lazy man, I want to see my SKC in my Strava feed. 

## The calculated coefficient is wrong
The calculation used is the same as is used by [Bicyling's calculator](https://tools.bicycling.nl/steven-kruijswijk-coefficient). If the coefficient diverges from the outcome giving by that calculator please create [an issue](https://github.com/timoschinkel/skc/issues) on this repository with a public activity where the coefficient is wrong. This information is needed to reproduce any issues.

## The extension does not work for me!
I guess that can happen. The extension reads the moving time and elapsed time from the html of Strava and tries to inject the calculated SKC into that same html. It reuses existing utility classes of Strava. If Strava decides to change their html structure the extension might not work anymore. If that is the case please create [an issue](https://github.com/timoschinkel/skc/issues) on this repository with a public activity where the extension fails. This information is needed to reproduce any issues.

Please keep in mind that Steven Kruijswijk is a cyclist. That means that the extension is built to work with cycling rides. Any other activity types such as running activities might not work as Strava uses a different html structure for those activities.

## Can I help?
Yes you can. If you have an idea, suggestion or complaint you are free to open [an issue](https://github.com/timoschinkel/skc/issues) and you can also create [a pull request](https://github.com/timoschinkel/skc/pulls) to solve the issue. 

### Setting up the development environment
To develop the extension [NodeJS](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are required. The codebase is tested on NodeJS 14.

After cloning the repository you need to install the dependencies via `npm ci`. Building the extension - so that you can load it as temporary extension on your browser - run `npm run build`. Making the extension available in your browser requires the same steps as described in the "Manual installation" section.


## Disclaimer
I am in no way affiliated with Steven Kruijswijk - or any of his current or previous cycling teams, Bicyling magazine, Laurens ten Dam or Live Slow, Ride Fast. I am just a developer that likes to ride my bike. I have built this extension because I thought it would be fun. Because I believe in sharing and open source I have made this extension available for everyone to use. That does mean that this extension is offered as is, without any guarantees.