'use strict';
const alfy = require('alfy');
const clap = require('clap-join');

const clapPhrase = clap(alfy.input);

alfy.output([
	{
		title: clapPhrase,
		subtitle: 'Press enter to copy',
		arg: clapPhrase
	}
]);
