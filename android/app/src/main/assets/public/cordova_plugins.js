
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-file-transfer.FileTransfer",
          "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
          "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
          "window.FileTransfer"
        ]
        },
      {
          "id": "cordova-plugin-file-transfer.FileTransferError",
          "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
          "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
          "window.FileTransferError"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-file-transfer": "2.0.0"
    };
    // BOTTOM OF METADATA
    });
    