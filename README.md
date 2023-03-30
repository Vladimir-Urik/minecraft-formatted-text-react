# Minecraft Format Text

This component allows you to display Minecraft-style text (that follow Minecraft's [section sign formatted text](https://minecraft.fandom.com/wiki/Formatting_codes)) within React


## Installation

With NPM: `npm install minecraft-format-text-react`

With Yarn: `yarn add minecraft-format-text-react`

## Example

```js
import MinecraftText from 'minecraft-format-text-react'
...
<MinecraftText>§lHello §cworld!</MinecraftText>
```

## Features

* TypeScript Support
* Customize Prefix
* Custom Colors
* Supports ESM and CJS
* Supports Obfuscated Text

## Options (Props)

| Name	| Type	 | Description	 |
|-------------- | -------------- | -------------- |
| `colors`		| `ColorMap?`		 | An object containing the hexcodes of the Minecraft colors.		 |
| `prefix` | `string?` | The prefix of the Minecraft formatting codes (default: `§`) |

