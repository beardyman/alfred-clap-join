const test = require('ava');
const alfyTest = require('alfy-test');

test('yourself', async t => {
	const alfy = alfyTest();
	const result = await alfy('What');

	t.deepEqual(result, [
		{
			title: '👏What👏',
			arg: '👏What👏',
			subtitle: 'Press enter to copy'
		}
	]);
});
