// French translation provided courtesy of GitHub user tuxfamily.
// (C) 2022 CubicleSoft.  All Rights Reserved.

if (!$.fn.FancyFileUpload.langs)  $.fn.FancyFileUpload.langs = {};

$.fn.FancyFileUpload.langs['fr'] = {
	'Start uploading':
		'Démarrer le transfert',

	'Starting upload...':
		'Démarrage du transfert...',

	'Upload completed':
		'Transfert terminé',

	'There is a file upload still in progress.  Leaving the page will cancel the upload.\n\nAre you sure you want to leave this page?':
		'Un transfert de fichier est toujours en cours. Si vous quittez la page, il sera annulé.\n\nVoulez-vous vraiment quitter cette page ?',

	'There is a file that was added to the queue but the upload has not been started.  Leaving the page will clear the queue and not upload the file.\n\nAre you sure you want to leave this page?':
		'Un fichier a été ajouté à la file d\'attente, mais le transfert n\'a pas démarré. Quitter la page effacera la file d\'attente et ne téléversera pas le fichier.\n\nVoulez- vous vraiment quitter cette page ?',

	'Cancel upload and remove from list':
		'Annuler le transfert et le supprimer de la liste',

	'This file is currently being uploaded.\n\nStop the upload and remove the file from the list?':
		'Ce fichier est en cours de transfert.\n\nArrêter le transfert et supprimer le fichier de la liste ?',

	'This file is waiting to start.\n\nCancel the operation and remove the file from the list?':
		'Ce fichier est en attente de transfert.\n\nAnnuler l\'opération et supprimer le fichier de la liste ?',

	'Preview':
		'Aperçu',

	'No preview available':
		'Aucun aperçu disponible',

	'Invalid file extension.':
		'Extension de fichier invalide.',

	'File is too large.  Maximum file size is {0}.':
		'Fichier trop volumineux. Le poids maximum acceptée est de {0}.',

	'Remove from list':
		'Retirer de la liste',

	'{0} of {1} | {2}%':
		'{0} sur {1} | {2}%',

	'{0} | Network error, retrying in a moment... ({1})':
		'{0} | Erreur réseau, nouvelle tentative dans un instant... ({1})',

	'The upload was cancelled.':
		'Le transfert a été annulé.',

	'The upload failed.  {0} ({1})':
		'Le transfert a échoué.  {0} ({1})',

	'The upload failed.':
		'Le transfert a échoué.',

	'The server indicated that the upload was not successful.  No additional information available.':
		'Le serveur a indiqué que le transfert a échoué sans donner d\'informations supplémentaires.',

	'Browse, drag-and-drop, or paste files to upload':
		'Parcourir, glisser-déposer ou coller des fichiers à transférer',

	'Record audio using a microphone':
		'Enregistrer de l\'audio à l\'aide d\'un microphone',

	'Audio recording - {0}.mp3':
		'Enregistrement audio - {0}.mp3',

	'Unable to record audio.  Either a microphone was not found or access was denied.':
		'Impossible d\'enregistrer le son. Soit le microphone n\'a pas été trouvé, soit son accès a été refusé.',

	'Record video using a camera':
		'Enregistrer une vidéo à l\'aide d\'une caméra',

	'Video recording - {0}.mp4':
		'Enregistrement vidéo - {0}.mp4',

	'Unable to record video.  Either a camera was not found or access was denied.':
		'Impossible d\'enregistrer la vidéo. Soit la caméra n\'a pas été trouvée, soit son accès a été refusé.'
};

$.fn.FancyFileUpload.defaults.langmap = $.fn.FancyFileUpload.langs['fr'];
