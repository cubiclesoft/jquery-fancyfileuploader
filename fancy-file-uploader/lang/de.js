// German translation provided courtesy of GitHub user Woersty.
// (C) 2021 CubicleSoft.  All Rights Reserved.

if (!$.fn.FancyFileUpload.langs)  $.fn.FancyFileUpload.langs = {};

$.fn.FancyFileUpload.langs['de'] = {
	'Start uploading':
		'Starte Hochladen',

	'Starting upload...':
		'Hochladen gestartet...',

	'Upload completed':
		'Hochladen erfolgreich',

	'There is a file upload still in progress.  Leaving the page will cancel the upload.\n\nAre you sure you want to leave this page?':
		'Es wird gerade eine Datei hochgeladen.  Das Verlassen der Seite bricht das Hochladen ab.\n\nBist du sicher, dass du gehen willst?',

	'There is a file that was added to the queue but the upload has not been started.  Leaving the page will clear the queue and not upload the file.\n\nAre you sure you want to leave this page?':
		'Es wurde eine Datei zur Warteschlange hinzugefügt aber noch nicht hochgeladen.  Das Verlassen der Seite leert die Warteschlange und die Datei wird nicht hochgeladen.\n\nBist du sicher, dass du gehen willst?',

	'Cancel upload and remove from list':
		'Breche Hochladen ab und entferne Datei aus der Liste.',

	'This file is currently being uploaded.\n\nStop the upload and remove the file from the list?':
		'Die Datei wird gerade hochgeladen.\n\nHochladen stoppen und Datei aus der Liste entfernen?',

	'This file is waiting to start.\n\nCancel the operation and remove the file from the list?':
		'Die Datei wartet auf ihren Start.\n\nOperation abbrechen und Datei aus der Liste entfernen?',

	'Preview':
		'Vorschau',

	'No preview available':
		'Keine Vorschau verfügbar',

	'Invalid file extension.':
		'Ungültige Dateiendung.',

	'File is too large.  Maximum file size is {0}.':
		'Datei zu groß. Die maximal erlaubte Größe ist {0}.',

	'Remove from list':
		'Aus der Liste entfernen',

	'{0} of {1} | {2}%':
		'{0} von {1} | {2}%',

	'{0} | Network error, retrying in a moment... ({1})':
		'{0} | Netzwerkfehler, ich versuche es gleich nochmal... ({1})',

	'The upload was cancelled.':
		'Das Hochladen wurde abgebrochen.',

	'The upload failed.  {0} ({1})':
		'Das Hochladen ist fehlgeschlagen.  {0} ({1})',

	'The upload failed.':
		'Das Hochladen ist fehlgeschlagen.',

	'The server indicated that the upload was not successful.  No additional information available.':
		'Der Server meldet, dass das Hochladen fehlgeschlagen ist. Keine weiteren Details bekannt.',

	'Browse, drag-and-drop, or paste files to upload':
		'Durchsuchen, Drag & Drop oder Einfügen zum Hochladen',

	'Record audio using a microphone':
		'Ton aufnehmen (Mikro)',

	'Audio recording - {0}.mp3':
		'Tonaufnahme - {0}.mp3',

	'Unable to record audio.  Either a microphone was not found or access was denied.':
		'Kann keine Tonaufnahme machen. Kein Mikrofon oder keinen Zugriff darauf.',

	'Record video using a camera':
		'Video aufnehmen (Kamera)',

	'Video recording - {0}.mp4':
		'Videoaufnahme - {0}.mp4',

	'Unable to record video.  Either a camera was not found or access was denied.':
		'Kann keine Videoaufnahme machen. Keine Kamera oder keinen Zugriff darauf.'
};

$.fn.FancyFileUpload.defaults.langmap = $.fn.FancyFileUpload.langs['de'];
