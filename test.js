import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('What');

	t.deepEqual(result, [
		{
			title: 'Clap',
			subtitle: '👏What👏'
		}
	]);
});
