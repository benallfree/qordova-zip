// Generated by CoffeeScript 1.10.0
(function() {
  var Q, Zip, ZipError;

  Q = require('q');

  ZipError = (function() {
    function ZipError(zipFname, unzipDir, errorInfo) {
      this.zipFname = zipFname;
      this.unzipDir = unzipDir;
      this.errorInfo = errorInfo;
    }

    return ZipError;

  })();

  Zip = (function() {
    function Zip() {}

    Zip.unzip = function(zip_fname, unzip_dir) {
      var deferred;
      deferred = Q.defer();
      console.log("Unzipping to ", zip_fname, unzip_dir);
      zip.unzip(zip_fname, unzip_dir, (function(err) {
        if (err) {
          console.log("Error unzipping to ", unzip_dir, err);
          return deferred.reject(new ZipError(zip_fname, unzip_dir, err));
        } else {
          console.log("Successfully unzipped to ", unzip_dir);
          return deferred.resolve();
        }
      }), (function(progress) {
        console.log("Unzip progress", progress);
        return deferred.notify(progress);
      }));
      return deferred.promise;
    };

    return Zip;

  })();

  module.exports = {
    Zip: Zip,
    ZipError: ZipError
  };

}).call(this);
