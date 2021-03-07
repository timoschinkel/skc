# SKC
The [Steven Kruijswijk Coefficient](https://www.bicycling.com/nl/stijl/a26851320/de-steven-kruijswijk-coefficient/) is a number that represents the ratio of ridden time compared to the elapsed time. It was first mentioned by Lauren ten Dam during his podcast series [Live Slow, Ride Fast](https://www.liveslowridefast.com/).

## Installation
Until I figure out how to get the extension into the Chrome and Firefox extension directories you will have to load the extension manually in your browser.

For Firefox:
- Clone this repository
- Open the add-ons panel via "Extra" > "Add-Ons"
- Via the cog enable "Debug Add-ons"
- Chose "Load temporary add-on" and select the `manifest.json` file

For Chrome:
- Clone this repository
- Open the add-ons panel via "Window" > "Extensions"
- Enable "Developer mode" on the top right
- Select "Load unpacked" and select the folder where the extension is cloned

## What is this?
A browser extension that adds the Steven Kruijswijk Coefficient to your Strava rides. For now this extension only works with Strava. With enough demand I might look into making this extension work with other services similar to Strava as well.

## Why did I build this?
Basically; Why not? As a listener of the Live Slow, Ride Fast podcast I learned of the Steven Kruijswijk Coefficient. A number of tools like [Bicycling's calculator](https://tools.bicycling.nl/steven-kruijswijk-coefficient) (Dutch) and [What Is My SKC](https://whatismyskc.com/) have been made available. But these tools either require me to copy and paste times or to associate my Strava account with a separate website. I am a lazy man, I want to see my SKC in my Strava feed. 

## The extension does not work for me!
I guess that can happen. The extension reads the moving time and elapsed time from the html of Strava and tries to inject the calculated SKC into that same html. It reuses existing utility classes of Strava. If Strava decides to change their html structure the extension might not work anymore. If that is the case please create an issue on this repository with a public activity where the extension fails. This information is needed to reproduce any issues.

Please keep in mind that Steven Kruijswijk is a cyclist. That means that the extension is built to work with cycling rides. Any other activity types such as running activities might not work as Strava uses a different html structure for those activities.

## Disclaimer
I am in no way affiliated with Steven Kruijswijk - or any of hist current or previous cycling teams, Laurens ten Dam or Live Slow, Ride Fast. I am just a developer that likes to ride my bike. I have built this extension because I thought it would be fun. Because I believe in sharing and open source I have made this extension available for everyone to use. That does mean that this extension is offered as is, without any guarantees.