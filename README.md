# i18ncloud

The [i18n.cloud](http://i18n.cloud) dev tool.

[i18n.cloud](http://i18n.cloud) allows you to easily create translations for software projects in a slick interface.

This NPM module is used to download your [i18n.cloud](http://i18n.cloud) translations into your project's folder.

## Install

With [npm](http://npmjs.org) do:

```bash
$ yarn add i18ncloud
$ or
$ npm install i18ncloud --save-dev
```

## Usage

### Translations

Go to http://i18n.cloud to create your translations.

### Settings File

Create a file named `i18ncloudConfig.js` in the root of your project

Add your settings in that file:

    module.exports = {
      // the ID in your Google Plus profile: https://plus.google.com/u/0/YOUR_GOOGLE_ID_HERE
      user_id: 'YOUR_GOOGLE_ID',
      // get your client_secret in http://i18n.cloud/settings
      client_secret: 'YOUR_CLIENT_SECRET',
      // set the path where your i18n.json file will be stored
      files_path: './src/i18n'
    }

### Download translations to disk

Back in the shell, in the root of your project, run:

```bash
$ node node_modules/i18ncloud/download
```

(you can also hook up this command to your build script)

This will create a file in `'./src/i18n/i18n.json'` with your updated translations tree in all languages, in JSON format.

### Use in Javascript

Finally, in your js:

    // the example below is just one possible approach

    import i18n from './src/i18n/i18n.json'

    // grab all translations in English
    const { en } = i18n

    // (react) apply a translation
    <p>{ en.some_list.some_entry }</p>

## License

MIT
