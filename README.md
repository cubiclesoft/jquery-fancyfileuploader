jQuery Fancy File Uploader
==========================

A jQuery plugin to convert the HTML file input type into a mobile-friendly fancy file uploader.  Choose from a MIT or LGPL license.

Also available in [FlexForms Modules](https://github.com/cubiclesoft/php-flexforms-modules).

![Screenshot](https://user-images.githubusercontent.com/1432111/28810269-b1571d10-763d-11e7-9ac5-6190b94d0f2d.png)

[Live demo via Admin Pack](https://barebonescms.com/demos/admin_pack/admin.php?action=addeditexample&sec_t=7a110e04a283159db5a4e282c76e29b02e70e52c) (This plugin is located near the bottom of that page.)

Also used by [Cool File Transfer](https://github.com/cubiclesoft/php-cool-file-transfer).

[![Donate](https://cubiclesoft.com/res/donate-shield.png)](https://cubiclesoft.com/donate/) [![Discord](https://img.shields.io/discord/777282089980526602?label=chat&logo=discord)](https://cubiclesoft.com/product-support/github/)

Features
--------

* Beautiful, compact, and fully responsive layout.
* Drag-and-drop dropzone with paste support.
* Full keyboard navigation.
* Client-side file naming.
* Preview support for images, audio, and video.
* Supports recording video and audio directly from a webcam, microphone, and other media sources.
* Chunked file upload support.
* Lots of useful callbacks.
* Automatic retries with exponential fallback.
* Multilingual support.
* Has a liberal open source license.  MIT or LGPL, your choice.
* Designed for relatively painless integration into your project.
* Sits on GitHub for all of that pull request and issue tracker goodness to easily submit changes and ideas respectively.

Alternate Options
-----------------

jQuery Fancy File Uploader just handles uploading of files in an environment where you plan to apply strict storage controls.  However, if you need something even fancier, here are a couple of options:

If you need a general-purpose hierarchical file management and tabbed file editor solution that can be readily embedded into existing software products, check out the open source CubicleSoft [PHP File Manager and Editor](https://github.com/cubiclesoft/php-filemanager) application.

If you need something even more powerful, flexible, and highly customizable with hierarchical directory and file structures, check out the open source CubicleSoft [Folder and File Explorer](https://github.com/cubiclesoft/js-fileexplorer) zero-dependencies Javascript widget.

Getting Started
---------------

jQuery is required to use this software so hopefully that doesn't come as a surprise to anyone.  Parts of this plugin require the jQuery UI widget factory.  If you are already including jQuery UI on your webpage, then you already have the widget factory and don't need to do anything else.  Otherwise, add this line after including jQuery:

```html
<script type="text/javascript" src="fancy-file-uploader/jquery.ui.widget.js"></script>
```

Now you can include Fancy File Uploader:

```html
<link rel="stylesheet" href="fancy-file-uploader/fancy_fileupload.css" type="text/css" media="all" />
<script type="text/javascript" src="fancy-file-uploader/jquery.fileupload.js"></script>
<script type="text/javascript" src="fancy-file-uploader/jquery.iframe-transport.js"></script>
<script type="text/javascript" src="fancy-file-uploader/jquery.fancy-fileupload.js"></script>
```

Let's say you have a file input element somewhere on the same page that looks like:

```html
<input id="thefiles" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple>
```

To transform that file input into something fancy, pass in some options to the plugin and let the magic happen:

```html
<script type="text/javascript">
$(function() {
	$('#thefiles').FancyFileUpload({
		params : {
			action : 'fileuploader'
		},
		maxfilesize : 1000000
	});
});
</script>
```

Other than handling the files on the server side of things and leveraging the various callbacks, that's pretty much it for basic usage.

Server-Side Processing
----------------------

The server should reply with the following JSON object format for successful uploads:

```json
{
	"success" : true
}
```

The server should reply with the following JSON object format for error conditions:

```json
{
	"success" : false,
	"error" : "Human-readable, possibly translated error.",
	"errorcode" : "relevant_error_code"
}
```

See [FlexForms Modules](https://github.com/cubiclesoft/php-flexforms-modules), [Admin Pack](https://github.com/cubiclesoft/admin-pack), and [FlexForms](https://github.com/cubiclesoft/php-flexforms) for example usage with open source CubicleSoft products that handle Fancy File Uploader submissions.

Fancy File Uploader works with most server-side languages.  For basic server-side PHP integration with Fancy File Uploader, you can use the included server-side helper class:

```php
<?php
	require_once "fancy_file_uploader_helper.php";

	function ModifyUploadResult(&$result, $filename, $name, $ext, $fileinfo)
	{
		// Add more information to the result here as necessary (e.g. a URL to the file that a callback uses to link to or show the file).
	}

	$options = array(
		"allowed_exts" => array("jpg", "png"),
		"filename" => __DIR__ . "/images/" . $id . ".{ext}",
//		"result_callback" => "ModifyUploadResult"
	);

	FancyFileUploaderHelper::HandleUpload("files", $options);
?>
```

The class also contains `FancyFileUploaderHelper::GetMaxUploadFileSize()`, which determines the maximum allowed file/chunk upload size that PHP allows.

When using `FancyFileUploaderHelper::HandleUpload()`, be sure to pass `fileuploader` as a parameter to the server so the FancyFileUploaderHelper class will handle the request instead of ignoring it.  For example:

```html
<script type="text/javascript">
$(function() {
	$('#thefiles').FancyFileUpload({
		params : {
			fileuploader : '1'
		},
		// ...
	});
});
</script>
```

Additional Examples
-------------------

To automatically start every upload as soon as it is added, do something similar to this:

```html
<script type="text/javascript">
$(function() {
	$('#thefiles').FancyFileUpload({
		params : {
			action : 'fileuploader'
		},
		edit : false,
		maxfilesize : 1000000,
		added : function(e, data) {
			// It is okay to simulate clicking the start upload button.
			this.find('.ff_fileupload_actions button.ff_fileupload_start_upload').click();
		}
	});
});
</script>
```

It is possible to add a button to the screen to start all of the uploads at once that are able to be started:

```html
<button type="button" onclick="$('#thefiles').next().find('.ff_fileupload_actions button.ff_fileupload_start_upload').click(); return false;">Upload all files</button>
```

The specialized function `data.ff_info.RemoveFile()` can be used at any time to remove a file from the list which will immediately abort any upload in progress, remove the associated UI elements, and clean up internal structures:

```html
<script type="text/javascript">
$(function() {
	var token;

	$('#thefiles').FancyFileUpload({
		params : {
			action : 'fileuploader'
		},
		maxfilesize : 1000000,
		startupload : function(SubmitUpload, e, data) {
			$.ajax({
				'url' : 'gettoken.php',
				'dataType' : 'json',
				'success' : function(tokendata) {
					token = tokendata;

					SubmitUpload();
				}
			});
		},
		continueupload : function(e, data) {
			var ts = Math.round(new Date().getTime() / 1000);

			// Alternatively, just call data.abort() or return false here to terminate the upload but leave the UI elements alone.
			if (token.expires < ts)  data.ff_info.RemoveFile();
		},
		uploadcompleted : function(e, data) {
			data.ff_info.RemoveFile();
		}
	});
});
</script>
```

To use chunked uploads for handling large file transfers, read up on [jQuery File Upload chunked file uploads](https://github.com/blueimp/jQuery-File-Upload/wiki/Chunked-file-uploads) and do something like:

```html
<script type="text/javascript">
$(function() {
	$('#thefiles').FancyFileUpload({
		params : {
			action : 'fileuploader'
		},
		fileupload : {
			maxChunkSize : 1000000
		}
	});
});
</script>
```

Enable the microphone and webcam/camera recording buttons:

```html
<script type="text/javascript">
$(function() {
	$('#thefiles').FancyFileUpload({
		params : {
			action : 'fileuploader'
		},
		recordaudio : true,
		recordvideo : true
	});
});
</script>
```

To remove the widget altogether and restore the original file input, call:  `$('#thefiles').FancyFileUpload('destroy');`

In order to be able to remove the widget later, `data('fancy-fileupload')` is used to store information alongside the object.  Modifying various options after initial creation is possible but tricky.  Accessing these internal options is at your own, probably minimal, risk:

* fileuploadwrap - A jQuery object pointing at the root of the DOM node of the main user interface.
* form - A jQuery object pointing at the hidden form that is created during the initialization process.  When the user clicks the button to select files, the click transfers to the hidden file input field in the form.
* settings - A reference to the settings object.

Example usage to access the hidden file input element after creating it (e.g. to change its `accept` attribute):

```html
<script type="text/javascript">
$('#thefiles').each(function() {
	var $this = $(this);

	// Find the associated file input.
	var fileinput = $this.data('fancy-fileupload').form.find('input[type=file]');

	// Do something with the file input.
	fileinput.attr('accept', '.png; image/png');

	$this.data('fancy-fileupload').settings.accept = ['png'];

	// Can even alter the underlying jQuery File Uploader (e.g. inject a canvas PNG blob).
	fileinput.fileupload('add', { files: [ new Blob(...) ] });
});
</script>
```

Options
-------

This plugin accepts the following options:

* url - A string containing the destination URL to use to send the data.  The default behavior is to locate the `action` of the nearest `form` element to the matching input file element and use that (Default is '').
* params - An object containing key-value pairs to send to the server when submitting file data (Default is an empty object).
* edit - A boolean indicating whether or not to allow the user to enter a filename minus the file extension after selecting a file but before the upload process has started (Default is true).
* maxfilesize - An integer containing the maximum size, in bytes, to allow for file upload (Default is -1, which means no limit).
* accept - An array containing a list of allowed file extensions (Default is null, which allows all file extensions).  Note that the server is still responsible for validating uploads.
* displayunits - A string containing one of 'iec_windows', 'iec_formal', or 'si' to specify what units to use when displaying file sizes to the user (Default is 'iec_windows').
* adjustprecision - A boolean indicating whether or not to adjust the final precision when displaying file sizes to the user (Default is true).
* retries - An integer containing the number of retries to perform before giving up (Default is 5).
* retrydelay - An integer containing the base delay, in milliseconds, to apply between retries (Default is 500).  Note that the delay is multiplied by 2 for exponential fallback.
* recordaudio - A boolean indicating whether or not to display a toolbar button with a microphone icon for recording audio directly via the web browser (Default is false).
* audiosettings - An object containing valid MediaRecorder options (Default is an empty object).
* recordvideo - A boolean indicating whether or not to display a toolbar button with a webcam icon for recording video directly via the web browser (Default is false).
* videosettings - An object containing valid MediaRecorder options (Default is an empty object).
* preinit - A valid callback function that is called during initialization to allow for last second changes to the settings.  Useful for altering `fileupload` options on the fly.  The callback function must accept one parameter - callback(settings).
* postinit - A valid callback function that is called at the end of initialization of each instance.  The `this` is a jQuery object to the instance.  The callback function must accept zero parameters - callback().
* added - A valid callback function that is called for each item after its UI has been added to the DOM.  The callback function must accept two parameters - callback(e, data).
* showpreview - A valid callback function that is called after the preview dialog appears.  Useful for temporarily preventing unwanted UI interactions elsewhere.  The callback function must accept three parameters - callback(data, preview, previewclone).
* hidepreview - A valid callback function that is called after the preview dialog disappears.  The callback function must accept three parameters - callback(data, preview, previewclone).
* startupload - A valid callback function that is called when the button is clicked to start the upload.  The callback function must accept three parameters - callback(SubmitUpload, e, data).  The callback is expected to call the `SubmitUpload()` function when it is ready to start the file upload.
* continueupload - A valid callback function that is called whenever progress is updated (default is every 100 milliseconds).  The callback function must accept three parameters - callback(e, data).  The callback may return false or call `data.abort()` to cancel the upload.
* uploadcancelled - A valid callback function that is called whenever an upload has been cancelled.  The callback function must accept two parameters - callback(e, data).
* uploadcompleted - A valid callback function that is called whenever an upload has successfully completed.  The callback function must accept two parameters - callback(e, data).
* fileupload - An object containing [jQuery File Upload options](https://github.com/blueimp/jQuery-File-Upload/wiki/Options) (Default is an empty object).  The following options are immutable and cannot be changed (doing so will break this plugin):  `singleFileUploads` (always true), `dropZone`, `add`, `progress`, `fail`, `done`, `chunksend`, and `chunkdone`.  The `dataType` option must be 'json' (the default) or 'jsonp' as the plugin depends on a valid JSON response for correct operation.
* langmap - An object containing translation strings.  Support exists for most of the user interface (Default is an empty object).

All callbacks have a `this` containing the jQuery object for the current UI table row.  Use the jQuery `this.find(selector)` syntax to locate relevant UI elements.

The default settings can be adjusted before creating any instances via `$.FancyFileUpload.defaults`.  The most common use-case is to apply a set of translation strings to `langmap`.

Translations
------------

To translate this plugin to another language, open `jquery.fancy-fileupload.js` in a text editor and locate strings passed to the `Translate()` function.  In a new .js file, create a mapping between English and the target language:

```js
$.FancyFileUpload.defaults.langmap = {
	'File is too large.  Maximum file size is {0}.': 'Translation goes here...'
};
```

Some strings contain `{0}`, `{1}`, etc. which are placeholders for `FormatStr()` to fill in.  Load your .js file after loading `jquery.fancy-fileupload.js`.

Under the Hood
--------------

jQuery Fancy File Uploader uses the core plugin from blueimp [jQuery File Upload](https://github.com/blueimp/jQuery-File-Upload) and then wraps the core plugin up in the custom user interface that users interact with.
