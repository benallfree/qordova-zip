# qordova-zip

A [Q](https://github.com/kriskowal/q)-enabled HTTP for Cordova. Easier to use than [cordova-plugin-zip](https://github.com/apache/cordova-plugin-file-transfer).

# Installation

`cordova plugin add cordova-plugin-zip`

`npm install quordova-file`

# Usage

## unzip: (zip\_fname, unzip\_dir)

Unzip an archive to a destination directory.

```
Zip.unzip(zip\_fname, unzip\_dir)
.then(function() {
  console.log('successfully unzipped');
})
.progress(function(progress) {
  console.log('progress', progress);
})
.fail(function() {
  console.log('failed to unzip');
});
```
